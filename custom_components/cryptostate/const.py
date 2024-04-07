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

SINGLE_CURR_URL = [
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{crypto}.min.json",
    "https://latest.currency-api.pages.dev/v1/currencies/{crypto}.min.json",
]
# With this url we can get all the currency names that are available
ALL_CURR_URLS = [
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json",
    "https://latest.currency-api.pages.dev/v1/currencies.json",
]
