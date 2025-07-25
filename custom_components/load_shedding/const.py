"""Constants for LoadShedding integration."""
from __future__ import annotations

from typing import Final

API: Final = "API"
ATTRIBUTION: Final = "Data provided by {provider}"
DOMAIN: Final = "load_shedding"
MAX_FORECAST_DAYS: Final = 7
NAME: Final = "Load Shedding"
MANUFACTURER: Final = "@wernerhp"
VERSION: Final = "1.5.2"
DEFAULT_SCAN_INTERVAL: Final = 60  # 60sec / every minute
AREA_UPDATE_INTERVAL: Final = 86400  # 60sec * 60min * 24h / every day
QUOTA_UPDATE_INTERVAL: Final = 1800  # 60sec * 60min * 0.5 / every half hour
STAGE_UPDATE_INTERVAL: Final = 3600  # 60sec * 60min       / every hourly

CONF_DEFAULT_SCHEDULE_STAGE: Final = "default_schedule_stage"
CONF_MUNICIPALITY: Final = "municipality"
CONF_OPTIONS: Final = "options"
CONF_PROVIDER: Final = "provider"
CONF_PROVIDER_ID: Final = "provider_id"
CONF_PROVINCE: Final = "province"
CONF_PROVINCE_ID: Final = "province_id"
CONF_SCHEDULE: Final = "schedule"
CONF_SCHEDULES: Final = "schedules"
CONF_ACTION = "action"
CONF_ADD_AREA = "add_area"
CONF_DELETE_AREA = "delete_area"
CONF_SETUP_API = "setup_api"
CONF_MULTI_STAGE_EVENTS = "multi_stage_events"
CONF_MIN_EVENT_DURATION = "min_event_duration"
CONF_API_KEY: Final = "api_key"
CONF_AREA: Final = "area"
CONF_AREAS: Final = "areas"
CONF_AREA_ID: Final = "area_id"
CONF_SEARCH: Final = "search"
CONF_STAGE: Final = "stage"
CONF_STAGE_COCT: Final = "coct_stage"

CONF_COCT: Final = "coct"
CONF_ESKOM: Final = "eskom"

ATTR_AREA: Final = "area"
ATTR_AREAS: Final = "areas"
ATTR_AREA_ID: Final = "area_id"
ATTR_CURRENT: Final = "current"
ATTR_END_IN: Final = "ends_in"
ATTR_END_TIME: Final = "end_time"
ATTR_EVENTS: Final = "events"
ATTR_FORECAST: Final = "forecast"
ATTR_LAST_UPDATE: Final = "last_update"
ATTR_NEXT: Final = "next"
ATTR_NEXT_END_TIME: Final = "next_end_time"
ATTR_NEXT_STAGE: Final = "next_stage"
ATTR_NEXT_START_TIME: Final = "next_start_time"
ATTR_PLANNED: Final = "planned"
ATTR_QUOTA: Final = "quota"
ATTR_SCHEDULE: Final = "schedule"
ATTR_SCHEDULES: Final = "schedules"
ATTR_SCHEDULE_STAGE: Final = "schedule_stage"
ATTR_STAGE: Final = "stage"
ATTR_STAGE_DATA: Final = "stage_data"
ATTR_STAGE_FORECAST: Final = "stage_forecast"
ATTR_START_IN: Final = "starts_in"
ATTR_START_TIME: Final = "start_time"
ATTR_TIME_UNTIL: Final = "time_until"
