"""Config flow for Midea Smart AC."""
from __future__ import annotations

from homeassistant.config_entries import ConfigEntry, ConfigFlow, OptionsFlow
from homeassistant.const import CONF_HOST, CONF_ID, CONF_PORT, CONF_TOKEN
from homeassistant.core import callback
from homeassistant.data_entry_flow import FlowResult
import homeassistant.helpers.config_validation as cv
from msmart.device import air_conditioning as ac
import voluptuous as vol

# Local constants
from .const import (
    DOMAIN,
    CONF_K1,
    CONF_PROMPT_TONE,
    CONF_TEMP_STEP,
    CONF_INCLUDE_OFF_AS_STATE,
    CONF_USE_FAN_ONLY_WORKAROUND,
    CONF_KEEP_LAST_KNOWN_ONLINE_STATE
)


class MideaConfigFlow(ConfigFlow, domain=DOMAIN):

    async def async_step_user(self, user_input) -> FlowResult:
        errors = {}
        if user_input is not None:
            # Set the unique ID and abort if duplicate exists
            id = user_input.get(CONF_ID)
            await self.async_set_unique_id(id)
            self._abort_if_unique_id_configured()

            # Attempt a connection to see if config is valid
            device = await self._test_connection(user_input)

            if device:
                # Save the device into global data
                self.hass.data.setdefault(DOMAIN, {})
                self.hass.data[DOMAIN][id] = device

                # Split user input config data and options
                data = {
                    CONF_ID: id,
                    CONF_HOST: user_input.get(CONF_HOST),
                    CONF_PORT: user_input.get(CONF_PORT),
                    CONF_TOKEN: user_input.get(CONF_TOKEN),
                    CONF_K1: user_input.get(CONF_K1),
                }
                options = {
                    CONF_PROMPT_TONE: user_input.get(CONF_PROMPT_TONE),
                    CONF_TEMP_STEP: user_input.get(CONF_TEMP_STEP),
                    CONF_INCLUDE_OFF_AS_STATE: user_input.get(CONF_INCLUDE_OFF_AS_STATE),
                    CONF_USE_FAN_ONLY_WORKAROUND: user_input.get(CONF_USE_FAN_ONLY_WORKAROUND),
                    CONF_KEEP_LAST_KNOWN_ONLINE_STATE: user_input.get(CONF_KEEP_LAST_KNOWN_ONLINE_STATE),
                }

                # Create a config entry with the config data and options
                return self.async_create_entry(title=f"{DOMAIN} {id}", data=data, options=options)
            else:
                # Indicate a connection could not be made
                errors["base"] = "cannot_connect"

        
        user_input = user_input or {}
        
        data_schema = vol.Schema({
            vol.Required(CONF_ID,
                         default=user_input.get(CONF_ID)): cv.string,
            vol.Required(CONF_HOST,
                         default=user_input.get(CONF_HOST)): cv.string,
            vol.Optional(CONF_PORT,
                         default=user_input.get(CONF_PORT, 6444)): cv.port,
            vol.Optional(CONF_TOKEN,
                         default=user_input.get(CONF_TOKEN, "")): cv.string,
            vol.Optional(CONF_K1,
                         default=user_input.get(CONF_K1, "")): cv.string,
            vol.Optional(CONF_PROMPT_TONE,
                         default=user_input.get(CONF_PROMPT_TONE, True)): cv.boolean,
            vol.Optional(CONF_TEMP_STEP,
                         default=user_input.get(CONF_TEMP_STEP, 1.0)): vol.All(vol.Coerce(float), vol.Range(min=0.5, max=5)),
            vol.Optional(CONF_INCLUDE_OFF_AS_STATE,
                         default=user_input.get(CONF_INCLUDE_OFF_AS_STATE, True)): cv.boolean,
            vol.Optional(CONF_USE_FAN_ONLY_WORKAROUND,
                         default=user_input.get(CONF_USE_FAN_ONLY_WORKAROUND, False)):  cv.boolean,
            vol.Optional(CONF_KEEP_LAST_KNOWN_ONLINE_STATE,
                         default=user_input.get(CONF_KEEP_LAST_KNOWN_ONLINE_STATE, False)):  cv.boolean
        })

        return self.async_show_form(step_id="user", data_schema=data_schema, errors=errors)

    async def _test_connection(self, config) -> ac | None:
        # Construct the device
        id = config.get(CONF_ID)
        host = config.get(CONF_HOST)
        port = config.get(CONF_PORT)
        device = ac(host, int(id), port)

        # Configure token and k1 as needed
        token = config.get(CONF_TOKEN)
        k1 = config.get(CONF_K1)
        if token and k1:
            success = await self.hass.async_add_executor_job(device.authenticate, k1, token)
        else:
            await self.hass.async_add_executor_job(device.refresh)
            success = device.online

        return device if success else None

    @staticmethod
    @callback
    def async_get_options_flow(config_entry: ConfigEntry) -> OptionsFlow:
        return MideaOptionsFlow(config_entry)


class MideaOptionsFlow(OptionsFlow):

    def __init__(self, config_entry: ConfigEntry) -> None:
        self.config_entry = config_entry

    async def async_step_init(self, user_input=None) -> FlowResult:
        if user_input is not None:
            # Confusingly, data argument in OptionsFlow is passed to async_setup_entry in the options member
            return self.async_create_entry(title="", data=user_input)

        options = self.config_entry.options

        data_schema = vol.Schema({
            vol.Optional(CONF_PROMPT_TONE,
                         default=options.get(CONF_PROMPT_TONE, True)): cv.boolean,
            vol.Optional(CONF_TEMP_STEP,
                         default=options.get(CONF_TEMP_STEP, 1.0)): vol.All(vol.Coerce(float), vol.Range(min=0.5, max=5)),
            vol.Optional(CONF_INCLUDE_OFF_AS_STATE,
                         default=options.get(CONF_INCLUDE_OFF_AS_STATE, True)): cv.boolean,
            vol.Optional(CONF_USE_FAN_ONLY_WORKAROUND,
                         default=options.get(CONF_USE_FAN_ONLY_WORKAROUND, False)):  cv.boolean,
            vol.Optional(CONF_KEEP_LAST_KNOWN_ONLINE_STATE,
                         default=options.get(CONF_KEEP_LAST_KNOWN_ONLINE_STATE, False)):  cv.boolean
        })

        return self.async_show_form(step_id="init", data_schema=data_schema)
