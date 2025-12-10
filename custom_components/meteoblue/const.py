"""Constants for the Meteoblue Weather integration."""
from __future__ import annotations

from typing import Final

from homeassistant.components.weather import (
    ATTR_CONDITION_CLEAR_NIGHT,
    ATTR_CONDITION_CLOUDY,
    ATTR_CONDITION_FOG,
    ATTR_CONDITION_HAIL,
    ATTR_CONDITION_LIGHTNING,
    ATTR_CONDITION_LIGHTNING_RAINY,
    ATTR_CONDITION_PARTLYCLOUDY,
    ATTR_CONDITION_POURING,
    ATTR_CONDITION_RAINY,
    ATTR_CONDITION_SNOWY,
    ATTR_CONDITION_SNOWY_RAINY,
    ATTR_CONDITION_SUNNY,
    ATTR_CONDITION_WINDY,
)

DOMAIN: Final = "meteoblue"

# API Configuration
API_BASE_URL: Final = "https://my.meteoblue.com/packages"
API_TIMEOUT: Final = 30

# Default values
DEFAULT_NAME: Final = "Meteoblue"
DEFAULT_FORECAST_UPDATE_INTERVAL: Final = 3600  # 1 hour in seconds
DEFAULT_CURRENT_UPDATE_INTERVAL: Final = 3600  # 1 hour in seconds
DEFAULT_AIR_QUALITY_UPDATE_INTERVAL: Final = 3600  # 1 hour in seconds

# Configuration keys
CONF_API_KEY: Final = "api_key"
CONF_FORECAST_DAYS: Final = "forecast_days"
CONF_ENABLE_AIR_QUALITY: Final = "enable_air_quality"
CONF_ENABLE_ADDITIONAL_SENSORS: Final = "enable_additional_sensors"

# Data packages
PACKAGE_BASIC_1H: Final = "basic-1h"
PACKAGE_BASIC_DAY: Final = "basic-day"
PACKAGE_CURRENT: Final = "current"
PACKAGE_AIR_QUALITY: Final = "airquality-1h"

# Coordinator types
COORDINATOR_FORECAST: Final = "forecast"
COORDINATOR_CURRENT: Final = "current"
COORDINATOR_AIR_QUALITY: Final = "air_quality"

# Meteoblue pictocode to Home Assistant condition mapping
# Based on: https://docs.meteoblue.com/en/meteo/variables/meteorological-variables
PICTOCODE_TO_CONDITION: Final[dict[int, str]] = {
    1: ATTR_CONDITION_SUNNY,              # Clear sky
    2: ATTR_CONDITION_PARTLYCLOUDY,       # Light clouds
    3: ATTR_CONDITION_PARTLYCLOUDY,       # Partly cloudy
    4: ATTR_CONDITION_CLOUDY,             # Cloudy
    5: ATTR_CONDITION_FOG,                # Fog
    6: ATTR_CONDITION_RAINY,              # Overcast with rain
    7: ATTR_CONDITION_RAINY,              # Light rain
    8: ATTR_CONDITION_RAINY,              # Rain
    9: ATTR_CONDITION_POURING,            # Heavy rain
    10: ATTR_CONDITION_RAINY,             # Light rain, thunderstorms likely
    11: ATTR_CONDITION_LIGHTNING_RAINY,   # Thunderstorms
    12: ATTR_CONDITION_LIGHTNING_RAINY,   # Heavy thunderstorms
    13: ATTR_CONDITION_SNOWY_RAINY,       # Sleet
    14: ATTR_CONDITION_SNOWY,             # Light snowfall
    15: ATTR_CONDITION_SNOWY,             # Snowfall
    16: ATTR_CONDITION_SNOWY,             # Heavy snowfall
    17: ATTR_CONDITION_HAIL,              # Hail
    18: ATTR_CONDITION_RAINY,             # Light rain, overcast
    19: ATTR_CONDITION_POURING,           # Heavy rain, overcast
    20: ATTR_CONDITION_SNOWY_RAINY,       # Sleet, overcast
    21: ATTR_CONDITION_SNOWY,             # Light snowfall, overcast
    22: ATTR_CONDITION_SNOWY,             # Snowfall, overcast
    23: ATTR_CONDITION_SNOWY,             # Heavy snowfall, overcast
    24: ATTR_CONDITION_HAIL,              # Hail, overcast
    25: ATTR_CONDITION_RAINY,             # Light rain showers
    26: ATTR_CONDITION_POURING,           # Heavy rain showers
    27: ATTR_CONDITION_SNOWY_RAINY,       # Sleet showers
    28: ATTR_CONDITION_SNOWY,             # Light snowfall showers
    29: ATTR_CONDITION_SNOWY,             # Snowfall showers
    30: ATTR_CONDITION_SNOWY,             # Heavy snowfall showers
    31: ATTR_CONDITION_HAIL,              # Hail showers
    32: ATTR_CONDITION_LIGHTNING,         # Thunderstorms, mostly clear
    33: ATTR_CONDITION_LIGHTNING_RAINY,   # Thunderstorms with rain
    34: ATTR_CONDITION_LIGHTNING_RAINY,   # Thunderstorms with snow
    35: ATTR_CONDITION_WINDY,             # Windy
}

# Night time pictocode adjustment (for pictocode 1 during night)
PICTOCODE_CLEAR_NIGHT: Final = ATTR_CONDITION_CLEAR_NIGHT

# Air Quality sensors
AIR_QUALITY_PM25: Final = "pm25"
AIR_QUALITY_PM10: Final = "pm10"
AIR_QUALITY_O3: Final = "o3"
AIR_QUALITY_NO2: Final = "no2"
AIR_QUALITY_SO2: Final = "so2"
AIR_QUALITY_CO: Final = "co"

# Sensor types for additional sensors
SENSOR_UV_INDEX: Final = "uv_index"
SENSOR_PRECIPITATION_PROBABILITY: Final = "precipitation_probability"
SENSOR_WIND_GUST: Final = "wind_gust"
SENSOR_DEW_POINT: Final = "dew_point"
SENSOR_FEELS_LIKE: Final = "feels_like"
SENSOR_VISIBILITY: Final = "visibility"
SENSOR_CLOUD_COVER: Final = "cloud_cover"

# Attribution
ATTRIBUTION: Final = "Data provided by Meteoblue"

# Error messages
ERROR_API_KEY: Final = "Invalid API key"
ERROR_RATE_LIMIT: Final = "Rate limit exceeded"
ERROR_TIMEOUT: Final = "Request timeout"
ERROR_UNKNOWN: Final = "Unknown error occurred"