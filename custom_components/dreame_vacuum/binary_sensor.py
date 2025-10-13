"""Support for Dreame Vacuum Binary Sensors."""

from __future__ import annotations

from dataclasses import dataclass

from homeassistant.components.binary_sensor import (
    ENTITY_ID_FORMAT,
    BinarySensorEntity,
    BinarySensorEntityDescription,
    BinarySensorDeviceClass,
)
from homeassistant.config_entries import ConfigEntry

from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN

from .coordinator import DreameVacuumDataUpdateCoordinator
from .entity import DreameVacuumEntity, DreameVacuumEntityDescription


@dataclass
class DreameVacuumBinarySensorEntityDescription(DreameVacuumEntityDescription, BinarySensorEntityDescription):
    """Describes Dreame Vacuum BinarySensor entity."""


BINARY_SENSORS: tuple[BinarySensorEntityDescription, ...] = (
    ## This entity is need for battery icon to be rendered correctly since vacuum entity attr_charging attribute has been deprecated
    DreameVacuumBinarySensorEntityDescription(
        key="charging_state",
        name="Charging State",
        device_class=BinarySensorDeviceClass.BATTERY_CHARGING,
        icon_fn=lambda value, device: "mdi:power-plug-battery" if device.status.charging else "mdi:power-plug-off" if not device.status.docked else "mdi:power-plug",
        value_fn=lambda value, device: device.status.charging,
    ),
)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Dreame Vacuum Binary Sensor based on a config entry."""
    coordinator: DreameVacuumDataUpdateCoordinator = hass.data[DOMAIN][entry.entry_id]
    async_add_entities(
        DreameVacuumBinarySensorEntity(coordinator, description)
        for description in BINARY_SENSORS
        if description.exists_fn(description, coordinator.device)
    )


class DreameVacuumBinarySensorEntity(DreameVacuumEntity, BinarySensorEntity):
    """Defines a Dreame Vacuum Binary Sensor entity."""

    def __init__(
        self,
        coordinator: DreameVacuumDataUpdateCoordinator,
        description: DreameVacuumBinarySensorEntityDescription,
    ) -> None:
        """Initialize a Dreame Vacuum BinarySensor entity."""
        super().__init__(coordinator, description)
        self._generate_entity_id(ENTITY_ID_FORMAT)

    @property
    def is_on(self) -> bool | None:
        """Return value of binary sensor."""
        value = None
        if self.entity_description.property_key is not None:
            value = self.device.get_property(self.entity_description.property_key)
        if self.entity_description.value_fn is not None:
            return bool(self.entity_description.value_fn(value, self.device))
        return bool(value)