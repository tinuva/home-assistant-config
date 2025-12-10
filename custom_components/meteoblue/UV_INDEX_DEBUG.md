# UV Index Troubleshooting Guide

## Issue: UV Index Shows 0 During Daytime

If you're seeing `uv_index: 0` when it should have a value, follow this guide.

---

## Quick Check

### 1. What Time Is It?

Check current time and sun position:

```yaml
# Developer Tools → Template
{{ now() }}
{{ states.sun.sun.state }}
{{ state_attr('sun.sun', 'elevation') }}
```

**UV Index is 0 when**:
- ✅ Before sunrise (sun elevation < 0)
- ✅ After sunset (sun elevation < 0)
- ✅ At night (`sun.sun` state = `below_horizon`)
- ❌ During daytime with sun above horizon

---

## Debug Steps

### Step 1: Enable Debug Logging

In `logging/logger.yaml`:
```yaml
custom_components.meteoblue: debug
```

Then reload:
```
Developer Tools → YAML → Reload Logging
```

### Step 2: Reload Integration

```
Settings → Devices & Services → Meteoblue → ⋮ → Reload
```

### Step 3: Check Logs

Go to **Settings → System → Logs** and filter by "meteoblue"

Look for these messages:
```
DEBUG: UV index array (first 5 values): [0, 0, 1.2, 2.5, 3.8]
DEBUG: Is daylight array (first 5 values): [0, 0, 1, 1, 1]
DEBUG: Time array (first 3 values): ['2024-12-10 06:00', '2024-12-10 07:00', '2024-12-10 08:00']
DEBUG: Current forecast index: 2 (time: 2024-12-10 08:00)
DEBUG: UV index for current hour: 1.2
```

---

## What The Logs Tell You

### Scenario 1: UV Array Has Values But First Is 0

```
UV index array: [0, 0, 1.2, 2.5, 3.8]
Is daylight array: [0, 0, 1, 1, 1]
Time array: ['2024-12-10 06:00', '2024-12-10 07:00', '2024-12-10 08:00']
Current forecast index: 2
UV index for current hour: 1.2
```

**Analysis**:
- ✅ First two hours are nighttime (0)
- ✅ Code correctly finds current hour (index 2)
- ✅ Returns correct UV value (1.2)
- **This is working correctly!**

---

### Scenario 2: UV Array Is All Zeros

```
UV index array: [0, 0, 0, 0, 0]
Is daylight array: [1, 1, 1, 1, 1]
```

**Analysis**:
- ❌ Meteoblue is returning 0 for all hours
- Could be:
  - Very early morning (sun just rising, UV still low)
  - Cloudy/overcast conditions (UV genuinely low)
  - Location-specific data issue
  - API plan doesn't include UV data

**Solution**: This is correct data from Meteoblue, not a bug

---

### Scenario 3: Current Index Is Wrong

```
Time array: ['2024-12-10 06:00', '2024-12-10 07:00', '2024-12-10 08:00']
Current time: 2024-12-10 10:00
Current forecast index: 0
```

**Analysis**:
- ❌ Current time (10:00) not found in forecast array
- Forecast only goes from 06:00-08:00
- Using index 0 as fallback

**Solution**: Forecast data might be stale. Check coordinator update times.

---

### Scenario 4: No UV Data Available

```
DEBUG: UV index array (first 5 values): []
```

**Analysis**:
- ❌ Meteoblue not providing UV data
- Could be:
  - API plan doesn't include UV
  - Location doesn't have UV data
  - Data package issue

**Solution**: Check with Meteoblue if your plan includes UV index

---

## Understanding UV Index Values

| UV Index | Category | Meaning |
|----------|----------|---------|
| 0-2 | Low | Safe, minimal protection needed |
| 3-5 | Moderate | Use sunscreen |
| 6-7 | High | Protection essential |
| 8-10 | Very High | Extra protection required |
| 11+ | Extreme | Avoid sun exposure |

**Typical Daily Pattern**:
```
06:00 - Sunrise: 0
07:00 - Early morning: 0-1
08:00 - Morning: 1-2
09:00 - Mid-morning: 2-3
10:00 - Late morning: 3-4
11:00 - Noon: 4-6
12:00 - Peak: 6-8
13:00 - Peak: 6-8
14:00 - Afternoon: 5-7
15:00 - Late afternoon: 4-5
16:00 - Evening: 2-3
17:00 - Late evening: 1-2
18:00 - Sunset: 0
```

UV = 0 at 08:00 is **unusual** (should be ~1-2)  
UV = 0 at 06:00 is **normal** (sun just rising)

---

## Common Causes

### 1. **It's Actually Night/Early Morning**

```yaml
{{ now().hour }}  # If < 7 or > 18, UV should be 0
{{ states.sun.sun.state }}  # If 'below_horizon', UV = 0
```

**Fix**: This is correct! UV is 0 at night.

---

### 2. **Forecast Array Timing Issue**

The forecast might start at a future time (e.g., next hour).

**Check logs for**:
```
Time array (first 3 values): ['2024-12-10 09:00', '2024-12-10 10:00', '2024-12-10 11:00']
```

If current time is 08:30 but array starts at 09:00, the code uses index 0 (09:00 data) which might still show low UV.

**Fix**: The new code finds the correct hour. Check after reload.

---

### 3. **Meteoblue Data Quality**

Meteoblue might genuinely report low/zero UV due to:
- Heavy cloud cover
- Atmospheric conditions  
- Very early morning (sun angle too low)
- Location-specific factors

**Fix**: Compare with other weather sources to verify.

---

### 4. **API Plan Limitations**

Some Meteoblue plans might not include detailed UV data.

**Check**: Contact Meteoblue support about your plan.

---

## Testing UV Index

### Method 1: Wait Until Peak Hours

UV is highest between 11:00-14:00. Check again then:

```yaml
{{ state_attr('weather.meteoblue', 'uv_index') }}
```

Should see values like 4-8 on a sunny day.

---

### Method 2: Compare with Other Sources

Check another weather integration:

```yaml
# If you have OpenWeatherMap or Met.no
{{ state_attr('weather.openweathermap', 'uv_index') }}
{{ state_attr('weather.home', 'uv_index') }}
```

If others also show 0, it's likely accurate.

---

### Method 3: Manual API Check

Test Meteoblue API directly:

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=YOUR_LAT&lon=YOUR_LON&apikey=YOUR_KEY&format=json"
```

Look for `"uvindex": [0, 0, 1.2, ...]` in the response.

---

## Solution Applied in v1.1

### What Changed

**Old behavior (v1.0)**:
- Always used first value in array (index 0)
- Might be wrong hour if forecast doesn't start at current time

**New behavior (v1.1)**:
- Finds current hour in forecast array
- Uses correct index for current time
- Checks if it's actually daytime
- Logs detailed debug info

### Code Changes

Added `_find_current_forecast_index()` method:
- Parses forecast time array
- Matches current hour
- Returns correct index
- Falls back to 0 if unable to determine

---

## What To Report

If UV index is still wrong after reload, provide:

1. **Current time**:
   ```yaml
   {{ now() }}
   ```

2. **Sun state**:
   ```yaml
   {{ states.sun.sun.state }}
   {{ state_attr('sun.sun', 'elevation') }}
   ```

3. **UV index shown**:
   ```yaml
   {{ state_attr('weather.meteoblue', 'uv_index') }}
   ```

4. **Debug logs**:
   ```
   Settings → System → Logs → Filter "meteoblue" → Find UV debug lines
   ```

5. **Expected UV** (from other sources or UV forecast websites)

---

## Quick Fix Summary

1. ✅ **Enable debug logging**
2. ✅ **Reload integration**
3. ✅ **Check logs for UV array values**
4. ✅ **Verify current time vs forecast times**
5. ✅ **Compare with sun elevation**
6. ✅ **Report findings if still incorrect**

---

## Expected Outcome

After applying v1.1 changes and reloading:

**Morning (08:00-10:00)**:
- UV index should be 1-3 on clear days
- 0 only if very early or cloudy

**Midday (11:00-14:00)**:
- UV index should be 4-8 on clear days
- 2-4 on cloudy days
- 0 only if extremely overcast

**Evening (17:00-19:00)**:
- UV index should be 0-2 (sun setting)
- 0 after sunset

**Night (20:00-06:00)**:
- UV index should always be 0

---

**Last Updated**: December 10, 2025  
**Version**: 1.1  
**Status**: Debug logging added, index finding improved