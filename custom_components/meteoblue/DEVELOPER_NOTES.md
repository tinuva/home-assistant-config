# Meteoblue Integration - Developer Notes

## Technical Overview

This document contains technical details about the Meteoblue Weather integration implementation for Home Assistant developers and maintainers.

## Architecture

### Component Structure

```
meteoblue/
├── __init__.py              # Entry point, coordinator management
├── manifest.json            # Integration metadata
├── const.py                 # Constants, mappings, defaults
├── config_flow.py           # UI configuration flow
├── coordinator.py           # API client and data coordinators
├── weather.py               # Weather entity implementation
├── air_quality.py           # Air quality entity implementation
└── strings.json             # UI translations
```

### Data Flow

```
User Configuration (UI)
    ↓
config_flow.py validates API key
    ↓
__init__.py creates coordinators
    ↓
coordinators fetch data from Meteoblue API
    ↓
weather.py & air_quality.py consume coordinator data
    ↓
Home Assistant entities updated
```

## API Integration

### Meteoblue API Endpoints

**Base URL**: `https://my.meteoblue.com/packages`

**Data Packages Used**:
1. `basic-1h` - Hourly weather forecast
2. `basic-day` - Daily weather forecast  
3. `current` - Current weather conditions
4. `airquality-1h` - Air quality forecast

### API Request Format

```
GET /packages/{packages}?lat={lat}&lon={lon}&apikey={key}&format=json&...
```

**Parameters**:
- `lat`: Latitude (WGS-84)
- `lon`: Longitude (WGS-84)
- `apikey`: API key
- `format`: json (recommended)
- `temperature`: C (Celsius)
- `windspeed`: ms-1 (meters per second)
- `precipitationamount`: mm (millimeters)
- `winddirection`: degree
- `tz`: utc (timezone)

### Response Structure

**Forecast Response** (`basic-1h_basic-day`):
```json
{
  "metadata": {
    "name": "Location",
    "latitude": -33.xx,
    "longitude": 18.xx,
    "modelrun_utc": "2024-01-15 06:00",
    "modelrun_updatetime_utc": "2024-01-15 07:22"
  },
  "units": {
    "temperature": "C",
    "windspeed": "ms-1",
    "precipitation": "mm"
  },
  "data_1h": {
    "time": ["2024-01-15 14:00", ...],
    "temperature": [24.5, ...],
    "windspeed": [3.2, ...],
    "pictocode": [2, ...]
  },
  "data_day": {
    "time": ["2024-01-15", ...],
    "temperature_max": [28.5, ...],
    "temperature_min": [18.2, ...]
  }
}
```

**Current Response** (`current`):
```json
{
  "data_current": {
    "time": "2024-01-15 14:05",
    "temperature": 24.5,
    "pictocode": 2,
    "windspeed": 3.2,
    "isdaylight": 1,
    "relativehumidity": 65,
    "sealevelpressure": 1013.2
  }
}
```

**Air Quality Response** (`airquality-1h`):
```json
{
  "data_1h": {
    "time": ["2024-01-15 14:00", ...],
    "pm2p5": [12.5, ...],
    "pm10": [25.3, ...],
    "o3": [45.2, ...],
    "no2": [15.8, ...],
    "so2": [5.2, ...],
    "co": [350.5, ...]
  }
}
```

## Coordinator Pattern

### Three Coordinators

**1. MeteoblueForecastDataUpdateCoordinator**
- Updates: Every 2 hours
- Package: `basic-1h_basic-day`
- Purpose: Forecast data for weather entity

**2. MeteoblueCurrentDataUpdateCoordinator**
- Updates: Every 15 minutes
- Package: `current`
- Purpose: Current conditions for weather entity

**3. MeteoblueAirQualityDataUpdateCoordinator**
- Updates: Every 1 hour
- Package: `airquality-1h`
- Purpose: Air quality data (optional)

### Why Multiple Coordinators?

Different data types have different update requirements:
- Forecasts change slowly (2 hours is sufficient)
- Current conditions change faster (15 minutes for accuracy)
- Air quality moderate updates (1 hour balance)

This minimizes API calls while maintaining data freshness.

### API Client Pattern

Single `MeteoblueApiClient` class shared by all coordinators:
- Centralized API communication
- Consistent error handling
- Easy to mock for testing

## Weather Entity Implementation

### Pictocode Mapping

Meteoblue uses pictocodes (1-35) to represent weather conditions. Mapping to Home Assistant conditions:

| Pictocode | Meteoblue Condition | HA Condition |
|-----------|---------------------|--------------|
| 1 | Clear sky | sunny / clear-night |
| 2 | Light clouds | partlycloudy |
| 3 | Partly cloudy | partlycloudy |
| 4 | Cloudy | cloudy |
| 5 | Fog | fog |
| 6-9 | Rain variations | rainy / pouring |
| 10-12 | Thunderstorms | lightning-rainy |
| 13 | Sleet | snowy-rainy |
| 14-16 | Snow | snowy |
| 17 | Hail | hail |
| ... | ... | ... |

**Night Detection**:
- Use `isdaylight` from current data
- For forecasts, check hour (6-20 = day)
- Pictocode 1 + night = `clear-night`

### Forecast Methods

**`async_forecast_daily()`**:
- Returns list of daily forecasts
- Keys: temp_max, temp_min, precipitation, condition
- Time format: ISO 8601 (YYYY-MM-DD)

**`async_forecast_hourly()`**:
- Returns list of hourly forecasts
- Keys: temperature, wind, humidity, pressure, condition
- Time format: ISO 8601 (YYYY-MM-DDTHH:MM:SS+00:00)

### Entity Features

```python
_attr_supported_features = (
    WeatherEntityFeature.FORECAST_DAILY | 
    WeatherEntityFeature.FORECAST_HOURLY
)
```

## Air Quality Entity

### Pollutant Mapping

Meteoblue API field → HA property:
- `pm2p5` → `particulate_matter_2_5`
- `pm10` → `particulate_matter_10`
- `o3` → `ozone`
- `no2` → `nitrogen_dioxide`
- `so2` → `sulphur_dioxide`
- `co` → `carbon_monoxide`

### Current Value Selection

Air quality returns hourly forecast array. We use:
- `data_1h[pollutant][0]` - First value (current hour)
- Extra attributes include forecast for next 3 hours

## Error Handling

### API Errors

**HTTP 401 - Unauthorized**:
- Raises: `UpdateFailed(ERROR_API_KEY)`
- User action: Check API key

**HTTP 429 - Rate Limited**:
- Raises: `UpdateFailed(ERROR_RATE_LIMIT)`
- User action: Wait or upgrade plan

**Timeout**:
- Uses `asyncio.timeout(API_TIMEOUT)` (30 seconds)
- Raises: `UpdateFailed(ERROR_TIMEOUT)`
- Automatic retry on next update

**Network Errors**:
- Catches `ClientError` and `ClientResponseError`
- Logs error details
- Entity becomes unavailable until next successful update

### Config Flow Validation

In `validate_input()`:
- Attempts API call with provided credentials
- Uses default coordinates if not specified
- Validates API key before creating config entry

## Configuration

### Config Entry Data

Stored in `.storage/core.config_entries`:
```json
{
  "api_key": "user_api_key",
  "latitude": -33.9249,
  "longitude": 18.4241,
  "name": "Meteoblue"
}
```

### Options

Stored in same config entry:
```json
{
  "forecast_days": 7,
  "enable_air_quality": true,
  "enable_additional_sensors": false
}
```

### Unique ID

Generated as: `{latitude}_{longitude}`
- Prevents duplicate entries for same location
- Allows multiple locations with different coordinates

## Update Intervals

### Calculation

**Forecast**: 2 hours = 7200 seconds
- API recommendation for forecast data
- ~12 calls/day per location

**Current**: 15 minutes = 900 seconds
- Balance between freshness and API usage
- ~96 calls/day per location

**Air Quality**: 1 hour = 3600 seconds
- Air quality changes slowly
- ~24 calls/day per location

**Total**: ~132 API calls/day per location

## Testing Considerations

### Manual Testing

1. **Config Flow**:
   - Valid API key → Success
   - Invalid API key → Error message
   - Duplicate location → Abort

2. **Weather Entity**:
   - Check current conditions display
   - Verify forecast in weather card
   - Test `weather.get_forecasts` service

3. **Air Quality**:
   - Enable in options
   - Check entity attributes
   - Verify pollutant values

### Mock Testing (Future)

Create mock API responses in tests:
```python
MOCK_FORECAST_RESPONSE = {
    "metadata": {...},
    "data_1h": {...},
    "data_day": {...}
}
```

## Performance Optimization

### API Call Efficiency

**Batching**: Combine packages in single call
- `basic-1h_basic-day` instead of two separate calls
- Reduces API usage by 50%

**Caching**: Coordinator caches data
- Entities read from coordinator.data
- No duplicate API calls

**Smart Updates**: Different intervals per data type
- Avoids unnecessary updates
- Respects API rate limits

### Memory Usage

- JSON responses are relatively small (< 100KB)
- Only stores latest data (no history)
- Coordinator automatically manages data lifecycle

## Future Enhancements

### Planned Features

1. **Additional Sensors** (`sensor.py`):
   - UV Index sensor
   - Precipitation probability sensor
   - Wind gust sensor
   - Visibility sensor

2. **Historical Data**:
   - Use `history_days` parameter
   - Show past weather data

3. **Weather Alerts**:
   - Use Meteoblue warnings API
   - Create binary_sensor for alerts

4. **Sun/Moon Data**:
   - Use `sunmoon` package
   - Sunrise/sunset/moonrise/moonset sensors

### Architecture Improvements

1. **Separate PyPI Library**:
   - Extract `MeteoblueApiClient` to `pymeteoblue`
   - Publish to PyPI
   - Better separation of concerns

2. **Device Class**:
   - Group entities under single device
   - Better UI organization

3. **Diagnostics Support**:
   - Implement `async_get_config_entry_diagnostics()`
   - Help with debugging

4. **Repair Flow**:
   - Handle API key expiration
   - Prompt for renewal

## Home Assistant Integration Quality

### Current Status: Bronze Tier

Requirements met:
- ✅ Proper manifest.json
- ✅ Config flow for UI setup
- ✅ Uses DataUpdateCoordinator
- ✅ Async/await pattern
- ✅ Proper error handling
- ✅ No blocking I/O in event loop
- ✅ Translations provided

### Path to Silver Tier

To achieve silver tier:
- Add integration tests
- Implement diagnostics
- Add repair flows
- Improve error messages
- Better logging

## Dependencies

### Python Standard Library
- `asyncio` - Async operations
- `datetime` - Time handling
- `logging` - Debug logging
- `typing` - Type hints

### Home Assistant Core
- `aiohttp` - HTTP client (via HA)
- `homeassistant.helpers.aiohttp_client` - Session management
- `homeassistant.helpers.update_coordinator` - Data coordination
- `homeassistant.components.weather` - Weather platform
- `homeassistant.components.air_quality` - Air quality platform

### External Dependencies
- None - Uses only HA core dependencies

## Debugging Tips

### Enable Debug Logging

Add to `configuration.yaml`:
```yaml
logger:
  default: info
  logs:
    custom_components.meteoblue: debug
```

### Common Log Messages

**Normal Operation**:
```
Fetching forecast data for lat=-33.xx, lon=18.xx
Fetching current weather data for lat=-33.xx, lon=18.xx
```

**Errors**:
```
Failed to validate API key: Invalid API key
API response error: 429
Request timeout
```

### Developer Tools

**Template Testing**:
```jinja
{{ states('weather.meteoblue') }}
{{ state_attr('weather.meteoblue', 'temperature') }}
{{ state_attr('weather.meteoblue', 'forecast') }}
```

**Service Testing**:
```yaml
action: weather.get_forecasts
data:
  type: hourly
target:
  entity_id: weather.meteoblue
```

## API Documentation References

- **Main Docs**: https://docs.meteoblue.com/en/weather-apis
- **Forecast API**: https://docs.meteoblue.com/en/weather-apis/forecast-api/overview
- **Air Quality**: Package `airquality-1h` in forecast API
- **Pictocodes**: Weather condition codes 1-35

## Contributing

### Code Style

Follow Home Assistant style:
- Black formatting
- isort for imports
- Type hints everywhere
- Descriptive variable names

### Pull Request Checklist

- [ ] Code follows HA style guide
- [ ] All functions have type hints
- [ ] Error handling implemented
- [ ] Logging added for debugging
- [ ] Strings added to translations
- [ ] README updated if needed
- [ ] Tested manually

## Version History

### 1.0.0 (Initial Release)
- Weather entity with forecasts
- Air quality entity
- UI configuration flow
- Options flow
- Multiple location support

## License

This integration follows Home Assistant's license model for custom components.

## Contact

For issues, feature requests, or contributions, please use the project's issue tracker.

---

**Last Updated**: 2024
**Maintainer**: Custom Component Developer
**Status**: Active Development