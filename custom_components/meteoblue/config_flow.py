"""Config flow for Meteoblue Weather integration."""
from __future__ import annotations

import logging
from typing import Any

import voluptuous as vol

from homeassistant import config_entries
from homeassistant.const import CONF_API_KEY, CONF_LATITUDE, CONF_LONGITUDE, CONF_NAME
from homeassistant.core import HomeAssistant, callback
from homeassistant.data_entry_flow import FlowResult
from homeassistant.helpers.aiohttp_client import async_get_clientsession
import homeassistant.helpers.config_validation as cv

from .const import (
    CONF_ENABLE_AIR_QUALITY,
    CONF_ENABLE_ADDITIONAL_SENSORS,
    CONF_FORECAST_DAYS,
    DEFAULT_NAME,
    DOMAIN,
)
from .coordinator import MeteoblueApiClient

_LOGGER = logging.getLogger(__name__)

STEP_USER_DATA_SCHEMA = vol.Schema(
    {
        vol.Required(CONF_API_KEY): str,
        vol.Optional(CONF_NAME, default=DEFAULT_NAME): str,
        vol.Optional(CONF_LATITUDE): cv.latitude,
        vol.Optional(CONF_LONGITUDE): cv.longitude,
    }
)


async def validate_input(hass: HomeAssistant, data: dict[str, Any]) -> dict[str, Any]:
    """Validate the user input allows us to connect.

    Data has the keys from STEP_USER_DATA_SCHEMA with values provided by the user.
    """
    # Use Home Assistant's configured location if not provided
    latitude = data.get(CONF_LATITUDE, hass.config.latitude)
    longitude = data.get(CONF_LONGITUDE, hass.config.longitude)

    # Create API client
    session = async_get_clientsession(hass)
    api_client = MeteoblueApiClient(
        session,
        data[CONF_API_KEY],
        latitude,
        longitude,
    )

    # Try to get current weather data to validate credentials
    try:
        await api_client.get_current_data()
    except Exception as err:
        _LOGGER.error("Failed to validate API key: %s", err)
        raise

    # Return info that you want to store in the config entry.
    return {
        "title": data.get(CONF_NAME, DEFAULT_NAME),
        CONF_API_KEY: data[CONF_API_KEY],
        CONF_LATITUDE: latitude,
        CONF_LONGITUDE: longitude,
    }


class MeteoblueConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Meteoblue Weather."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Handle the initial step."""
        errors: dict[str, str] = {}

        if user_input is not None:
            try:
                info = await validate_input(self.hass, user_input)
            except Exception:  # pylint: disable=broad-except
                _LOGGER.exception("Unexpected exception")
                errors["base"] = "cannot_connect"
            else:
                # Create unique ID based on coordinates
                latitude = info[CONF_LATITUDE]
                longitude = info[CONF_LONGITUDE]
                await self.async_set_unique_id(f"{latitude}_{longitude}")
                self._abort_if_unique_id_configured()

                return self.async_create_entry(title=info["title"], data=info)

        # Pre-fill with Home Assistant's location
        data_schema = vol.Schema(
            {
                vol.Required(CONF_API_KEY): str,
                vol.Optional(CONF_NAME, default=DEFAULT_NAME): str,
                vol.Optional(
                    CONF_LATITUDE,
                    default=self.hass.config.latitude,
                ): cv.latitude,
                vol.Optional(
                    CONF_LONGITUDE,
                    default=self.hass.config.longitude,
                ): cv.longitude,
            }
        )

        return self.async_show_form(
            step_id="user",
            data_schema=data_schema,
            errors=errors,
        )

    @staticmethod
    @callback
    def async_get_options_flow(
        config_entry: config_entries.ConfigEntry,
    ) -> MeteoblueOptionsFlowHandler:
        """Get the options flow for this handler."""
        return MeteoblueOptionsFlowHandler(config_entry)


class MeteoblueOptionsFlowHandler(config_entries.OptionsFlow):
    """Handle Meteoblue options."""

    def __init__(self, config_entry: config_entries.ConfigEntry) -> None:
        """Initialize options flow."""
        self.config_entry = config_entry

    async def async_step_init(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Manage the options."""
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema(
                {
                    vol.Optional(
                        CONF_FORECAST_DAYS,
                        default=self.config_entry.options.get(CONF_FORECAST_DAYS, 7),
                    ): vol.All(vol.Coerce(int), vol.Range(min=1, max=7)),
                    vol.Optional(
                        CONF_ENABLE_AIR_QUALITY,
                        default=self.config_entry.options.get(
                            CONF_ENABLE_AIR_QUALITY, True
                        ),
                    ): bool,
                    vol.Optional(
                        CONF_ENABLE_ADDITIONAL_SENSORS,
                        default=self.config_entry.options.get(
                            CONF_ENABLE_ADDITIONAL_SENSORS, False
                        ),
                    ): bool,
                }
            ),
        )