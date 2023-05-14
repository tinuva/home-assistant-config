"""Support for Envisalink zone states- represented as binary sensors."""
from __future__ import annotations

import datetime

from .pyenvisalink.const import STATE_CHANGE_ZONE

from homeassistant.components.binary_sensor import BinarySensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import ATTR_LAST_TRIP_TIME
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.util import dt as dt_util

from .const import (
    CONF_ZONE_SET,
    CONF_ZONENAME,
    CONF_ZONES,
    CONF_ZONETYPE,
    DEFAULT_ZONETYPE,
    DOMAIN,
    LOGGER,
)
from .helpers import find_yaml_info, parse_range_string
from .models import EnvisalinkDevice


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the zone binary sensors based on a config entry."""
    controller = hass.data[DOMAIN][entry.entry_id]

    zone_spec: str = entry.data.get(CONF_ZONE_SET, "")
    zone_set = parse_range_string(
        zone_spec, min_val=1, max_val=controller.controller.max_zones
    )

    zone_info = entry.data.get(CONF_ZONES)
    entities = []
    if zone_set is not None:
        for zone_num in zone_set:
            zone_entry = find_yaml_info(zone_num, zone_info)

            entity = EnvisalinkBinarySensor(
                hass,
                zone_num,
                zone_entry,
                controller,
            )
            entities.append(entity)

        async_add_entities(entities)


class EnvisalinkBinarySensor(EnvisalinkDevice, BinarySensorEntity):
    """Representation of an Envisalink binary sensor."""

    def __init__(self, hass, zone_number, zone_info, controller):
        """Initialize the binary_sensor."""
        self._zone_number = zone_number
        name = f"Zone {self._zone_number}"
        self._attr_unique_id = f"{controller.unique_id}_{name}"

        self._zone_type = DEFAULT_ZONETYPE

        self._attr_has_entity_name = True
        if zone_info:
            # Override the name and type if there is info from the YAML configuration
            self._zone_type = zone_info.get(CONF_ZONETYPE, DEFAULT_ZONETYPE)
            if CONF_ZONENAME in zone_info:
                name = zone_info[CONF_ZONENAME]
                self._attr_has_entity_name = False

        LOGGER.debug("Setting up zone: %s", name)
        super().__init__(name, controller, STATE_CHANGE_ZONE, zone_number)

    @property
    def _info(self):
        return self._controller.controller.alarm_state["zone"][self._zone_number]

    @property
    def extra_state_attributes(self):
        """Return the state attributes."""
        attr = {}

        last_fault = self._info["last_fault"]
        if not last_fault:
            attr[ATTR_LAST_TRIP_TIME] = None
        else:
            attr[ATTR_LAST_TRIP_TIME] = datetime.datetime.fromtimestamp(last_fault).isoformat()

        # Expose the zone number as an attribute to allow
        # for easier entity to zone mapping (e.g. to bypass
        # the zone).
        attr["zone"] = self._zone_number

        return attr

    @property
    def is_on(self):
        """Return true if sensor is on."""
        return self._info["status"]["open"]

    @property
    def device_class(self):
        """Return the class of this sensor, from DEVICE_CLASSES."""
        return self._zone_type
