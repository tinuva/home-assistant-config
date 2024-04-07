"""BlueprintEntity class"""
from homeassistant.components.sensor import SensorEntityDescription, SensorStateClass
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import ATTRIBUTION, DOMAIN, NAME, VERSION


class CryptoTrackerEntity(CoordinatorEntity):
    def __init__(self, coordinator, config_entry):
        super().__init__(coordinator)
        self.config_entry = config_entry
        self.entity_description = SensorEntityDescription(
            key="crypto", state_class=SensorStateClass.MEASUREMENT
        )
        self._date = None
        if self.coordinator.data is not None:
            self._date = self.coordinator.data.get("date")

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
            "date": str(self._date),
            "integration": DOMAIN,
        }
