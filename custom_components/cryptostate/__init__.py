"""Crypto tracking"""
import logging
import asyncio
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from datetime import timedelta
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, Config
from homeassistant.exceptions import ConfigEntryNotReady
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed
from .api import CryptoTrackerApiClient
from .const import DOMAIN, CONF_BASE, CONF_CRYPTO

SCAN_INTERVAL = timedelta(hours=3)

_LOGGER: logging.Logger = logging.getLogger(__package__)


async def async_setup(hass: HomeAssistant, config: Config):
    """Set up this integration using YAML is not supported."""
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Setup CryptoTracker from config entry"""

    if hass.data.get(DOMAIN) is None:
        hass.data.setdefault(DOMAIN, {})

    crypto = entry.data.get(CONF_CRYPTO)
    base = entry.data.get(CONF_BASE)

    session = async_get_clientsession(hass)
    client = CryptoTrackerApiClient(crypto=crypto, base=base, session=session)

    coordinator = CryptoTrackerUpdateCoordinator(hass, client=client)
    await coordinator.async_refresh()

    if not coordinator.last_update_success:
        raise ConfigEntryNotReady

    hass.data[DOMAIN][entry.entry_id] = coordinator

    if entry.options.get("sensor", True):
        coordinator.platforms.append("sensor")
        hass.async_add_job(
            hass.config_entries.async_forward_entry_setup(entry, "sensor")
        )

    entry.async_on_unload(entry.add_update_listener(async_reload_entry))
    return True


class CryptoTrackerUpdateCoordinator(DataUpdateCoordinator):
    """Class to manage fetching data from the API."""

    def __init__(self, hass: HomeAssistant, client: CryptoTrackerApiClient) -> None:
        """Initialize."""
        self.api = client
        self.platforms = []

        super().__init__(hass, _LOGGER, name=DOMAIN, update_interval=SCAN_INTERVAL)

    async def _async_update_data(self):
        """Update data via library."""
        try:
            return await self.api.async_get_data()
        except Exception as exception:
            raise UpdateFailed() from exception


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Handle removal of an entry."""
    # coordinator = hass.data[DOMAIN][entry.entry_id]
    unloaded = await hass.config_entries.async_unload_platforms(entry, "sensor")
    if unloaded:
        hass.data[DOMAIN].pop(entry.entry_id)

    return unloaded


async def async_reload_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Reload config entry."""
    await async_unload_entry(hass, entry)
    await async_setup_entry(hass, entry)
