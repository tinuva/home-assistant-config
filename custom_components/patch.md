# Custom Component Patches

This file documents manual patches applied to custom components after upgrading.
Re-apply these changes whenever a component is updated to a newer version.

---

## dreame_vacuum — Adaptive batch sizing in `_request_properties`

**File:** `custom_components/dreame_vacuum/dreame/device.py`
**Function:** `_request_properties`

**Why:** The upstream version uses a fixed batch size of 15 with a conditional timeout, which causes the integration to hang or silently fail when the device is slow to respond. This patch adds adaptive batch sizing with timeout detection and automatic retry at a reduced batch size.

### How to re-apply

Replace the `_request_properties` method body (from the `def` line through `return self._handle_properties(results)`) with the version below.

**Original (upstream) code:**

```python
def _request_properties(self, properties: list[DreameVacuumProperty] = None) -> bool:
    """Request properties from the device."""
    if not properties:
        properties = self._default_properties

    property_list = []
    for prop in properties:
        if prop in self.property_mapping:
            mapping = self.property_mapping[prop]
            # Do not include properties that are not exists on the device
            if "aiid" not in mapping and (not self._ready or prop.value in self.data):
                property_list.append({"did": str(prop.value), **mapping})

    props = property_list.copy()
    results = []
    while props:
        result = self._protocol.get_properties(props[:15], timeout=(10 if len(property_list) > 15 else None))
        if result is not None:
            results.extend(result)
            props[:] = props[15:]

    return self._handle_properties(results)
```

**Patched code:**

```python
def _request_properties(self, properties: list[DreameVacuumProperty] = None) -> bool:
    """Request properties from the device with adaptive batch sizing."""
    if not properties:
        properties = self._default_properties

    property_list = []
    for prop in properties:
        if prop in self.property_mapping:
            mapping = self.property_mapping[prop]
            # Do not include properties that are not exists on the device
            if "aiid" not in mapping and (not self._ready or prop.value in self.data):
                property_list.append({"did": str(prop.value), **mapping})

    props = property_list.copy()
    results = []

    # Start with standard batch size, will adapt if timeouts occur
    if not hasattr(self, '_property_batch_size'):
        self._property_batch_size = 15

    batch_size = self._property_batch_size
    consecutive_failures = 0

    while props:
        try:
            result = self._protocol.get_properties(props[:batch_size], timeout=10)
            if result is not None:
                results.extend(result)
                props[:] = props[batch_size:]
                consecutive_failures = 0  # Reset on success
            else:
                # None result treated as failure
                consecutive_failures += 1
                if consecutive_failures >= 3:
                    _LOGGER.error("No response from device after 3 attempts with batch size %d", batch_size)
                    return False

        except Exception as ex:
            # Check if it's a timeout/communication error
            error_str = str(ex).lower()
            is_timeout = any(keyword in error_str for keyword in ["timed out", "timeout", "no response"])

            if is_timeout and batch_size > 1 and consecutive_failures < 3:
                consecutive_failures += 1
                old_size = batch_size
                batch_size = max(1, batch_size // 2)
                self._property_batch_size = batch_size
                _LOGGER.warning(
                    "Property request timeout with batch size %d, reducing to %d and retrying",
                    old_size,
                    batch_size
                )
                # Don't advance props, retry same batch with smaller size
                continue
            else:
                # Different error, too many failures, or can't reduce further
                _LOGGER.error(
                    "Property request failed with batch size %d: %s",
                    batch_size,
                    ex
                )
                raise

    return self._handle_properties(results)
```

### What changed

| Aspect | Original | Patched |
|--------|----------|---------|
| Docstring | `Request properties from the device.` | `Request properties from the device with adaptive batch sizing.` |
| Batch size | Hard-coded `15` | Dynamic `_property_batch_size` (starts at 15, persists across calls) |
| Timeout | `10` only when `> 15` properties, else `None` | Always `10` |
| Error handling | None — silent failure on `None` result, exceptions propagate unhandled | Retries on timeout, halves batch size each retry; aborts after 3 consecutive `None` results |
| Retry on timeout | No | Yes — retries same batch at half the batch size, up to 3 times |
