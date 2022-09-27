"""Platform for sensor integration."""
from __future__ import annotations

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import TEMP_CELSIUS, CONF_ID
from homeassistant.components.sensor import SensorDeviceClass, SensorStateClass, RestoreSensor
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

# Local constants
from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    add_entities: AddEntitiesCallback,
) -> None:
    """Setup the sensor platform for Midea Smart AC."""

    _LOGGER.info("Setting up sensor platform.")

    # Get config data from entry
    config = config_entry.data

    # Fetch device from global data
    id = config.get(CONF_ID)
    device = hass.data[DOMAIN][id]

    # Create sensor entities from device
    add_entities([
        MideaTemperatureSensor(device, "indoor_temperature"),
        MideaTemperatureSensor(device, "outdoor_temperature"),
    ])


class MideaTemperatureSensor(RestoreSensor):
    """Temperature sensor for Midea AC."""

    def __init__(self, device, prop):
        self._device = device
        self._prop = prop
        self._native_value = None

    async def async_added_to_hass(self) -> None:
        await super().async_added_to_hass()

        if (last_sensor_data := await self.async_get_last_sensor_data()) is None:
            return

        # Restore previous native value
        self._native_value = last_sensor_data.native_value

    async def async_update(self) -> None:
        # Grab the property from the device
        if self.available:
            self._native_value = getattr(self._device, self._prop)

    @property
    def device_info(self) -> dict:
        return {
            "identifiers": {
                (DOMAIN, self._device.id)
            },
        }

    @property
    def name(self) -> str:
        return f"{DOMAIN}_{self._prop}_{self._device.id}"

    @property
    def unique_id(self) -> str:
        return f"{self._device.id}-{self._prop}"

    @property
    def available(self) -> bool:
        return self._device.online

    @property
    def device_class(self) -> str:
        return SensorDeviceClass.TEMPERATURE

    @property
    def state_class(self) -> str:
        return SensorStateClass.MEASUREMENT

    @property
    def native_unit_of_measurement(self) -> str:
        return TEMP_CELSIUS

    @property
    def native_value(self) -> float:
        return self._native_value
