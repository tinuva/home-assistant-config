"""Sensor platform for integration_blueprint."""
from homeassistant.components.sensor import SensorEntity
from homeassistant.const import CONF_NAME

from .const import CONF_BASE, DOMAIN, ICON, CONF_CRYPTO
from .entity import CryptoTrackerEntity


async def async_setup_entry(hass, entry, async_add_devices):
    """Setup sensor platform."""
    coordinator = hass.data[DOMAIN][entry.entry_id]
    name = entry.data.get(CONF_NAME)
    base = entry.data.get(CONF_BASE)
    crypto = entry.data.get(CONF_CRYPTO)
    async_add_devices([CryptoTrackerSensor(coordinator, entry, name, base, crypto)])


class CryptoTrackerSensor(CryptoTrackerEntity, SensorEntity):
    """integration_blueprint Sensor class."""

    def __init__(self, coordinator, config_entry, name, base, crypto):
        super().__init__(coordinator, config_entry)
        self._name = name
        self._base = base
        self._crypto = crypto

    @property
    def name(self):
        """Return the name of the sensor."""
        return f"{self._name}"

    @property
    def state(self):
        """Return the native value of the sensor."""
        if self.coordinator.data is not None:
            return self.coordinator.data.get(self._crypto).get(self._base)

    @property
    def icon(self):
        """Return the icon of the sensor."""
        return ICON
