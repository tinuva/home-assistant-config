# Meteoblue API - Field Analysis

## Overview

Based on actual API responses from Meteoblue, this document details what fields are available from different data packages.

**Date Analyzed**: December 10, 2025  
**API Packages**: `current`, `basic-1h`, `basic-day`

---

## Current Package (`current`)

### ⚠️ Limited Data Available

The `current` package provides **very limited** fields compared to forecast data.

### Available Fields

```
'time'
'isobserveddata'
'metarid'
'isdaylight'
'windspeed'
'zenithangle'
'pictocode_detailed'
'pictocode'
'temperature'
```

### What's Available

- ✅ `temperature` - Current temperature
- ✅ `windspeed` - Current wind speed
- ✅ `pictocode` - Weather condition code (1-35)
- ✅ `pictocode_detailed` - More detailed pictocode
- ✅ `isdaylight` - Day/night indicator (0 or 1)
- ✅ `zenithangle` - Sun position
- ✅ `isobserveddata` - Whether data is from observations (0 or 1)
- ✅ `metarid` - Weather station ID
- ✅ `time` - Timestamp

### What's Missing

- ❌ `relativehumidity` - Not in current package
- ❌ `sealevelpressure` - Not in current package
- ❌ `winddirection` - Not in current package
- ❌ `felttemperature` - Not in current package
- ❌ `uvindex` - Not in current package
- ❌ `totalcloudcover` - Not in current package
- ❌ `precipitation` - Not in current package

### Conclusion

**The `current` package is insufficient for a complete weather entity.**  
We must use forecast data as the primary source.

---

## Forecast Hourly Package (`basic-1h`)

### ✅ Rich Data Available

The hourly forecast package provides comprehensive weather data.

### Available Fields

```
'time'
'snowfraction'
'windspeed'
'temperature'
'precipitation_probability'
'convective_precipitation'
'rainspot'
'pictocode'
'felttemperature'
'precipitation'
'isdaylight'
'uvindex'
'relativehumidity'
'sealevelpressure'
'winddirection'
```

### Field Mapping to HA Attributes

| Meteoblue Field | HA Attribute | Description |
|-----------------|--------------|-------------|
| `temperature` | `temperature` | Temperature in °C |
| `relativehumidity` | `humidity` | Relative humidity (0-100%) |
| `sealevelpressure` | `pressure` | Sea level pressure in hPa |
| `windspeed` | `wind_speed` | Wind speed in m/s |
| `winddirection` | `wind_bearing` | Wind direction in degrees |
| `felttemperature` | `apparent_temperature` | Feels-like temperature |
| `uvindex` | `uv_index` | UV index (0-11+) |
| `pictocode` | `condition` | Weather condition (mapped) |
| `isdaylight` | (internal) | Day/night for condition |
| `precipitation` | (extra attr) | Precipitation amount in mm |
| `precipitation_probability` | (extra attr) | Precipitation probability % |

### Available But Not Yet Used

- `snowfraction` - Percentage of precipitation as snow
- `convective_precipitation` - Convective vs stratiform precipitation
- `rainspot` - Local rain probability

### Still Missing

- ❌ `totalcloudcover` - Cloud coverage not provided
- ❌ `visibility` - Visibility not provided
- ❌ `dewpoint` - Must be calculated from temp + humidity

---

## Forecast Daily Package (`basic-day`)

### ✅ Very Rich Data

The daily forecast package provides extensive aggregated data.

### Available Fields

```
'time'
'temperature_instant'
'precipitation'
'predictability'
'temperature_max'
'sealevelpressure_mean'
'windspeed_mean'
'precipitation_hours'
'sealevelpressure_min'
'pictocode'
'snowfraction'
'humiditygreater90_hours'
'convective_precipitation'
'relativehumidity_max'
'temperature_min'
'winddirection'
'felttemperature_max'
'indexto1hvalues_end'
'relativehumidity_min'
'felttemperature_mean'
'windspeed_min'
'felttemperature_min'
'precipitation_probability'
'uvindex'
'indexto1hvalues_start'
'rainspot'
'temperature_mean'
'sealevelpressure_max'
'relativehumidity_mean'
'predictability_class'
'windspeed_max'
```

### Key Fields for Daily Forecasts

| Field | Used For |
|-------|----------|
| `temperature_max` | Daily high temperature |
| `temperature_min` | Daily low temperature |
| `temperature_mean` | Average temperature |
| `precipitation` | Total precipitation |
| `precipitation_probability` | Chance of rain % |
| `windspeed_mean` | Average wind speed |
| `winddirection` | Predominant wind direction |
| `pictocode` | Daily weather condition |
| `uvindex` | UV index for the day |
| `predictability` | Forecast confidence (0-100%) |
| `predictability_class` | Forecast confidence class (1-5) |

### Useful Additional Fields

- `humiditygreater90_hours` - Hours with humidity > 90%
- `precipitation_hours` - Hours with precipitation
- `snowfraction` - Percentage as snow
- `relativehumidity_max/min/mean` - Humidity statistics
- `sealevelpressure_max/min/mean` - Pressure statistics
- `windspeed_max/min` - Wind gust information
- `felttemperature_max/min/mean` - Feels-like statistics

---

## Implementation Strategy

### Current Approach

Based on the field analysis:

1. **Primary Data Source**: Forecast 1h data (most complete)
2. **Fallback**: Current data (limited fields)
3. **Calculated**: Dew point (from temp + humidity)

### Why This Works

- Forecast 1h has all essential fields
- First forecast value (~current conditions)
- More reliable than sparse current package
- Updates frequently enough (every 15 minutes)

### Property Implementation

```python
def _get_current_or_forecast_value(self, current_key, forecast_key):
    """Prioritize forecast data (more complete) over current data."""
    # Try forecast first
    if forecast_data and forecast_key in forecast_data:
        return forecast_data[forecast_key][0]  # First value = "current"
    
    # Fallback to current
    if current_data and current_key in current_data:
        return current_data[current_key]
    
    return None
```

---

## What Cannot Be Provided

### Not Available from Meteoblue

1. **Cloud Coverage** (`totalcloudcover`)
   - Not in current package
   - Not in basic-1h package
   - Not in basic-day package
   - Would need different package or estimation

2. **Visibility**
   - Not in any standard package
   - Might be in specialized packages

3. **Direct Dew Point**
   - Not provided directly
   - Must be calculated from temperature + humidity
   - Formula: Magnus-Tetens approximation

### Workarounds

1. **Dew Point**: Calculate using Magnus formula
   ```python
   dewpoint = (b * alpha) / (a - alpha)
   where alpha = ((a*T)/(b+T)) + ln(RH/100)
   ```

2. **Cloud Coverage**: Could estimate from pictocode
   - Pictocode 1-2: Clear (0-25%)
   - Pictocode 3: Partly cloudy (25-75%)
   - Pictocode 4+: Cloudy (75-100%)
   - But this is not accurate

3. **Visibility**: Cannot be provided without additional API package

---

## Recommendations

### Current Implementation ✅

- Use forecast 1h as primary source
- Calculate dew point from temp + humidity
- Include precipitation probability in extra attributes
- Include predictability in extra attributes

### Future Enhancements 🔮

1. **Add Extra Sensors** (new platform)
   - Precipitation probability sensor
   - Predictability sensor
   - Snow fraction sensor
   - Convective precipitation indicator

2. **Investigate Additional Packages**
   - Check if `clouds` package provides cloud coverage
   - Check if `visibility` package exists
   - Check if `air` package has additional data

3. **Add More Daily Forecast Fields**
   - Wind gust (windspeed_max)
   - Humidity range
   - Pressure trend

---

## API Package Comparison

| Attribute Needed | Current | Forecast 1h | Forecast Day | Status |
|------------------|---------|-------------|--------------|---------|
| Temperature | ✅ | ✅ | ✅ | Working |
| Humidity | ❌ | ✅ | ✅ | Fixed |
| Pressure | ❌ | ✅ | ✅ | Fixed |
| Wind Speed | ✅ | ✅ | ✅ | Fixed |
| Wind Direction | ❌ | ✅ | ✅ | Fixed |
| Feels Like | ❌ | ✅ | ✅ | Fixed |
| UV Index | ❌ | ✅ | ✅ | Fixed |
| Precipitation | ❌ | ✅ | ✅ | Fixed |
| Precip Probability | ❌ | ✅ | ✅ | Fixed |
| Condition | ✅ | ✅ | ✅ | Working |
| Day/Night | ✅ | ✅ | N/A | Working |
| Dew Point | ❌ | ❌ | ❌ | Calculated |
| Cloud Coverage | ❌ | ❌ | ❌ | Not Available |
| Visibility | ❌ | ❌ | ❌ | Not Available |

---

## Conclusion

### Key Findings

1. **Current package is minimal** - Only 9 fields, missing most attributes
2. **Forecast 1h is comprehensive** - 15 fields, all essential data
3. **Forecast day is very rich** - 31 fields, excellent for daily forecasts
4. **Some fields unavailable** - Cloud cover, visibility not in standard packages

### Current Solution

✅ **Use forecast 1h as primary source**  
✅ **Calculate dew point**  
✅ **Add precipitation probability to extra attributes**  
✅ **Include predictability information**  
❌ **Cannot provide cloud coverage or visibility** (not in API response)

### Result

Weather entity now provides **all standard attributes** that Meteoblue supports:
- temperature, humidity, pressure ✅
- wind speed, wind bearing ✅
- feels like, UV index ✅
- precipitation, precipitation probability ✅
- dew point (calculated) ✅
- condition with day/night ✅

Only missing compared to other integrations:
- cloud_coverage (not provided by Meteoblue standard packages)
- visibility (not provided by Meteoblue standard packages)

---

**Last Updated**: December 10, 2025  
**Based On**: Actual API responses from production system