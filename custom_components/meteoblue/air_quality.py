"""Air Quality platform for Meteoblue integration."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.components.air_quality import AirQualityEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import (
    CONCENTRATION_MICROGRAMS_PER_CUBIC_METER,
    CONF_LATITUDE,
    CONF_LONGITUDE,
    CONF_NAME,
)
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import (
    ATTRIBUTION,
    COORDINATOR_AIR_QUALITY,
    DEFAULT_NAME,
    DOMAIN,
)
from .coordinator import MeteoblueAirQualityDataUpdateCoordinator

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Meteoblue air quality entity."""
    coordinators = hass.data[DOMAIN][entry.entry_id]
    
    if COORDINATOR_AIR_QUALITY not in coordinators:
        return
    
    air_quality_coordinator = coordinators[COORDINATOR_AIR_QUALITY]
    
    name = entry.data.get(CONF_NAME, DEFAULT_NAME)
    latitude = entry.data[CONF_LATITUDE]
    longitude = entry.data[CONF_LONGITUDE]
    
    async_add_entities(
        [
            MeteoblueAirQualityEntity(
                air_quality_coordinator,
                name,
                latitude,
                longitude,
                entry.entry_id,
            )
        ]
    )


class MeteoblueAirQualityEntity(
    CoordinatorEntity[MeteoblueAirQualityDataUpdateCoordinator], AirQualityEntity
):
    """Representation of a Meteoblue air quality entity."""

    _attr_has_entity_name = True

    def __init__(
        self,
        coordinator: MeteoblueAirQualityDataUpdateCoordinator,
        name: str,
        latitude: float,
        longitude: float,
        entry_id: str,
    ) -> None:
        """Initialize the air quality entity."""
        super().__init__(coordinator)
        
        self._attr_name = f"{name} Air Quality"
        self._latitude = latitude
        self._longitude = longitude
        self._attr_unique_id = f"{entry_id}_air_quality"
        self._attr_attribution = ATTRIBUTION
        
        # Log available fields for debugging
        self._log_available_fields()
    
    def _log_available_fields(self) -> None:
        """Log available air quality fields for debugging."""
        if self.coordinator.data:
            data_1h = self.coordinator.data.get("data_1h", {})
            _LOGGER.info("Air quality data fields available: %s", list(data_1h.keys()))
            
            # Debug pollen values
            current_idx = self._find_current_forecast_index()
            _LOGGER.debug("Air quality current hour index: %s", current_idx)
            
            for pollen_type in ["pollen_grass", "pollen_olive", "pollen_birch"]:
                values = data_1h.get(pollen_type, [])
                if values:
                    _LOGGER.debug("%s array (first 5 values): %s", pollen_type, values[:5])
                    if current_idx < len(values):
                        _LOGGER.debug("%s at current hour: %s", pollen_type, values[current_idx])
                else:
                    _LOGGER.debug("%s: No data in response", pollen_type)

    def _find_current_forecast_index(self) -> int:
        """Find the index in forecast array that corresponds to current hour."""
        if not self.coordinator.data:
            return 0
        
        data_1h = self.coordinator.data.get("data_1h", {})
        times = data_1h.get("time", [])
        
        if not times:
            return 0
        
        from datetime import datetime
        from homeassistant.util import dt as dt_util
        
        try:
            now_local = dt_util.now()
            current_hour_local = now_local.hour
            
            for i, time_str in enumerate(times):
                try:
                    forecast_hour = int(time_str.split()[1].split(":")[0])
                    if forecast_hour >= current_hour_local:
                        return i
                except (IndexError, ValueError):
                    continue
            
            return len(times) - 1
            
        except (ValueError, IndexError):
            return 0

    @property
    def native_value(self) -> float | None:
        """Return the state (Air Quality Index)."""
        return self.air_quality_index

    @property
    def particulate_matter_2_5(self) -> float | None:
        """Return the particulate matter 2.5 level."""
        if not self.coordinator.data:
            return None
        
        data_1h = self.coordinator.data.get("data_1h", {})
        pm25_values = data_1h.get("pm25", [])
        
        if not pm25_values:
            _LOGGER.debug("PM2.5 data not available in air quality response")
            return None
        
        # Get current hour value
        current_idx = self._find_current_forecast_index()
        _LOGGER.debug("Air quality using index %s for current hour", current_idx)
        if pm25_values and current_idx < len(pm25_values):
            _LOGGER.debug("PM2.5 value at index %s: %s", current_idx, pm25_values[current_idx])
            return pm25_values[current_idx]
        
        return None

    @property
    def particulate_matter_10(self) -> float | None:
        """Return the particulate matter 10 level."""
        if not self.coordinator.data:
            return None
        
        data_1h = self.coordinator.data.get("data_1h", {})
        pm10_values = data_1h.get("pm10", [])
        
        # Get current hour value
        current_idx = self._find_current_forecast_index()
        if pm10_values and current_idx < len(pm10_values):
            return pm10_values[current_idx]
        
        return None

    @property
    def ozone(self) -> float | None:
        """Return the O3 (ozone) level."""
        if not self.coordinator.data:
            return None
        
        data_1h = self.coordinator.data.get("data_1h", {})
        o3_values = data_1h.get("o3", [])
        
        # Get current hour value
        current_idx = self._find_current_forecast_index()
        if o3_values and current_idx < len(o3_values):
            return o3_values[current_idx]
        
        return None

    @property
    def sulphur_dioxide(self) -> float | None:
        """Return the SO2 (sulphur dioxide) level."""
        if not self.coordinator.data:
            return None
        
        data_1h = self.coordinator.data.get("data_1h", {})
        so2_values = data_1h.get("so2", [])
        
        # Get current hour value
        current_idx = self._find_current_forecast_index()
        if so2_values and current_idx < len(so2_values):
            return so2_values[current_idx]
        
        return None

    @property
    def nitrogen_dioxide(self) -> float | None:
        """Return the NO2 (nitrogen dioxide) level."""
        if not self.coordinator.data:
            return None
        
        data_1h = self.coordinator.data.get("data_1h", {})
        no2_values = data_1h.get("no2", [])
        
        # Get current hour value
        current_idx = self._find_current_forecast_index()
        if no2_values and current_idx < len(no2_values):
            return no2_values[current_idx]
        
        return None

    @property
    def carbon_monoxide(self) -> float | None:
        """Return the CO (carbon monoxide) level."""
        if not self.coordinator.data:
            return None
        
        data_1h = self.coordinator.data.get("data_1h", {})
        co_values = data_1h.get("co", [])
        
        # Get current hour value
        current_idx = self._find_current_forecast_index()
        if co_values and current_idx < len(co_values):
            return co_values[current_idx]
        
        return None

    @property
    def air_quality_index(self) -> int | None:
        """Return the Air Quality Index (AQI)."""
        if not self.coordinator.data:
            return None
        
        data_1h = self.coordinator.data.get("data_1h", {})
        aqi_values = data_1h.get("airqualityindex", [])
        
        # Get current hour value
        current_idx = self._find_current_forecast_index()
        if aqi_values and current_idx < len(aqi_values):
            return int(aqi_values[current_idx]) if aqi_values[current_idx] is not None else None
        
        return None

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return additional state attributes."""
        if not self.coordinator.data:
            return {}
        
        data_1h = self.coordinator.data.get("data_1h", {})
        metadata = self.coordinator.data.get("metadata", {})
        current_idx = self._find_current_forecast_index()
        
        attributes = {}
        
        # Add current pollutant values
        pm25_values = data_1h.get("pm25", [])
        if pm25_values and current_idx < len(pm25_values):
            attributes["pm25"] = pm25_values[current_idx]
        
        # Add pollen data
        pollen_grass = data_1h.get("pollen_grass", [])
        if pollen_grass and current_idx < len(pollen_grass):
            attributes["pollen_grass"] = pollen_grass[current_idx]
        
        pollen_olive = data_1h.get("pollen_olive", [])
        if pollen_olive and current_idx < len(pollen_olive):
            attributes["pollen_olive"] = pollen_olive[current_idx]
        
        pollen_birch = data_1h.get("pollen_birch", [])
        if pollen_birch and current_idx < len(pollen_birch):
            attributes["pollen_birch"] = pollen_birch[current_idx]
        
        # Add dust concentration
        dust = data_1h.get("dust_concentration", [])
        if dust and current_idx < len(dust):
            attributes["dust_concentration"] = dust[current_idx]
        
        # Add AOD (Aerosol Optical Depth)
        aod = data_1h.get("aod550", [])
        if aod and current_idx < len(aod):
            attributes["aod550"] = aod[current_idx]
        
        # Add sandstorm alert
        sandstorm = data_1h.get("sandstorm_alert", [])
        if sandstorm and current_idx < len(sandstorm):
            attributes["sandstorm_alert"] = sandstorm[current_idx]
        
        # Add forecast data (next few hours) for main pollutants
        for pollutant in ["pm25", "pm10", "o3", "no2", "so2", "co"]:
            values = data_1h.get(pollutant, [])
            if values and current_idx + 1 < len(values):
                # Include next 3 hours forecast
                attributes[f"{pollutant}_forecast"] = values[current_idx + 1:current_idx + 4]
        
        # Add AQI forecast
        aqi_values = data_1h.get("airqualityindex", [])
        if aqi_values and current_idx + 1 < len(aqi_values):
            attributes["aqi_forecast"] = aqi_values[current_idx + 1:current_idx + 4]
        
        # Add metadata
        if "modelrun_updatetime_utc" in metadata:
            attributes["last_model_run"] = metadata["modelrun_updatetime_utc"]
        
        return attributes