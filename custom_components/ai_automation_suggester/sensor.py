# custom_components/ai_automation_suggester/sensor.py

"""Sensor platform for AI Automation Suggester."""
import logging
from homeassistant.components.sensor import SensorEntity, SensorEntityDescription
from homeassistant.helpers.update_coordinator import CoordinatorEntity, DataUpdateCoordinator
from homeassistant.helpers.entity import EntityCategory
from homeassistant.const import STATE_UNKNOWN
from homeassistant.core import callback

from .const import (
    DOMAIN,
    CONF_PROVIDER,
    PROVIDER_STATUS_CONNECTED,
    PROVIDER_STATUS_DISCONNECTED,
    PROVIDER_STATUS_ERROR,
)

_LOGGER = logging.getLogger(__name__)

SUGGESTION_SENSOR = SensorEntityDescription(
    key="suggestions",
    name="AI Automation Suggestions",
    icon="mdi:robot",
)

STATUS_SENSOR = SensorEntityDescription(
    key="status",
    name="AI Provider Status",
    icon="mdi:check-network",
    entity_category=EntityCategory.DIAGNOSTIC,
)

async def async_setup_entry(hass, entry, async_add_entities):
    """Set up the sensor platform."""
    coordinator = hass.data[DOMAIN][entry.entry_id]

    entities = [
        AISuggestionsSensor(
            coordinator=coordinator,
            entry=entry,
            description=SUGGESTION_SENSOR,
        ),
        AIProviderStatusSensor(
            coordinator=coordinator,
            entry=entry,
            description=STATUS_SENSOR,
        ),
    ]

    async_add_entities(entities, True)
    _LOGGER.debug("Sensor platform setup complete")


class AISuggestionsSensor(CoordinatorEntity, SensorEntity):
    """Sensor to display AI suggestions."""

    def __init__(self, coordinator: DataUpdateCoordinator, entry, description: SensorEntityDescription) -> None:
        """Initialize the sensor."""
        super().__init__(coordinator)
        self.entity_description = description
        self._attr_unique_id = f"{entry.entry_id}_{description.key}"
        self._attr_device_info = {
            "identifiers": {(DOMAIN, entry.entry_id)},
            "name": f"AI Automation Suggester ({entry.data.get(CONF_PROVIDER, 'unknown')})",
            "manufacturer": "Community",
            "model": entry.data.get(CONF_PROVIDER, "unknown"),
            "sw_version": "1.2.6",
        }
        self._entry = entry
        self._previous_suggestions = None
        self._attr_native_value = "No Suggestions"

    @property
    def name(self) -> str:
        """Return the name of the sensor."""
        provider = self._entry.data.get(CONF_PROVIDER, "unknown")
        return f"AI Automation Suggestions ({provider})"

    @property
    def native_value(self) -> str:
        """Return the state of the sensor."""
        if not self.coordinator.data or not self.coordinator.data.get("suggestions"):
            return "No Suggestions"

        suggestions = self.coordinator.data.get("suggestions")
        if suggestions in ["No suggestions available", "No suggestions yet"]:
            return "No Suggestions"

        if suggestions != self._previous_suggestions:
            return "New Suggestions Available"

        return "Suggestions Available"

    @property
    def extra_state_attributes(self) -> dict:
        """Return the state attributes."""
        if not self.coordinator.data:
            return {
                "suggestions": "No suggestions available",
                "last_update": None,
                "entities_processed": [],
                "provider": self._entry.data.get(CONF_PROVIDER, "unknown"),
            }

        suggestions = self.coordinator.data.get("suggestions")
        display_suggestions = suggestions if suggestions not in ["No suggestions available", "No suggestions yet"] else "No suggestions available"

        return {
            "suggestions": display_suggestions,
            "last_update": self.coordinator.data.get("last_update", None),
            "entities_processed": self.coordinator.data.get("entities_processed", []),
            "provider": self._entry.data.get(CONF_PROVIDER, "unknown"),
        }

    @property
    def available(self) -> bool:
        """Return True if entity is available."""
        return True

    @callback
    def _handle_coordinator_update(self) -> None:
        """Handle updated data from the coordinator."""
        if self.coordinator.data:
            suggestions = self.coordinator.data.get("suggestions")
            if suggestions and suggestions != self._previous_suggestions:
                self._previous_suggestions = suggestions
                self._attr_native_value = self.native_value
        self.async_write_ha_state()

    async def async_added_to_hass(self) -> None:
        """Run when entity is added to registry."""
        await super().async_added_to_hass()
        _LOGGER.debug("Suggestions sensor added to registry")


class AIProviderStatusSensor(CoordinatorEntity, SensorEntity):
    """Sensor to display provider status."""

    def __init__(self, coordinator: DataUpdateCoordinator, entry, description: SensorEntityDescription) -> None:
        """Initialize the sensor."""
        super().__init__(coordinator)
        self.entity_description = description
        self._attr_unique_id = f"{entry.entry_id}_{description.key}"
        self._attr_device_info = {
            "identifiers": {(DOMAIN, entry.entry_id)},
            "name": f"AI Automation Suggester ({entry.data.get(CONF_PROVIDER, 'unknown')})",
            "manufacturer": "Community",
            "model": entry.data.get(CONF_PROVIDER, "unknown"),
            "sw_version": "1.2.6",
        }
        self._entry = entry
        self._attr_native_value = STATE_UNKNOWN
        self._last_error = None

    @property
    def name(self) -> str:
        """Return the name of the sensor."""
        provider = self._entry.data.get(CONF_PROVIDER, "unknown")
        return f"AI Provider Status ({provider})"

    def _get_provider_status(self) -> str:
        """Determine the current status of the provider."""
        if not self.coordinator.last_update:
            return PROVIDER_STATUS_DISCONNECTED
        try:
            if (
                self.coordinator.data 
                and isinstance(self.coordinator.data, dict)
                and "suggestions" in self.coordinator.data
            ):
                return PROVIDER_STATUS_CONNECTED
            else:
                return PROVIDER_STATUS_ERROR
        except Exception as err:
            _LOGGER.error("Error getting provider status: %s", err)
            return PROVIDER_STATUS_ERROR

    @property
    def extra_state_attributes(self) -> dict:
        """Return the state attributes."""
        return {"last_error": self._last_error}

    @property
    def available(self) -> bool:
        """Return True if entity is available."""
        return True

    @callback
    def _handle_coordinator_update(self) -> None:
        """Handle updated data from the coordinator."""
        self._attr_native_value = self._get_provider_status()
        self.async_write_ha_state()

    async def async_added_to_hass(self) -> None:
        """Run when entity is added to registry."""
        await super().async_added_to_hass()
        _LOGGER.debug("Provider status sensor added to registry")
