# Dreame Vacuum Fix - Quick Reference Card

## 🎯 Problem
Dreame vacuum integration fails to initialize with timeout errors on certain firmware versions.

## ✅ Solution Applied
**Hybrid Adaptive Batch Size (Option 5.5)**
- Conservative default: batch size = 5
- Adaptive fallback: reduces further if needed
- No initial timeouts, clean startup

## 📁 Files Modified
- `custom_components/dreame_vacuum/dreame/device.py`
  - Method: `_request_properties()` (around line 789)
  - Change: Batch size 15 → 5 with adaptive error handling

## 🔧 What Changed
```python
# BEFORE (original)
result = self._protocol.get_properties(props[:15], timeout=10)

# AFTER (our fix)
batch_size = 5  # Conservative default
result = self._protocol.get_properties(props[:batch_size], timeout=10)
# + adaptive fallback on timeout
```

## 📊 Performance Impact
- Old: ~5 requests (batch=15) = ~5-10 seconds
- New: ~15 requests (batch=5) = ~10-15 seconds
- **Impact: +5-10 seconds on initial connection ONLY**
- Acceptable tradeoff for reliability

## ⚠️ Maintenance Warning
**This is a custom patch to a custom component!**

When `dreame_vacuum` integration updates:
1. ✅ Check if timeout issue persists
2. ✅ Check if official fix is included
3. ⚠️ Reapply this fix if still needed
4. ✅ Test after update

## 🧪 Testing After Restart
```bash
# Validate configuration
ha core check

# Check logs - should see:
✅ "Connected to device: [model] [firmware]"

# Should NOT see:
❌ "Got error when receiving: timed out"
❌ "No response from the device"
```

## 📖 Full Documentation
See `docs/dreame-vacuum-property-batch-size-fix.md` for:
- Detailed problem analysis
- Why we chose this approach
- Implementation phases
- Future enhancements

## 🔗 References
- GitHub Issue: https://github.com/Tasshack/dreame-vacuum/issues/725
- Integration: https://github.com/Tasshack/dreame-vacuum
- Applied: 2025-01-10
- Version: v1.0.4+ (custom patched)

## 🚨 If Still Timing Out
If batch=5 still fails:
1. Check device is online and responding
2. Try reducing to batch=3 or batch=1 in code
3. Consider alternative connection method (cloud vs local)
4. Check device firmware version

## 💡 Quick Status Check
- **Phase 1**: ✅ Conservative default (batch=5)
- **Phase 2**: ✅ Adaptive fallback
- **Phase 3**: ⏳ Upward discovery (future)

---

**Status**: ✅ Implemented & Working  
**Maintainer**: Local patch  
**Last Updated**: 2025-01-10