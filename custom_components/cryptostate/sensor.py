from datetime import timedelta
import requests
import json
from collections import defaultdict
import logging
import string
from homeassistant.util import Throttle

from homeassistant.components.sensor import PLATFORM_SCHEMA, SensorEntity
import homeassistant.helpers.config_validation as cv
import voluptuous as vol
from homeassistant.const import (
    ATTR_ATTRIBUTION,
    CONF_NAME,
    STATE_UNKNOWN,
    CONF_RESOURCES,
)

_LOGGER = logging.getLogger(__name__)

ICON = "mdi:cash-multiple"

SCAN_INTERVAL = timedelta(seconds=60)

ATTRIBUTION = "Data provided by cryptonator api"

DEFAULT_COMPARE = "doge-eur"

CONF_COMPARE = "compare"

DOMAIN = "cryptostate"

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

url = "https://api.cryptonator.com/api/ticker/{0}"

def getData(compare):
    """Get The request from the api"""

    parsedUrl = url.format(compare)
    #The headers are used to simulate a human request
    req = requests.get(parsedUrl, headers={"User-Agent": "Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.4) Gecko/20030624 Netscape/7.1 (ax)"}) 

    respParsed = ""
    if (req.ok):
        jsone = req.json()
        resp = json.dumps(jsone)
        respParsed = json.loads(resp)
    else:
        _LOGGER.error("Cannot perform the request")


    if (respParsed["success"] == True):
        return respParsed["ticker"]["price"]
    else:
        _LOGGER.warn("Request unsuccessful")
        _LOGGER.error(respParsed["error"])
        return respParsed["error"]

def parseUnitOfMesurament(compare):
    """Parse the input for the unit of mesurament"""

    s = compare.split("-")

    return s[1].upper()

def setup_platform(hass, config, add_entities, discovery_info=None):
    """Setup the currency sensor"""

    entities = []

    for resource in config[CONF_RESOURCES]:
        compare_ = resource[CONF_COMPARE]
        name = resource[CONF_NAME]
        
        entities.append(CurrencySensor(hass, name, compare_, SCAN_INTERVAL))

    add_entities(entities, True)

class CurrencySensor(SensorEntity):
    
    def __init__(self, hass, name, compare, interval):
        """Inizialize sensor"""
        self._state = STATE_UNKNOWN
        self._name = name
        self._hass = hass
        self._compare = compare
        self.update = Throttle(interval)(self._update)

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
        return parseUnitOfMesurament(self._compare)

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

        self._state = getData(self._compare)
