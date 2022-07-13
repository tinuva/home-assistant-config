"""CoCTEntity class"""
from homeassistant.helpers import entity

from .const import DOMAIN, NAME, VERSION


class CoCTEntity(entity.Entity):
    def __init__(self, coordinator, config_entry):
        self.coordinator = coordinator
        self.config_entry = config_entry

    @property
    def should_poll(self):
        """No need to poll. Coordinator notifies entity of updates."""
        return False

    @property
    def available(self):
        """Return if entity is available."""
        return self.coordinator.last_update_success

    @property
    def unique_id(self):
        """Return a unique ID to use for this entity."""
        return self.config_entry.entry_id + "stg"

    @property
    def device_info(self):
        return {
            "identifiers": {(DOMAIN, self.unique_id)},
            "name": NAME,
            "model": VERSION,
            "manufacturer": "tinuva",
        }

    @property
    def extra_state_attributes(self):
        """Return the state attributes."""
        return {
            "stage_coct": self.coordinator.data.get("stage"),
            "stage_eskom": self.coordinator.data.get("stage_eskom"),
            "coct_area": self.coordinator.data.get("coct_area"),
            "load_shedding_active": self.coordinator.data.get("load_shedding_active"),
            "next_load_shedding_slot": self.coordinator.data.get("next_load_shedding_slot"),
            "next_stage": self.coordinator.data.get("next_stage"),
            "next_stage_start_time": self.coordinator.data.get("next_stage_start_time"),
            "last_updated": self.coordinator.data.get("last_updated"),
            "today_slots": self.coordinator.data.get("today_slots"),
            "tomorrow_slots": self.coordinator.data.get("tomorrow_slots"),
        }

    async def async_added_to_hass(self):
        """Connect to dispatcher listening for entity data notifications."""
        self.async_on_remove(
            self.coordinator.async_add_listener(self.async_write_ha_state)
        )

    async def async_update(self):
        """Update entity."""
        await self.coordinator.async_request_refresh()


class LoadSheddingActiveEntity(entity.Entity):
    def __init__(self, coordinator, config_entry):
        self.coordinator = coordinator
        self.config_entry = config_entry

    @property
    def should_poll(self):
        """No need to poll. Coordinator notifies entity of updates."""
        return False

    @property
    def available(self):
        """Return if entity is available."""
        return self.coordinator.last_update_success

    @property
    def unique_id(self):
        """Return a unique ID to use for this entity."""
        return self.config_entry.entry_id + "lsa"

    @property
    def device_info(self):
        return {
            "identifiers": {(DOMAIN, self.unique_id)},
            "name": NAME,
            "model": VERSION,
            "manufacturer": "tinuva",
        }

    @property
    def device_state_attributes(self):
        """Return the state attributes."""
        return {
            "load_shedding_active": self.coordinator.data.get("load_shedding_active"),
        }

    async def async_added_to_hass(self):
        """Connect to dispatcher listening for entity data notifications."""
        self.async_on_remove(
            self.coordinator.async_add_listener(self.async_write_ha_state)
        )

    async def async_update(self):
        """Update entity."""
        await self.coordinator.async_request_refresh()


class NextLoadSheddingEntity(entity.Entity):
    def __init__(self, coordinator, config_entry):
        self.coordinator = coordinator
        self.config_entry = config_entry

    @property
    def should_poll(self):
        """No need to poll. Coordinator notifies entity of updates."""
        return False

    @property
    def available(self):
        """Return if entity is available."""
        return self.coordinator.last_update_success

    @property
    def unique_id(self):
        """Return a unique ID to use for this entity."""
        return self.config_entry.entry_id + "nls"

    @property
    def device_info(self):
        return {
            "identifiers": {(DOMAIN, self.unique_id)},
            "name": NAME,
            "model": VERSION,
            "manufacturer": "tinuva",
        }

    @property
    def device_state_attributes(self):
        """Return the state attributes."""
        return {
            "next_load_shedding_slot": self.coordinator.data.get("next_load_shedding_slot"),
        }

    async def async_added_to_hass(self):
        """Connect to dispatcher listening for entity data notifications."""
        self.async_on_remove(
            self.coordinator.async_add_listener(self.async_write_ha_state)
        )

    async def async_update(self):
        """Update entity."""
        await self.coordinator.async_request_refresh()
