"""Config flow for South African Pollen Count integration."""
from __future__ import annotations

from typing import Any

import voluptuous as vol

from homeassistant import config_entries
from homeassistant.core import HomeAssistant
from homeassistant.data_entry_flow import FlowResult

from .const import DOMAIN

CITIES = [
    "Cape Town",
    "Johannesburg Central",
    "Johannesburg South",
    "Pretoria",
    "Bloemfontein",
    "Kimberley",
    "Durban",
    "Gqeberha",
    "George"
]

class ConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for South African Pollen Count."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Handle the initial step."""
        if user_input is None:
            return self.async_show_form(
                step_id="user",
                data_schema=vol.Schema({
                    vol.Required("city"): vol.In(CITIES)
                })
            )

        await self.async_set_unique_id(user_input["city"])
        self._abort_if_unique_id_configured()

        return self.async_create_entry(title=user_input["city"], data=user_input)
