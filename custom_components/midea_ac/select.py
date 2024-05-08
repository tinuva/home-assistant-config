"""Platform for select integration."""
from __future__ import annotations

import logging
from typing import List

from homeassistant.components.select import SelectEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from msmart.device import AirConditioner as AC
from msmart.utils import MideaIntEnum

from .const import DOMAIN
from .coordinator import MideaCoordinatorEntity, MideaDeviceUpdateCoordinator

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    add_entities: AddEntitiesCallback,
) -> None:
    """Setup the select platform for Midea Smart AC."""

    _LOGGER.info("Setting up select platform.")

    # Fetch coordinator from global data
    coordinator = hass.data[DOMAIN][config_entry.entry_id]

    # Create entities for supported features
    entities = []
    if getattr(coordinator.device, "supports_vertical_swing_angle", False):
        entities.append(MideaEnumSelect(coordinator,
                                        "vertical_swing_angle",
                                        AC.SwingAngle,
                                        "vertical_swing_angle"))

    if getattr(coordinator.device, "supports_horizontal_swing_angle", False):
        entities.append(MideaEnumSelect(coordinator,
                                        "horizontal_swing_angle",
                                        AC.SwingAngle,
                                        "horizontal_swing_angle"))
    add_entities(entities)


class MideaEnumSelect(MideaCoordinatorEntity, SelectEntity):
    """Enum based select for Midea AC."""

    def __init__(self,
                 coordinator: MideaDeviceUpdateCoordinator,
                 prop: str,
                 enum_class: MideaIntEnum,
                 translation_key=None) -> None:
        MideaCoordinatorEntity.__init__(self, coordinator)

        self._prop = prop
        self._enum_class = enum_class
        self._attr_translation_key = translation_key
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
    def available(self) -> bool:
        """Check device availability."""
        return self._device.online and self._device.power_state

    @property
    def current_option(self) -> str:
        """Get selected option."""
        return getattr(self._device, self._prop, self._enum_class.DEFAULT).name.lower()

    @property
    def options(self) -> List[str]:
        """Get available options."""
        return [m.name.lower() for m in self._enum_class.list()]

    async def async_select_option(self, option: str) -> None:
        """Change the selected option."""

        setattr(self._device, self._prop,
                self._enum_class.get_from_name(option.upper()))

        # Apply via the coordinator
        await self.coordinator.apply()
