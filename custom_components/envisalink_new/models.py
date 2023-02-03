"""Models for Envisalink."""
from homeassistant.helpers.entity import DeviceInfo, Entity

from .const import DOMAIN, LOGGER
from .controller import EnvisalinkController

class EnvisalinkDevice(Entity):
    """Representation of an Envisalink device."""

    def __init__(self, name, controller, state_update_type, state_update_key):
        """Initialize the device."""
        self._controller = controller
        self._name = name
        self._state_update_type = state_update_type
        self._state_update_key = state_update_key

        def state_updated():
            LOGGER.debug("state_updated for '%s'", self._name)
            self.async_write_ha_state()

        self.async_on_remove(
            self._controller.add_state_change_listener(state_update_type, state_update_key, state_updated)
        )

    @property
    def name(self):
        """Return the name of the device."""
        return self._name

    @property
    def should_poll(self):
        """No polling needed."""
        return False

    @property
    def device_info(self) -> DeviceInfo:
        """Return device information about this WLED device."""
        return DeviceInfo(
            identifiers={(DOMAIN, self._controller.unique_id)},
            name=self._controller.alarm_name,
            manufacturer='eyezon',
            model=f'Envisalink {self._controller.controller.envisalink_version}: {self._controller.controller.panel_type}',
            sw_version=self._controller.controller.firmware_version,
            hw_version=self._controller.controller.envisalink_version,
            configuration_url=f"http://{self._controller.controller.host}",
        )