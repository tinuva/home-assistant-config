"""Solcast PV forecast, service actions."""

from datetime import timedelta
import logging
from typing import Any, Final

import voluptuous as vol

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall, SupportsResponse
from homeassistant.exceptions import ServiceValidationError
from homeassistant.helpers import config_validation as cv
from homeassistant.util import dt as dt_util

from .const import (
    ACTION,
    API_KEY,
    CUSTOM_HOUR_SENSOR,
    DAMP_FACTOR,
    DOMAIN,
    EVENT_END_DATETIME,
    EVENT_START_DATETIME,
    EXCEPTION_DAMP_AUTO_ENABLED,
    EXCEPTION_DAMP_COUNT_NOT_CORRECT,
    EXCEPTION_DAMP_ERROR_PARSING,
    EXCEPTION_DAMP_NO_ALL_24,
    EXCEPTION_DAMP_NO_FACTORS,
    EXCEPTION_DAMP_NOT_SITE,
    EXCEPTION_DAMP_OUTSIDE_RANGE,
    EXCEPTION_HARD_NOT_POSITIVE_NUMBER,
    EXCEPTION_HARD_TOO_MANY,
    EXCEPTION_INTEGRATION_NOT_LOADED,
    EXCEPTION_INVALID_CUSTOM_HOURS_FORMAT,
    EXCEPTION_INVALID_CUSTOM_HOURS_RANGE,
    HARD_LIMIT,
    HARD_LIMIT_API,
    HOURS,
    RESOURCE_ID,
    SCHEMA,
    SERVICE_CLEAR_DATA,
    SERVICE_FORCE_UPDATE_ESTIMATES,
    SERVICE_FORCE_UPDATE_FORECASTS,
    SERVICE_GET_DAMPENING,
    SERVICE_QUERY_ESTIMATE_DATA,
    SERVICE_QUERY_FORECAST_DATA,
    SERVICE_REMOVE_HARD_LIMIT,
    SERVICE_SET_CUSTOM_HOURS,
    SERVICE_SET_DAMPENING,
    SERVICE_SET_HARD_LIMIT,
    SERVICE_UPDATE,
    SITE,
    SITE_DAMP,
    SUPPORTS_RESPONSE as SUPPORTS_RESPONSE_KEY,
    UNDAMPENED,
)
from .coordinator import SolcastUpdateCoordinator
from .solcastapi import SolcastApi

SERVICE_DAMP_SCHEMA: Final = vol.All(
    {
        vol.Required(DAMP_FACTOR): cv.string,
        vol.Optional(SITE): cv.string,
    }
)
SERVICE_DAMP_GET_SCHEMA: Final = vol.All(
    {
        vol.Optional(SITE): cv.string,
    }
)
SERVICE_HARD_LIMIT_SCHEMA: Final = vol.All(
    {
        vol.Required(HARD_LIMIT): cv.string,
    }
)
SERVICE_CUSTOM_HOURS_SCHEMA: Final = vol.All(
    {
        vol.Required(HOURS): cv.string,
    }
)
SERVICE_QUERY_SCHEMA: Final = vol.All(
    {
        vol.Required(EVENT_START_DATETIME): cv.datetime,
        vol.Required(EVENT_END_DATETIME): cv.datetime,
        vol.Optional(UNDAMPENED): cv.boolean,
        vol.Optional(SITE): cv.string,
    }
)
SERVICE_QUERY_ESTIMATE_SCHEMA: Final = vol.All(
    {
        vol.Optional(EVENT_START_DATETIME): cv.datetime,
        vol.Optional(EVENT_END_DATETIME): cv.datetime,
    }
)

_LOGGER = logging.getLogger(__name__)

_ALL_ACTIONS: Final = [
    SERVICE_CLEAR_DATA,
    SERVICE_FORCE_UPDATE_ESTIMATES,
    SERVICE_FORCE_UPDATE_FORECASTS,
    SERVICE_GET_DAMPENING,
    SERVICE_QUERY_ESTIMATE_DATA,
    SERVICE_QUERY_FORECAST_DATA,
    SERVICE_REMOVE_HARD_LIMIT,
    SERVICE_SET_DAMPENING,
    SERVICE_SET_CUSTOM_HOURS,
    SERVICE_SET_HARD_LIMIT,
    SERVICE_UPDATE,
]


async def stub_action(call: ServiceCall) -> None:
    """Raise an exception on action when the entry is not loaded.

    Arguments:
        call: Not used.

    Raises:
        ServiceValidationError: Notify the caller that the integration is not loaded.

    """
    _LOGGER.error("Integration not loaded")
    raise ServiceValidationError(translation_domain=DOMAIN, translation_key=EXCEPTION_INTEGRATION_NOT_LOADED)


def register_stub_actions(hass: HomeAssistant) -> None:
    """Register all actions to return an error state initially.

    Arguments:
        hass: The Home Assistant instance.

    """
    for action in _ALL_ACTIONS:
        hass.services.async_register(DOMAIN, action, stub_action)


def unregister_actions(hass: HomeAssistant) -> None:
    """Replace all real actions with stub error actions.

    Arguments:
        hass: The Home Assistant instance.

    """
    for action in hass.services.async_services_for_domain(DOMAIN):
        _LOGGER.debug("Remove action %s.%s", DOMAIN, action)
        hass.services.async_remove(DOMAIN, action)
        hass.services.async_register(DOMAIN, action, stub_action)


class ServiceActions:
    """Service actions for the Solcast Solar integration."""

    def __init__(
        self,
        hass: HomeAssistant,
        entry: ConfigEntry,
        coordinator: SolcastUpdateCoordinator,
        solcast: SolcastApi,
    ) -> None:
        """Initialise the service actions.

        Arguments:
            hass: The Home Assistant instance.
            entry: The integration entry instance.
            coordinator: The update coordinator.
            solcast: The Solcast API instance.

        """
        self._hass = hass
        self._entry = entry
        self._coordinator = coordinator
        self._solcast = solcast
        self._register()

    def _get_service_actions(self) -> dict[str, dict[str, Any]]:
        """Return the mapping of service action names to their configuration.

        Returns:
            The service action definitions for registration.

        """
        return {
            SERVICE_CLEAR_DATA: {ACTION: self.async_clear_solcast_data},
            SERVICE_FORCE_UPDATE_ESTIMATES: {ACTION: self.async_force_update_estimates},
            SERVICE_FORCE_UPDATE_FORECASTS: {ACTION: self.async_force_update_forecast},
            SERVICE_GET_DAMPENING: {
                ACTION: self.async_get_dampening,
                SCHEMA: SERVICE_DAMP_GET_SCHEMA,
                SUPPORTS_RESPONSE_KEY: SupportsResponse.ONLY,
            },
            SERVICE_QUERY_ESTIMATE_DATA: {
                ACTION: self.async_get_estimate_data,
                SCHEMA: SERVICE_QUERY_ESTIMATE_SCHEMA,
                SUPPORTS_RESPONSE_KEY: SupportsResponse.ONLY,
            },
            SERVICE_QUERY_FORECAST_DATA: {
                ACTION: self.async_get_forecast_data,
                SCHEMA: SERVICE_QUERY_SCHEMA,
                SUPPORTS_RESPONSE_KEY: SupportsResponse.ONLY,
            },
            SERVICE_REMOVE_HARD_LIMIT: {ACTION: self.async_remove_hard_limit},
            SERVICE_SET_DAMPENING: {ACTION: self.async_set_dampening, SCHEMA: SERVICE_DAMP_SCHEMA},
            SERVICE_SET_CUSTOM_HOURS: {ACTION: self.async_set_custom_hours, SCHEMA: SERVICE_CUSTOM_HOURS_SCHEMA},
            SERVICE_SET_HARD_LIMIT: {ACTION: self.async_set_hard_limit, SCHEMA: SERVICE_HARD_LIMIT_SCHEMA},
            SERVICE_UPDATE: {ACTION: self.async_update_forecast},
        }

    def _register(self) -> None:
        """Register all service actions with Home Assistant."""
        for action, call in self._get_service_actions().items():
            _LOGGER.debug("Register action %s.%s", DOMAIN, action)
            self._hass.services.async_remove(DOMAIN, action)  # Remove the error action
            if call.get(SUPPORTS_RESPONSE_KEY):
                self._hass.services.async_register(DOMAIN, action, call[ACTION], call[SCHEMA], call[SUPPORTS_RESPONSE_KEY])
                continue
            if call.get(SCHEMA):
                self._hass.services.async_register(DOMAIN, action, call[ACTION], call[SCHEMA])
                continue
            self._hass.services.async_register(DOMAIN, action, call[ACTION])

    async def async_update_forecast(self, call: ServiceCall) -> None:
        """Handle update forecast action.

        Arguments:
            call: Not used.

        """
        _LOGGER.info("Action: Fetching forecast")
        await self._coordinator.service_event_update()

    async def async_force_update_forecast(self, call: ServiceCall) -> None:
        """Handle force update forecast action.

        Arguments:
            call: Not used.

        """
        _LOGGER.info("Forced update: Fetching forecast")
        await self._coordinator.service_event_force_update()

    async def async_force_update_estimates(self, call: ServiceCall) -> None:
        """Handle force update estimated actuals action.

        Arguments:
            call: Not used.

        """
        _LOGGER.info("Forced update: Fetching estimated actuals")
        await self._coordinator.service_event_force_update_estimates()

    async def async_clear_solcast_data(self, call: ServiceCall) -> None:
        """Handle clear data action.

        Arguments:
            call: Not used.

        """
        _LOGGER.info("Action: Clearing history and fetching past actuals and forecast")
        await self._coordinator.service_event_delete_old_solcast_json_file()

    async def async_get_forecast_data(self, call: ServiceCall) -> dict[str, Any] | None:
        """Handle query forecast data action.

        Arguments:
            call: The data to act on: a start and optional end date/time, optional dampened/undampened, optional site.

        Returns:
            The Solcast data from start to end date/times.

        """
        try:
            _LOGGER.info("Action: Query forecast data")
            data = await self._coordinator.service_query_forecast_data(
                dt_util.as_utc(call.data.get(EVENT_START_DATETIME, dt_util.now())),
                dt_util.as_utc(call.data.get(EVENT_END_DATETIME, dt_util.now())),
                call.data.get(SITE, "all").replace("_", "-"),
                call.data.get(UNDAMPENED, False),
            )
        except ValueError as e:
            raise ServiceValidationError(f"{e}") from e

        return {"data": data}

    async def async_get_estimate_data(self, call: ServiceCall) -> dict[str, Any] | None:
        """Handle query estimate data action.

        Arguments:
            call: The data to act on: an optional start and end date/time (defaults to all of yesterday).

        Returns:
            The Solcast data from start to end date/times.

        """
        try:
            _LOGGER.info("Action: Query estimate data")
            day_start = self._coordinator.solcast.dt_helper.day_start_utc()
            data = await self._coordinator.service_query_estimate_data(
                dt_util.as_utc(call.data.get(EVENT_START_DATETIME, day_start - timedelta(days=1))),
                dt_util.as_utc(call.data.get(EVENT_END_DATETIME, day_start)),
                call.data.get(UNDAMPENED, True),
            )
        except ValueError as e:
            raise ServiceValidationError(f"{e}") from e

        return {"data": data}

    async def async_set_dampening(self, call: ServiceCall) -> None:
        """Handle set dampening action.

        Arguments:
            call: The data to act on: a set of dampening values, and an optional site.

        Raises:
            ServiceValidationError: Notify Home Assistant that an error has occurred, with translation.

        """
        _LOGGER.info("Action: Set dampening")

        if self._solcast.options.auto_dampen:
            raise ServiceValidationError(translation_domain=DOMAIN, translation_key=EXCEPTION_DAMP_AUTO_ENABLED)

        factors = call.data.get(DAMP_FACTOR, "")
        site = call.data.get(SITE)  # Optional site.

        factors = factors.strip().replace(" ", "")
        factors = factors.split(",")
        if factors[0] == "":
            raise ServiceValidationError(translation_domain=DOMAIN, translation_key=EXCEPTION_DAMP_NO_FACTORS)
        if len(factors) not in (24, 48):
            raise ServiceValidationError(translation_domain=DOMAIN, translation_key=EXCEPTION_DAMP_COUNT_NOT_CORRECT)
        if site is not None:
            site = site.lower().replace("_", "-")
            if site == "all":
                if (len(factors)) != 48:
                    raise ServiceValidationError(translation_domain=DOMAIN, translation_key=EXCEPTION_DAMP_NO_ALL_24)
            elif site not in [s[RESOURCE_ID] for s in self._solcast.sites]:
                raise ServiceValidationError(translation_domain=DOMAIN, translation_key=EXCEPTION_DAMP_NOT_SITE)
        elif len(factors) == 48:
            site = "all"
        out_of_range = False
        try:
            for factor in factors:
                if float(factor) < 0 or float(factor) > 1:
                    out_of_range = True
        except:  # noqa: E722
            raise ServiceValidationError(translation_domain=DOMAIN, translation_key=EXCEPTION_DAMP_ERROR_PARSING) from None
        if out_of_range:
            raise ServiceValidationError(translation_domain=DOMAIN, translation_key=EXCEPTION_DAMP_OUTSIDE_RANGE)

        opt = {**self._entry.options}

        if site is None:
            damp_factors: dict[str, float] = {}
            for i in range(24):
                factor = float(factors[i])
                damp_factors.update({f"{i}": factor})
                opt[f"damp{i:02}"] = factor
            self._solcast.damp = damp_factors
            if self._solcast.dampening.factors:
                _LOGGER.debug("Clear granular dampening")
                opt[SITE_DAMP] = False  # Clear "hidden" option.
                self._solcast.dampening.set_allow_granular_reset(True)
        else:
            await self._solcast.dampening.refresh_granular_data()  # Ensure latest file content gets updated
            self._solcast.dampening.factors[site] = [float(factors[i]) for i in range(len(factors))]
            await self._solcast.dampening.serialise_granular()
            old_damp = opt.get(SITE_DAMP, False)
            opt[SITE_DAMP] = True  # Set "hidden" option.
            if opt[SITE_DAMP] == old_damp:
                await self._solcast.dampening.apply_forward()
                await self._coordinator.solcast.build_forecast_data()
        self._coordinator.set_data_updated(True)
        await self._coordinator.update_integration_listeners()
        self._coordinator.set_data_updated(False)

        self._hass.config_entries.async_update_entry(self._entry, options=opt)

    async def async_get_dampening(self, call: ServiceCall) -> dict[str, Any] | None:
        """Handle get dampening action.

        Arguments:
            call: The data to act on: an optional site.

        Returns:
            The dampening data.

        """
        _LOGGER.info("Action: Get dampening")

        site = call.data.get(SITE)  # Optional site.
        if site is not None:
            site_underscores = "_" in site
            site = site.lower().replace("_", "-")
        else:
            site_underscores = False
        data = await self._solcast.dampening.get(site=site, site_underscores=site_underscores)
        return {"data": data}

    async def async_set_hard_limit(self, call: ServiceCall) -> None:
        """Handle set hard limit action.

        Arguments:
            call: The data to act on: a hard limit.

        Raises:
            ServiceValidationError: Notify Home Assistant that an error has occurred, with translation.

        """
        _LOGGER.info("Action: Set hard limit")

        hard_limit = call.data.get(HARD_LIMIT, "100.0")
        to_set: list[str] = []
        for limit in hard_limit.split(","):
            limit = limit.strip()
            if not limit.replace(".", "", 1).isdigit():
                raise ServiceValidationError(
                    translation_domain=DOMAIN,
                    translation_key=EXCEPTION_HARD_NOT_POSITIVE_NUMBER,
                )
            to_set.append(f"{float(limit):.1f}")
        if len(to_set) > len(self._entry.options[API_KEY].split(",")):
            raise ServiceValidationError(translation_domain=DOMAIN, translation_key=EXCEPTION_HARD_TOO_MANY)

        opt = {**self._entry.options}
        opt[HARD_LIMIT_API] = ",".join(to_set)
        self._hass.config_entries.async_update_entry(self._entry, options=opt)

    async def async_set_custom_hours(self, call: ServiceCall) -> None:
        """Handle set custom hours sensor action.

        Arguments:
            call: The data to act on: a number of hours for the custom hour sensor.

        Raises:
            ServiceValidationError: Notify that a validation error has occurred.

        """
        _LOGGER.info("Action: Set custom hours sensor")

        hours_str = call.data.get(HOURS, "")
        hours_str = hours_str.strip()

        if not hours_str.isdigit():
            raise ServiceValidationError(
                translation_domain=DOMAIN,
                translation_key=EXCEPTION_INVALID_CUSTOM_HOURS_FORMAT,
            )

        hour_val = int(hours_str)
        if hour_val < 1 or hour_val > 144:
            raise ServiceValidationError(
                translation_domain=DOMAIN,
                translation_key=EXCEPTION_INVALID_CUSTOM_HOURS_RANGE,
            )

        opt = {**self._entry.options}
        opt[CUSTOM_HOUR_SENSOR] = hour_val
        self._hass.config_entries.async_update_entry(self._entry, options=opt)

    async def async_remove_hard_limit(self, call: ServiceCall) -> None:
        """Handle remove hard limit action.

        Arguments:
            call: Not used.

        """
        _LOGGER.info("Action: Remove hard limit")

        opt = {**self._entry.options}
        opt[HARD_LIMIT_API] = "100.0"
        self._hass.config_entries.async_update_entry(self._entry, options=opt)
