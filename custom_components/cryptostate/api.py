"""Crypto trakcer api client"""
from email import header
import logging
import asyncio
import socket
from typing import Optional
import aiohttp
from .const import (
    SINGLE_CURR_URL,
    ALL_CURR_URLS,
)


_LOGGER: logging.Logger = logging.getLogger(__package__)
HEADERS = {"Content-type": "application/json; charset=UTF-8"}

class CryptoTrackerApiClientError(Exception):
    """Error to indicate a general api error"""

class CryptoTrackerApiClientFetchingError(
    CryptoTrackerApiClientError
):
    """Exception to indicate a fetching error."""

class CryptoTrackerApiClient:
    """Crypto tracker api class"""

    def __init__(self, crypto: str, base: str, session: aiohttp.ClientSession) -> None:
        """API client"""
        self._crypto = crypto
        self._base = base
        self._session = session

    def _format_urls(self):
        urls = []
        for url in SINGLE_CURR_URL:
            url = url.format(crypto=self._crypto, base=self._base)
            urls.append(url)
        return urls

    async def async_get_data(self) -> dict:
        """Get the data from the api"""
        u = self._format_urls()
        res = await self.api_wrapper(urls=u, headers=HEADERS)
        return res

    async def async_get_currecy_list(self) -> dict:
        res = await self.api_wrapper(urls=ALL_CURR_URLS, headers=HEADERS)
        return res

    async def api_wrapper(
        self, urls: str = [], headers: dict = {}
    ) -> dict:
        """Get information from the api"""
        try:
            for url in urls:
                res = await self._session.get(url, headers=headers)
                if res.ok:
                    return await res.json()
            raise CryptoTrackerApiClientFetchingError(
                "Can not connect to api to fetch data"
            )
        except asyncio.TimeoutError as exception:
            raise CryptoTrackerApiClientFetchingError(
                "Timeout fetching data"
            )from exception
        except (aiohttp.ClientError, socket.gaierror) as exception:
            raise CryptoTrackerApiClientFetchingError(
                "Fatal error fetching data"
            ) from exception
        except Exception as exception:  # pylint: disable=broad-except
            _LOGGER.error("Something really wrong happened! - %s", exception)
