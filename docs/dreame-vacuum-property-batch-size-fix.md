# Dreame Vacuum Property Request Timeout Fix

## Problem Description

### Symptom
The Dreame Vacuum custom integration fails to initialize with timeout errors during device connection:

```
ERROR (SyncWorker_4) [miio.miioprotocol] Got error when receiving: timed out
WARNING (MainThread) [custom_components.dreame_vacuum] Integration start failed
miio.exceptions.DeviceException: No response from the device
```

### Root Cause
The integration requests device properties in batches of 15 properties at a time using the Xiaomi Miio protocol. On certain firmware versions and device models, this batch size causes:

1. **Response payload too large** - The UDP response packet exceeds network/device buffer limits
2. **Device processing delays** - Some firmware versions are slower at processing large property requests
3. **Network packet fragmentation** - Large responses may fragment and timeout before reassembly

This issue is **firmware-specific** and does not indicate network problems. The same device with different firmware may work fine with batch size 15.

### Affected Devices
- **Known affected models**: L10s Ultra, and others
- **Known affected firmware**: 4.3.9_3204, and potentially others
- **Our device**: Requires batch size of 5 (batch sizes 10 and 15 both timeout)

### Technical Details
The timeout occurs in `_request_properties()` method in `custom_components/dreame_vacuum/dreame/device.py`:

```python
# Original code (line ~805)
while props:
    result = self._protocol.get_properties(props[:15], timeout=10)  # Fails on some firmware
    if result is not None:
        results.extend(result)
        props[:] = props[15:]
```

The error typically manifests on the 4th batch (properties 45-60) but can occur at any batch depending on:
- Which properties are being requested
- Size of individual property responses  
- Firmware-specific response handling

## Solution: Hybrid Adaptive Batch Size (Option 5.5)

### Approach
We implement a **conservative-first with adaptive optimization** strategy:

1. **Start conservatively** - Default to batch size 5 (known to work for problematic devices)
2. **Optional upward discovery** - Can test if larger batch sizes work (future enhancement)
3. **Adaptive fallback** - If even conservative size fails, fall back further

### Why This Approach?

#### Rejected Alternatives

**Simple hardcoded fix (props[:5]):**
- ❌ Not future-proof (overwritten on updates)
- ❌ Slower for devices that support larger batches
- ❌ No adaptation if conditions change

**Reactive error handling (Option 3):**
- ❌ Must fail first to learn (40-60 seconds of timeouts on init)
- ❌ Generates error logs during normal operation
- ❌ Poor user experience on every restart

**Proactive discovery (Option 5):**
- ❌ Discovery tests first 15 properties, which may succeed
- ❌ Problem manifests on later properties (45-60 in our case)
- ❌ False positive: discovers batch=15 works, then fails in production

#### Our Hybrid Approach (Option 5.5)

**✅ Advantages:**
- Immediate success on problematic devices (no timeout delays)
- Clean operational logs (no errors during normal operation)
- Future-proof: can add upward optimization later
- Minimal code change to maintain
- Degrades gracefully if issues worsen

**📊 Performance Impact:**
- batch=15: ~4-5 requests for typical device (60-75 properties)
- batch=5: ~12-15 requests for typical device
- Per-request overhead: <1 second when working
- **Total difference: 5-10 seconds on initial connection only**
- This is acceptable for reliability and clean startup

### Implementation

#### Phase 1: Conservative Default (Immediate Fix)
Change default batch size from 15 to 5:

```python
def _request_properties(self, properties: list[DreameVacuumProperty] = None) -> bool:
    """Request properties from the device."""
    if not properties:
        properties = self._default_properties

    property_list = []
    for prop in properties:
        if prop in self.property_mapping:
            mapping = self.property_mapping[prop]
            if "aiid" not in mapping and (not self._ready or prop.value in self.data):
                property_list.append({"did": str(prop.value), **mapping})

    props = property_list.copy()
    results = []
    
    # Conservative batch size for firmware compatibility
    batch_size = 5
    
    while props:
        result = self._protocol.get_properties(props[:batch_size], timeout=10)
        if result is not None:
            results.extend(result)
            props[:] = props[batch_size:]

    return self._handle_properties(results)
```

#### Phase 2: Adaptive Fallback (Safety Net)
Add error handling to fall back to even smaller batches if needed:

```python
def _request_properties(self, properties: list[DreameVacuumProperty] = None) -> bool:
    """Request properties from the device with adaptive batch sizing."""
    if not properties:
        properties = self._default_properties

    property_list = []
    for prop in properties:
        if prop in self.property_mapping:
            mapping = self.property_mapping[prop]
            if "aiid" not in mapping and (not self._ready or prop.value in self.data):
                property_list.append({"did": str(prop.value), **mapping})

    props = property_list.copy()
    results = []
    
    # Conservative default batch size for firmware compatibility
    if not hasattr(self, '_property_batch_size'):
        self._property_batch_size = 5
    
    batch_size = self._property_batch_size
    consecutive_failures = 0
    
    while props:
        try:
            result = self._protocol.get_properties(props[:batch_size], timeout=10)
            if result is not None:
                results.extend(result)
                props[:] = props[batch_size:]
                consecutive_failures = 0  # Reset on success
        except Exception as ex:
            # Check if it's a timeout error
            if "timed out" in str(ex) or "No response" in str(ex):
                consecutive_failures += 1
                
                # Try reducing batch size further
                if batch_size > 1 and consecutive_failures < 3:
                    old_size = batch_size
                    batch_size = max(1, batch_size // 2)
                    self._property_batch_size = batch_size
                    _LOGGER.warning(
                        "Property request timeout with batch size %d, reducing to %d",
                        old_size,
                        batch_size
                    )
                    continue  # Retry with smaller batch
                else:
                    # Can't reduce further or too many failures
                    _LOGGER.error("Property request failed even with batch size %d", batch_size)
                    raise
            else:
                # Different error, re-raise
                raise

    return self._handle_properties(results)
```

#### Phase 3: Upward Discovery (Future Optimization)
Optional enhancement to test if device can handle larger batches:

```python
def _discover_optimal_batch_size(self, props: list) -> int:
    """
    Optionally discover if device supports larger batch sizes.
    Only runs once per session on first property request.
    """
    if len(props) < 10:
        return 5  # Not enough props to test with
    
    # Test with sample of first properties
    for test_size in [10, 15]:  # Try larger sizes
        try:
            test_batch = props[:min(test_size, len(props))]
            result = self._protocol.get_properties(test_batch, timeout=5)
            if result is not None:
                _LOGGER.info(
                    "Device supports larger batch size: %d (optimization enabled)",
                    test_size
                )
                return test_size
        except Exception:
            # Size not supported, continue with conservative default
            pass
    
    _LOGGER.debug("Using conservative batch size: 5")
    return 5
```

## Implementation Status

### Current Implementation
- ✅ **Phase 1**: Conservative default (batch_size = 5)
- ✅ **Phase 2**: Adaptive fallback with error handling
- ⏳ **Phase 3**: Upward discovery (future enhancement)

### Files Modified
- `custom_components/dreame_vacuum/dreame/device.py` - `_request_properties()` method

### Maintenance Notes
This fix is applied to a **custom component** (`dreame_vacuum`), which means:

1. **Updates will overwrite** - When the custom component updates, this fix will be lost
2. **Reapply after updates** - Check if the issue persists after updates, reapply if needed
3. **Monitor upstream** - Watch the GitHub repository for official fixes
4. **Document versions** - Note which integration version has this fix applied

### Testing
After applying the fix:

```bash
# Validate configuration
ha core check

# Check logs after restart
# Should see clean initialization without timeout errors
# Look for: "Connected to device: [model] [firmware]"
# Should NOT see: "Got error when receiving: timed out"
```

## References

- **GitHub Issue**: https://github.com/Tasshack/dreame-vacuum/issues/725
- **Integration Repository**: https://github.com/Tasshack/dreame-vacuum
- **Date Implemented**: 2025-01-10
- **Integration Version**: v1.0.4+ (custom patched)

## Future Considerations

### If Official Fix is Released
Monitor the integration repository for official fixes. The maintainer may implement:
- Configuration option for batch size
- Firmware-specific batch size mapping
- Automatic discovery mechanisms

### If Issue Persists
If the conservative batch size of 5 still causes timeouts:
1. Check network connectivity to device
2. Verify device firmware version
3. Try batch size of 3 or even 1
4. Consider alternative connection methods (cloud vs local)

### Performance Optimization
Once stable, consider implementing Phase 3 (upward discovery) to optimize for devices that can handle larger batches while maintaining compatibility with problematic firmware.

---

**Last Updated**: 2025-01-10  
**Status**: Implemented (Phase 1 + 2)  
**Maintainer**: Local patch, not upstream