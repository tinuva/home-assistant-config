"""The Meteoblue Weather integration."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_API_KEY, CONF_LATITUDE, CONF_LONGITUDE, Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .const import (
    CONF_ENABLE_AIR_QUALITY,
    CONF_ENABLE_ADDITIONAL_SENSORS,
    COORDINATOR_AIR_QUALITY,
    COORDINATOR_CURRENT,
    COORDINATOR_FORECAST,
    DEFAULT_AIR_QUALITY_UPDATE_INTERVAL,
    DEFAULT_CURRENT_UPDATE_INTERVAL,
    DEFAULT_FORECAST_UPDATE_INTERVAL,
    DOMAIN,
)
from .coordinator import (
    MeteoblueAirQualityDataUpdateCoordinator,
    MeteoblueCurrentDataUpdateCoordinator,
    MeteoblueForecastDataUpdateCoordinator,
)

_LOGGER = logging.getLogger(__name__)

PLATFORMS: list[Platform] = [Platform.WEATHER]


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Meteoblue Weather from a config entry."""
    api_key = entry.data[CONF_API_KEY]
    latitude = entry.data[CONF_LATITUDE]
    longitude = entry.data[CONF_LONGITUDE]
    
    session = async_get_clientsession(hass)
    
    # Initialize coordinators
    coordinators = {}
    
    # Forecast coordinator (always enabled)
    coordinators[COORDINATOR_FORECAST] = MeteoblueForecastDataUpdateCoordinator(
        hass,
        session,
        api_key,
        latitude,
        longitude,
        DEFAULT_FORECAST_UPDATE_INTERVAL,
    )
    
    # Current weather coordinator (always enabled)
    coordinators[COORDINATOR_CURRENT] = MeteoblueCurrentDataUpdateCoordinator(
        hass,
        session,
        api_key,
        latitude,
        longitude,
        DEFAULT_CURRENT_UPDATE_INTERVAL,
    )
    
    # Air quality coordinator (optional)
    if entry.options.get(CONF_ENABLE_AIR_QUALITY, True):
        coordinators[COORDINATOR_AIR_QUALITY] = MeteoblueAirQualityDataUpdateCoordinator(
            hass,
            session,
            api_key,
            latitude,
            longitude,
            DEFAULT_AIR_QUALITY_UPDATE_INTERVAL,
        )
    
    # Fetch initial data
    for coordinator in coordinators.values():
        await coordinator.async_config_entry_first_refresh()
    
    # Store coordinators
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN][entry.entry_id] = coordinators
    
    # Setup platforms
    platforms_to_load = [Platform.WEATHER]
    
    if COORDINATOR_AIR_QUALITY in coordinators:
        platforms_to_load.append(Platform.AIR_QUALITY)
    
    if entry.options.get(CONF_ENABLE_ADDITIONAL_SENSORS, False):
        platforms_to_load.append(Platform.SENSOR)
    
    await hass.config_entries.async_forward_entry_setups(entry, platforms_to_load)
    
    # Setup options update listener
    entry.async_on_unload(entry.add_update_listener(async_update_options))
    
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    platforms_to_unload = [Platform.WEATHER]
    
    coordinators = hass.data[DOMAIN][entry.entry_id]
    
    if COORDINATOR_AIR_QUALITY in coordinators:
        platforms_to_unload.append(Platform.AIR_QUALITY)
    
    if entry.options.get(CONF_ENABLE_ADDITIONAL_SENSORS, False):
        platforms_to_unload.append(Platform.SENSOR)
    
    unload_ok = await hass.config_entries.async_unload_platforms(
        entry, platforms_to_unload
    )
    
    if unload_ok:
        hass.data[DOMAIN].pop(entry.entry_id)
    
    return unload_ok


async def async_update_options(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Update options."""
    await hass.config_entries.async_reload(entry.entry_id)