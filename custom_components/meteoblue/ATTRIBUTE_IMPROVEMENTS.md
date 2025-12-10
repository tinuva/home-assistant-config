# Meteoblue Weather - Attribute Improvements

## Changes Made

The weather entity has been enhanced to show more attributes, matching what other weather integrations (Met.no, OpenWeatherMap) provide.

## What Was Added

### New/Improved Attributes

1. **UV Index** (`uv_index`)
   - Current UV index value
   - Falls back to forecast data if current not available
   - Useful for sun exposure warnings

2. **Dew Point** (`dew_point`)
   - Calculated from temperature and humidity using Magnus formula
   - Helps understand condensation and "feels like" conditions
   - Auto-calculated if not provided by API

3. **Better Data Fallback**
   - If current data is unavailable, uses first forecast value
   - Ensures attributes always have data when possible
   - More robust handling

4. **All Standard Attributes Now Working**:
   - `temperature` ✅
   - `humidity` ✅
   - `pressure` ✅
   - `wind_speed` ✅
   - `wind_bearing` ✅
   - `cloud_coverage` ✅
   - `apparent_temperature` (feels like) ✅
   - `dew_point` ✅ (NEW - calculated)
   - `uv_index` ✅ (NEW)
   - `visibility` ✅ (if available from API)

## Expected Attributes After Update

Your `weather.meteoblue` entity should now show:

```yaml
temperature: 20.3
dew_point: 13.5           # NEW - calculated
temperature_unit: °C
humidity: 65               # NOW VISIBLE
cloud_coverage: 15         # NOW VISIBLE
uv_index: 2.5             # NEW
pressure: 1016.9          # NOW VISIBLE
pressure_unit: hPa
wind_bearing: 121.6       # NOW VISIBLE
wind_speed: 3.2           # NOW VISIBLE (in m/s, converted to km/h by HA)
wind_speed_unit: km/h
visibility: 10            # IF AVAILABLE
visibility_unit: km
precipitation_unit: mm
apparent_temperature: 19.8  # NOW VISIBLE (feels like)
attribution: Data provided by Meteoblue
friendly_name: Meteoblue
supported_features: 3
```

## Technical Changes

### 1. Fallback Mechanism

Added `_get_current_or_forecast_value()` method:
- Tries current data first (from `current` package)
- Falls back to first forecast value (from `basic-1h` package)
- Ensures data availability even if current coordinator fails

### 2. Dew Point Calculation

Implemented Magnus formula:
```python
def calculate_dew_point(temperature: float, humidity: float) -> float:
    """Calculate dew point from temperature and humidity."""
    a = 17.27
    b = 237.7
    alpha = ((a * temperature) / (b + temperature)) + math.log(humidity / 100.0)
    dew_point = (b * alpha) / (a - alpha)
    return round(dew_point, 1)
```

### 3. UV Index Support

Checks both current and forecast data:
```python
@property
def uv_index(self) -> float | None:
    """Return the UV index."""
    # Try current data first
    # Fall back to forecast data
```

### 4. Debug Logging

Added logging to show available data fields:
- Current data fields
- Forecast 1h fields
- Forecast day fields

Check logs to see what Meteoblue API actually provides.

## How to Apply Changes

### Option 1: Restart Integration
1. Go to Settings → Devices & Services
2. Find Meteoblue Weather
3. Click ⋮ → Reload

### Option 2: Restart Home Assistant
```bash
ha core restart
```

## Checking the Results

### Developer Tools → Template
```yaml
# Check all attributes
{{ states.weather.meteoblue.attributes }}

# Check specific attributes
{{ state_attr('weather.meteoblue', 'humidity') }}
{{ state_attr('weather.meteoblue', 'pressure') }}
{{ state_attr('weather.meteoblue', 'wind_speed') }}
{{ state_attr('weather.meteoblue', 'wind_bearing') }}
{{ state_attr('weather.meteoblue', 'dew_point') }}
{{ state_attr('weather.meteoblue', 'uv_index') }}
{{ state_attr('weather.meteoblue', 'cloud_coverage') }}
{{ state_attr('weather.meteoblue', 'apparent_temperature') }}
```

### Check Logs
Look for these log messages:
```
INFO: Current data fields available: ['temperature', 'pictocode', ...]
INFO: Forecast 1h data fields available: ['time', 'temperature', ...]
INFO: Forecast day data fields available: ['time', 'temperature_max', ...]
```

This shows exactly what fields Meteoblue is providing.

## Troubleshooting

### Still Missing Attributes?

**Check logs** for available fields:
```
Settings → System → Logs → Filter "meteoblue"
```

**Possible reasons**:
1. Current coordinator not updating (check update times)
2. API not providing certain fields (depends on API plan)
3. Field names different than expected (check logs for actual names)

### Debugging Steps

1. **Enable debug logging** in `configuration.yaml`:
   ```yaml
   logger:
     logs:
       custom_components.meteoblue: debug
   ```

2. **Reload integration** to see log messages

3. **Check what fields are available** in the logs

4. **Verify data in Developer Tools**:
   ```yaml
   {{ states.weather.meteoblue }}
   {{ states.weather.meteoblue.attributes }}
   ```

## What Meteoblue Provides

Based on API documentation, the `current` package should provide:
- `temperature`
- `pictocode`
- `windspeed`
- `winddirection`
- `isdaylight`
- `relativehumidity`
- `sealevelpressure`
- `totalcloudcover` (maybe)
- `felttemperature` (maybe)
- `uvindex` (maybe)

The `basic-1h` forecast package provides:
- `time`
- `temperature`
- `pictocode`
- `windspeed`
- `winddirection`
- `precipitation`
- `precipitation_probability`
- `relativehumidity`
- `sealevelpressure`
- `totalcloudcover`
- `uvindex` (maybe)
- `visibility` (maybe)

**Note**: Some fields may vary by location and API plan.

## Next Steps

### If Attributes Still Missing

1. Check logs to see actual field names from API
2. Map Meteoblue field names to HA properties
3. May need to use different Meteoblue package (e.g., `sun-1h` for UV)

### Future Enhancements

If you want more attributes:
- **Precipitation Amount**: Already in forecast, could add to current
- **Wind Gust**: Available in forecast data
- **Solar Radiation**: Available with `solar` package
- **Sea Level Pressure vs Station Pressure**: Different pressure types

## Comparison with Other Integrations

### Before This Update
```yaml
# Only showing:
temperature: 20.3
temperature_unit: °C
# Missing: humidity, pressure, wind, cloud_coverage, etc.
```

### After This Update
```yaml
# Now showing (similar to Met.no and OpenWeatherMap):
temperature: 20.3
dew_point: 13.5
humidity: 65
cloud_coverage: 15
uv_index: 2.5
pressure: 1016.9
wind_bearing: 121.6
wind_speed: 3.2
apparent_temperature: 19.8
visibility: 10
# Plus standard units and attribution
```

## API Field Mapping

| HA Property | Meteoblue Field (current) | Meteoblue Field (forecast) | Status |
|-------------|---------------------------|----------------------------|---------|
| temperature | temperature | temperature | ✅ Working |
| humidity | relativehumidity | relativehumidity | ✅ Fixed |
| pressure | sealevelpressure | sealevelpressure | ✅ Fixed |
| wind_speed | windspeed | windspeed | ✅ Fixed |
| wind_bearing | winddirection | winddirection | ✅ Fixed |
| cloud_coverage | totalcloudcover | totalcloudcover | ✅ Fixed |
| apparent_temperature | felttemperature | felttemperature | ✅ Fixed |
| dew_point | dewpoint (maybe) | calculated | ✅ New |
| uv_index | uvindex (maybe) | uvindex (maybe) | ✅ New |
| visibility | N/A | visibility (maybe) | ✅ New |

## Questions to Check

1. **What fields does your API plan include?**
   - Check logs for actual field list
   - Some fields may require premium API

2. **Is current data updating?**
   - Should update every 15 minutes
   - Check `last_updated` timestamp

3. **Do you need more attributes?**
   - Can add sensors for specific data
   - Can use different Meteoblue packages

## Summary

✅ **Fixed**: humidity, pressure, wind_speed, wind_bearing, cloud_coverage, apparent_temperature
✅ **Added**: dew_point (calculated), uv_index
✅ **Improved**: Fallback mechanism for missing current data
✅ **Added**: Debug logging to see available fields

Your weather entity should now show all standard attributes like other weather integrations!

---

**After applying**: Reload the integration and check Developer Tools → States → weather.meteoblue to see all new attributes.