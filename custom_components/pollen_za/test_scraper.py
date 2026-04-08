#!/usr/bin/env python3
"""Standalone test script for the pollen_za scraper.

Run directly: python3 custom_components/pollen_za/test_scraper.py
"""

from datetime import datetime, timedelta
import logging
import re
import sys

from bs4 import BeautifulSoup
import requests

logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s")
_LOGGER = logging.getLogger(__name__)

CITY = "Cape Town"


def determine_level(class_name: str) -> str:
    """Determine pollen level from CSS class."""
    if "pollen-green" in class_name:
        return "Very Low"
    elif "pollen-yellow" in class_name:
        return "Low"
    elif "pollen-lightorange" in class_name:
        return "Moderate"
    elif "pollen-darkorange" in class_name:
        return "High"
    elif "pollen-red" in class_name:
        return "Very High"
    return "N/A"


def get_pollen_data(city: str) -> dict | None:
    """Exact copy of PollenDataUpdateCoordinator._get_pollen_data."""
    base_url = "https://pollencount.co.za/report/"

    print(f"\n--- Step 1: Fetching report index: {base_url}")
    response = requests.get(base_url)
    response.raise_for_status()
    print(f"    HTTP {response.status_code}")

    soup = BeautifulSoup(response.text, "html.parser")
    report_links = soup.find_all(
        "a", href=re.compile(r"/report/\d{1,2}-\w+-\d{4}(?:-\d+)?/")
    )

    print(f"\n--- Step 2: Found {len(report_links)} report link(s)")
    for i, link in enumerate(report_links[:5]):
        print(f"    [{i}] {link['href']}")

    if not report_links:
        raise ValueError("No report links found")

    latest_report_url = report_links[0]["href"]
    if not latest_report_url.startswith("http"):
        latest_report_url = f"https://pollencount.co.za{latest_report_url}"

    print(f"\n--- Step 3: Latest report URL: {latest_report_url}")

    # Extract report date from URL
    date_match = re.search(r"/report/(\d{1,2}-\w+-\d{4})(?:-\d+)?/", latest_report_url)
    report_date = None
    if date_match:
        date_str = date_match.group(1)
        print(f"    Extracted date string: {date_str}")
        try:
            parsed_date = datetime.strptime(date_str, "%d-%B-%Y")
            report_date = parsed_date.isoformat()
            print(f"    Parsed report_date: {report_date}")
        except ValueError as err:
            _LOGGER.warning("Could not parse report date '%s': %s", date_str, err)
            report_date = date_str
    else:
        print("    WARNING: No date match found in URL!")

    print(f"\n--- Step 4: Fetching report page: {latest_report_url}")
    response = requests.get(latest_report_url)
    response.raise_for_status()
    print(f"    HTTP {response.status_code}")

    soup = BeautifulSoup(response.text, "html.parser")
    rows = soup.find_all("div", class_="row", style="text-align:center;")
    print(f"\n--- Step 5: Found {len(rows)} data row(s) with style='text-align:center;'")

    for row in rows:
        if "exclude-border" in row.get("class", []):
            continue

        city_div = row.find("div", class_="hidden-xs")
        if not city_div:
            continue

        city_text = city_div.text.strip()
        print(f"    City cell text: '{city_text}'")

        if city_text == city:
            pollen_divs = row.find_all("div", class_=lambda x: x and "pollen-" in x)
            print(f"    Found {len(pollen_divs)} pollen div(s) for {city}")
            for i, div in enumerate(pollen_divs):
                print(f"      [{i}] class={div.get('class')} -> {determine_level(div['class'][0])}")

            if len(pollen_divs) >= 5:
                levels = [determine_level(div["class"][0]) for div in pollen_divs]

                summary = ""
                paragraphs = soup.find_all("p")
                for p in paragraphs:
                    if p.get_text().strip().startswith(city):
                        if p.find_next_sibling("p"):
                            summary = p.find_next_sibling("p").get_text().strip()
                        break

                return {
                    "overall_risk": levels[0],
                    "tree_pollen": levels[1],
                    "grass_pollen": levels[2],
                    "weed_pollen": levels[3],
                    "mould_spores": levels[4],
                    "summary": summary,
                    "report_date": report_date,
                }
            else:
                print(f"    WARNING: Only {len(pollen_divs)} pollen divs found (need >= 5)")

    print(f"\n    WARNING: City '{city}' not found in any row!")
    return None


if __name__ == "__main__":
    city = sys.argv[1] if len(sys.argv) > 1 else CITY
    print(f"Testing pollen scraper for city: {city}")

    try:
        data = get_pollen_data(city)
    except Exception as e:
        print(f"\nERROR: {e}")
        sys.exit(1)

    print("\n" + "=" * 50)
    if data is None:
        print("RESULT: No data returned (scraper returned None)")
    else:
        print("RESULT: Success!")
        print(f"  report_date:  {data['report_date']}")
        print(f"  overall_risk: {data['overall_risk']}")
        print(f"  tree_pollen:  {data['tree_pollen']}")
        print(f"  grass_pollen: {data['grass_pollen']}")
        print(f"  weed_pollen:  {data['weed_pollen']}")
        print(f"  mould_spores: {data['mould_spores']}")
        print(f"  summary:      {data['summary'][:120]}..." if len(data.get('summary', '')) > 120 else f"  summary:      {data.get('summary', '')}")
