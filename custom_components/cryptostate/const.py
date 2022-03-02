"""Const used by CryptoTracker"""
from __future__ import annotations

from datetime import timedelta

NAME = "Crypto Tracker"
DOMAIN = "cryptostate"
VERSION = "2.0.0"
ATTRIBUTION = "Data provided by https://github.com/fawazahmed0/currency-api#readme API"

ICON = "mdi:cash-multiple"

DEFAULT_SCAN_INTERVAL = timedelta(hours=12)

CONF_BASE = "base"
CONF_CRYPTO = "crypto"

DEFAULT_NAME = "basecrypto"

# With this url we can get all the currency names that are available
ALL_CURR_URL = (
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
)
ALL_CURR_MIN_URL = (
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json"
)
# We format this url with the vale we want to convert the currency with
BASED_CURR_VALUE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{crypto}/{base}.json"
BASED_MIN_CURR_VALUE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{crypto}/{base}.min.json"
