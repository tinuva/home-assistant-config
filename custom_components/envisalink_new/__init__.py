"""The Envisalink_new integration."""
from __future__ import annotations

from copy import deepcopy

from homeassistant import config_entries
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant, callback

from homeassistant.const import (
    CONF_CODE,
    CONF_HOST,
    CONF_TIMEOUT,
)

from .const import (
    CONF_ALARM_NAME,
    CONF_CREATE_ZONE_BYPASS_SWITCHES,
    CONF_EVL_KEEPALIVE,
    CONF_EVL_PORT,
    CONF_EVL_VERSION,
    CONF_NUM_PARTITIONS,
    CONF_NUM_ZONES,
    CONF_PANEL_TYPE,
    CONF_PANIC,
    CONF_PARTITIONS,
    CONF_PASS,
    CONF_USERNAME,
    CONF_YAML_OPTIONS,
    CONF_ZONEDUMP_INTERVAL,
    CONF_ZONES,
    DEFAULT_ALARM_NAME,
    DOMAIN,
    LOGGER,
)

from .controller import EnvisalinkController

PLATFORMS: list[Platform] = [Platform.ALARM_CONTROL_PANEL, Platform.BINARY_SENSOR, Platform.SENSOR, Platform.SWITCH]

async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up the Envisalink integration from YAML."""
    evl_config: ConfigType | None = config.get(DOMAIN)
    hass.data.setdefault(DOMAIN, {})

    if not evl_config:
        return True

    transformed_evl_config = _transform_yaml_to_config_entry(dict(evl_config))

    # Only import if we haven't before.
    config_entry = _async_find_matching_config_entry(hass)
    if not config_entry:
        hass.async_create_task(
            hass.config_entries.flow.async_init(
                DOMAIN,
                context={"source": config_entries.SOURCE_IMPORT},
                data=transformed_evl_config,
            )
        )
        return True

    # Update the entry based on the YAML configuration, in case it changed.
    hass.config_entries.async_update_entry(config_entry, data=transformed_evl_config)
    return True

@callback
def _async_find_matching_config_entry(
    hass: HomeAssistant,
) -> config_entries.ConfigEntry | None:
    for entry in hass.config_entries.async_entries(DOMAIN):
        if entry.source == config_entries.SOURCE_IMPORT:
            return entry
    return None

async def async_setup_entry(hass: HomeAssistant, entry: config_entries.ConfigEntry) -> bool:
    """Set up Envisalink_new from a config entry."""

    # As there currently is no way to import options from yaml
    # when setting up a config entry, we fallback to adding
    # the options to the config entry and pull them out here if
    # they are missing from the options
    _async_import_options_from_data_if_missing(hass, entry)

    controller = EnvisalinkController(hass, entry)
    await controller.start()

    hass.data.setdefault(DOMAIN, {})[entry.entry_id] = controller

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    # Reload entry when its updated.
    entry.async_on_unload(entry.add_update_listener(async_reload_entry))

    return True


async def async_unload_entry(hass: HomeAssistant, entry: config_entries.ConfigEntry) -> bool:
    """Unload a config entry."""
    if unload_ok := await hass.config_entries.async_unload_platforms(entry, PLATFORMS):
        controller = hass.data[DOMAIN][entry.entry_id]

        await controller.stop()

        hass.data[DOMAIN].pop(entry.entry_id)

    return unload_ok

async def async_reload_entry(hass: HomeAssistant, entry: config_entries.ConfigEntry) -> None:
    """Reload the config entry when it changed."""
    await hass.config_entries.async_reload(entry.entry_id)


def _transform_yaml_to_config_entry(yaml: dict[str, Any]) -> dict[str, Any]:
    """The yaml config schema is different than the ConfigEntry schema so transform it
       before sending it along to the config import flow."""
    config_data = {}
    for key in (
        CONF_HOST,
        CONF_EVL_PORT,
        CONF_USERNAME,
        CONF_PASS,
        CONF_EVL_VERSION,
        CONF_PANEL_TYPE,
    ):
        if key in yaml:
            config_data[key] = yaml[key]

    num_zones = 0
    zones = yaml.get(CONF_ZONES)
    if zones:
        num_zones = len(zones)
        # Same off the zone names and types so we can update the corresponding entities later
        config_data[CONF_ZONES] = zones

    num_partitions = 0
    partitions = yaml.get(CONF_PARTITIONS)
    if partitions:
        num_partitions = len(partitions)
        # Same off the parittion names so we can update the corresponding entities later
        config_data[CONF_PARTITIONS] = partitions

    config_data[CONF_ALARM_NAME] = DEFAULT_ALARM_NAME

    # Extract config items that will now be treated as options in the ConfigEntry and
    # store them temporarily in the config entry so they can later be transfered into options
    # since it is apparently not possible to create options as part of the import flow.
    options = {}
    options[CONF_NUM_ZONES] = num_zones
    options[CONF_NUM_PARTITIONS] = num_partitions
    for key in (
        CONF_CODE,
        CONF_PANIC,
        CONF_EVL_KEEPALIVE,
        CONF_ZONEDUMP_INTERVAL,
        CONF_TIMEOUT,
        CONF_CREATE_ZONE_BYPASS_SWITCHES,
    ):
        if key in yaml:
            options[key] = yaml[key]

    config_data[CONF_YAML_OPTIONS] = options

    return config_data

@callback
def _async_import_options_from_data_if_missing(
    hass: HomeAssistant, entry: config_entries.ConfigEntry
) -> None:
    yaml_options = entry.data.get(CONF_YAML_OPTIONS)
    if not yaml_options:
        return

    options = dict(entry.options)

    modified = False
    for importable_option in (
        CONF_CODE,
        CONF_PANIC,
        CONF_EVL_KEEPALIVE,
        CONF_ZONEDUMP_INTERVAL,
        CONF_TIMEOUT,
        CONF_CREATE_ZONE_BYPASS_SWITCHES,
        CONF_NUM_ZONES,
        CONF_NUM_PARTITIONS,
    ):
        if importable_option not in entry.options and importable_option in yaml_options:
            options[importable_option] = yaml_options[importable_option]
            modified = True

    if modified:
        # Remove the temporary options storage now that they are being transfered to the correct place
        data = deepcopy(dict(entry.data))
        data.pop(CONF_YAML_OPTIONS)

        hass.config_entries.async_update_entry(entry, options=options, data=data)
