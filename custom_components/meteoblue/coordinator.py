"""Data update coordinators for Meteoblue Weather integration."""
from __future__ import annotations

import asyncio
from datetime import datetime, timedelta
import logging
from typing import Any

import aiohttp
from aiohttp import ClientError, ClientResponseError

from homeassistant.core import HomeAssistant
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed
from homeassistant.util import dt as dt_util

from .const import (
    API_BASE_URL,
    API_TIMEOUT,
    ATTRIBUTION,
    DOMAIN,
    ERROR_API_KEY,
    ERROR_RATE_LIMIT,
    ERROR_TIMEOUT,
    ERROR_UNKNOWN,
    PACKAGE_AIR_QUALITY,
    PACKAGE_BASIC_1H,
    PACKAGE_BASIC_DAY,
    PACKAGE_CURRENT,
)

_LOGGER = logging.getLogger(__name__)


class MeteoblueApiClient:
    """API client for Meteoblue."""

    def __init__(
        self,
        session: aiohttp.ClientSession,
        api_key: str,
        latitude: float,
        longitude: float,
    ) -> None:
        """Initialize the API client."""
        self._session = session
        self._api_key = api_key
        self._latitude = latitude
        self._longitude = longitude

    async def _api_request(
        self,
        packages: str,
        additional_params: dict[str, Any] | None = None,
    ) -> dict[str, Any]:
        """Make an API request to Meteoblue."""
        url = f"{API_BASE_URL}/{packages}"
        
        params = {
            "lat": self._latitude,
            "lon": self._longitude,
            "apikey": self._api_key,
            "format": "json",
            "temperature": "C",
            "windspeed": "ms-1",
            "precipitationamount": "mm",
            "winddirection": "degree",
            "tz": "utc",
        }
        
        if additional_params:
            params.update(additional_params)
        
        try:
            async with asyncio.timeout(API_TIMEOUT):
                async with self._session.get(url, params=params) as response:
                    if response.status == 401:
                        raise UpdateFailed(ERROR_API_KEY)
                    if response.status == 429:
                        raise UpdateFailed(ERROR_RATE_LIMIT)
                    
                    response.raise_for_status()
                    data = await response.json()
                    return data
                    
        except asyncio.TimeoutError as err:
            raise UpdateFailed(ERROR_TIMEOUT) from err
        except ClientResponseError as err:
            _LOGGER.error("API response error: %s", err)
            raise UpdateFailed(f"API error: {err.status}") from err
        except ClientError as err:
            _LOGGER.error("API client error: %s", err)
            raise UpdateFailed(ERROR_UNKNOWN) from err
        except Exception as err:
            _LOGGER.error("Unexpected error: %s", err)
            raise UpdateFailed(ERROR_UNKNOWN) from err

    async def get_forecast_data(self, forecast_days: int = 7) -> dict[str, Any]:
        """Get forecast data (hourly and daily)."""
        packages = f"{PACKAGE_BASIC_1H}_{PACKAGE_BASIC_DAY}"
        params = {"forecast_days": forecast_days}
        return await self._api_request(packages, params)

    async def get_current_data(self) -> dict[str, Any]:
        """Get current weather data."""
        packages = PACKAGE_CURRENT
        return await self._api_request(packages)

    async def get_air_quality_data(self, forecast_days: int = 1) -> dict[str, Any]:
        """Get air quality data."""
        packages = PACKAGE_AIR_QUALITY
        params = {"forecast_days": forecast_days}
        return await self._api_request(packages, params)


class MeteoblueForecastDataUpdateCoordinator(DataUpdateCoordinator[dict[str, Any]]):
    """Coordinator for Meteoblue forecast data."""

    def __init__(
        self,
        hass: HomeAssistant,
        session: aiohttp.ClientSession,
        api_key: str,
        latitude: float,
        longitude: float,
        update_interval: int,
    ) -> None:
        """Initialize forecast coordinator."""
        self.api_client = MeteoblueApiClient(session, api_key, latitude, longitude)
        self.latitude = latitude
        self.longitude = longitude
        
        super().__init__(
            hass,
            _LOGGER,
            name=f"{DOMAIN}_forecast",
            update_interval=timedelta(seconds=update_interval),
        )

    async def _async_update_data(self) -> dict[str, Any]:
        """Fetch forecast data from API."""
        _LOGGER.debug("Fetching forecast data for lat=%s, lon=%s", self.latitude, self.longitude)
        data = await self.api_client.get_forecast_data()
        
        # Add attribution
        data["attribution"] = ATTRIBUTION
        
        return data


class MeteoblueCurrentDataUpdateCoordinator(DataUpdateCoordinator[dict[str, Any]]):
    """Coordinator for Meteoblue current weather data."""

    def __init__(
        self,
        hass: HomeAssistant,
        session: aiohttp.ClientSession,
        api_key: str,
        latitude: float,
        longitude: float,
        update_interval: int,
    ) -> None:
        """Initialize current weather coordinator."""
        self.api_client = MeteoblueApiClient(session, api_key, latitude, longitude)
        self.latitude = latitude
        self.longitude = longitude
        
        super().__init__(
            hass,
            _LOGGER,
            name=f"{DOMAIN}_current",
            update_interval=timedelta(seconds=update_interval),
        )

    async def _async_update_data(self) -> dict[str, Any]:
        """Fetch current weather data from API."""
        _LOGGER.debug("Fetching current weather data for lat=%s, lon=%s", self.latitude, self.longitude)
        data = await self.api_client.get_current_data()
        
        # Add attribution
        data["attribution"] = ATTRIBUTION
        
        return data


class MeteoblueAirQualityDataUpdateCoordinator(DataUpdateCoordinator[dict[str, Any]]):
    """Coordinator for Meteoblue air quality data."""

    def __init__(
        self,
        hass: HomeAssistant,
        session: aiohttp.ClientSession,
        api_key: str,
        latitude: float,
        longitude: float,
        update_interval: int,
    ) -> None:
        """Initialize air quality coordinator."""
        self.api_client = MeteoblueApiClient(session, api_key, latitude, longitude)
        self.latitude = latitude
        self.longitude = longitude
        
        super().__init__(
            hass,
            _LOGGER,
            name=f"{DOMAIN}_air_quality",
            update_interval=timedelta(seconds=update_interval),
        )

    async def _async_update_data(self) -> dict[str, Any]:
        """Fetch air quality data from API."""
        _LOGGER.debug("Fetching air quality data for lat=%s, lon=%s", self.latitude, self.longitude)
        data = await self.api_client.get_air_quality_data()
        
        # Add attribution
        data["attribution"] = ATTRIBUTION
        
        return data