import requests
import json
import logging
from homeassistant.util import Throttle

from homeassistant.components.sensor import (
    PLATFORM_SCHEMA,
    SCAN_INTERVAL,
    SensorEntity,
    SensorEntityDescription,
    STATE_CLASS_MEASUREMENT,
)
import homeassistant.helpers.config_validation as cv
import voluptuous as vol

from homeassistant.const import (
    ATTR_ATTRIBUTION,
    CONF_NAME,
    STATE_UNKNOWN,
    CONF_RESOURCES,
)

from .const import (
    DEFAULT_COMPARE,
    ICON,
    DEFAULT_SCAN_INTERVAL,
    ATTRIBUTION,
    CONF_COMPARE,
    DOMAIN,
)

SCAN_INTERVAL = DEFAULT_SCAN_INTERVAL

_LOGGER = logging.getLogger(__name__)
PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_RESOURCES, default=[]): vol.All(
        cv.ensure_list,
        [
            vol.Schema({
                vol.Required(CONF_COMPARE, default=DEFAULT_COMPARE): cv.string,
                vol.Optional(CONF_NAME, default=DOMAIN): cv.string,
            })
        ],
    )
})

URL = "https://api.cryptonator.com/api/ticker/{0}"

def get_data(compare):
    """Get The request from the api"""

    parsed_url = URL.format(compare)
    #The headers are used to simulate a human request
    req = requests.get(parsed_url, headers={"User-Agent": "Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.4) Gecko/20030624 Netscape/7.1 (ax)"})

    resp_parsed = ""
    if (req.ok):
        jsone = req.json()
        resp = json.dumps(jsone)
        resp_parsed = json.loads(resp)
    else:
        _LOGGER.error("Cannot perform the request")


    if (resp_parsed["success"]):
        return resp_parsed["ticker"]["price"]
    else:
        _LOGGER.warning("Cannot perform the request")
        _LOGGER.error(resp_parsed["error"])
        return resp_parsed["error"]

def parse_unit_of_mesurament(compare):
    """Parse the input for the unit of mesurament"""

    s = compare.split("-")

    return s[1].upper()

async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
    """Setup the currency sensor"""

    entities = []

    for resource in config[CONF_RESOURCES]:
        compare_ = resource[CONF_COMPARE]
        name = resource[CONF_NAME]

        entities.append(
            CurrencySensor(hass, name, compare_)
        )

    async_add_entities(entities, True)

class CurrencySensor(SensorEntity):
    """Main class for curency sensor"""

    def __init__(self, hass, name, compare):
        """Inizialize sensor"""
        self._state = STATE_UNKNOWN
        self._name = name
        self._hass = hass
        self._compare = compare
        self.entity_description = (
            SensorEntityDescription(
                # Enable long term data
                key = "crypto",
                state_class=STATE_CLASS_MEASUREMENT,
            )
        )
        self.update = self._update

    @property
    def name(self):
        """Return the name sensor"""
        return self._name

    @property
    def icon(self):
        """Return the default icon"""
        return ICON

    @property
    def unit_of_measurement(self):
        """Return the unit of measurement of this entity, if any."""
        return parse_unit_of_mesurament(self._compare)

    @property
    def state(self):
        """Return the state of the sensor"""
        return self._state

    @property
    def extra_state_attributes(self):
        """Return the state attributes of the sensor."""
        return {ATTR_ATTRIBUTION: ATTRIBUTION}

    def _update(self):
        """Get the latest update fron the api"""

        self._state = get_data(self._compare)
