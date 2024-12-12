"""Support for South African Pollen Count sensors."""
from __future__ import annotations

from datetime import timedelta
import logging
from typing import Any

from bs4 import BeautifulSoup
import requests
import re

from homeassistant.components.sensor import (
    SensorEntity,
    SensorEntityDescription,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import StateType
from homeassistant.helpers.update_coordinator import (
    CoordinatorEntity,
    DataUpdateCoordinator,
)

from .const import (
    ATTR_GRASS_POLLEN,
    ATTR_MOULD_SPORES,
    ATTR_SUMMARY,
    ATTR_TREE_POLLEN,
    ATTR_WEED_POLLEN,
    ATTRIBUTION,
    DOMAIN,
    UPDATE_INTERVAL,
)

_LOGGER = logging.getLogger(__name__)

async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up South African Pollen Count sensor based on a config entry."""
    coordinator = PollenDataUpdateCoordinator(hass, entry.data["city"])
    await coordinator.async_config_entry_first_refresh()

    async_add_entities([PollenSensor(coordinator, entry)], True)

def determine_level(class_name: str) -> str:
    """Determine pollen level from CSS class."""
    if 'pollen-green' in class_name:
        return 'Very Low'
    elif 'pollen-yellow' in class_name:
        return 'Low'
    elif 'pollen-lightorange' in class_name:
        return 'Moderate'
    elif 'pollen-darkorange' in class_name:
        return 'High'
    elif 'pollen-red' in class_name:
        return 'Very High'
    return 'N/A'

class PollenDataUpdateCoordinator(DataUpdateCoordinator):
    """Class to manage fetching Pollen data."""

    def __init__(self, hass: HomeAssistant, city: str) -> None:
        """Initialize."""
        super().__init__(
            hass,
            _LOGGER,
            name=DOMAIN,
            update_interval=timedelta(seconds=UPDATE_INTERVAL),
        )
        self.city = city

    async def _async_update_data(self) -> dict[str, Any] | None:
        """Fetch data from API endpoint."""
        try:
            return await self.hass.async_add_executor_job(self._get_pollen_data)
        except Exception as err:
            _LOGGER.error("Error updating pollen data: %s", err)
            return None

    def _get_pollen_data(self) -> dict[str, Any] | None:
        """Get the latest data from pollencount.co.za."""
        base_url = 'https://pollencount.co.za/report/'
        
        # Get the latest report URL
        response = requests.get(base_url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        report_links = soup.find_all('a', href=re.compile(r'/report/\d{1,2}-\w+-\d{4}/'))
        
        if not report_links:
            raise ValueError("No report links found")
            
        latest_report_url = report_links[0]['href']
        if not latest_report_url.startswith('http'):
            latest_report_url = f"https://pollencount.co.za{latest_report_url}"

        # Get the report page
        response = requests.get(latest_report_url)
        response.raise_for_status()

        # Parse the data
        soup = BeautifulSoup(response.text, 'html.parser')
        rows = soup.find_all('div', class_='row', style='text-align:center;')

        for row in rows:
            if 'exclude-border' in row.get('class', []):
                continue

            city_div = row.find('div', class_='hidden-xs')
            if not city_div:
                continue

            if city_div.text.strip() == self.city:
                pollen_divs = row.find_all('div', class_=lambda x: x and 'pollen-' in x)
                if len(pollen_divs) >= 5:
                    levels = [determine_level(div['class'][0]) for div in pollen_divs]
                    
                    # Get city summary
                    summary = ""
                    paragraphs = soup.find_all('p')
                    for p in paragraphs:
                        if p.get_text().strip().startswith(self.city):
                            if p.find_next_sibling('p'):
                                summary = p.find_next_sibling('p').get_text().strip()
                            break

                    return {
                        "overall_risk": levels[0],
                        "tree_pollen": levels[1],
                        "grass_pollen": levels[2],
                        "weed_pollen": levels[3],
                        "mould_spores": levels[4],
                        "summary": summary
                    }
        return None

class PollenSensor(CoordinatorEntity, SensorEntity):
    """Implementation of a South African Pollen Count sensor."""

    _attr_has_entity_name = True
    _attr_attribution = ATTRIBUTION

    def __init__(
        self,
        coordinator: PollenDataUpdateCoordinator,
        entry: ConfigEntry,
    ) -> None:
        """Initialize the sensor."""
        super().__init__(coordinator)
        self._attr_unique_id = f"{entry.data['city']}_pollen"
        self._attr_name = f"{entry.data['city']} Pollen"

    @property
    def native_value(self) -> StateType:
        """Return the state of the sensor."""
        if self.coordinator.data is None:
            return None
        return self.coordinator.data["overall_risk"]

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes."""
        if self.coordinator.data is None:
            return {}

        return {
            ATTR_TREE_POLLEN: self.coordinator.data["tree_pollen"],
            ATTR_GRASS_POLLEN: self.coordinator.data["grass_pollen"],
            ATTR_WEED_POLLEN: self.coordinator.data["weed_pollen"],
            ATTR_MOULD_SPORES: self.coordinator.data["mould_spores"],
            ATTR_SUMMARY: self.coordinator.data["summary"],
        }
