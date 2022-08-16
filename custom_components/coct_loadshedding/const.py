"""Constants for coct loadshedding interface"""
# Base component constants
NAME = "CoCT Loadshedding Interface"
DOMAIN = "coct_loadshedding"
DOMAIN_DATA = f"{DOMAIN}_data"
VERSION = "1.0.5"

ISSUE_URL = "https://github.com/tinuva/ha-coct-loadshedding/issues"

# Icons
ICON = "mdi:lightning-bolt"

# Platforms
SENSOR = "sensor"
PLATFORMS = [SENSOR]

# Configuration and options
CONF_ENABLED = "enabled"
CONF_SCAN_PERIOD = "scan_period"
CONF_AREA = "coct_area"

# Defaults
DEFAULT_SCAN_PERIOD = 900
MIN_SCAN_PERIOD = 30
DEFAULT_AREA = 0

# Defaults
DEFAULT_NAME = DOMAIN

# Loadshedding shedule contants
NUM_DAY_GROUPS = 16
NUM_TIME_SLOTS = 12
NUM_AREA_CODES = 16

HIGHEST_STAGE = 8
MAX_MONTH_DAY = 31

DAY_AREA_EXTRA_INCREMENTS = [5, 9]
DAY_AREA_EXTR_INCREMENTS_STAGE_LOWER = [13]

STAGE_STARTING_AREAS = {
	1: 1,
	2: 9,
	3: 13,
	4: 5,
	5: 2,
	6: 10,
	7: 14,
	8: 6
}

TIME_SLOT_HOURS = 2
TIME_SLOT_MINUTES = 30

# Defaults
STARTUP_MESSAGE = f"""
-------------------------------------------------------------------
{NAME}
Version: {VERSION}
Welcome to the CoCT Loadshedding Interface!
If you have any issues with this you need to open an issue here:
{ISSUE_URL}
-------------------------------------------------------------------
"""
