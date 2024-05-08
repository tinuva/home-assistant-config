"""GoodWe PV inverter switch entities."""

from dataclasses import dataclass
import logging
from typing import Any

from goodwe import Inverter, InverterError
from homeassistant.components.switch import (
    SwitchDeviceClass,
    SwitchEntity,
    SwitchEntityDescription,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import DeviceInfo, EntityCategory
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN, KEY_DEVICE_INFO, KEY_INVERTER

_LOGGER = logging.getLogger(__name__)


@dataclass(frozen=True, kw_only=True)
class GoodweSwitchEntityDescription(SwitchEntityDescription):
    """Class describing Goodwe switch entities."""

    setting: str


SWITCHES = (
    GoodweSwitchEntityDescription(
        key="load_control",
        translation_key="load_control",
        entity_category=EntityCategory.CONFIG,
        device_class=SwitchDeviceClass.OUTLET,
        setting="load_control_switch",
    ),
    GoodweSwitchEntityDescription(
        key="grid_export_limit_switch",
        translation_key="grid_export_limit_switch",
        entity_category=EntityCategory.CONFIG,
        device_class=SwitchDeviceClass.SWITCH,
        setting="grid_export",
    ),
)


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the inverter switch entities from a config entry."""
    inverter = hass.data[DOMAIN][config_entry.entry_id][KEY_INVERTER]
    device_info = hass.data[DOMAIN][config_entry.entry_id][KEY_DEVICE_INFO]

    entities = []

    for description in SWITCHES:
        try:
            current_state = await inverter.read_setting(description.setting)
        except (InverterError, ValueError):
            # Inverter model does not support this feature
            _LOGGER.debug("Could not read %s value", description.setting)
        else:
            entity = InverterSwitchEntity(
                device_info,
                description,
                inverter,
                current_state == 1,
            )
        entities.append(entity)

    async_add_entities(entities)


class InverterSwitchEntity(SwitchEntity):
    """Switch representation of inverter's 'Load Control' relay."""

    _attr_should_poll = False
    _attr_has_entity_name = True
    entity_description: GoodweSwitchEntityDescription

    def __init__(
        self,
        device_info: DeviceInfo,
        description: GoodweSwitchEntityDescription,
        inverter: Inverter,
        current_is_on: bool,
    ) -> None:
        """Initialize the inverter operation mode setting entity."""
        self.entity_description = description
        self._attr_unique_id = f"{description.key}-{inverter.serial_number}"
        self._attr_device_info = device_info
        self._attr_is_on = current_is_on
        self._inverter: Inverter = inverter

    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn the switch on."""
        await self._inverter.write_setting(self.entity_description.setting, 1)
        self._attr_is_on = True
        self.async_write_ha_state()

    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn the switch off."""
        await self._inverter.write_setting(self.entity_description.setting, 0)
        self._attr_is_on = False
        self.async_write_ha_state()

    async def async_update(self) -> None:
        """Get the current value from inverter."""
        value = await self._inverter.read_setting(self.entity_description.setting)
        self._attr_is_on = value == 1
