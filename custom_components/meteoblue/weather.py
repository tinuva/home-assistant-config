"""Weather platform for Meteoblue integration."""
from __future__ import annotations

from datetime import datetime
import logging
import math
from typing import Any

from homeassistant.components.weather import (
    ATTR_FORECAST_CLOUD_COVERAGE,
    ATTR_FORECAST_CONDITION,
    ATTR_FORECAST_HUMIDITY,
    ATTR_FORECAST_NATIVE_DEW_POINT,
    ATTR_FORECAST_NATIVE_PRECIPITATION,
    ATTR_FORECAST_NATIVE_PRESSURE,
    ATTR_FORECAST_NATIVE_TEMP,
    ATTR_FORECAST_NATIVE_TEMP_LOW,
    ATTR_FORECAST_NATIVE_WIND_GUST_SPEED,
    ATTR_FORECAST_NATIVE_WIND_SPEED,
    ATTR_FORECAST_PRECIPITATION_PROBABILITY,
    ATTR_FORECAST_TIME,
    ATTR_FORECAST_WIND_BEARING,
    Forecast,
    WeatherEntity,
    WeatherEntityFeature,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import (
    CONF_LATITUDE,
    CONF_LONGITUDE,
    CONF_NAME,
    UnitOfPressure,
    UnitOfSpeed,
    UnitOfTemperature,
    UnitOfLength,
    UnitOfPrecipitationDepth,
)
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity
from homeassistant.util import dt as dt_util

from .const import (
    ATTRIBUTION,
    COORDINATOR_CURRENT,
    COORDINATOR_FORECAST,
    DEFAULT_NAME,
    DOMAIN,
    PICTOCODE_CLEAR_NIGHT,
    PICTOCODE_TO_CONDITION,
)
from .coordinator import (
    MeteoblueCurrentDataUpdateCoordinator,
    MeteoblueForecastDataUpdateCoordinator,
)

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Meteoblue weather entity."""
    coordinators = hass.data[DOMAIN][entry.entry_id]
    
    forecast_coordinator = coordinators[COORDINATOR_FORECAST]
    current_coordinator = coordinators[COORDINATOR_CURRENT]
    
    name = entry.data.get(CONF_NAME, DEFAULT_NAME)
    latitude = entry.data[CONF_LATITUDE]
    longitude = entry.data[CONF_LONGITUDE]
    
    async_add_entities(
        [
            MeteoblueWeatherEntity(
                forecast_coordinator,
                current_coordinator,
                name,
                latitude,
                longitude,
                entry.entry_id,
            )
        ]
    )


def calculate_dew_point(temperature: float, humidity: float) -> float:
    """Calculate dew point from temperature and humidity.
    
    Uses the Magnus formula for approximation.
    Temperature in Celsius, humidity in percentage (0-100).
    """
    a = 17.27
    b = 237.7
    
    alpha = ((a * temperature) / (b + temperature)) + math.log(humidity / 100.0)
    dew_point = (b * alpha) / (a - alpha)
    
    return round(dew_point, 1)


class MeteoblueWeatherEntity(
    CoordinatorEntity[MeteoblueForecastDataUpdateCoordinator], WeatherEntity
):
    """Representation of a Meteoblue weather entity."""

    _attr_native_temperature_unit = UnitOfTemperature.CELSIUS
    _attr_native_pressure_unit = UnitOfPressure.HPA
    _attr_native_wind_speed_unit = UnitOfSpeed.METERS_PER_SECOND
    _attr_native_precipitation_unit = UnitOfPrecipitationDepth.MILLIMETERS
    _attr_native_visibility_unit = UnitOfLength.KILOMETERS
    _attr_supported_features = (
        WeatherEntityFeature.FORECAST_DAILY | WeatherEntityFeature.FORECAST_HOURLY
    )

    def __init__(
        self,
        forecast_coordinator: MeteoblueForecastDataUpdateCoordinator,
        current_coordinator: MeteoblueCurrentDataUpdateCoordinator,
        name: str,
        latitude: float,
        longitude: float,
        entry_id: str,
    ) -> None:
        """Initialize the weather entity."""
        super().__init__(forecast_coordinator)
        
        self._current_coordinator = current_coordinator
        self._attr_name = name
        self._latitude = latitude
        self._longitude = longitude
        self._attr_unique_id = f"{entry_id}_weather"
        self._attr_attribution = ATTRIBUTION
        
        # Subscribe to current coordinator updates
        self.async_on_remove(
            self._current_coordinator.async_add_listener(self._handle_coordinator_update)
        )
        
        # Log available data fields for debugging
        self._log_available_fields()
    
    def _log_available_fields(self) -> None:
        """Log available data fields for debugging."""
        if self._current_coordinator.data:
            current_data = self._current_coordinator.data.get("data_current", {})
            _LOGGER.info("Current data fields available: %s", list(current_data.keys()))
            _LOGGER.info("Note: Current package has limited fields. Using forecast data as primary source.")
        
        if self.coordinator.data:
            data_1h = self.coordinator.data.get("data_1h", {})
            _LOGGER.info("Forecast 1h data fields available: %s", list(data_1h.keys()))
            
            data_day = self.coordinator.data.get("data_day", {})
            _LOGGER.info("Forecast day data fields available: %s", list(data_day.keys()))

    def _find_current_forecast_index(self) -> int:
        """Find the index in forecast array that corresponds to current hour.
        
        Returns 0 if unable to determine (use first value as fallback).
        """
        if not self.coordinator.data:
            return 0
        
        data_1h = self.coordinator.data.get("data_1h", {})
        times = data_1h.get("time", [])
        
        if not times:
            return 0
        
        from datetime import datetime
        
        try:
            # Note: Meteoblue API appears to return times in local timezone
            # regardless of tz=utc parameter, so we match by local hour
            now_local = dt_util.now()
            current_hour_local = now_local.hour
            
            _LOGGER.debug("Looking for current hour: %s (local time: %s)", 
                         current_hour_local, now_local.strftime("%H:%M"))
            
            # Find the matching hour in forecast times
            for i, time_str in enumerate(times):
                # Format: "2025-12-10 08:00"
                try:
                    forecast_hour = int(time_str.split()[1].split(":")[0])
                    
                    # If this hour matches or is in the future, use it
                    if forecast_hour >= current_hour_local:
                        _LOGGER.debug("Current forecast index: %s (time: %s, matches hour: %s)", 
                                      i, time_str, forecast_hour)
                        return i
                except (IndexError, ValueError):
                    continue
            
            # If all times are in the past, use last value
            _LOGGER.debug("All forecast times in past, using last index: %s", len(times) - 1)
            return len(times) - 1
            
        except (ValueError, IndexError) as err:
            _LOGGER.debug("Could not parse forecast times: %s", err)
            return 0

    def _get_current_or_forecast_value(self, current_key: str, forecast_key: str) -> Any:
        """Get value from forecast data or fall back to current data.
        
        Note: Meteoblue's 'current' package has very limited fields,
        so we prioritize forecast data which is more complete.
        """
        # Try forecast data first (more complete)
        if self.coordinator.data:
            data_1h = self.coordinator.data.get("data_1h", {})
            values = data_1h.get(forecast_key, [])
            if values and len(values) > 0:
                # Use current hour index instead of always [0]
                current_idx = self._find_current_forecast_index()
                if current_idx < len(values):
                    return values[current_idx]
                return values[0]  # Fallback if index out of range
        
        # Fall back to current data if forecast not available
        if self._current_coordinator.data:
            current_data = self._current_coordinator.data.get("data_current", {})
            value = current_data.get(current_key)
            if value is not None:
                return value
        
        return None

    @property
    def native_temperature(self) -> float | None:
        """Return the temperature."""
        return self._get_current_or_forecast_value("temperature", "temperature")

    @property
    def humidity(self) -> int | None:
        """Return the humidity."""
        humidity = self._get_current_or_forecast_value("relativehumidity", "relativehumidity")
        return int(humidity) if humidity is not None else None

    @property
    def native_pressure(self) -> float | None:
        """Return the pressure."""
        return self._get_current_or_forecast_value("sealevelpressure", "sealevelpressure")

    @property
    def native_wind_speed(self) -> float | None:
        """Return the wind speed."""
        return self._get_current_or_forecast_value("windspeed", "windspeed")

    @property
    def wind_bearing(self) -> float | str | None:
        """Return the wind bearing."""
        return self._get_current_or_forecast_value("winddirection", "winddirection")

    @property
    def native_visibility(self) -> float | None:
        """Return the visibility."""
        # Meteoblue doesn't provide visibility in their data packages
        return None

    @property
    def cloud_coverage(self) -> float | None:
        """Return the cloud coverage."""
        # Meteoblue doesn't provide cloud coverage in their standard packages
        # Could be calculated from pictocode but not directly available
        return None

    @property
    def native_apparent_temperature(self) -> float | None:
        """Return the apparent temperature (feels like)."""
        return self._get_current_or_forecast_value("felttemperature", "felttemperature")

    @property
    def native_dew_point(self) -> float | None:
        """Return the dew point."""
        # Try to get from current data first
        if self._current_coordinator.data:
            current_data = self._current_coordinator.data.get("data_current", {})
            dew_point = current_data.get("dewpoint")
            if dew_point is not None:
                return dew_point
        
        # Calculate from temperature and humidity if not available
        temperature = self.native_temperature
        humidity = self.humidity
        
        if temperature is not None and humidity is not None:
            try:
                return calculate_dew_point(temperature, humidity)
            except (ValueError, ZeroDivisionError):
                pass
        
        return None

    @property
    def uv_index(self) -> float | None:
        """Return the UV index."""
        # UV index is only meaningful during daylight
        # Find the correct hour in forecast data
        if self.coordinator.data:
            data_1h = self.coordinator.data.get("data_1h", {})
            uv_values = data_1h.get("uvindex", [])
            is_daylight = data_1h.get("isdaylight", [])
            times = data_1h.get("time", [])
            
            if uv_values:
                # Find current hour index
                current_idx = self._find_current_forecast_index()
                
                # Debug logging
                _LOGGER.debug("UV: Current time: %s", dt_util.utcnow())
                _LOGGER.debug("UV: UV index array (first 10 values): %s", uv_values[:10])
                _LOGGER.debug("UV: Is daylight array (first 10 values): %s", is_daylight[:10] if is_daylight else "N/A")
                _LOGGER.debug("UV: Time array (first 10 values): %s", times[:10] if times else "N/A")
                _LOGGER.debug("UV: Calculated current forecast index: %s", current_idx)
                
                if current_idx < len(uv_values):
                    # Check if it's daytime for this hour
                    if is_daylight and current_idx < len(is_daylight):
                        if not is_daylight[current_idx]:
                            _LOGGER.debug("UV: Current hour is nighttime, UV index = 0")
                            return 0
                    
                    uv_value = uv_values[current_idx] if uv_values[current_idx] is not None else 0
                    _LOGGER.debug("UV: Returning UV index for current hour (index %s): %s", current_idx, uv_value)
                    return uv_value
        
        # No data available
        return None

    @property
    def condition(self) -> str | None:
        """Return the current condition."""
        # Prioritize forecast data (has isdaylight field)
        if self.coordinator.data:
            data_1h = self.coordinator.data.get("data_1h", {})
            pictocodes = data_1h.get("pictocode", [])
            is_daylight_list = data_1h.get("isdaylight", [])
            
            if pictocodes and len(pictocodes) > 0:
                # Find current hour index instead of using [0]
                current_idx = self._find_current_forecast_index()
                
                if current_idx < len(pictocodes):
                    pictocode = pictocodes[current_idx]
                    # Use isdaylight from forecast data for current hour
                    is_daytime = is_daylight_list[current_idx] if is_daylight_list and current_idx < len(is_daylight_list) else 1
                    
                    _LOGGER.debug("Condition: Using index %s, pictocode=%s, is_daytime=%s", current_idx, pictocode, is_daytime)
                    
                    if pictocode == 1 and not is_daytime:
                        return PICTOCODE_CLEAR_NIGHT
                    
                    return PICTOCODE_TO_CONDITION.get(pictocode)
        
        # Fall back to current data
        if self._current_coordinator.data:
            current_data = self._current_coordinator.data.get("data_current", {})
            pictocode = current_data.get("pictocode")
            
            if pictocode is None:
                return None
            
            # Check if it's nighttime and clear sky
            is_daytime = current_data.get("isdaylight", 1)
            if pictocode == 1 and not is_daytime:
                return PICTOCODE_CLEAR_NIGHT
            
            return PICTOCODE_TO_CONDITION.get(pictocode)
        
        return None

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return additional state attributes."""
        attributes = {}
        
        if self.coordinator.data:
            data_1h = self.coordinator.data.get("data_1h", {})
            current_idx = self._find_current_forecast_index()
            
            # Add precipitation probability
            precip_prob = data_1h.get("precipitation_probability", [])
            if precip_prob and current_idx < len(precip_prob):
                attributes["precipitation_probability"] = precip_prob[current_idx]
            
            # Add precipitation amount
            precip = data_1h.get("precipitation", [])
            if precip and current_idx < len(precip):
                attributes["precipitation"] = precip[current_idx]
            
            # Add predictability from daily data
            data_day = self.coordinator.data.get("data_day", {})
            predictability = data_day.get("predictability", [])
            if predictability and len(predictability) > 0:
                attributes["predictability"] = predictability[0]
            
            predictability_class = data_day.get("predictability_class", [])
            if predictability_class and len(predictability_class) > 0:
                attributes["predictability_class"] = predictability_class[0]
        
        return attributes

    def _is_daytime(self, time_str: str | None = None) -> bool:
        """Determine if it's daytime based on current data or time."""
        if not self._current_coordinator.data:
            # Fallback to simple hour check
            if time_str:
                try:
                    hour = int(time_str.split()[1].split(":")[0])
                    return 6 <= hour < 20
                except (IndexError, ValueError):
                    pass
            return True
        
        current_data = self._current_coordinator.data.get("data_current", {})
        return bool(current_data.get("isdaylight", 1))

    async def async_forecast_daily(self) -> list[Forecast] | None:
        """Return the daily forecast."""
        if not self.coordinator.data:
            return None
        
        data_day = self.coordinator.data.get("data_day", {})
        
        if not data_day:
            return None
        
        times = data_day.get("time", [])
        temp_max = data_day.get("temperature_max", [])
        temp_min = data_day.get("temperature_min", [])
        precipitation = data_day.get("precipitation", [])
        precip_prob = data_day.get("precipitation_probability", [])
        wind_speed = data_day.get("windspeed_mean", [])
        wind_direction = data_day.get("winddirection", [])
        pictocodes = data_day.get("pictocode", [])
        
        forecasts: list[Forecast] = []
        
        for i, time_str in enumerate(times):
            try:
                # Parse date string (format: "YYYY-MM-DD")
                forecast_time = datetime.strptime(time_str, "%Y-%m-%d")
                forecast_time = dt_util.as_utc(forecast_time)
                
                forecast: Forecast = {
                    ATTR_FORECAST_TIME: forecast_time.isoformat(),
                }
                
                if i < len(temp_max):
                    forecast[ATTR_FORECAST_NATIVE_TEMP] = temp_max[i]
                
                if i < len(temp_min):
                    forecast[ATTR_FORECAST_NATIVE_TEMP_LOW] = temp_min[i]
                
                if i < len(precipitation):
                    forecast[ATTR_FORECAST_NATIVE_PRECIPITATION] = precipitation[i]
                
                if i < len(precip_prob):
                    forecast[ATTR_FORECAST_PRECIPITATION_PROBABILITY] = precip_prob[i]
                
                if i < len(wind_speed):
                    forecast[ATTR_FORECAST_NATIVE_WIND_SPEED] = wind_speed[i]
                
                if i < len(wind_direction):
                    forecast[ATTR_FORECAST_WIND_BEARING] = wind_direction[i]
                
                if i < len(pictocodes):
                    pictocode = pictocodes[i]
                    condition = PICTOCODE_TO_CONDITION.get(pictocode)
                    if condition:
                        forecast[ATTR_FORECAST_CONDITION] = condition
                
                forecasts.append(forecast)
                
            except (ValueError, TypeError) as err:
                _LOGGER.warning("Error parsing daily forecast at index %s: %s", i, err)
                continue
        
        return forecasts

    async def async_forecast_hourly(self) -> list[Forecast] | None:
        """Return the hourly forecast."""
        if not self.coordinator.data:
            return None
        
        data_1h = self.coordinator.data.get("data_1h", {})
        
        if not data_1h:
            return None
        
        times = data_1h.get("time", [])
        temperatures = data_1h.get("temperature", [])
        precipitation = data_1h.get("precipitation", [])
        precip_prob = data_1h.get("precipitation_probability", [])
        wind_speed = data_1h.get("windspeed", [])
        wind_gust = data_1h.get("windgust", [])
        wind_direction = data_1h.get("winddirection", [])
        humidity = data_1h.get("relativehumidity", [])
        pressure = data_1h.get("sealevelpressure", [])
        cloud_cover = data_1h.get("totalcloudcover", [])
        pictocodes = data_1h.get("pictocode", [])
        
        forecasts: list[Forecast] = []
        
        for i, time_str in enumerate(times):
            try:
                # Parse datetime string (format: "YYYY-MM-DD HH:MM")
                forecast_time = datetime.strptime(time_str, "%Y-%m-%d %H:%M")
                forecast_time = dt_util.as_utc(forecast_time)
                
                forecast: Forecast = {
                    ATTR_FORECAST_TIME: forecast_time.isoformat(),
                }
                
                if i < len(temperatures):
                    forecast[ATTR_FORECAST_NATIVE_TEMP] = temperatures[i]
                
                if i < len(precipitation):
                    forecast[ATTR_FORECAST_NATIVE_PRECIPITATION] = precipitation[i]
                
                if i < len(precip_prob):
                    forecast[ATTR_FORECAST_PRECIPITATION_PROBABILITY] = precip_prob[i]
                
                if i < len(wind_speed):
                    forecast[ATTR_FORECAST_NATIVE_WIND_SPEED] = wind_speed[i]
                
                if i < len(wind_gust):
                    forecast[ATTR_FORECAST_NATIVE_WIND_GUST_SPEED] = wind_gust[i]
                
                if i < len(wind_direction):
                    forecast[ATTR_FORECAST_WIND_BEARING] = wind_direction[i]
                
                if i < len(humidity):
                    forecast[ATTR_FORECAST_HUMIDITY] = humidity[i]
                
                if i < len(pressure):
                    forecast[ATTR_FORECAST_NATIVE_PRESSURE] = pressure[i]
                
                if i < len(cloud_cover):
                    forecast[ATTR_FORECAST_CLOUD_COVERAGE] = cloud_cover[i]
                
                if i < len(pictocodes):
                    pictocode = pictocodes[i]
                    # Determine if daytime for this forecast hour
                    hour = forecast_time.hour
                    is_daytime = 6 <= hour < 20
                    
                    if pictocode == 1 and not is_daytime:
                        forecast[ATTR_FORECAST_CONDITION] = PICTOCODE_CLEAR_NIGHT
                    else:
                        condition = PICTOCODE_TO_CONDITION.get(pictocode)
                        if condition:
                            forecast[ATTR_FORECAST_CONDITION] = condition
                
                forecasts.append(forecast)
                
            except (ValueError, TypeError) as err:
                _LOGGER.warning("Error parsing hourly forecast at index %s: %s", i, err)
                continue
        
        return forecasts

    @callback
    def _handle_coordinator_update(self) -> None:
        """Handle updated data from the coordinator."""
        self.async_write_ha_state()