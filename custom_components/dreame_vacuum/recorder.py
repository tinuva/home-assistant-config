"""Integration platform for recorder."""

from __future__ import annotations

from homeassistant.core import HomeAssistant, callback

from .dreame import DreameVacuumProperty, DreameVacuumAutoSwitchProperty, DreameVacuumAIProperty
from .dreame.const import (
    ATTR_ROOMS,
    ATTR_CURRENT_SEGMENT,
    ATTR_SELECTED_MAP,
    ATTR_SELECTED_MAP_ID,
    ATTR_SELECTED_MAP_INDEX,
    ATTR_DID,
    ATTR_STATUS,
    ATTR_CLEANING_MODE,
    ATTR_SUCTION_LEVEL,
    ATTR_WATER_TANK,
    ATTR_CLEANING_TIME,
    ATTR_CLEANED_AREA,
    ATTR_MOP_PAD_HUMIDITY,
    ATTR_SELF_CLEAN_AREA,
    ATTR_PREVIOUS_SELF_CLEAN_AREA,
    ATTR_SELF_CLEAN_AREA_MAX,
    ATTR_SELF_CLEAN_AREA_MIN,
    ATTR_SELF_CLEAN_TIME,
    ATTR_PREVIOUS_SELF_CLEAN_TIME,
    ATTR_SELF_CLEAN_TIME_MIN,
    ATTR_SELF_CLEAN_TIME_MAX,
    ATTR_MOP_CLEAN_FREQUENCY,
    ATTR_MOP_PAD,
    ATTR_CALIBRATION,
    ATTR_SELECTED,
    ATTR_CLEANING_HISTORY_PICTURE,
    ATTR_CRUISING_HISTORY_PICTURE,
    ATTR_OBSTACLE_PICTURE,
    ATTR_RECOVERY_MAP_PICTURE,
    ATTR_RECOVERY_MAP_FILE,
    ATTR_WIFI_MAP_PICTURE,
    ATTR_VACUUM_STATE,
    ATTR_MAPPING_AVAILABLE,
    ATTR_WASHING_AVAILABLE,
    ATTR_DRYING_AVAILABLE,
    ATTR_DRAINING_AVAILABLE,
    ATTR_DUST_COLLECTION_AVAILABLE,
    ATTR_SEGMENT_CLEANING,
    ATTR_ZONE_CLEANING,
    ATTR_SPOT_CLEANING,
    ATTR_CRUSING,
    ATTR_HAS_SAVED_MAP,
    ATTR_HAS_TEMPORARY_MAP,
    ATTR_AUTO_EMPTY_MODE,
    ATTR_CLEANGENIUS,
    ATTR_OFF_PEAK_CHARGING,
    ATTR_OFF_PEAK_CHARGING_START,
    ATTR_OFF_PEAK_CHARGING_END,
    ATTR_CARPET_AVOIDANCE,
    ATTR_FLOOR_DIRECTION_CLEANING_AVAILABLE,
    ATTR_CAPABILITIES,
    ATTR_COLOR_SCHEME,
)

from .dreame.types import (
    ATTR_ROBOT_POSITION,
    ATTR_ROOM_ICON,
    ATTR_ROTATION,
    ATTR_UPDATED,
    ATTR_FRAME_ID,
)

CAMERA_UNRECORDED_ATTRIBUTES = {
    "access_token",
    "entity_picture",
    ATTR_ROOMS,
    ATTR_CALIBRATION,
    ATTR_SELECTED,
    ATTR_CLEANING_HISTORY_PICTURE,
    ATTR_CRUISING_HISTORY_PICTURE,
    ATTR_OBSTACLE_PICTURE,
    ATTR_RECOVERY_MAP_PICTURE,
    ATTR_RECOVERY_MAP_FILE,
    ATTR_WIFI_MAP_PICTURE,
    ATTR_ROBOT_POSITION,
    ATTR_ROOM_ICON,
    ATTR_ROTATION,
    ATTR_UPDATED,
    ATTR_FRAME_ID,
    ATTR_COLOR_SCHEME,
}

VACUUM_UNRECORDED_ATTRIBUTES = {
    ATTR_CURRENT_SEGMENT,
    ATTR_SELECTED_MAP,
    ATTR_SELECTED_MAP_ID,
    ATTR_SELECTED_MAP_INDEX,
    ATTR_DID,
    ATTR_STATUS,
    ATTR_CLEANING_MODE,
    ATTR_SUCTION_LEVEL,
    ATTR_WATER_TANK,
    ATTR_CLEANING_TIME,
    ATTR_CLEANED_AREA,
    ATTR_MOP_PAD_HUMIDITY,
    ATTR_SELF_CLEAN_AREA,
    ATTR_PREVIOUS_SELF_CLEAN_AREA,
    ATTR_SELF_CLEAN_AREA_MAX,
    ATTR_SELF_CLEAN_AREA_MIN,
    ATTR_SELF_CLEAN_TIME,
    ATTR_PREVIOUS_SELF_CLEAN_TIME,
    ATTR_SELF_CLEAN_TIME_MIN,
    ATTR_SELF_CLEAN_TIME_MAX,
    ATTR_MOP_CLEAN_FREQUENCY,
    ATTR_MOP_PAD,
    ATTR_VACUUM_STATE,
    ATTR_MAPPING_AVAILABLE,
    ATTR_WASHING_AVAILABLE,
    ATTR_DRYING_AVAILABLE,
    ATTR_DRAINING_AVAILABLE,
    ATTR_DUST_COLLECTION_AVAILABLE,
    ATTR_SEGMENT_CLEANING,
    ATTR_ZONE_CLEANING,
    ATTR_SPOT_CLEANING,
    ATTR_CRUSING,
    ATTR_HAS_SAVED_MAP,
    ATTR_HAS_TEMPORARY_MAP,
    ATTR_AUTO_EMPTY_MODE,
    ATTR_CLEANGENIUS,
    ATTR_OFF_PEAK_CHARGING,
    ATTR_OFF_PEAK_CHARGING_START,
    ATTR_OFF_PEAK_CHARGING_END,
    ATTR_CARPET_AVOIDANCE,
    ATTR_FLOOR_DIRECTION_CLEANING_AVAILABLE,
    ATTR_CAPABILITIES,
    "fan_speed_list",
    "fan_speed",
    "battery_level",
    "battery_icon",
    "mop_wash_level_list",
    "mop_pad_humidity_list",
    "cleaning_mode_list",
    "suction_level_list",
    "water_volume_list",
    "cleaning_route_list",
    "cleangenius_list",
    "mopping_type_list",
    "auto_empty_mode",
    "auto_empty_mode_list",
    "self_clean_frequency_list",
    "carpet_cleaning_list",
    "carpet_sensivity_list",
    "voice_assistant_language_list",
    "mop_pad_swing_list",
    "auto_recleaning_list",
    "auto_rewashing_list",
    DreameVacuumProperty.STATUS.name.lower(),
    DreameVacuumProperty.SUCTION_LEVEL.name.lower(),
    DreameVacuumProperty.WATER_VOLUME.name.lower(),
    DreameVacuumProperty.CLEANING_MODE.name.lower(),
    DreameVacuumProperty.MOP_WASH_LEVEL.name.lower(),
    DreameVacuumProperty.AUTO_DUST_COLLECTING.name.lower(),
    DreameVacuumProperty.TIGHT_MOPPING.name.lower(),
    DreameVacuumProperty.ERROR.name.lower(),
    DreameVacuumProperty.CLEANING_TIME.name.lower(),
    DreameVacuumProperty.CLEANED_AREA.name.lower(),
    DreameVacuumProperty.MAIN_BRUSH_TIME_LEFT.name.lower(),
    DreameVacuumProperty.MAIN_BRUSH_LEFT.name.lower(),
    DreameVacuumProperty.SIDE_BRUSH_TIME_LEFT.name.lower(),
    DreameVacuumProperty.SIDE_BRUSH_LEFT.name.lower(),
    DreameVacuumProperty.FILTER_LEFT.name.lower(),
    DreameVacuumProperty.FILTER_TIME_LEFT.name.lower(),
    DreameVacuumProperty.SENSOR_DIRTY_LEFT.name.lower(),
    DreameVacuumProperty.SENSOR_DIRTY_TIME_LEFT.name.lower(),
    DreameVacuumProperty.TANK_FILTER_LEFT.name.lower(),
    DreameVacuumProperty.TANK_FILTER_TIME_LEFT.name.lower(),
    DreameVacuumProperty.MOP_PAD_LEFT.name.lower(),
    DreameVacuumProperty.MOP_PAD_TIME_LEFT.name.lower(),
    DreameVacuumProperty.SILVER_ION_LEFT.name.lower(),
    DreameVacuumProperty.SILVER_ION_TIME_LEFT.name.lower(),
    DreameVacuumProperty.DETERGENT_LEFT.name.lower(),
    DreameVacuumProperty.DETERGENT_TIME_LEFT.name.lower(),
    DreameVacuumProperty.SQUEEGEE_LEFT.name.lower(),
    DreameVacuumProperty.SQUEEGEE_TIME_LEFT.name.lower(),
    DreameVacuumProperty.ONBOARD_DIRTY_WATER_TANK_LEFT.name.lower(),
    DreameVacuumProperty.ONBOARD_DIRTY_WATER_TANK_TIME_LEFT.name.lower(),
    DreameVacuumProperty.DIRTY_WATER_TANK_LEFT.name.lower(),
    DreameVacuumProperty.DIRTY_WATER_TANK_TIME_LEFT.name.lower(),
    DreameVacuumProperty.TOTAL_CLEANED_AREA.name.lower(),
    DreameVacuumProperty.TOTAL_CLEANING_TIME.name.lower(),
    DreameVacuumProperty.CLEANING_COUNT.name.lower(),
    DreameVacuumProperty.CUSTOMIZED_CLEANING.name.lower(),
    DreameVacuumProperty.SERIAL_NUMBER.name.lower(),
    DreameVacuumProperty.NATION_MATCHED.name.lower(),
    DreameVacuumProperty.TOTAL_RUNTIME.name.lower(),
    DreameVacuumProperty.TOTAL_CRUISE_TIME.name.lower(),
    DreameVacuumProperty.DRYING_PROGRESS.name.lower(),
    DreameVacuumProperty.CLEANING_PROGRESS.name.lower(),
    DreameVacuumProperty.INTELLIGENT_RECOGNITION.name.lower(),
    DreameVacuumProperty.MULTI_FLOOR_MAP.name.lower(),
    DreameVacuumProperty.WETNESS_LEVEL.name.lower(),
    DreameVacuumProperty.AUTO_EMPTY_FREQUENCY.name.lower(),
    DreameVacuumProperty.AUTO_DUST_COLLECTING.name.lower(),
    DreameVacuumProperty.AUTO_EMPTY_STATUS.name.lower(),
    DreameVacuumProperty.SELF_CLEAN.name.lower(),
    DreameVacuumProperty.DRYING_TIME.name.lower(),
    DreameVacuumProperty.OBSTACLE_AVOIDANCE.name.lower(),
    DreameVacuumProperty.VOLUME.name.lower(),
    DreameVacuumProperty.CHILD_LOCK.name.lower(),
    DreameVacuumProperty.RESUME_CLEANING.name.lower(),
    DreameVacuumProperty.CARPET_RECOGNITION.name.lower(),
    DreameVacuumProperty.CARPET_BOOST.name.lower(),
    DreameVacuumProperty.CARPET_SENSITIVITY.name.lower(),
    DreameVacuumProperty.MAP_SAVING.name.lower(),
    DreameVacuumProperty.AUTO_MOUNT_MOP.name.lower(),
    DreameVacuumProperty.AUTO_ADD_DETERGENT.name.lower(),
    DreameVacuumProperty.CARPET_CLEANING.name.lower(),
    DreameVacuumProperty.MAP_SAVING.name.lower(),
    DreameVacuumProperty.VOICE_ASSISTANT.name.lower(),
    DreameVacuumProperty.VOICE_ASSISTANT_LANGUAGE.name.lower(),
    DreameVacuumProperty.CLEAN_CARPETS_FIRST.name.lower(),
    DreameVacuumAIProperty.AI_OBSTACLE_DETECTION.name.lower(),
    DreameVacuumAIProperty.AI_PET_DETECTION.name.lower(),
    DreameVacuumAIProperty.AI_OBSTACLE_PICTURE.name.lower(),
    DreameVacuumAIProperty.AI_OBSTACLE_IMAGE_UPLOAD.name.lower(),
    DreameVacuumAIProperty.PET_FOCUSED_DETECTION.name.lower(),
    DreameVacuumAIProperty.LARGE_PARTICLES_BOOST.name.lower(),
    DreameVacuumAutoSwitchProperty.AUTO_RECLEANING.name.lower(),
    DreameVacuumAutoSwitchProperty.AUTO_REWASHING.name.lower(),
    DreameVacuumAutoSwitchProperty.STREAMING_VOICE_PROMPT.name.lower(),
    DreameVacuumAutoSwitchProperty.MOP_PAD_SWING.name.lower(),
    DreameVacuumAutoSwitchProperty.INTENSIVE_CARPET_CLEANING.name.lower(),
    DreameVacuumAutoSwitchProperty.FLOOR_DIRECTION_CLEANING.name.lower(),
    DreameVacuumAutoSwitchProperty.GAP_CLEANING_EXTENSION.name.lower(),
    DreameVacuumAutoSwitchProperty.MOPPING_UNDER_FURNITURES.name.lower(),
    DreameVacuumAutoSwitchProperty.WIDER_CORNER_COVERAGE.name.lower(),
    DreameVacuumAutoSwitchProperty.CLEANING_ROUTE.name.lower(),
    DreameVacuumAutoSwitchProperty.ULTRA_CLEAN_MODE.name.lower(),
    DreameVacuumAutoSwitchProperty.SELF_CLEAN_FREQUENCY.name.lower(),
    DreameVacuumAutoSwitchProperty.MOPPING_MODE.name.lower(),
    DreameVacuumAutoSwitchProperty.CUSTOM_MOPPING_MODE.name.lower(),
    DreameVacuumAutoSwitchProperty.UV_STERILIZATION.name.lower(),
    DreameVacuumAutoSwitchProperty.HOT_WASHING.name.lower(),
    DreameVacuumAutoSwitchProperty.MAX_SUCTION_POWER.name.lower(),
    DreameVacuumAutoSwitchProperty.CLEANGENIUS.name.lower(),
    DreameVacuumAutoSwitchProperty.MOPPING_TYPE.name.lower(),
    DreameVacuumAutoSwitchProperty.AUTO_DRYING.name.lower(),
    DreameVacuumAutoSwitchProperty.COLLISION_AVOIDANCE.name.lower(),
    DreameVacuumAutoSwitchProperty.FILL_LIGHT.name.lower(),
}


@callback
def exclude_attributes(hass: HomeAssistant) -> set[str]:
    """Exclude vacuum, camera and sensor attributes from being recorded in the database."""
    return frozenset(CAMERA_UNRECORDED_ATTRIBUTES) | frozenset(VACUUM_UNRECORDED_ATTRIBUTES)