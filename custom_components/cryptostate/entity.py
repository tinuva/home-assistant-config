"""BlueprintEntity class"""
from homeassistant.helpers.update_coordinator import CoordinatorEntity
from homeassistant.components.sensor import (
    SensorEntityDescription,
    STATE_CLASS_MEASUREMENT,
)

from .const import DOMAIN, NAME, VERSION, ATTRIBUTION


class CryptoTrackerEntity(CoordinatorEntity):
    def __init__(self, coordinator, config_entry):
        super().__init__(coordinator)
        self.config_entry = config_entry
        self.entity_description = SensorEntityDescription(
            key="crypto", state_class=STATE_CLASS_MEASUREMENT
        )
        
    @property
    def unique_id(self):
        """Return a unique ID to use for this entity."""
        return self.config_entry.entry_id

    @property
    def device_info(self):
        return {
            "identifiers": {(DOMAIN, self.unique_id)},
            "name": NAME,
            "model": VERSION,
            "manufacturer": NAME,
        }

    @property
    def extra_state_attributes(self):
        """Return the state attributes."""
        return {
            "attribution": ATTRIBUTION,
            "date": str(self.coordinator.data.get("date")),
            "integration": DOMAIN,
        }
