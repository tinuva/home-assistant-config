"""Binary platform for Midea Smart AC."""
from __future__ import annotations

import logging

from homeassistant.components.binary_sensor import (BinarySensorDeviceClass,
                                                    BinarySensorEntity)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import EntityCategory
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from . import helpers
from .const import DOMAIN
from .coordinator import MideaCoordinatorEntity, MideaDeviceUpdateCoordinator

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    add_entities: AddEntitiesCallback,
) -> None:
    """Setup the binary sensor platform for Midea Smart AC."""

    _LOGGER.info("Setting up binary sensor platform.")

    # Fetch coordinator from global data
    coordinator = hass.data[DOMAIN][config_entry.entry_id]

    # Create sensor entities from device if supported
    if helpers.property_exists(coordinator.device, "filter_alert"):
        add_entities([MideaBinarySensor(coordinator, "filter_alert"), ])


class MideaBinarySensor(MideaCoordinatorEntity, BinarySensorEntity):
    """Binary sensor for Midea AC."""

    def __init__(self,
                 coordinator: MideaDeviceUpdateCoordinator,
                 prop: str) -> None:
        MideaCoordinatorEntity.__init__(self, coordinator)

        self._prop = prop
        self._name = prop.replace("_", " ").capitalize()

    @property
    def device_info(self) -> dict:
        """Return info for device registry."""
        return {
            "identifiers": {
                (DOMAIN, self._device.id)
            },
        }

    @property
    def has_entity_name(self) -> bool:
        """Indicates if entity follows naming conventions."""
        return True

    @property
    def name(self) -> str:
        """Return the name of this entity."""
        return self._name

    @property
    def unique_id(self) -> str:
        """Return the unique ID of this entity."""
        return f"{self._device.id}-{self._prop}"

    @property
    def device_class(self) -> str:
        """Return the device class of this entity."""
        return BinarySensorDeviceClass.PROBLEM

    @property
    def entity_category(self) -> str:
        """Return the entity category of this entity."""
        return EntityCategory.DIAGNOSTIC

    @property
    def is_on(self) -> bool | None:
        """Return the on state of this entity."""
        return getattr(self._device, self._prop, None)
