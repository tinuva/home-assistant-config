"""Const used by CryptoTracker"""
from __future__ import annotations

from datetime import timedelta

URL = "https://api.cryptonator.com/api/ticker/{0}"

CONF_COMPARE = "compare"

ICON = "mdi:cash-multiple"

DEFAULT_SCAN_INTERVAL = timedelta(seconds=120)

ATTRIBUTION = "Data provided by cryptonator api"

DEFAULT_COMPARE = "doge-eur"

DOMAIN = "cryptostate"
