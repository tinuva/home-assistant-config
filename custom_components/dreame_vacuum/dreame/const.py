from typing import Final
from .types import (
    DreameVacuumChargingStatus,
    DreameVacuumTaskStatus,
    DreameVacuumState,
    DreameVacuumWaterTank,
    DreameVacuumCarpetSensitivity,
    DreameVacuumCarpetCleaning,
    DreameVacuumStatus,
    DreameVacuumErrorCode,
    DreameVacuumRelocationStatus,
    DreameVacuumDustCollection,
    DreameVacuumAutoEmptyStatus,
    DreameVacuumMapRecoveryStatus,
    DreameVacuumMapBackupStatus,
    DreameVacuumSelfWashBaseStatus,
    DreameVacuumSuctionLevel,
    DreameVacuumWaterVolume,
    DreameVacuumMopPadHumidity,
    DreameVacuumCleaningMode,
    DreameVacuumMopWashLevel,
    DreameVacuumMoppingType,
    DreameVacuumStreamStatus,
    DreameVacuumVoiceAssistantLanguage,
    DreameVacuumWiderCornerCoverage,
    DreameVacuumMopPadSwing,
    DreameVacuumSecondCleaning,
    DreameVacuumCleaningRoute,
    DreameVacuumCustomMoppingRoute,
    DreameVacuumSelfCleanFrequency,
    DreameVacuumAutoEmptyMode,
    DreameVacuumCleanGenius,
    DreameVacuumFloorMaterial,
    DreameVacuumFloorMaterialDirection,
    DreameVacuumSegmentVisibility,
    DreameVacuumDrainageStatus,
    DreameVacuumLowWaterWarning,
    DreameVacuumTaskType,
    DreameVacuumProperty,
    DreameVacuumAIProperty,
    DreameVacuumStrAIProperty,
    DreameVacuumAutoSwitchProperty,
    DreameVacuumAction,
)

SUCTION_LEVEL_QUIET: Final = "quiet"
SUCTION_LEVEL_STANDARD: Final = "standard"
SUCTION_LEVEL_STRONG: Final = "strong"
SUCTION_LEVEL_TURBO: Final = "turbo"

WATER_VOLUME_LOW: Final = "low"
WATER_VOLUME_MEDIUM: Final = "medium"
WATER_VOLUME_HIGH: Final = "high"

MOP_PAD_HUMIDITY_SLIGHTLY_DRY: Final = "slightly_dry"
MOP_PAD_HUMIDITY_MOIST: Final = "moist"
MOP_PAD_HUMIDITY_WET: Final = "wet"

CLEANING_MODE_SWEEPING: Final = "sweeping"
CLEANING_MODE_MOPPING: Final = "mopping"
CLEANING_MODE_SWEEPING_AND_MOPPING: Final = "sweeping_and_mopping"
CLEANING_MODE_MOPPING_AFTER_SWEEPING: Final = "mopping_after_sweeping"


STATE_NOT_SET: Final = "not_set"
STATE_UNKNOWN: Final = "unknown"
STATE_SWEEPING: Final = "sweeping"
STATE_IDLE: Final = "idle"
STATE_PAUSED: Final = "paused"
STATE_RETURNING: Final = "returning"
STATE_CHARGING: Final = "charging"
STATE_ERROR: Final = "error"
STATE_MOPPING: Final = "mopping"
STATE_DRYING: Final = "drying"
STATE_WASHING: Final = "washing"
STATE_RETURNING_WASH: Final = "returning_to_wash"
STATE_BUILDING: Final = "building"
STATE_SWEEPING_AND_MOPPING: Final = "sweeping_and_mopping"
STATE_CHARGING_COMPLETED: Final = "charging_completed"
STATE_UPGRADING: Final = "upgrading"
STATE_CLEAN_SUMMON: Final = "clean_summon"
STATE_STATION_RESET: Final = "station_reset"
STATE_RETURNING_INSTALL_MOP: Final = "returning_install_mop"
STATE_RETURNING_REMOVE_MOP: Final = "returning_remove_mop"
STATE_WATER_CHECK: Final = "water_check"
STATE_CLEAN_ADD_WATER: Final = "clean_add_water"
STATE_WASHING_PAUSED: Final = "washing_paused"
STATE_AUTO_EMPTYING: Final = "auto_emptying"
STATE_REMOTE_CONTROL: Final = "remote_control"
STATE_SMART_CHARGING: Final = "smart_charging"
STATE_SECOND_CLEANING: Final = "second_cleaning"
STATE_HUMAN_FOLLOWING: Final = "human_following"
STATE_SPOT_CLEANING: Final = "spot_cleaning"
STATE_RETURNING_AUTO_EMPTY: Final = "returning_auto_empty"
STATE_WAITING_FOR_TASK: Final = "waiting_for_task"
STATE_STATION_CLEANING: Final = "station_cleaning"
STATE_RETURNING_TO_DRAIN: Final = "returning_to_drain"
STATE_DRAINING: Final = "draining"
STATE_AUTO_WATER_DRAINING: Final = "auto_water_draining"
STATE_SHORTCUT: Final = "shortcut"
STATE_MONITORING: Final = "monitoring"
STATE_MONITORING_PAUSED: Final = "monitoring_paused"
STATE_UNAVAILABLE: Final = "unavailable"
STATE_OFF: Final = "off"

TASK_STATUS_COMPLETED: Final = "completed"
TASK_STATUS_AUTO_CLEANING: Final = "cleaning"
TASK_STATUS_ZONE_CLEANING: Final = "zone_cleaning"
TASK_STATUS_SEGMENT_CLEANING: Final = "room_cleaning"
TASK_STATUS_SPOT_CLEANING: Final = "spot_cleaning"
TASK_STATUS_FAST_MAPPING: Final = "fast_mapping"
TASK_STATUS_AUTO_CLEANING_PAUSE: Final = "cleaning_paused"
TASK_STATUS_SEGMENT_CLEANING_PAUSE: Final = "room_cleaning_paused"
TASK_STATUS_ZONE_CLEANING_PAUSE: Final = "zone_cleaning_paused"
TASK_STATUS_SPOT_CLEANING_PAUSE: Final = "spot_cleaning_paused"
TASK_STATUS_MAP_CLEANING_PAUSE: Final = "map_cleaning_paused"
TASK_STATUS_DOCKING_PAUSE: Final = "docking_paused"
TASK_STATUS_MOPPING_PAUSE: Final = "mopping_paused"
TASK_STATUS_ZONE_MOPPING_PAUSE: Final = "zone_mopping_paused"
TASK_STATUS_SEGMENT_MOPPING_PAUSE: Final = "room_mopping_paused"
TASK_STATUS_AUTO_MOPPING_PAUSE: Final = "mopping_paused"
TASK_STATUS_CRUISING_PATH: Final = "cruising_path"
TASK_STATUS_CRUISING_PATH_PAUSED: Final = "cruising_path_paused"
TASK_STATUS_CRUISING_POINT: Final = "cruising_point"
TASK_STATUS_CRUISING_POINT_PAUSED: Final = "cruising_point_paused"
TASK_STATUS_SUMMON_CLEAN_PAUSED: Final = "summon_clean_paused"
TASK_STATUS_RETURNING_INSTALL_MOP: Final = "returning_to_install_mop"
TASK_STATUS_RETURNING_REMOVE_MOP: Final = "returning_to_remove_mop"

STATUS_CLEANING: Final = "cleaning"
STATUS_FOLLOW_WALL: Final = "follow_wall_cleaning"
STATUS_CHARGING: Final = "charging"
STATUS_OTA: Final = "ota"
STATUS_FCT: Final = "fct"
STATUS_WIFI_SET: Final = "wifi_set"
STATUS_POWER_OFF: Final = "power_off"
STATUS_FACTORY: Final = "factory"
STATUS_ERROR: Final = "error"
STATUS_REMOTE_CONTROL: Final = "remote_control"
STATUS_SLEEP: Final = "sleeping"
STATUS_SELF_REPAIR: Final = "self_repair"
STATUS_FACTORY_FUNC_TEST: Final = "factory_test"
STATUS_STANDBY: Final = "standby"
STATUS_SEGMENT_CLEANING: Final = "room_cleaning"
STATUS_ZONE_CLEANING: Final = "zone_cleaning"
STATUS_SPOT_CLEANING: Final = "spot_cleaning"
STATUS_FAST_MAPPING: Final = "fast_mapping"
STATUS_CRUISING_PATH: Final = "cruising_path"
STATUS_CRUISING_POINT: Final = "cruising_point"
STATUS_SUMMON_CLEAN: Final = "summon_clean"
STATUS_SHORTCUT: Final = "shortcut"
STATUS_PERSON_FOLLOW: Final = "person_follow"
STATUS_WATER_CHECK: Final = "water_check"

RELOCATION_STATUS_LOCATED: Final = "located"
RELOCATION_STATUS_LOCATING: Final = "locating"
RELOCATION_STATUS_FAILED: Final = "failed"
RELOCATION_STATUS_SUCESS: Final = "success"

CHARGING_STATUS_CHARGING: Final = "charging"
CHARGING_STATUS_NOT_CHARGING: Final = "not_charging"
CHARGING_STATUS_RETURN_TO_CHARGE: Final = "return_to_charge"
CHARGING_STATUS_CHARGING_COMPLETED: Final = "charging_completed"

DUST_COLLECTION_NOT_AVAILABLE: Final = "not_available"
DUST_COLLECTION_AVAILABLE: Final = "available"

AUTO_EMPTY_STATUS_ACTIVE: Final = "active"
AUTO_EMPTY_STATUS_NOT_PERFORMED: Final = "not_performed"

MAP_RECOVERY_STATUS_IDLE: Final = "idle"
MAP_RECOVERY_STATUS_RUNNING: Final = "running"
MAP_RECOVERY_STATUS_SUCCESS: Final = "success"
MAP_RECOVERY_STATUS_FAIL: Final = "fail"

MAP_BACKUP_STATUS_IDLE: Final = "idle"
MAP_BACKUP_STATUS_RUNNING: Final = "running"
MAP_BACKUP_STATUS_SUCCESS: Final = "success"
MAP_BACKUP_STATUS_FAIL: Final = "fail"

SELF_WASH_BASE_STATUS_WASHING: Final = "washing"
SELF_WASH_BASE_STATUS_DRYING: Final = "drying"
SELF_WASH_BASE_STATUS_PAUSED: Final = "paused"
SELF_WASH_BASE_STATUS_RETURNING: Final = "returning"
SELF_WASH_BASE_STATUS_CLEAN_ADD_WATER: Final = "clean_add_water"
SELF_WASH_BASE_STATUS_ADDING_WATER: Final = "adding_water"

MOP_WASH_LEVEL_DEEP: Final = "deep"
MOP_WASH_LEVEL_DAILY: Final = "daily"
MOP_WASH_LEVEL_WATER_SAVING: Final = "water_saving"

MOPPING_TYPE_DEEP: Final = "deep"
MOPPING_TYPE_DAILY: Final = "daily"
MOPPING_TYPE_ACCURATE: Final = "accurate"

STREAM_STATUS_VIDEO: Final = "video"
STREAM_STATUS_AUDIO: Final = "audio"
STREAM_STATUS_RECORDING: Final = "recording"

VOICE_ASSISTANT_LANGUAGE_DEFAULT: Final = "default"
VOICE_ASSISTANT_LANGUAGE_ENGLISH: Final = "english"
VOICE_ASSISTANT_LANGUAGE_GERMAN: Final = "german"
VOICE_ASSISTANT_LANGUAGE_CHINESE: Final = "chinese"

WATER_TANK_INSTALLED: Final = "installed"
WATER_TANK_NOT_INSTALLED: Final = "not_installed"
WATER_TANK_MOP_INSTALLED: Final = "mop_installed"
WATER_TANK_MOP_IN_STATION: Final = "mop_in_station"

CARPET_SENSITIVITY_LOW: Final = "low"
CARPET_SENSITIVITY_MEDIUM: Final = "medium"
CARPET_SENSITIVITY_HIGH: Final = "high"

CARPET_CLEANING_AVOIDANCE: Final = "avoidance"
CARPET_CLEANING_ADAPTATION: Final = "adaptation"
CARPET_CLEANING_REMOVE_MOP: Final = "remove_mop"
CARPET_CLEANING_ADAPTATION_WITHOUT_ROUTE: Final = "adaptation_without_route"
CARPET_CLEANING_VACUUM_AND_MOP: Final = "vacuum_and_mop"
CARPET_CLEANING_IGNORE: Final = "ignore"

WIDER_CORNER_COVERAGE_LOW_FREQUENCY: Final = "low_frequency"
WIDER_CORNER_COVERAGE_HIGH_FREQUENCY: Final = "high_frequency"

MOP_PAD_SWING_AUTO: Final = "auto"
MOP_PAD_SWING_DAILY: Final = "daily"
MOP_PAD_SWING_WEEKLY: Final = "weekly"

SECOND_CLEANING_IN_DEEP_MODE: Final = "in_deep_mode"
SECOND_CLEANING_IN_ALL_MODES: Final = "in_all_modes"

ROUTE_QUICK: Final = "quick"
ROUTE_STANDARD: Final = "standard"
ROUTE_INTENSIVE: Final = "intensive"
ROUTE_DEEP: Final = "deep"
ROUTE_OFF: Final = "off"

CLEANGENIUS_ROUTINE_CLEANING: Final = "routine_cleaning"
CLEANGENIUS_DEEP_CLEANING: Final = "deep_cleaning"

SELF_CLEAN_FREQUENCY_BY_AREA: Final = "by_area"
SELF_CLEAN_FREQUENCY_BY_TIME: Final = "by_time"
SELF_CLEAN_FREQUENCY_BY_ROOM: Final = "by_room"

AUTO_EMPTY_MODE_STANDARD: Final = "standard"
AUTO_EMPTY_MODE_HIGH_FREQUENCY: Final = "high_frequency"
AUTO_EMPTY_MODE_LOW_FREQUENCY: Final = "low_frequency"

FLOOR_MATERIAL_NONE: Final = "none"
FLOOR_MATERIAL_TILE: Final = "tile"
FLOOR_MATERIAL_WOOD: Final = "wood"

FLOOR_MATERIAL_DIRECTION_VERTICAL: Final = "vertical"
FLOOR_MATERIAL_DIRECTION_HORIZONTAL: Final = "horizontal"

SEGMENT_VISIBILITY_VISIBLE: Final = "visible"
SEGMENT_VISIBILITY_HIDDEN: Final = "hidden"

DRAINAGE_STATUS_DRAINING: Final = "draining"
DRAINAGE_STATUS_DRAINING_SUCCESS: Final = "draining_successful"
DRAINAGE_STATUS_DRAINING_FAILED: Final = "draining_failed"

LOW_WATER_WARNING_NO_WARNING: Final = "no_warning"
LOW_WATER_WARNING_NO_WATER_LEFT_DISMISS: Final = "no_water_left_dismiss"
LOW_WATER_WARNING_NO_WATER_LEFT: Final = "no_water_left"
LOW_WATER_WARNING_NO_WATER_LEFT_AFTER_CLEAN: Final = "no_water_left_after_clean"
LOW_WATER_WARNING_NO_WATER_FOR_CLEAN: Final = "no_water_for_clean"
LOW_WATER_WARNING_LOW_WATER: Final = "low_water"
LOW_WATER_WARNING_TANK_NOT_INSTALLED: Final = "tank_not_installed"

TASK_TYPE_IDLE: Final = "idle"
TASK_TYPE_STANDARD: Final = "standard"
TASK_TYPE_STANDARD_PAUSED: Final = "standard_paused"
TASK_TYPE_CUSTOM: Final = "custom"
TASK_TYPE_CUSTOM_PAUSED: Final = "custom_paused"
TASK_TYPE_SHORTCUT: Final = "shortcut"
TASK_TYPE_SHORTCUT_PAUSED: Final = "shortcut_paused"
TASK_TYPE_SCHEDULED: Final = "scheduled"
TASK_TYPE_SCHEDULED_PAUSED: Final = "scheduled_paused"
TASK_TYPE_SMART: Final = "smart"
TASK_TYPE_SMART_PAUSED: Final = "smart_paused"
TASK_TYPE_PARTIAL: Final = "partial"
TASK_TYPE_PARTIAL_PAUSED: Final = "partial_paused"
TASK_TYPE_SUMMON: Final = "summon"
TASK_TYPE_SUMMON_PAUSED: Final = "summon_paused"
TASK_TYPE_WATER_STAIN: Final = "water_stain"
TASK_TYPE_WATER_STAIN_PAUSED: Final = "water_stain_paused"

ERROR_NO_ERROR: Final = "no_error"
ERROR_DROP: Final = "drop"
ERROR_CLIFF: Final = "cliff"
ERROR_BUMPER: Final = "bumper"
ERROR_GESTURE: Final = "gesture"
ERROR_BUMPER_REPEAT: Final = "bumper_repeat"
ERROR_DROP_REPEAT: Final = "drop_repeat"
ERROR_OPTICAL_FLOW: Final = "optical_flow"
ERROR_NO_BOX: Final = "no_box"
ERROR_NO_TANKBOX: Final = "no_tank_box"
ERROR_WATERBOX_EMPTY: Final = "water_box_empty"
ERROR_BOX_FULL: Final = "box_full"
ERROR_BRUSH: Final = "brush"
ERROR_SIDE_BRUSH: Final = "side_brush"
ERROR_FAN: Final = "fan"
ERROR_LEFT_WHEEL_MOTOR: Final = "left_wheel_motor"
ERROR_RIGHT_WHEEL_MOTOR: Final = "right_wheel_motor"
ERROR_TURN_SUFFOCATE: Final = "turn_suffocate"
ERROR_FORWARD_SUFFOCATE: Final = "forward_suffocate"
ERROR_CHARGER_GET: Final = "charger_get"
ERROR_BATTERY_LOW: Final = "battery_low"
ERROR_CHARGE_FAULT: Final = "charge_fault"
ERROR_BATTERY_PERCENTAGE: Final = "battery_percentage"
ERROR_HEART: Final = "heart"
ERROR_CAMERA_OCCLUSION: Final = "camera_occlusion"
ERROR_MOVE: Final = "move"
ERROR_FLOW_SHIELDING: Final = "flow_shielding"
ERROR_INFRARED_SHIELDING: Final = "infrared_shielding"
ERROR_CHARGE_NO_ELECTRIC: Final = "charge_no_electric"
ERROR_BATTERY_FAULT: Final = "battery_fault"
ERROR_FAN_SPEED_ERROR: Final = "fan_speed_error"
ERROR_LEFTWHELL_SPEED: Final = "left_wheell_speed"
ERROR_RIGHTWHELL_SPEED: Final = "right_wheell_speed"
ERROR_BMI055_ACCE: Final = "bmi055_acce"
ERROR_BMI055_GYRO: Final = "bmi055_gyro"
ERROR_XV7001: Final = "xv7001"
ERROR_LEFT_MAGNET: Final = "left_magnet"
ERROR_RIGHT_MAGNET: Final = "right_magnet"
ERROR_FLOW_ERROR: Final = "flow_error"
ERROR_INFRARED_FAULT: Final = "infrared_fault"
ERROR_CAMERA_FAULT: Final = "camera_fault"
ERROR_STRONG_MAGNET: Final = "strong_magnet"
ERROR_WATER_PUMP: Final = "water_pump"
ERROR_RTC: Final = "rtc"
ERROR_AUTO_KEY_TRIG: Final = "auto_key_trig"
ERROR_P3V3: Final = "p3v3"
ERROR_CAMERA_IDLE: Final = "camera_idle"
ERROR_BLOCKED: Final = "blocked"
ERROR_LDS_ERROR: Final = "lds_error"
ERROR_LDS_BUMPER: Final = "lds_bumper"
ERROR_FILTER_BLOCKED: Final = "filter_blocked"
ERROR_EDGE: Final = "edge"
ERROR_CARPET: Final = "carpet"
ERROR_LASER: Final = "laser"
ERROR_ULTRASONIC: Final = "ultrasonic"
ERROR_NO_GO_ZONE: Final = "no_go_zone"
ERROR_ROUTE: Final = "route"
ERROR_RESTRICTED: Final = "restricted"
ERROR_REMOVE_MOP: Final = "remove_mop"
ERROR_MOP_REMOVED: Final = "mop_removed"
ERROR_MOP_PAD_STOP_ROTATE: Final = "mop_pad_stop_rotate"
ERROR_MOP_INSTALL_FAILED: Final = "mop_install_failed"
ERROR_LOW_BATTERY_TURN_OFF: Final = "low_battery_turn_off"
ERROR_DIRTY_TANK_NOT_INSTALLED: Final = "dirty_tank_not_installed"
ERROR_ROBOT_IN_HIDDEN_ROOM: Final = "robot_in_hidden_room"
ERROR_BIN_FULL: Final = "bin_full"
ERROR_BIN_OPEN: Final = "bin_open"
ERROR_WATER_TANK: Final = "water_tank"
ERROR_DIRTY_WATER_TANK: Final = "dirty_water_tank"
ERROR_WATER_TANK_DRY: Final = "water_tank_dry"
ERROR_DIRTY_WATER_TANK_BLOCKED: Final = "dirty_water_tank_blocked"
ERROR_DIRTY_WATER_TANK_PUMP: Final = "dirty_water_tank_pump"
ERROR_MOP_PAD: Final = "mop_pad"
ERROR_WET_MOP_PAD: Final = "wet_mop_pad"
ERROR_CLEAN_MOP_PAD: Final = "clean_mop_pad"
ERROR_CLEAN_TANK_LEVEL: Final = "clean_tank_level"
ERROR_STATION_DISCONNECTED: Final = "station_disconnected"
ERROR_DIRTY_TANK_LEVEL: Final = "dirty_tank_level"
ERROR_WASHBOARD_LEVEL: Final = "washboard_level"
ERROR_NO_MOP_IN_STATION: Final = "no_mop_in_station"
ERROR_DUST_BAG_FULL: Final = "dust_bag_full"
ERROR_SELF_TEST_FAILED: Final = "self_test_failed"
ERROR_WASHBOARD_NOT_WORKING: Final = "washboard_not_working"
ERROR_RETURN_TO_CHARGE_FAILED: Final = "return_to_charge_failed"

ATTR_VALUE: Final = "value"
ATTR_CHARGING: Final = "charging"
ATTR_STARTED: Final = "started"
ATTR_PAUSED: Final = "paused"
ATTR_RUNNING: Final = "running"
ATTR_RETURNING_PAUSED: Final = "returning_paused"
ATTR_RETURNING: Final = "returning"
ATTR_MAPPING: Final = "mapping"
ATTR_MAPPING_AVAILABLE: Final = "mapping_available"
ATTR_WASHING_AVAILABLE: Final = "washing_available"
ATTR_DRYING_AVAILABLE: Final = "drying_available"
ATTR_DRAINING_AVAILABLE: Final = "draining_available"
ATTR_DUST_COLLECTION_AVAILABLE: Final = "dust_collection_available"
ATTR_ROOMS: Final = "rooms"
ATTR_CURRENT_SEGMENT: Final = "current_segment"
ATTR_SELECTED_MAP: Final = "selected_map"
ATTR_SELECTED_MAP_ID: Final = "selected_map_id"
ATTR_SELECTED_MAP_INDEX: Final = "selected_map_index"
ATTR_ID: Final = "id"
ATTR_NAME: Final = "name"
ATTR_ICON: Final = "icon"
ATTR_ORDER: Final = "order"
ATTR_DID: Final = "did"
ATTR_STATUS: Final = "status"
ATTR_CLEANING_MODE: Final = "cleaning_mode"
ATTR_SUCTION_LEVEL: Final = "suction_level"
ATTR_WATER_TANK: Final = "water_tank"
ATTR_COMPLETED: Final = "completed"
ATTR_TIMESTAMP: Final = "timestamp"
ATTR_CLEANING_TIME: Final = "cleaning_time"
ATTR_CLEANED_AREA: Final = "cleaned_area"
ATTR_MOP_PAD_HUMIDITY: Final = "mop_pad_humidity"
ATTR_SELF_CLEAN_AREA: Final = "self_clean_area"
ATTR_SELF_CLEAN_AREA_MIN: Final = "self_clean_area_min"
ATTR_SELF_CLEAN_AREA_MAX: Final = "self_clean_area_max"
ATTR_PREVIOUS_SELF_CLEAN_AREA: Final = "previous_self_clean_area"
ATTR_SELF_CLEAN_TIME: Final = "self_clean_time"
ATTR_PREVIOUS_SELF_CLEAN_TIME: Final = "previous_self_clean_time"
ATTR_SELF_CLEAN_TIME_MIN: Final = "self_clean_time_min"
ATTR_SELF_CLEAN_TIME_MAX: Final = "self_clean_time_max"
ATTR_MOP_CLEAN_FREQUENCY: Final = "mop_clean_frequency"
ATTR_MOP_PAD: Final = "mop_pad"
ATTR_CLEANING_SEQUENCE: Final = "cleaning_sequence"
ATTR_WASHING: Final = "washing"
ATTR_WASHING_PAUSED: Final = "washing_paused"
ATTR_DRYING: Final = "drying"
ATTR_DRAINING: Final = "draining"
ATTR_CLEANGENIUS: Final = "cleangenius_cleaning"
ATTR_OFF_PEAK_CHARGING: Final = "off_peak_charging"
ATTR_OFF_PEAK_CHARGING_START: Final = "off_peak_charging_start"
ATTR_OFF_PEAK_CHARGING_END: Final = "off_peak_charging_end"
ATTR_LOW_WATER: Final = "low_water"
ATTR_VACUUM_STATE: Final = "vacuum_state"
ATTR_DND: Final = "dnd"
ATTR_SHORTCUTS: Final = "shortcuts"
ATTR_CRUISING_TIME: Final = "cruising_time"
ATTR_CRUISING_TYPE: Final = "cruising_type"
ATTR_MAP_INDEX: Final = "map_index"
ATTR_MAP_NAME: Final = "map_name"
ATTR_CALIBRATION: Final = "calibration_points"
ATTR_SELECTED: Final = "selected"
ATTR_CLEANING_HISTORY_PICTURE: Final = "cleaning_history_picture"
ATTR_CRUISING_HISTORY_PICTURE: Final = "cruising_history_picture"
ATTR_OBSTACLE_PICTURE: Final = "obstacle_picture"
ATTR_RECOVERY_MAP_PICTURE: Final = "recovery_map_picture"
ATTR_RECOVERY_MAP_FILE: Final = "recovery_map_file"
ATTR_WIFI_MAP_PICTURE: Final = "wifi_map_picture"
ATTR_NEGLECTED_SEGMENTS: Final = "neglected_rooms"
ATTR_INTERRUPT_REASON: Final = "interrupt_reason"
ATTR_CLEANUP_METHOD: Final = "cleanup_method"
ATTR_SEGMENT_CLEANING: Final = "segment_cleaning"
ATTR_ZONE_CLEANING: Final = "zone_cleaning"
ATTR_SPOT_CLEANING: Final = "spot_cleaning"
ATTR_CRUSING: Final = "cruising"
ATTR_HAS_SAVED_MAP: Final = "has_saved_map"
ATTR_HAS_TEMPORARY_MAP: Final = "has_temporary_map"
ATTR_AUTO_EMPTY_MODE: Final = "auto_empty_mode"
ATTR_CARPET_AVOIDANCE: Final = "carpet_avoidance"
ATTR_FLOOR_DIRECTION_CLEANING_AVAILABLE: Final = "floor_direction_cleaning_available"
ATTR_FIRMWARE_VERSION: Final = "firmware_version"
ATTR_AP: Final = "ap"
ATTR_COLOR_SCHEME: Final = "color_scheme"
ATTR_CAPABILITIES: Final = "capabilities"

MAP_PARAMETER_NAME: Final = "name"
MAP_PARAMETER_VALUE: Final = "value"
MAP_PARAMETER_TIME: Final = "time"
MAP_PARAMETER_CODE: Final = "code"
MAP_PARAMETER_OUT: Final = "out"
MAP_PARAMETER_MAP: Final = "map"
MAP_PARAMETER_ANGLE: Final = "angle"
MAP_PARAMETER_MAPSTR: Final = "mapstr"
MAP_PARAMETER_CURR_ID: Final = "curr_id"
MAP_PARAMETER_VACUUM: Final = "vacuum"
MAP_PARAMETER_URL: Final = "url"
MAP_PARAMETER_EXPIRES_TIME: Final = "expires_time"

MAP_REQUEST_PARAMETER_MAP_ID: Final = "map_id"
MAP_REQUEST_PARAMETER_FRAME_ID: Final = "frame_id"
MAP_REQUEST_PARAMETER_FRAME_TYPE: Final = "frame_type"
MAP_REQUEST_PARAMETER_REQ_TYPE: Final = "req_type"
MAP_REQUEST_PARAMETER_FORCE_TYPE: Final = "force_type"
MAP_REQUEST_PARAMETER_TYPE: Final = "type"
MAP_REQUEST_PARAMETER_INDEX: Final = "index"
MAP_REQUEST_PARAMETER_ROOM_ID: Final = "roomID"

MAP_DATA_JSON_CLASS: Final = "ValetudoMap"
MAP_DATA_JSON_PARAMETER_CLASS: Final = "__class"
MAP_DATA_JSON_PARAMETER_SIZE: Final = "size"
MAP_DATA_JSON_PARAMETER_X: Final = "x"
MAP_DATA_JSON_PARAMETER_Y: Final = "y"
MAP_DATA_JSON_PARAMETER_PIXEL_SIZE: Final = "pixelSize"
MAP_DATA_JSON_PARAMETER_LAYERS: Final = "layers"
MAP_DATA_JSON_PARAMETER_ENTITIES: Final = "entities"
MAP_DATA_JSON_PARAMETER_META_DATA: Final = "metaData"
MAP_DATA_JSON_PARAMETER_VERSION: Final = "version"
MAP_DATA_JSON_PARAMETER_ROTATION: Final = "rotation"
MAP_DATA_JSON_PARAMETER_TYPE: Final = "type"
MAP_DATA_JSON_PARAMETER_POINTS: Final = "points"
MAP_DATA_JSON_PARAMETER_PIXELS: Final = "pixels"
MAP_DATA_JSON_PARAMETER_SEGMENT_ID: Final = "segmentId"
MAP_DATA_JSON_PARAMETER_ACTIVE: Final = "active"
MAP_DATA_JSON_PARAMETER_NAME: Final = "name"
MAP_DATA_JSON_PARAMETER_DIMENSIONS: Final = "dimensions"
MAP_DATA_JSON_PARAMETER_MIN: Final = "min"
MAP_DATA_JSON_PARAMETER_MAX: Final = "max"
MAP_DATA_JSON_PARAMETER_MID: Final = "mid"
MAP_DATA_JSON_PARAMETER_AVG: Final = "avg"
MAP_DATA_JSON_PARAMETER_PIXEL_COUNT: Final = "pixelCount"
MAP_DATA_JSON_PARAMETER_COMPRESSED_PIXELS: Final = "compressedPixels"
MAP_DATA_JSON_PARAMETER_ROBOT_POSITION: Final = "robot_position"
MAP_DATA_JSON_PARAMETER_CHARGER_POSITION: Final = "charger_location"
MAP_DATA_JSON_PARAMETER_NO_MOP_AREA: Final = "no_mop_area"
MAP_DATA_JSON_PARAMETER_NO_GO_AREA: Final = "no_go_area"
MAP_DATA_JSON_PARAMETER_ACTIVE_ZONE: Final = "active_zone"
MAP_DATA_JSON_PARAMETER_VIRTUAL_WALL: Final = "virtual_wall"
MAP_DATA_JSON_PARAMETER_PATH: Final = "path"
MAP_DATA_JSON_PARAMETER_FLOOR: Final = "floor"
MAP_DATA_JSON_PARAMETER_WALL: Final = "wall"
MAP_DATA_JSON_PARAMETER_SEGMENT: Final = "segment"

DEVICE_KEY: Final = (
    "H4sIAAAAAAAACj2Uy3baMBCGX6XH6ywsaSxL3QE5DmkwAZempT1dAMYkJviSG0l7+u6VNDNe/Z8ZzWj0a8TfqM9u7t/aUV9kq0V1M9fR50+/oicpYxv9vohus2+zo121Ku2L8sdacVTE0UW0E7HcNQSHR4TUSem+UZSLuzJlUxZL9ceMJvVleZm3QxnR+vC8ODfjOsme54vDeL5dDWFfxWuCqkgTxbpl2DGUDCeGF4ZXhjOCpjLpoJsAKpwu6PADbuQA6zvYM1QMBwIsp4Rm7RAUHkcpw0rlE9ovwfMpTd86xk6VFrRSp6gprUzp29C3SWihhQGoPws1w5HB31mAZwb0SFlsEWKBSjcBdCanWN4BOu/gnqFBkJQrgZRyZUq5MqVcmT4hkENAFw0KjwdgKQUs9g5JjPcL5BloStXkAGjOMXgfQB6BoaKGzmipTyspwUq8bQdoGdiQahXa4TRs5jQczSnHcU+rBC1E35yiXx6CTR6OBGiHJa+dBp8syDAFTul3ibVAGv9m4HnyppZy/LL9fje+HsvhzejwpNr6/appD9Pq7nVf3VXvHIbYR1UW1w/wWo3zzVSs7vMhyqNLkyrIEuX2xPmiyTQx3phiE7E5rxu/QVOpnw8y7019mYxGtyfewE26i2anptpcy267P8XHNHkZojTmDlqCFMG5hAo84JDgvCl6xU75jeC8OaUfDJ/CSJp8I7l9TjKKQzSlqfCdnouPOKnWs+WXvJjqvB46BR8t5rfQqWQrlzeb9m06CdFOCrDhDvQie5gt1vl09vHYpUXBYREaCxDWmb75asv+sFKTrrvai6GMNzsorYe4Z/B/KQFchX//ATnMEbjGBQAA"
)
DREAME_STRINGS: Final = (
    "H4sICAAAAAAEAGNsb3VkX3N0cmluZ3MuanNvbgBdUltv2jAU/iuoUtEmjZCEljBVPDAQgu0hK5eudJrQwXaIV18y24yyX79jm45tebDPd67f+ZyvVwnXLqGGgWSJY6S+eneV9fJ+gfdidBKb8XUll5+a4nr1A12TkLhdSjCu1pJ1s+Q2uX3fesM/11qxuxYvl62sn6R3rSUBwbq9JE3f+p5kkO56xaDY5Xm/XxT9HaHkZpBVvYIOKrjJd5Cl0EuhGmTQp1Unw6IPYDlpPc0+is2XTDzm0yOZbV7K5+n9o1zk97NmtM6mTw+qLsvJfogFafjQsA7cwaIhwTpm1pyiveOKTrQErhA0RjfMuBOaqMCcepcAV2kjh/Ny2bYE40MQor03oNzWnRBikmGVYbbeOv3MVPsf5MMNWHvUhrYPlhkFMtS0X70BhE5AiD4oh7gbxe/AwdVdHc7QDUOYxKyNzS+j/2D20nB0bHkM7rn2hmPK8w0bn1t7Lh3cMu7qkZcioqjUJULBga9kPzlhaAhu3UPu46rSMVCuxvMItCPeCnsbkPacH/DeV0tNmQjsCK5vL5RwWodo6Z+KKTrWUsIro4oLX+ovL+D5rXytVw6vGkdo419uz9wkEJ1E1vY/PInDRigqorWXYbRnyl1CC0EQ+ARt+C9wUcNV0LAT/oqxVo4hWMXh0DSCk5DY/W5DdrPFY3umo49KaKBrI6KjtDajf3u//QbhJuZXdAMAAA=="
)
DREAME_MODEL_CAPABILITIES: Final = (
    "H4sIAAAAAAAACu1byZLjNgw9Z74iNWcfuEvKr0zNwbNn1q5OpnJI5d8DEAAXkbJbstxbcpLqmeDyiI2g/PeLX17eGOOnl7/9+uqVNQf9+vUBsFujlSNMA3Z4ZYf8k1EefmI5gbAHFmNIq7IDV3ag9Y+mc3jYg1ZB5VYmNjI+/qpHasQijh70mw00BjU0hFF7TS0cP2AIfFB7Ox20VQoBRQCJ0BBTOTfDDx5diSDOGR7Uu0n9aWqueV40MZqXpqEMYTRJw3NFLK3e0+oP2iufF84L4WlFVkGwnCMvzmdOh5H5sGagVXpt80Ch2AwBzdjZIB5N2IN+tGWqQSdwkuZgRpW7NuO7Fd2wMG9d7uPH+j5E2JpjT5ikjMoU+aGQeXNnGZrrpEIh/XaldCGKbEknAlrGYEcEiuZHKsKQU0uDSufONjbrwp2IzTO1itV4UEXHw4ZeRNjjvHkBAulqyyJlqXn0G9JKQDt3E8qZM54C50FmhfakfLlHBx3ItMGag3KVW6CWskjAjYrLgkkGPcz9AXqBoNkzgY+EF5KcRJDXmEZih4H+wEdTYNeBTkMr8Wf8k5JemO2R3Ce0sbIG9FcsBx2pkC3D2zdrvSu7UFlK5vDMotjpijOc0Sz+sFkyz2G+C8vrt42PDnpc2pPMA9qrMJJAscQK/HZfjF1KVSaJ492iqmzk7M9Ez7dMz88e+FeHyDazmOUHfhA7x+DEYFCNBwsbTH+D/iYXsbAvzYYUO5EMd1l9s90mD5MtuNgg6ue812FLb/dt+J+ujnKfoOv4SCLL+IQii+W8f23azs6Ss/dMJs+MWclssjMsfJ/rp/JWF8yOc3fnOmn8IDAm6cqEkt1MrU2t0tic9huTgM4BQJL9uMehoO24A2//LcbePFvG9ufq3b1z1SNqiaU5N0wME9ghh5mpaTnPSUHI+wdyU1ejRe9IzgfKv9CZJ+xjwiSVs7FEU+VkAB1brEo8ukfjXK7IhDKRHKgwCKkULnOI1RPTbCjQOXlDEg0UOohvFwMarNnCS1pouHxijnmkDbnzlODN5UoFzORmt6lkglZNKk2lOtEXNYs0HE5Sa5dHdAmI+UR8MzBpftP0JgMYKuxJRasoU9hYd6qVx5pdlMcTMaw2+GBM0cPFh+EWMStCwmB9OiZFaN0MjfQmc7bjSk+CJmwokKQTYswGx9qmXW3OVFpEU+YiY3UayYdD45uaY/Y+LJo6qV2RJ2GdG6Ju0BvW2Ea14KnA6UXJpcroUFZGscNM3vHK7DFtD0TgrmQ5X5HVt9BK/bN50grZMNkq8VFUIKH/T+zjcSQGY41ucxle6tWqEyLrKjlHLFPtBgdM7ot3iE2Cc5KkFGyatPuZEJ5wtQO+WLT3HU6LyuUV4hGIQvG2DUexxLEwlWUfd3r8NuQIJRK4gsBlrRXmwqUbnJVgXJt9RkXDiyphti1AneGjtgqYJoyeLaH2RKLu3CsrenFLA8PHXIsmIhhW1+ZQp9nwSKNqXQq0g39k1QRlHu/ZOEeKYXjWUZV2Yvf4OjYlZoBuW8y09jSaLx3stsU6Jjvajuween9K1Tmy8h5UfFc331UUra/B+eRaR/heTK81tgrfdeAu70OBgl0qYnfOPCTI7JeADOfykILBtOrqVvZEbnfhIWxsT1qTu4jw6lsEDG3aLAXyIn5zqwW/wL+W2smBu0dxTS7uPMnn4A2JUmJgch+eznLH3Rb9mX0N7nYCxQFV4NcEfsjgH72WPzstx3n66JROFaT3gm38yGd1XfKEu6tDSM/DVeGjV3nLkRquiO7m/ip/EQ/XIMm75GJdas5UOD6SkLCJKb1XeKhrlUALX+BHghLIB9ka/N6CRm85cu140HJSDStOBvknThawkWD8QVAJScqPVX7BOhpkhv01qB8tW9U5oSb9MsCiGiRyBtl4XFcCb1uwriBe/e5DVn95rX/jpUfHSuI3Y1f5lpIVoPikEsNN132UIar/9STBM4UoKe4pgh1a9V9fVqwMz454tSgdJfD3Hnjbgm46tp7GTV9a0Cv8qEjufwW82mYVu+TUuO3DVxJsto7gyz98dcE82NH1qmfW7hE1GuniSXV2PnUhnohmKhSmHY9Jw32WaXHxyoascksOUdY/6ObzTzfaNtDFw/PMI4wdL0FnoFp20m27yXR4n+J3wg34uQP6+TATfAT7YHWtsKWuNV1S1wrJR4R5XcusqWsBbfHCmS7dBHLP019c+eoNiCO1jAwKtNqXPK26YV3k38yc1vfMkkyg5As8MFHTJaz4bwuTlgQXFS6pWV+/5v4YeNgSqhUV+dfcfJMILp3eNqkKi6ZO+qqiU0MMTuT2zhgdt5qrDnfDb4my1af47F5PHEtOeV4ODPlioY7r7f1CfQu1QGcnjsx89qZrkszTpz2une8jNKorhcZVVz7IGJ0vSMcEHB5W3cLTULeyNMlZH2ChxQz/YQlrCgJ1RGNNp874HH3aVLR7Czy//V59CuU79d0yf85Xoyj88esKYZEa1g8o+50O3e9gcFwMr4AhGxdDYyB0Y5SJSXe+ZADIRbpKCDaiA82+IgRJ+o9p1YyS+rrV7F4DIBs3shLULv7DpB5zKrAX//wLtVgT8hw7AAA="
)

PROPERTY_TO_NAME: Final = {
    DreameVacuumProperty.STATE.name: ["state", "State"],
    DreameVacuumProperty.ERROR.name: ["error", "Error"],
    DreameVacuumProperty.BATTERY_LEVEL.name: ["battery_level", "Battery Level"],
    DreameVacuumProperty.CHARGING_STATUS.name: ["charging_status", "Charging Status"],
    DreameVacuumProperty.OFF_PEAK_CHARGING.name: [
        "off_peak_charging",
        "Off-Peak Charging",
    ],
    DreameVacuumProperty.STATUS.name: ["status", "Status"],
    DreameVacuumProperty.CLEANING_TIME.name: ["cleaning_time", "Cleaning Time"],
    DreameVacuumProperty.CLEANED_AREA.name: ["cleaned_area", "Cleaned Area"],
    DreameVacuumProperty.SUCTION_LEVEL.name: ["suction_level", "Suction Level"],
    DreameVacuumProperty.WATER_VOLUME.name: ["water_volume", "Water Volume"],
    DreameVacuumProperty.WATER_TANK.name: ["water_tank", "Water Tank"],
    DreameVacuumProperty.TASK_STATUS.name: ["task_status", "Task Status"],
    DreameVacuumProperty.RESUME_CLEANING.name: ["resume_cleaning", "Resume Cleaning"],
    DreameVacuumProperty.CARPET_BOOST.name: ["carpet_boost", "Carpet Boost"],
    DreameVacuumProperty.REMOTE_CONTROL.name: ["remote_control", "Remote Control"],
    DreameVacuumProperty.MOP_CLEANING_REMAINDER.name: [
        "mop_cleaning_remainder",
        "Mop Cleaning Remainder",
    ],
    DreameVacuumProperty.CLEANING_PAUSED.name: ["cleaning_paused", "Cleaning Paused"],
    DreameVacuumProperty.FAULTS.name: ["faults", "Faults"],
    DreameVacuumProperty.RELOCATION_STATUS.name: [
        "relocation_status",
        "Relocation Status",
    ],
    DreameVacuumProperty.OBSTACLE_AVOIDANCE.name: [
        "obstacle_avoidance",
        "Obstacle Avoidance",
    ],
    DreameVacuumProperty.AI_DETECTION.name: [
        "ai_obstacle_detection",
        "AI Obstacle Detection",
    ],
    DreameVacuumProperty.CLEANING_MODE.name: ["cleaning_mode", "Cleaning Mode"],
    DreameVacuumProperty.SELF_WASH_BASE_STATUS.name: [
        "self_wash_base_status",
        "Self-Wash Base Status",
    ],
    DreameVacuumProperty.CUSTOMIZED_CLEANING.name: [
        "customized_cleaning",
        "Customized Cleaning",
    ],
    DreameVacuumProperty.CHILD_LOCK.name: ["child_lock", "Child Lock"],
    DreameVacuumProperty.CARPET_SENSITIVITY.name: [
        "carpet_sensitivity",
        "Carpet Sensitivity",
    ],
    DreameVacuumProperty.TIGHT_MOPPING.name: ["tight_mopping", "Tight Mopping"],
    DreameVacuumProperty.CLEANING_CANCEL.name: ["cleaning_cancel", "Cleaning Cancel"],
    DreameVacuumProperty.CARPET_RECOGNITION.name: [
        "carpet_recognition",
        "Carpet Recognition",
    ],
    DreameVacuumProperty.SELF_CLEAN.name: ["self_clean", "Self-Clean"],
    DreameVacuumProperty.WARN_STATUS.name: ["warn_status", "Warn Status"],
    DreameVacuumProperty.CARPET_CLEANING.name: ["carpet_cleaning", "Carpet Cleaning"],
    DreameVacuumProperty.AUTO_ADD_DETERGENT.name: [
        "auto_add_detergent",
        "Auto-Add Detergent",
    ],
    DreameVacuumProperty.DRYING_TIME.name: ["drying_time", "Drying Time"],
    DreameVacuumProperty.MULTI_FLOOR_MAP.name: ["multi_floor_map", "Multi Floor Map"],
    DreameVacuumProperty.MAP_LIST.name: ["map_list", "Map List"],
    DreameVacuumProperty.RECOVERY_MAP_LIST.name: [
        "recovery_map_list",
        "Recovery Map List",
    ],
    DreameVacuumProperty.MAP_RECOVERY.name: ["map_recovery", "Map Recovery"],
    DreameVacuumProperty.MAP_RECOVERY_STATUS.name: [
        "map_recovery_status",
        "Map Recovery Status",
    ],
    DreameVacuumProperty.VOLUME.name: ["volume", "Volume"],
    DreameVacuumProperty.VOICE_ASSISTANT.name: ["voice_assistant", "Voice Assistant"],
    DreameVacuumProperty.SCHEDULE.name: ["schedule", "Schedule"],
    DreameVacuumProperty.AUTO_DUST_COLLECTING.name: [
        "auto_dust_collecting",
        "Auto Dust Collecting",
    ],
    DreameVacuumProperty.AUTO_EMPTY_FREQUENCY.name: [
        "auto_empty_frequency",
        "Auto Empty Frequency",
    ],
    DreameVacuumProperty.MAP_SAVING.name: [
        "map_saving",
        "Map Saving",
    ],
    DreameVacuumProperty.DUST_COLLECTION.name: ["dust_collection", "Dust Collection"],
    DreameVacuumProperty.AUTO_EMPTY_STATUS.name: [
        "auto_empty_status",
        "Auto Empty Status",
    ],
    DreameVacuumProperty.SERIAL_NUMBER.name: ["serial_number", "Serial Number"],
    DreameVacuumProperty.VOICE_PACKET_ID.name: ["voice_packet_id", "Voice Packet Id"],
    DreameVacuumProperty.TIMEZONE.name: ["timezone", "Timezone"],
    DreameVacuumProperty.MAIN_BRUSH_TIME_LEFT.name: [
        "main_brush_time_left",
        "Main Brush  Time Left",
    ],
    DreameVacuumProperty.MAIN_BRUSH_LEFT.name: ["main_brush_left", "Main Brush Left"],
    DreameVacuumProperty.SIDE_BRUSH_TIME_LEFT.name: [
        "side_brush_time_left",
        "Side Brush Time Left",
    ],
    DreameVacuumProperty.SIDE_BRUSH_LEFT.name: ["side_brush_left", "Side Brush Left"],
    DreameVacuumProperty.FILTER_LEFT.name: ["filter_left", "Filter Left"],
    DreameVacuumProperty.FILTER_TIME_LEFT.name: [
        "filter_time_left",
        "Filter Time Left",
    ],
    DreameVacuumProperty.FIRST_CLEANING_DATE.name: [
        "first_cleaning_date",
        "First Cleaning Date",
    ],
    DreameVacuumProperty.TOTAL_CLEANING_TIME.name: [
        "total_cleaning_time",
        "Total Cleaning Time",
    ],
    DreameVacuumProperty.CLEANING_COUNT.name: ["cleaning_count", "Cleaning Count"],
    DreameVacuumProperty.TOTAL_CLEANED_AREA.name: [
        "total_cleaned_area",
        "Total Cleaned Area",
    ],
    DreameVacuumProperty.TOTAL_RUNTIME.name: [
        "total_runtime",
        "Total Runtime",
    ],
    DreameVacuumProperty.TOTAL_CRUISE_TIME.name: [
        "total_cruise_time",
        "Total Cruise Time",
    ],
    DreameVacuumProperty.SENSOR_DIRTY_LEFT.name: [
        "sensor_dirty_left",
        "Sensor Dirty Left",
    ],
    DreameVacuumProperty.SENSOR_DIRTY_TIME_LEFT.name: [
        "sensor_dirty_time_left",
        "Sensor Dirty Time Left",
    ],
    DreameVacuumProperty.TANK_FILTER_LEFT.name: [
        "tank_filter_left",
        "Tank Filter Left",
    ],
    DreameVacuumProperty.TANK_FILTER_TIME_LEFT.name: [
        "tank_filter_time_left",
        "Tank Filter Time Left",
    ],
    DreameVacuumProperty.MOP_PAD_LEFT.name: ["mop_pad_left", "Mop Pad Left"],
    DreameVacuumProperty.MOP_PAD_TIME_LEFT.name: [
        "mop_pad_time_left",
        "Mop Pad Time Left",
    ],
    DreameVacuumProperty.SILVER_ION_LEFT.name: ["silver_ion_left", "Silver-ion Left"],
    DreameVacuumProperty.SILVER_ION_TIME_LEFT.name: [
        "silver_ion_time_left",
        "Silver-ion Time Left",
    ],
    DreameVacuumProperty.DETERGENT_LEFT.name: ["detergent_left", "Detergent Left"],
    DreameVacuumProperty.DETERGENT_TIME_LEFT.name: [
        "detergent_time_left",
        "Detergent Time Left",
    ],
    DreameVacuumProperty.SQUEEGEE_LEFT.name: ["squeegee_left", "Squeegee Left"],
    DreameVacuumProperty.SQUEEGEE_TIME_LEFT.name: [
        "squeegee_time_left",
        "Squeegee Time Left",
    ],
    DreameVacuumProperty.ONBOARD_DIRTY_WATER_TANK_LEFT.name: [
        "onboard_dirty_water_tank_left",
        "Onboard Dirty Water Tank Left",
    ],
    DreameVacuumProperty.ONBOARD_DIRTY_WATER_TANK_TIME_LEFT.name: [
        "onboard_dirty_water_tank_time_left",
        "Onboard Dirty Water Tank Time Left",
    ],
    DreameVacuumProperty.DIRTY_WATER_TANK_LEFT.name: [
        "dirty_water_tank_left",
        "Dirty Water Tank Left",
    ],
    DreameVacuumProperty.DIRTY_WATER_TANK_TIME_LEFT.name: [
        "dirty_water_tank_time_left",
        "Dirty Water Tank Time Left",
    ],
    DreameVacuumAIProperty.AI_FURNITURE_DETECTION.name: [
        "ai_furniture_detection",
        "AI Furniture Detection",
    ],
    DreameVacuumAIProperty.AI_OBSTACLE_DETECTION.name: [
        "ai_obstacle_detection",
        "AI Obstacle Detection",
    ],
    DreameVacuumAIProperty.AI_OBSTACLE_PICTURE.name: [
        "ai_obstacle_picture",
        "AI Obstacle Picture",
    ],
    DreameVacuumAIProperty.AI_FLUID_DETECTION.name: [
        "ai_fluid_detection",
        "AI Fluid Detection",
    ],
    DreameVacuumAIProperty.AI_PET_DETECTION.name: [
        "ai_pet_detection",
        "AI Pet Detection",
    ],
    DreameVacuumAIProperty.AI_OBSTACLE_IMAGE_UPLOAD.name: [
        "ai_obstacle_image_upload",
        "AI Obstacle Image Upload",
    ],
    DreameVacuumAIProperty.AI_IMAGE.name: ["ai_image", "AI Image"],
    DreameVacuumAIProperty.AI_PET_AVOIDANCE.name: [
        "ai_pet_avoidance",
        "AI Pet Avoidance",
    ],
    DreameVacuumAIProperty.FUZZY_OBSTACLE_DETECTION.name: [
        "fuzzy_obstacle_detection",
        "Fuzzy Obstacle Detection",
    ],
    DreameVacuumAIProperty.PET_PICTURE.name: ["pet_picture", "Pet Picture"],
    DreameVacuumAIProperty.PET_FOCUSED_DETECTION.name: [
        "pet_focused_detection",
        "Pet Focused Detection",
    ],
    DreameVacuumAIProperty.LARGE_PARTICLES_BOOST.name: [
        "large_particles_boost",
        "Large Particles Boost",
    ],
    DreameVacuumStrAIProperty.AI_HUMAN_DETECTION.name: [
        "ai_human_detection",
        "AI Human Detection",
    ],
    DreameVacuumAutoSwitchProperty.COLLISION_AVOIDANCE.name: [
        "collision_avoidance",
        "Collision Avoidance",
    ],
    DreameVacuumAutoSwitchProperty.FILL_LIGHT.name: ["fill_light", "Fill Light"],
    DreameVacuumAutoSwitchProperty.AUTO_DRYING.name: ["auto_drying", "Auto Drying"],
    DreameVacuumAutoSwitchProperty.STAIN_AVOIDANCE.name: [
        "stain_avoidance",
        "Stain Avoidance",
    ],
    DreameVacuumAutoSwitchProperty.MOPPING_TYPE.name: ["mopping_type", "Mopping Type"],
    DreameVacuumAutoSwitchProperty.CLEANGENIUS.name: [
        "cleangenius",
        "CleanGenius",
    ],
    DreameVacuumAutoSwitchProperty.WIDER_CORNER_COVERAGE.name: [
        "wider_corner_coverage",
        "Wider Corner Coverage",
    ],
    DreameVacuumAutoSwitchProperty.FLOOR_DIRECTION_CLEANING.name: [
        "floor_direction_cleaning",
        "Floor Direction Cleaning",
    ],
    DreameVacuumAutoSwitchProperty.PET_FOCUSED_CLEANING.name: [
        "pet_focused_cleaning",
        "Pet Focused Cleaning",
    ],
    DreameVacuumAutoSwitchProperty.AUTO_RECLEANING.name: [
        "auto_recleaning",
        "Auto Re-Cleaning",
    ],
    DreameVacuumAutoSwitchProperty.AUTO_REWASHING.name: [
        "auto_rewashing",
        "Auto Re-Washing",
    ],
    DreameVacuumAutoSwitchProperty.MOP_PAD_SWING.name: [
        "mop_pad_swing",
        "Mop Pad Swing",
    ],
    DreameVacuumAutoSwitchProperty.HUMAN_FOLLOW.name: ["human_follow", "Human Follow"],
    DreameVacuumAutoSwitchProperty.MAX_SUCTION_POWER.name: [
        "max_suction_power",
        "Max Suction Power",
    ],
    DreameVacuumAutoSwitchProperty.SMART_DRYING.name: ["smart_drying", "Smart Drying"],
    DreameVacuumAutoSwitchProperty.DRAINAGE_CONFIRM_RESULT.name: [
        "drainage_confirm_result",
        "Drainage Confirm Result",
    ],
    DreameVacuumAutoSwitchProperty.DRAINAGE_TEST_RESULT.name: [
        "drainage_test_result",
        "Drainage Test Result",
    ],
    DreameVacuumAutoSwitchProperty.HOT_WASHING.name: ["hot_washing", "Hot Washing"],
    DreameVacuumAutoSwitchProperty.UV_STERILIZATION.name: [
        "uv_sterilization",
        "UV Sterilization",
    ],
}

ACTION_TO_NAME: Final = {
    DreameVacuumAction.START: ["start", "Start"],
    DreameVacuumAction.PAUSE: ["pause", "Pause"],
    DreameVacuumAction.CHARGE: ["charge", "Charge"],
    DreameVacuumAction.START_CUSTOM: ["start_custom", "Start Custom"],
    DreameVacuumAction.STOP: ["stop", "Stop"],
    DreameVacuumAction.CLEAR_WARNING: ["clear_warning", "Clear Warning"],
    DreameVacuumAction.REQUEST_MAP: ["request_map", "Request Map"],
    DreameVacuumAction.UPDATE_MAP_DATA: ["update_map_data", "Update Map Data"],
    DreameVacuumAction.LOCATE: ["locate", "Locate"],
    DreameVacuumAction.TEST_SOUND: ["test_sound", "Test Sound"],
    DreameVacuumAction.RESET_MAIN_BRUSH: ["reset_main_brush", "Reset Main Brush"],
    DreameVacuumAction.RESET_SIDE_BRUSH: ["reset_side_brush", "Reset Side Brush"],
    DreameVacuumAction.RESET_FILTER: ["reset_filter", "Reset Filter"],
    DreameVacuumAction.RESET_SENSOR: ["reset_sensor", "Reset Sensor"],
    DreameVacuumAction.START_AUTO_EMPTY: ["start_auto_empty", "Start Auto Empty"],
    DreameVacuumAction.RESET_MOP_PAD: ["reset_mop_pad", "Reset Mop Pad"],
    DreameVacuumAction.RESET_SILVER_ION: ["reset_silver_ion", "Reset Silver-ion"],
    DreameVacuumAction.RESET_DETERGENT: ["reset_detergent", "Reset Detergent"],
}

STATE_CODE_TO_STATE: Final = {
    DreameVacuumState.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumState.SWEEPING: STATE_SWEEPING,
    DreameVacuumState.IDLE: STATE_IDLE,
    DreameVacuumState.PAUSED: STATE_PAUSED,
    DreameVacuumState.ERROR: STATE_ERROR,
    DreameVacuumState.RETURNING: STATE_RETURNING,
    DreameVacuumState.CHARGING: STATE_CHARGING,
    DreameVacuumState.MOPPING: STATE_MOPPING,
    DreameVacuumState.DRYING: STATE_DRYING,
    DreameVacuumState.WASHING: STATE_WASHING,
    DreameVacuumState.RETURNING_TO_WASH: STATE_RETURNING_WASH,
    DreameVacuumState.BUILDING: STATE_BUILDING,
    DreameVacuumState.SWEEPING_AND_MOPPING: STATE_SWEEPING_AND_MOPPING,
    DreameVacuumState.CHARGING_COMPLETED: STATE_CHARGING_COMPLETED,
    DreameVacuumState.UPGRADING: STATE_UPGRADING,
    DreameVacuumState.CLEAN_SUMMON: STATE_CLEAN_SUMMON,
    DreameVacuumState.STATION_RESET: STATE_STATION_RESET,
    DreameVacuumState.RETURNING_INSTALL_MOP: STATE_RETURNING_INSTALL_MOP,
    DreameVacuumState.RETURNING_REMOVE_MOP: STATE_RETURNING_REMOVE_MOP,
    DreameVacuumState.WATER_CHECK: STATE_WATER_CHECK,
    DreameVacuumState.CLEAN_ADD_WATER: STATE_CLEAN_ADD_WATER,
    DreameVacuumState.WASHING_PAUSED: STATE_WASHING_PAUSED,
    DreameVacuumState.AUTO_EMPTYING: STATE_AUTO_EMPTYING,
    DreameVacuumState.REMOTE_CONTROL: STATE_REMOTE_CONTROL,
    DreameVacuumState.SMART_CHARGING: STATE_SMART_CHARGING,
    DreameVacuumState.SECOND_CLEANING: STATE_SECOND_CLEANING,
    DreameVacuumState.HUMAN_FOLLOWING: STATE_HUMAN_FOLLOWING,
    DreameVacuumState.SPOT_CLEANING: STATE_SPOT_CLEANING,
    DreameVacuumState.RETURNING_AUTO_EMPTY: STATE_RETURNING_AUTO_EMPTY,
    DreameVacuumState.WAITING_FOR_TASK: STATE_WAITING_FOR_TASK,
    DreameVacuumState.STATION_CLEANING: STATE_STATION_CLEANING,
    DreameVacuumState.RETURNING_TO_DRAIN: STATE_RETURNING_TO_DRAIN,
    DreameVacuumState.DRAINING: STATE_DRAINING,
    DreameVacuumState.AUTO_WATER_DRAINING: STATE_AUTO_WATER_DRAINING,
    DreameVacuumState.SHORTCUT: STATE_SHORTCUT,
    DreameVacuumState.MONITORING: STATE_MONITORING,
    DreameVacuumState.MONITORING_PAUSED: STATE_MONITORING_PAUSED,
}

# Dreame Vacuum suction level names
SUCTION_LEVEL_CODE_TO_NAME: Final = {
    DreameVacuumSuctionLevel.QUIET: SUCTION_LEVEL_QUIET,
    DreameVacuumSuctionLevel.STANDARD: SUCTION_LEVEL_STANDARD,
    DreameVacuumSuctionLevel.STRONG: SUCTION_LEVEL_STRONG,
    DreameVacuumSuctionLevel.TURBO: SUCTION_LEVEL_TURBO,
}

# Dreame Vacuum water volume names
WATER_VOLUME_CODE_TO_NAME: Final = {
    DreameVacuumWaterVolume.LOW: WATER_VOLUME_LOW,
    DreameVacuumWaterVolume.MEDIUM: WATER_VOLUME_MEDIUM,
    DreameVacuumWaterVolume.HIGH: WATER_VOLUME_HIGH,
}

# Dreame Vacuum mop pad humidity names
MOP_PAD_HUMIDITY_CODE_TO_NAME: Final = {
    DreameVacuumMopPadHumidity.SLIGHTLY_DRY: MOP_PAD_HUMIDITY_SLIGHTLY_DRY,
    DreameVacuumMopPadHumidity.MOIST: MOP_PAD_HUMIDITY_MOIST,
    DreameVacuumMopPadHumidity.WET: MOP_PAD_HUMIDITY_WET,
}

# Dreame Vacuum cleaning mode names
CLEANING_MODE_CODE_TO_NAME: Final = {
    DreameVacuumCleaningMode.SWEEPING: CLEANING_MODE_SWEEPING,
    DreameVacuumCleaningMode.MOPPING: CLEANING_MODE_MOPPING,
    DreameVacuumCleaningMode.SWEEPING_AND_MOPPING: CLEANING_MODE_SWEEPING_AND_MOPPING,
    DreameVacuumCleaningMode.MOPPING_AFTER_SWEEPING: CLEANING_MODE_MOPPING_AFTER_SWEEPING,
}

WATER_TANK_CODE_TO_NAME: Final = {
    DreameVacuumWaterTank.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumWaterTank.INSTALLED: WATER_TANK_INSTALLED,
    DreameVacuumWaterTank.NOT_INSTALLED: WATER_TANK_NOT_INSTALLED,
    DreameVacuumWaterTank.MOP_INSTALLED: WATER_TANK_MOP_INSTALLED,
    DreameVacuumWaterTank.MOP_IN_STATION: WATER_TANK_MOP_IN_STATION,
}

CARPET_SENSITIVITY_CODE_TO_NAME: Final = {
    DreameVacuumCarpetSensitivity.LOW: CARPET_SENSITIVITY_LOW,
    DreameVacuumCarpetSensitivity.MEDIUM: CARPET_SENSITIVITY_MEDIUM,
    DreameVacuumCarpetSensitivity.HIGH: CARPET_SENSITIVITY_HIGH,
}

CARPET_CLEANING_CODE_TO_NAME: Final = {
    DreameVacuumCarpetCleaning.AVOIDANCE: CARPET_CLEANING_AVOIDANCE,
    DreameVacuumCarpetCleaning.ADAPTATION: CARPET_CLEANING_ADAPTATION,
    DreameVacuumCarpetCleaning.REMOVE_MOP: CARPET_CLEANING_REMOVE_MOP,
    DreameVacuumCarpetCleaning.ADAPTATION_WITHOUT_ROUTE: CARPET_CLEANING_ADAPTATION_WITHOUT_ROUTE,
    DreameVacuumCarpetCleaning.VACUUM_AND_MOP: CARPET_CLEANING_VACUUM_AND_MOP,
    DreameVacuumCarpetCleaning.IGNORE: CARPET_CLEANING_IGNORE,
}

FLOOR_MATERIAL_CODE_TO_NAME: Final = {
    DreameVacuumFloorMaterial.NONE: FLOOR_MATERIAL_NONE,
    DreameVacuumFloorMaterial.TILE: FLOOR_MATERIAL_TILE,
    DreameVacuumFloorMaterial.WOOD: FLOOR_MATERIAL_WOOD,
}

FLOOR_MATERIAL_DIRECTION_CODE_TO_NAME: Final = {
    DreameVacuumFloorMaterialDirection.VERTICAL: FLOOR_MATERIAL_DIRECTION_VERTICAL,
    DreameVacuumFloorMaterialDirection.HORIZONTAL: FLOOR_MATERIAL_DIRECTION_HORIZONTAL,
}

SEGMENT_VISIBILITY_CODE_TO_NAME: Final = {
    DreameVacuumSegmentVisibility.VISIBLE: SEGMENT_VISIBILITY_VISIBLE,
    DreameVacuumSegmentVisibility.HIDDEN: SEGMENT_VISIBILITY_HIDDEN,
}

TASK_STATUS_CODE_TO_NAME: Final = {
    DreameVacuumTaskStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumTaskStatus.COMPLETED: TASK_STATUS_COMPLETED,
    DreameVacuumTaskStatus.AUTO_CLEANING: TASK_STATUS_AUTO_CLEANING,
    DreameVacuumTaskStatus.ZONE_CLEANING: TASK_STATUS_ZONE_CLEANING,
    DreameVacuumTaskStatus.SEGMENT_CLEANING: TASK_STATUS_SEGMENT_CLEANING,
    DreameVacuumTaskStatus.SPOT_CLEANING: TASK_STATUS_SPOT_CLEANING,
    DreameVacuumTaskStatus.FAST_MAPPING: TASK_STATUS_FAST_MAPPING,
    DreameVacuumTaskStatus.AUTO_CLEANING_PAUSED: TASK_STATUS_AUTO_CLEANING_PAUSE,
    DreameVacuumTaskStatus.SEGMENT_CLEANING_PAUSED: TASK_STATUS_SEGMENT_CLEANING_PAUSE,
    DreameVacuumTaskStatus.ZONE_CLEANING_PAUSED: TASK_STATUS_ZONE_CLEANING_PAUSE,
    DreameVacuumTaskStatus.SPOT_CLEANING_PAUSED: TASK_STATUS_SPOT_CLEANING_PAUSE,
    DreameVacuumTaskStatus.MAP_CLEANING_PAUSED: TASK_STATUS_MAP_CLEANING_PAUSE,
    DreameVacuumTaskStatus.DOCKING_PAUSED: TASK_STATUS_DOCKING_PAUSE,
    DreameVacuumTaskStatus.MOPPING_PAUSED: TASK_STATUS_MOPPING_PAUSE,
    DreameVacuumTaskStatus.ZONE_MOPPING_PAUSED: TASK_STATUS_ZONE_MOPPING_PAUSE,
    DreameVacuumTaskStatus.SEGMENT_MOPPING_PAUSED: TASK_STATUS_SEGMENT_MOPPING_PAUSE,
    DreameVacuumTaskStatus.AUTO_MOPPING_PAUSED: TASK_STATUS_AUTO_MOPPING_PAUSE,
    DreameVacuumTaskStatus.AUTO_DOCKING_PAUSED: TASK_STATUS_DOCKING_PAUSE,
    DreameVacuumTaskStatus.ZONE_DOCKING_PAUSED: TASK_STATUS_DOCKING_PAUSE,
    DreameVacuumTaskStatus.SEGMENT_DOCKING_PAUSED: TASK_STATUS_DOCKING_PAUSE,
    DreameVacuumTaskStatus.CRUISING_PATH: TASK_STATUS_CRUISING_PATH,
    DreameVacuumTaskStatus.CRUISING_PATH_PAUSED: TASK_STATUS_CRUISING_PATH_PAUSED,
    DreameVacuumTaskStatus.CRUISING_POINT: TASK_STATUS_CRUISING_POINT,
    DreameVacuumTaskStatus.CRUISING_POINT_PAUSED: TASK_STATUS_CRUISING_POINT_PAUSED,
    DreameVacuumTaskStatus.SUMMON_CLEAN_PAUSED: TASK_STATUS_SUMMON_CLEAN_PAUSED,
    DreameVacuumTaskStatus.RETURNING_INSTALL_MOP: TASK_STATUS_RETURNING_INSTALL_MOP,
    DreameVacuumTaskStatus.RETURNING_REMOVE_MOP: TASK_STATUS_RETURNING_REMOVE_MOP,
}

STATUS_CODE_TO_NAME: Final = {
    DreameVacuumStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumStatus.IDLE: STATE_IDLE,
    DreameVacuumStatus.PAUSED: STATE_PAUSED,
    DreameVacuumStatus.CLEANING: STATUS_CLEANING,
    DreameVacuumStatus.BACK_HOME: STATE_RETURNING,
    DreameVacuumStatus.PART_CLEANING: STATUS_SPOT_CLEANING,
    DreameVacuumStatus.FOLLOW_WALL: STATUS_FOLLOW_WALL,
    DreameVacuumStatus.CHARGING: STATUS_CHARGING,
    DreameVacuumStatus.OTA: STATUS_OTA,
    DreameVacuumStatus.FCT: STATUS_FCT,
    DreameVacuumStatus.WIFI_SET: STATUS_WIFI_SET,
    DreameVacuumStatus.POWER_OFF: STATUS_POWER_OFF,
    DreameVacuumStatus.FACTORY: STATUS_FACTORY,
    DreameVacuumStatus.ERROR: STATUS_ERROR,
    DreameVacuumStatus.REMOTE_CONTROL: STATUS_REMOTE_CONTROL,
    DreameVacuumStatus.SLEEPING: STATUS_SLEEP,
    DreameVacuumStatus.SELF_REPAIR: STATUS_SELF_REPAIR,
    DreameVacuumStatus.FACTORY_FUNCION_TEST: STATUS_FACTORY_FUNC_TEST,
    DreameVacuumStatus.STANDBY: STATUS_STANDBY,
    DreameVacuumStatus.SEGMENT_CLEANING: STATUS_SEGMENT_CLEANING,
    DreameVacuumStatus.ZONE_CLEANING: STATUS_ZONE_CLEANING,
    DreameVacuumStatus.SPOT_CLEANING: STATUS_SPOT_CLEANING,
    DreameVacuumStatus.FAST_MAPPING: STATUS_FAST_MAPPING,
    DreameVacuumStatus.CRUISING_PATH: STATUS_CRUISING_PATH,
    DreameVacuumStatus.CRUISING_POINT: STATUS_CRUISING_POINT,
    DreameVacuumStatus.SUMMON_CLEAN: STATUS_SUMMON_CLEAN,
    DreameVacuumStatus.SHORTCUT: STATUS_SHORTCUT,
    DreameVacuumStatus.PERSON_FOLLOW: STATUS_PERSON_FOLLOW,
    DreameVacuumStatus.WATER_CHECK: STATUS_WATER_CHECK,
}

RELOCATION_STATUS_CODE_TO_NAME: Final = {
    DreameVacuumRelocationStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumRelocationStatus.LOCATED: RELOCATION_STATUS_LOCATED,
    DreameVacuumRelocationStatus.LOCATING: RELOCATION_STATUS_LOCATING,
    DreameVacuumRelocationStatus.FAILED: RELOCATION_STATUS_FAILED,
    DreameVacuumRelocationStatus.SUCCESS: RELOCATION_STATUS_SUCESS,
}

CHARGING_STATUS_CODE_TO_NAME: Final = {
    DreameVacuumChargingStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumChargingStatus.CHARGING: CHARGING_STATUS_CHARGING,
    DreameVacuumChargingStatus.NOT_CHARGING: CHARGING_STATUS_NOT_CHARGING,
    DreameVacuumChargingStatus.CHARGING_COMPLETED: CHARGING_STATUS_CHARGING_COMPLETED,
    DreameVacuumChargingStatus.RETURN_TO_CHARGE: CHARGING_STATUS_RETURN_TO_CHARGE,
}

ERROR_CODE_TO_ERROR_NAME: Final = {
    DreameVacuumErrorCode.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumErrorCode.NO_ERROR: ERROR_NO_ERROR,
    DreameVacuumErrorCode.DROP: ERROR_DROP,
    DreameVacuumErrorCode.CLIFF: ERROR_CLIFF,
    DreameVacuumErrorCode.BUMPER: ERROR_BUMPER,
    DreameVacuumErrorCode.GESTURE: ERROR_GESTURE,
    DreameVacuumErrorCode.BUMPER_REPEAT: ERROR_BUMPER_REPEAT,
    DreameVacuumErrorCode.DROP_REPEAT: ERROR_DROP_REPEAT,
    DreameVacuumErrorCode.OPTICAL_FLOW: ERROR_OPTICAL_FLOW,
    DreameVacuumErrorCode.BOX: ERROR_NO_BOX,
    DreameVacuumErrorCode.TANKBOX: ERROR_NO_TANKBOX,
    DreameVacuumErrorCode.WATERBOX_EMPTY: ERROR_WATERBOX_EMPTY,
    DreameVacuumErrorCode.BOX_FULL: ERROR_BOX_FULL,
    DreameVacuumErrorCode.BRUSH: ERROR_BRUSH,
    DreameVacuumErrorCode.SIDE_BRUSH: ERROR_SIDE_BRUSH,
    DreameVacuumErrorCode.FAN: ERROR_FAN,
    DreameVacuumErrorCode.LEFT_WHEEL_MOTOR: ERROR_LEFT_WHEEL_MOTOR,
    DreameVacuumErrorCode.RIGHT_WHEEL_MOTOR: ERROR_RIGHT_WHEEL_MOTOR,
    DreameVacuumErrorCode.TURN_SUFFOCATE: ERROR_TURN_SUFFOCATE,
    DreameVacuumErrorCode.FORWARD_SUFFOCATE: ERROR_FORWARD_SUFFOCATE,
    DreameVacuumErrorCode.CHARGER_GET: ERROR_CHARGER_GET,
    DreameVacuumErrorCode.BATTERY_LOW: ERROR_BATTERY_LOW,
    DreameVacuumErrorCode.CHARGE_FAULT: ERROR_CHARGE_FAULT,
    DreameVacuumErrorCode.BATTERY_PERCENTAGE: ERROR_BATTERY_PERCENTAGE,
    DreameVacuumErrorCode.HEART: ERROR_HEART,
    DreameVacuumErrorCode.CAMERA_OCCLUSION: ERROR_CAMERA_OCCLUSION,
    DreameVacuumErrorCode.MOVE: ERROR_MOVE,
    DreameVacuumErrorCode.FLOW_SHIELDING: ERROR_FLOW_SHIELDING,
    DreameVacuumErrorCode.INFRARED_SHIELDING: ERROR_INFRARED_SHIELDING,
    DreameVacuumErrorCode.CHARGE_NO_ELECTRIC: ERROR_CHARGE_NO_ELECTRIC,
    DreameVacuumErrorCode.BATTERY_FAULT: ERROR_BATTERY_FAULT,
    DreameVacuumErrorCode.FAN_SPEED_ERROR: ERROR_FAN_SPEED_ERROR,
    DreameVacuumErrorCode.LEFTWHELL_SPEED: ERROR_LEFTWHELL_SPEED,
    DreameVacuumErrorCode.RIGHTWHELL_SPEED: ERROR_RIGHTWHELL_SPEED,
    DreameVacuumErrorCode.BMI055_ACCE: ERROR_BMI055_ACCE,
    DreameVacuumErrorCode.BMI055_GYRO: ERROR_BMI055_GYRO,
    DreameVacuumErrorCode.XV7001: ERROR_XV7001,
    DreameVacuumErrorCode.LEFT_MAGNET: ERROR_LEFT_MAGNET,
    DreameVacuumErrorCode.RIGHT_MAGNET: ERROR_RIGHT_MAGNET,
    DreameVacuumErrorCode.FLOW_ERROR: ERROR_FLOW_ERROR,
    DreameVacuumErrorCode.INFRARED_FAULT: ERROR_INFRARED_FAULT,
    DreameVacuumErrorCode.CAMERA_FAULT: ERROR_CAMERA_FAULT,
    DreameVacuumErrorCode.STRONG_MAGNET: ERROR_STRONG_MAGNET,
    DreameVacuumErrorCode.WATER_PUMP: ERROR_WATER_PUMP,
    DreameVacuumErrorCode.RTC: ERROR_RTC,
    DreameVacuumErrorCode.AUTO_KEY_TRIG: ERROR_AUTO_KEY_TRIG,
    DreameVacuumErrorCode.P3V3: ERROR_P3V3,
    DreameVacuumErrorCode.CAMERA_IDLE: ERROR_CAMERA_IDLE,
    DreameVacuumErrorCode.BLOCKED: ERROR_BLOCKED,
    DreameVacuumErrorCode.LDS_ERROR: ERROR_LDS_ERROR,
    DreameVacuumErrorCode.LDS_BUMPER: ERROR_LDS_BUMPER,
    DreameVacuumErrorCode.WATER_PUMP_2: ERROR_WATER_PUMP,
    DreameVacuumErrorCode.FILTER_BLOCKED: ERROR_FILTER_BLOCKED,
    DreameVacuumErrorCode.EDGE: ERROR_EDGE,
    DreameVacuumErrorCode.CARPET: ERROR_CARPET,
    DreameVacuumErrorCode.LASER: ERROR_LASER,
    DreameVacuumErrorCode.EDGE_2: ERROR_EDGE,
    DreameVacuumErrorCode.ULTRASONIC: ERROR_ULTRASONIC,
    DreameVacuumErrorCode.NO_GO_ZONE: ERROR_NO_GO_ZONE,
    DreameVacuumErrorCode.ROUTE: ERROR_ROUTE,
    DreameVacuumErrorCode.ROUTE_2: ERROR_ROUTE,
    DreameVacuumErrorCode.BLOCKED_2: ERROR_BLOCKED,
    DreameVacuumErrorCode.BLOCKED_3: ERROR_BLOCKED,
    DreameVacuumErrorCode.RESTRICTED: ERROR_RESTRICTED,
    DreameVacuumErrorCode.RESTRICTED_2: ERROR_RESTRICTED,
    DreameVacuumErrorCode.RESTRICTED_3: ERROR_RESTRICTED,
    DreameVacuumErrorCode.REMOVE_MOP: ERROR_REMOVE_MOP,
    DreameVacuumErrorCode.MOP_REMOVED: ERROR_MOP_REMOVED,
    DreameVacuumErrorCode.MOP_REMOVED_2: ERROR_MOP_REMOVED,
    DreameVacuumErrorCode.MOP_PAD_STOP_ROTATE: ERROR_MOP_PAD_STOP_ROTATE,
    DreameVacuumErrorCode.MOP_PAD_STOP_ROTATE_2: ERROR_MOP_PAD_STOP_ROTATE,
    DreameVacuumErrorCode.MOP_INSTALL_FAILED: ERROR_MOP_INSTALL_FAILED,
    DreameVacuumErrorCode.LOW_BATTERY_TURN_OFF: ERROR_LOW_BATTERY_TURN_OFF,
    DreameVacuumErrorCode.DIRTY_TANK_NOT_INSTALLED: ERROR_DIRTY_TANK_NOT_INSTALLED,
    DreameVacuumErrorCode.ROBOT_IN_HIDDEN_ROOM: ERROR_ROBOT_IN_HIDDEN_ROOM,
    DreameVacuumErrorCode.BIN_FULL: ERROR_BIN_FULL,
    DreameVacuumErrorCode.BIN_OPEN: ERROR_BIN_OPEN,
    DreameVacuumErrorCode.BIN_OPEN_2: ERROR_BIN_OPEN,
    DreameVacuumErrorCode.WATER_TANK: ERROR_WATER_TANK,
    DreameVacuumErrorCode.DIRTY_WATER_TANK: ERROR_DIRTY_WATER_TANK,
    DreameVacuumErrorCode.WATER_TANK_DRY: ERROR_WATER_TANK_DRY,
    DreameVacuumErrorCode.DIRTY_WATER_TANK_2: ERROR_DIRTY_WATER_TANK,
    DreameVacuumErrorCode.DIRTY_WATER_TANK_BLOCKED: ERROR_DIRTY_WATER_TANK_BLOCKED,
    DreameVacuumErrorCode.DIRTY_WATER_TANK_PUMP: ERROR_DIRTY_WATER_TANK_PUMP,
    DreameVacuumErrorCode.MOP_PAD: ERROR_MOP_PAD,
    DreameVacuumErrorCode.WET_MOP_PAD: ERROR_WET_MOP_PAD,
    DreameVacuumErrorCode.CLEAN_MOP_PAD: ERROR_CLEAN_MOP_PAD,
    DreameVacuumErrorCode.CLEAN_TANK_LEVEL: ERROR_CLEAN_TANK_LEVEL,
    DreameVacuumErrorCode.STATION_DISCONNECTED: ERROR_STATION_DISCONNECTED,
    DreameVacuumErrorCode.DIRTY_TANK_LEVEL: ERROR_DIRTY_TANK_LEVEL,
    DreameVacuumErrorCode.WASHBOARD_LEVEL: ERROR_WASHBOARD_LEVEL,
    DreameVacuumErrorCode.NO_MOP_IN_STATION: ERROR_NO_MOP_IN_STATION,
    DreameVacuumErrorCode.DUST_BAG_FULL: ERROR_DUST_BAG_FULL,
    DreameVacuumErrorCode.SELF_TEST_FAILED: ERROR_SELF_TEST_FAILED,
    DreameVacuumErrorCode.UNKNOWN_WARNING_2: STATE_UNKNOWN,
    DreameVacuumErrorCode.WASHBOARD_NOT_WORKING: ERROR_WASHBOARD_NOT_WORKING,
    DreameVacuumErrorCode.RETURN_TO_CHARGE_FAILED: ERROR_RETURN_TO_CHARGE_FAILED,
}

DUST_COLLECTION_TO_NAME: Final = {
    DreameVacuumDustCollection.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumDustCollection.NOT_AVAILABLE: DUST_COLLECTION_NOT_AVAILABLE,
    DreameVacuumDustCollection.AVAILABLE: DUST_COLLECTION_AVAILABLE,
}

AUTO_EMPTY_STATUS_TO_NAME: Final = {
    DreameVacuumAutoEmptyStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumAutoEmptyStatus.IDLE: STATE_IDLE,
    DreameVacuumAutoEmptyStatus.ACTIVE: AUTO_EMPTY_STATUS_ACTIVE,
    DreameVacuumAutoEmptyStatus.NOT_PERFORMED: AUTO_EMPTY_STATUS_NOT_PERFORMED,
}

MAP_RECOVERY_STATUS_TO_NAME: Final = {
    DreameVacuumMapRecoveryStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumMapRecoveryStatus.IDLE: MAP_RECOVERY_STATUS_IDLE,
    DreameVacuumMapRecoveryStatus.RUNNING: MAP_RECOVERY_STATUS_RUNNING,
    DreameVacuumMapRecoveryStatus.SUCCESS: MAP_RECOVERY_STATUS_SUCCESS,
    DreameVacuumMapRecoveryStatus.FAIL: MAP_RECOVERY_STATUS_FAIL,
    DreameVacuumMapRecoveryStatus.FAIL_2: MAP_RECOVERY_STATUS_FAIL,
}

MAP_BACKUP_STATUS_TO_NAME: Final = {
    DreameVacuumMapBackupStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumMapBackupStatus.IDLE: MAP_BACKUP_STATUS_IDLE,
    DreameVacuumMapBackupStatus.RUNNING: MAP_BACKUP_STATUS_RUNNING,
    DreameVacuumMapBackupStatus.SUCCESS: MAP_BACKUP_STATUS_SUCCESS,
    DreameVacuumMapBackupStatus.FAIL: MAP_BACKUP_STATUS_FAIL,
}

SELF_WASH_BASE_STATUS_TO_NAME: Final = {
    DreameVacuumSelfWashBaseStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumSelfWashBaseStatus.IDLE: STATE_IDLE,
    DreameVacuumSelfWashBaseStatus.WASHING: SELF_WASH_BASE_STATUS_WASHING,
    DreameVacuumSelfWashBaseStatus.DRYING: SELF_WASH_BASE_STATUS_DRYING,
    DreameVacuumSelfWashBaseStatus.PAUSED: SELF_WASH_BASE_STATUS_PAUSED,
    DreameVacuumSelfWashBaseStatus.RETURNING: SELF_WASH_BASE_STATUS_RETURNING,
    DreameVacuumSelfWashBaseStatus.CLEAN_ADD_WATER: SELF_WASH_BASE_STATUS_CLEAN_ADD_WATER,
    DreameVacuumSelfWashBaseStatus.ADDING_WATER: SELF_WASH_BASE_STATUS_ADDING_WATER,
}

MOP_WASH_LEVEL_TO_NAME: Final = {
    DreameVacuumMopWashLevel.DEEP: MOP_WASH_LEVEL_DEEP,
    DreameVacuumMopWashLevel.DAILY: MOP_WASH_LEVEL_DAILY,
    DreameVacuumMopWashLevel.WATER_SAVING: MOP_WASH_LEVEL_WATER_SAVING,
}

MOPPING_TYPE_TO_NAME: Final = {
    DreameVacuumMoppingType.DEEP: MOPPING_TYPE_DEEP,
    DreameVacuumMoppingType.DAILY: MOPPING_TYPE_DAILY,
    DreameVacuumMoppingType.ACCURATE: MOPPING_TYPE_ACCURATE,
}

STREAM_STATUS_TO_NAME: Final = {
    DreameVacuumStreamStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumStreamStatus.IDLE: STATE_IDLE,
    DreameVacuumStreamStatus.VIDEO: STREAM_STATUS_VIDEO,
    DreameVacuumStreamStatus.AUDIO: STREAM_STATUS_AUDIO,
    DreameVacuumStreamStatus.RECORDING: STREAM_STATUS_RECORDING,
}

VOICE_ASSISTANT_LANGUAGE_TO_NAME: Final = {
    DreameVacuumVoiceAssistantLanguage.DEFAULT: VOICE_ASSISTANT_LANGUAGE_DEFAULT,
    DreameVacuumVoiceAssistantLanguage.ENGLISH: VOICE_ASSISTANT_LANGUAGE_ENGLISH,
    DreameVacuumVoiceAssistantLanguage.GERMAN: VOICE_ASSISTANT_LANGUAGE_GERMAN,
    DreameVacuumVoiceAssistantLanguage.CHINESE: VOICE_ASSISTANT_LANGUAGE_CHINESE,
}

WIDER_CORNER_COVERAGE_TO_NAME: Final = {
    DreameVacuumWiderCornerCoverage.OFF: STATE_OFF,
    DreameVacuumWiderCornerCoverage.LOW_FREQUENCY: WIDER_CORNER_COVERAGE_LOW_FREQUENCY,
    DreameVacuumWiderCornerCoverage.HIGH_FREQUENCY: WIDER_CORNER_COVERAGE_HIGH_FREQUENCY,
}

MOP_PAD_SWING_TO_NAME: Final = {
    DreameVacuumMopPadSwing.OFF: STATE_OFF,
    DreameVacuumMopPadSwing.AUTO: MOP_PAD_SWING_AUTO,
    DreameVacuumMopPadSwing.DAILY: MOP_PAD_SWING_DAILY,
    DreameVacuumMopPadSwing.WEEKLY: MOP_PAD_SWING_WEEKLY,
}

SECOND_CLEANING_TO_NAME: Final = {
    DreameVacuumSecondCleaning.OFF: STATE_OFF,
    DreameVacuumSecondCleaning.IN_DEEP_MODE: SECOND_CLEANING_IN_DEEP_MODE,
    DreameVacuumSecondCleaning.IN_ALL_MODES: SECOND_CLEANING_IN_ALL_MODES,
}

CLEANING_ROUTE_TO_NAME: Final = {
    DreameVacuumCleaningRoute.QUICK: ROUTE_QUICK,
    DreameVacuumCleaningRoute.STANDARD: ROUTE_STANDARD,
    DreameVacuumCleaningRoute.INTENSIVE: ROUTE_INTENSIVE,
    DreameVacuumCleaningRoute.DEEP: ROUTE_DEEP,
}

CUSTOM_MOPPING_ROUTE_TO_NAME: Final = {
    DreameVacuumCustomMoppingRoute.OFF: ROUTE_OFF,
    DreameVacuumCustomMoppingRoute.STANDARD: ROUTE_STANDARD,
    DreameVacuumCustomMoppingRoute.INTENSIVE: ROUTE_INTENSIVE,
    DreameVacuumCustomMoppingRoute.DEEP: ROUTE_DEEP,
}

CLEANGENIUS_TO_NAME = {
    DreameVacuumCleanGenius.OFF: STATE_OFF,
    DreameVacuumCleanGenius.ROUTINE_CLEANING: CLEANGENIUS_ROUTINE_CLEANING,
    DreameVacuumCleanGenius.DEEP_CLEANING: CLEANGENIUS_DEEP_CLEANING,
}

SELF_CLEAN_FREQUENCY_TO_NAME: Final = {
    DreameVacuumSelfCleanFrequency.BY_AREA: SELF_CLEAN_FREQUENCY_BY_AREA,
    DreameVacuumSelfCleanFrequency.BY_TIME: SELF_CLEAN_FREQUENCY_BY_TIME,
    DreameVacuumSelfCleanFrequency.BY_ROOM: SELF_CLEAN_FREQUENCY_BY_ROOM,
}

AUTO_EMPTY_MODE_TO_NAME = {
    DreameVacuumAutoEmptyMode.OFF: STATE_OFF,
    DreameVacuumAutoEmptyMode.STANDARD: AUTO_EMPTY_MODE_STANDARD,
    DreameVacuumAutoEmptyMode.HIGH_FREQUENCY: AUTO_EMPTY_MODE_HIGH_FREQUENCY,
    DreameVacuumAutoEmptyMode.LOW_FREQUENCY: AUTO_EMPTY_MODE_LOW_FREQUENCY,
}

DRAINAGE_STATUS_TO_NAME: Final = {
    DreameVacuumDrainageStatus.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumDrainageStatus.IDLE: STATE_IDLE,
    DreameVacuumDrainageStatus.DRAINING: DRAINAGE_STATUS_DRAINING,
    DreameVacuumDrainageStatus.DRAINING_SUCCESS: DRAINAGE_STATUS_DRAINING_SUCCESS,
    DreameVacuumDrainageStatus.DRAINING_FAILED: DRAINAGE_STATUS_DRAINING_FAILED,
}

LOW_WATER_WARNING_TO_NAME: Final = {
    DreameVacuumLowWaterWarning.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumLowWaterWarning.NO_WARNING: LOW_WATER_WARNING_NO_WARNING,
    DreameVacuumLowWaterWarning.NO_WATER_LEFT_DISMISS: LOW_WATER_WARNING_NO_WATER_LEFT_DISMISS,
    DreameVacuumLowWaterWarning.NO_WATER_LEFT: LOW_WATER_WARNING_NO_WATER_LEFT,
    DreameVacuumLowWaterWarning.NO_WATER_LEFT_AFTER_CLEAN: LOW_WATER_WARNING_NO_WATER_LEFT_AFTER_CLEAN,
    DreameVacuumLowWaterWarning.NO_WATER_FOR_CLEAN: LOW_WATER_WARNING_NO_WATER_FOR_CLEAN,
    DreameVacuumLowWaterWarning.LOW_WATER: LOW_WATER_WARNING_LOW_WATER,
    DreameVacuumLowWaterWarning.TANK_NOT_INSTALLED: LOW_WATER_WARNING_TANK_NOT_INSTALLED,
}

TASK_TYPE_TO_NAME: Final = {
    DreameVacuumTaskType.UNKNOWN: STATE_UNKNOWN,
    DreameVacuumTaskType.IDLE: TASK_TYPE_IDLE,
    DreameVacuumTaskType.STANDARD: TASK_TYPE_STANDARD,
    DreameVacuumTaskType.STANDARD_PAUSED: TASK_TYPE_STANDARD_PAUSED,
    DreameVacuumTaskType.CUSTOM: TASK_TYPE_CUSTOM,
    DreameVacuumTaskType.CUSTOM_PAUSED: TASK_TYPE_CUSTOM_PAUSED,
    DreameVacuumTaskType.SHORTCUT: TASK_TYPE_SHORTCUT,
    DreameVacuumTaskType.SHORTCUT_PAUSED: TASK_TYPE_SHORTCUT_PAUSED,
    DreameVacuumTaskType.SCHEDULED: TASK_TYPE_SCHEDULED,
    DreameVacuumTaskType.SCHEDULED_PAUSED: TASK_TYPE_SCHEDULED_PAUSED,
    DreameVacuumTaskType.SMART: TASK_TYPE_SMART,
    DreameVacuumTaskType.SMART_PAUSED: TASK_TYPE_SMART_PAUSED,
    DreameVacuumTaskType.PARTIAL: TASK_TYPE_PARTIAL,
    DreameVacuumTaskType.PARTIAL_PAUSED: TASK_TYPE_PARTIAL_PAUSED,
    DreameVacuumTaskType.SUMMON: TASK_TYPE_SUMMON,
    DreameVacuumTaskType.SUMMON_PAUSED: TASK_TYPE_SUMMON_PAUSED,
    DreameVacuumTaskType.WATER_STAIN: TASK_TYPE_WATER_STAIN,
    DreameVacuumTaskType.WATER_STAIN_PAUSED: TASK_TYPE_WATER_STAIN_PAUSED,
}

ERROR_CODE_TO_IMAGE_INDEX: Final = {
    DreameVacuumErrorCode.BUMPER: 1,
    DreameVacuumErrorCode.BUMPER_REPEAT: 1,
    DreameVacuumErrorCode.DROP: 2,
    DreameVacuumErrorCode.DROP_REPEAT: 2,
    DreameVacuumErrorCode.CLIFF: 3,
    DreameVacuumErrorCode.GESTURE: 15,
    DreameVacuumErrorCode.BRUSH: 4,
    DreameVacuumErrorCode.SIDE_BRUSH: 5,
    DreameVacuumErrorCode.LEFT_WHEEL_MOTOR: 6,
    DreameVacuumErrorCode.RIGHT_WHEEL_MOTOR: 6,
    DreameVacuumErrorCode.LEFTWHELL_SPEED: 6,
    DreameVacuumErrorCode.RIGHTWHELL_SPEED: 6,
    DreameVacuumErrorCode.TURN_SUFFOCATE: 7,
    DreameVacuumErrorCode.FORWARD_SUFFOCATE: 7,
    DreameVacuumErrorCode.BOX: 8,
    DreameVacuumErrorCode.BOX_FULL: 9,
    DreameVacuumErrorCode.FAN: 9,
    DreameVacuumErrorCode.FILTER_BLOCKED: 9,
    DreameVacuumErrorCode.CHARGE_FAULT: 12,
    DreameVacuumErrorCode.CHARGE_NO_ELECTRIC: 16,
    DreameVacuumErrorCode.BATTERY_LOW: 20,
    DreameVacuumErrorCode.BATTERY_FAULT: 29,
    DreameVacuumErrorCode.INFRARED_FAULT: 39,
    DreameVacuumErrorCode.LDS_ERROR: 48,
    DreameVacuumErrorCode.LDS_BUMPER: 49,
    DreameVacuumErrorCode.EDGE: 54,
    DreameVacuumErrorCode.EDGE_2: 54,
    DreameVacuumErrorCode.CARPET: 55,
    DreameVacuumErrorCode.ULTRASONIC: 58,
    DreameVacuumErrorCode.ROUTE: 61,
    DreameVacuumErrorCode.ROUTE_2: 62,
    DreameVacuumErrorCode.BLOCKED: 63,
    DreameVacuumErrorCode.BLOCKED_2: 63,
    DreameVacuumErrorCode.BLOCKED_3: 64,
    DreameVacuumErrorCode.RESTRICTED: 65,
    DreameVacuumErrorCode.RESTRICTED_2: 65,
    DreameVacuumErrorCode.RESTRICTED_3: 65,
    DreameVacuumErrorCode.MOP_REMOVED: 69,
    DreameVacuumErrorCode.MOP_PAD_STOP_ROTATE: 69,
    DreameVacuumErrorCode.MOP_PAD_STOP_ROTATE_2: 69,
    DreameVacuumErrorCode.BIN_FULL: 101,
    DreameVacuumErrorCode.BIN_FULL_2: 101,
    DreameVacuumErrorCode.BIN_OPEN: 102,
    DreameVacuumErrorCode.BIN_OPEN_2: 102,
    DreameVacuumErrorCode.WATER_TANK: 105,
    DreameVacuumErrorCode.CLEAN_TANK_LEVEL: 105,
    DreameVacuumErrorCode.DIRTY_WATER_TANK: 106,
    DreameVacuumErrorCode.DIRTY_WATER_TANK_2: 106,
    DreameVacuumErrorCode.DIRTY_WATER_TANK_BLOCKED: 106,
    DreameVacuumErrorCode.DIRTY_WATER_TANK_PUMP: 106,
    DreameVacuumErrorCode.DIRTY_TANK_LEVEL: 118,
    DreameVacuumErrorCode.WATER_TANK_DRY: 107,
    DreameVacuumErrorCode.MOP_PAD: 111,
    DreameVacuumErrorCode.WET_MOP_PAD: 111,
    DreameVacuumErrorCode.WASHBOARD_LEVEL: 114,
    DreameVacuumErrorCode.CLEAN_MOP_PAD: 114,
    DreameVacuumErrorCode.NO_MOP_IN_STATION: 69,
    DreameVacuumErrorCode.DUST_BAG_FULL: 102,
    DreameVacuumErrorCode.DIRTY_TANK_NOT_INSTALLED: 76,
    DreameVacuumErrorCode.CLEAN_TANK_LEVEL: 105,
    DreameVacuumErrorCode.STATION_DISCONNECTED: 117,
    DreameVacuumErrorCode.SELF_TEST_FAILED: 999,
    DreameVacuumErrorCode.WASHBOARD_NOT_WORKING: 111,
    DreameVacuumErrorCode.RETURN_TO_CHARGE_FAILED: 1000,
}

# Dreame Vacuum error descriptions
ERROR_CODE_TO_ERROR_DESCRIPTION: Final = {
    DreameVacuumErrorCode.NO_ERROR: ["No error", ""],
    DreameVacuumErrorCode.DROP: [
        "Wheels are suspended",
        "Please reposition the robot and restart.",
    ],
    DreameVacuumErrorCode.CLIFF: [
        "Cliff sensor error",
        "Please wipe the cliff sensor and start the cleanup away from the stairs.",
    ],
    DreameVacuumErrorCode.BUMPER: [
        "Collision sensor is stuck",
        "Please clean and gently tap the collision sensor.",
    ],
    DreameVacuumErrorCode.GESTURE: [
        "Robot is tilted",
        "Please move the robot to a level surface and start again.",
    ],
    DreameVacuumErrorCode.BUMPER_REPEAT: [
        "Collision sensor is stuck",
        "Please clean and gently tap the collision sensor.",
    ],
    DreameVacuumErrorCode.DROP_REPEAT: [
        "Wheels are suspended",
        "Please reposition the robot and restart.",
    ],
    DreameVacuumErrorCode.OPTICAL_FLOW: [
        "Optical flow sensor error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.BOX: [
        "Dust bin not installed",
        "Please install the dust bin and filter.",
    ],
    DreameVacuumErrorCode.TANKBOX: [
        "Water tank not installed",
        "Please install the water tank.",
    ],
    DreameVacuumErrorCode.WATERBOX_EMPTY: [
        "Water tank is empty",
        "Please will up the water tank",
    ],
    DreameVacuumErrorCode.BOX_FULL: [
        "The filter not dry or blocked",
        "Please check whether the filter has dried or needs to be cleaned.",
    ],
    DreameVacuumErrorCode.BRUSH: [
        "The main brush wrapped",
        "Please remove the main brush and clean its bristles and bearings.",
    ],
    DreameVacuumErrorCode.SIDE_BRUSH: [
        "The side brush wrapped",
        "Please remove and clean the side brush.",
    ],
    DreameVacuumErrorCode.FAN: [
        "The filter not dry or blocked",
        "Please check whether the filter has dried or needs to be cleaned.",
    ],
    DreameVacuumErrorCode.LEFT_WHEEL_MOTOR: [
        "The robot is stuck, or its left wheel may be blocked by foreign objects",
        "Check whether there is any object stuck in the main wheels and start the robot in a new position.",
    ],
    DreameVacuumErrorCode.RIGHT_WHEEL_MOTOR: [
        "The robot is stuck, or its right wheel may be blocked by foreign objects",
        "Check whether there is any object stuck in the main wheels and start the robot in a new position.",
    ],
    DreameVacuumErrorCode.TURN_SUFFOCATE: [
        "The robot is stuck, or cannot turn",
        "The robot may be blocked or stuck.",
    ],
    DreameVacuumErrorCode.FORWARD_SUFFOCATE: [
        "The robot is stuck, or cannot go forward",
        "The robot may be blocked or stuck.",
    ],
    DreameVacuumErrorCode.CHARGER_GET: [
        "Cannot find base",
        "Please check whether the power cord is plugged in correctly.",
    ],
    DreameVacuumErrorCode.BATTERY_LOW: [
        "Low battery",
        "Battery level is too low. Please charge.",
    ],
    DreameVacuumErrorCode.CHARGE_FAULT: [
        "Charging error",
        "Please use a dry cloth to wipe charging contacts of the robot and auto-empty base.",
    ],
    DreameVacuumErrorCode.BATTERY_PERCENTAGE: ["", ""],
    DreameVacuumErrorCode.HEART: [
        "Internal error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.CAMERA_OCCLUSION: [
        "Visual positioning sensor error",
        "Please clean the visual positioning sensor.",
    ],
    DreameVacuumErrorCode.MOVE: [
        "Move sensor error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.FLOW_SHIELDING: [
        "Optical sensor error",
        "Please wipe the optical sensor clean and restart.",
    ],
    DreameVacuumErrorCode.INFRARED_SHIELDING: [
        "Infrared shielding error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.CHARGE_NO_ELECTRIC: [
        "The charging dock is not powered on",
        "The charging dock is not powered on. Please check whether the power cord is plugged in correctly.",
    ],
    DreameVacuumErrorCode.BATTERY_FAULT: [
        "Battery temperature error",
        "Please wait until the battery temperature returns to normal.",
    ],
    DreameVacuumErrorCode.FAN_SPEED_ERROR: [
        "Fan speed sensor error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.LEFTWHELL_SPEED: [
        "Left wheel may be blocked by foreign objects",
        "Check whether there is any object stuck in the main wheels and start the robot in a new position.",
    ],
    DreameVacuumErrorCode.RIGHTWHELL_SPEED: [
        "Right wheel may be blocked by foreign objects",
        "Check whether there is any object stuck in the main wheels and start the robot in a new position.",
    ],
    DreameVacuumErrorCode.BMI055_ACCE: [
        "Accelerometer error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.BMI055_GYRO: [
        "Gyro error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.XV7001: [
        "Gyro error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.LEFT_MAGNET: [
        "Left magnet sensor error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.RIGHT_MAGNET: [
        "Right magnet sensor error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.FLOW_ERROR: [
        "Flow sensor error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.INFRARED_FAULT: [
        "Infrared error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.CAMERA_FAULT: [
        "Camera error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.STRONG_MAGNET: [
        "Strong magnetic field detected",
        "Strong magnetic field detected. Please start away from the virtual wall.",
    ],
    DreameVacuumErrorCode.WATER_PUMP: [
        "Water pump error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.RTC: ["RTC error", "Please try to restart the vacuum-mop."],
    DreameVacuumErrorCode.AUTO_KEY_TRIG: [
        "Internal error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.P3V3: [
        "Internal error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.CAMERA_IDLE: [
        "Internal error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.BLOCKED: [
        "The robot may be blocked or stuck.",
        "Cleanup route is blocked, returning to the dock.",
    ],
    DreameVacuumErrorCode.LDS_ERROR: [
        "Laser distance sensor error",
        "Please check whether the laser distance sensor has any jammed items",
    ],
    DreameVacuumErrorCode.LDS_BUMPER: [
        "Laser distance sensor bumper error",
        "Please check whether the laser distance sensor bumper is jammed",
    ],
    DreameVacuumErrorCode.WATER_PUMP_2: [
        "Water pump error",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.FILTER_BLOCKED: [
        "The filter not dry or blocked",
        "Please check whether the filter has dried or needs to be cleaned",
    ],
    DreameVacuumErrorCode.EDGE: [
        "Edge sensor error",
        "Edge sensor error. Please check and clean it.",
    ],
    DreameVacuumErrorCode.CARPET: [
        "Please start the robot in non-carpet area.",
        "A carpet is detected under the robot when it is mopping. Please move the robot to another place and restart it.",
    ],
    DreameVacuumErrorCode.LASER: [
        "The 3D obstacle avoidance sensor is malfunctioning.",
        "Please try to clean the 3D obstacle avoidance sensor.",
    ],
    DreameVacuumErrorCode.EDGE_2: [
        "Edge sensor error",
        "Edge sensor error. Please check and clean it.",
    ],
    DreameVacuumErrorCode.ULTRASONIC: [
        "The ultrasonic sensor is malfunctioning.",
        "Please restart the robot and try it again.",
    ],
    DreameVacuumErrorCode.NO_GO_ZONE: [
        "No-Go zone or virtual wall detected.",
        "Please move the robot away from the area and restart.",
    ],
    DreameVacuumErrorCode.ROUTE: [
        "Unable to reach the specified area.",
        "Please ensure that all doors in the home are open and clear any obstacles along the path.",
    ],
    DreameVacuumErrorCode.ROUTE_2: [
        "Unable to reach the specified area.",
        "Please try to delete the restricted area in the path.",
    ],
    DreameVacuumErrorCode.BLOCKED_2: [
        "Cleanup route is blocked.",
        "Please ensure that all doors in the home are open and clear any obstacles around the vacuum-mop.",
    ],
    DreameVacuumErrorCode.BLOCKED_3: [
        "Cleanup route is blocked.",
        "Please try to delete the restricted area or move the vacuum-mop out of this area.",
    ],
    DreameVacuumErrorCode.RESTRICTED: [
        "Detected that the vacuum-mop is in a restricted area.",
        "Please move the vacuum-mop out of this area.",
    ],
    DreameVacuumErrorCode.RESTRICTED_2: [
        "Detected that the vacuum-mop is in a restricted area.",
        "Please move the vacuum-mop out of this area.",
    ],
    DreameVacuumErrorCode.RESTRICTED_3: [
        "Detected that the vacuum-mop is in a restricted area.",
        "Please move the vacuum-mop out of this area.",
    ],
    DreameVacuumErrorCode.REMOVE_MOP: [
        "Mopping completed. Please remove and clean the mop in time.",
        "",
    ],
    DreameVacuumErrorCode.MOP_REMOVED: [
        "The mop pad comes off during the cleaning task.",
        "The mop pads come off, install them before resuming working.",
    ],
    DreameVacuumErrorCode.MOP_REMOVED_2: [
        "The mop pad comes off during the cleaning task.",
        "The mop pads come off, install them before resuming working.",
    ],
    DreameVacuumErrorCode.MOP_PAD_STOP_ROTATE: [
        "Mop Pad Stops Rotating.",
        "The mop pad has stopped rotating, please check.",
    ],
    DreameVacuumErrorCode.MOP_PAD_STOP_ROTATE_2: [
        "Mop Pad Stops Rotating.",
        "The mop pad has stopped rotating, please check.",
    ],
    DreameVacuumErrorCode.MOP_INSTALL_FAILED: [
        "Mop pad installation failed.",
        "Failed to install mop pads. Please install manually.",
    ],
    DreameVacuumErrorCode.LOW_BATTERY_TURN_OFF: [
        "Low battery. Robot will shut down soon.",
        "",
    ],
    DreameVacuumErrorCode.DIRTY_TANK_NOT_INSTALLED: [
        "The used water tank of robot is not installed.",
        "Please make sure that the used water tank of robot is installed properly, and then start the task.",
    ],
    DreameVacuumErrorCode.ROBOT_IN_HIDDEN_ROOM: [
        "Hidden area. Please move the robot to the appropriate area and retry.",
        "The area has been hidden. To reuse it, please go to the specific map and click the gray area to manually recover the hidden area.",
    ],
    DreameVacuumErrorCode.BIN_FULL: [
        "The dust collection bag is full, or the air duct is blocked.",
        "The system detects that the dust collection bag is full, or the air duct is blocked.",
    ],
    DreameVacuumErrorCode.BIN_OPEN: [
        "The upper cover of auto-empty base is not closed, or the dust collection bag is not installed.",
        "The system detects that the upper cover of auto-empty base is not closed, or the dust collection bag is not installed.",
    ],
    DreameVacuumErrorCode.BIN_OPEN_2: [
        "The upper cover of auto-empty base is not closed, or the dust collection bag is not installed.",
        "The system detects that the upper cover of auto-empty base is not closed, or the dust collection bag is not installed.",
    ],
    DreameVacuumErrorCode.BIN_FULL_2: [
        "The dust collection bag is full, or the air duct is blocked.",
        "The system detects that the dust collection bag is full, or the air duct is blocked.",
    ],
    DreameVacuumErrorCode.WATER_TANK: [
        "The clean water tank is not installed.",
        "The clean water tank is not installed, please install it.",
    ],
    DreameVacuumErrorCode.DIRTY_WATER_TANK: [
        "The dirty water tank is full or not installed.",
        "Check whether the dirty water tank is full and the dirty water tank is installed.",
    ],
    DreameVacuumErrorCode.WATER_TANK_DRY: [
        "Low water level in the clean water tank.",
        "Insufficient water in the fresh tank, please add water. Otherwise, the robot will not return to the base to have the mop pad cleaned during the cleaning task.",
    ],
    DreameVacuumErrorCode.DIRTY_WATER_TANK_BLOCKED: [
        "Dirty water tank blocked.",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.DIRTY_WATER_TANK_PUMP: [
        "Dirty water tank pump error.",
        "Please try to restart the vacuum-mop.",
    ],
    DreameVacuumErrorCode.MOP_PAD: [
        "The washboard is not installed properly.",
        "The washboard is not installed and the robot cannot return to the self-wash base. Please ensure that the washboard is installed and the clasps on both sides are tightly fastened.",
    ],
    DreameVacuumErrorCode.WET_MOP_PAD: [
        "The water level of the washboard is abnormal, please clean the washboard timely.",
        "The water level of the washboard is abnormal. Please clean it timely to avoid blockage. If the problem still cannot be solved, please contact customer service.",
    ],
    DreameVacuumErrorCode.CLEAN_MOP_PAD: [
        "The cleaning task is complete, please clean the mop pad washboard.",
        "Please clean the mop pad washboard in time to avoid stains or odor.",
    ],
    DreameVacuumErrorCode.CLEAN_TANK_LEVEL: [
        "Please fill the clean water tank.",
        "The water in the clean water tank is about to be used up. Check and fill the clean water tank promptly.",
    ],
    DreameVacuumErrorCode.STATION_DISCONNECTED: [
        "Base station not powered on.",
        "Please check whether the power is off or the power switch is on in your home, and re-plug both ends of the base station power supply.",
    ],
    DreameVacuumErrorCode.DIRTY_TANK_LEVEL: [
        "The water level in the used water tank is too high.",
        "Please check if the used water tank is full.",
    ],
    DreameVacuumErrorCode.WASHBOARD_LEVEL: [
        "Water level in the washboard is too high.",
        "Please clean the used water tank and washboard in time.",
    ],
    DreameVacuumErrorCode.NO_MOP_IN_STATION: [
        "Check if the mop pad is in the base station, or install the mop pad onto the robot manually.",
        "The mop pad is out of place. Retry after putting it into the base station or install it onto the robot manually.",
    ],
    DreameVacuumErrorCode.DUST_BAG_FULL: [
        "Check whether the dust collection bag is full.",
        "If so, replace the bag. Please clean the auto-empty vents of the dust bin and the base station regularly.",
    ],
    DreameVacuumErrorCode.SELF_TEST_FAILED: [
        "Self test failed.",
        "There is no water in the clean water tank of the upper and lower water modules.",
    ],
    DreameVacuumErrorCode.WASHBOARD_NOT_WORKING: [
        "Washboard stops working. Please check.",
        "Washboard stops working. Please follow troubleshooting steps as below:\n1. Check if the washboard is tangled. Clean up before use\n2. Check if the washboard is installed properly\n3.如仍未解决请联系客服",
    ],
    DreameVacuumErrorCode.RETURN_TO_CHARGE_FAILED: [
        "Failed to return to charge.",
        "Please check the base station.\n1. Check if the ramp extension plate is installed down to the base station;\n2. Check if the base station is powered on;\n3. Make sure there is no obstacle in front of the base station.",
    ],
}

# Dreame Vacuum low water warning descriptions
LOW_WATER_WARNING_CODE_TO_DESCRIPTION: Final = {
    DreameVacuumLowWaterWarning.NO_WARNING: ["No warning", ""],
    DreameVacuumLowWaterWarning.NO_WATER_LEFT_DISMISS: [
        "Please check the clean water tank.",
        "",
    ],
    DreameVacuumLowWaterWarning.NO_WATER_LEFT: [
        "Please fill the clean water tank.",
        "The water in the clean water tank is about to be used up. Check and fill the clean water tank promptly.",
    ],
    DreameVacuumLowWaterWarning.NO_WATER_LEFT_AFTER_CLEAN: [
        "Please fill the clean water tank.",
        "Mop pad has been cleaned. Detected that the water in the clean water tank is insufficient, please fill the clean water tank and empty the used water tank.",
    ],
    DreameVacuumLowWaterWarning.NO_WATER_FOR_CLEAN: [
        "Low water level in the clean water tank.",
        "Robot has switched to Vacuuming Mode.",
    ],
    DreameVacuumLowWaterWarning.LOW_WATER: [
        "About to run out of water",
        "Please fill the clean water tank.",
    ],
    DreameVacuumLowWaterWarning.TANK_NOT_INSTALLED: [
        "The clean water tank is not installed.",
        "Please check the clean water tank",
    ],
}

CONSUMABLE_TO_LIFE_WARNING_DESCRIPTION: Final = {
    DreameVacuumProperty.MAIN_BRUSH_LEFT: [
        [
            "Main brush must be replaced",
            "The main brush is worn out. Please replace it in time and reset the counter.",
        ],
        [
            "Main brush needs to be replaced soon",
            "The main brush is nearly worn out. Please replace it in time.",
        ],
    ],
    DreameVacuumProperty.SIDE_BRUSH_LEFT: [
        [
            "Side brush must be replaced",
            "The side brush is worn out. Please replace it and reset the counter.",
        ],
        [
            "Side brush needs to be replaced soon",
            "The side brush is nearly worn out. Please replace it as soon as possible.",
        ],
    ],
    DreameVacuumProperty.FILTER_LEFT: [
        [
            "Filter must be replaced",
            "The filter is worn out. Please replace it in time and reset the counter.",
        ],
        [
            "Filter needs to be replaced soon",
            "The filter is nearly worn out. Please replace it in time.",
        ],
    ],
    DreameVacuumProperty.SENSOR_DIRTY_LEFT: [
        ["Sensors must be cleaned", "Please clean the sensors and reset the counter"]
    ],
    DreameVacuumProperty.TANK_FILTER_LEFT: [
        [
            "Tank filter must be replaced",
            "The tank filter is worn out. Please replace it in time and reset the counter.",
        ],
        [
            "Tank filter needs to be replaced soon",
            "The tank filter is nearly worn out. Please replace it in time.",
        ],
    ],
    DreameVacuumProperty.MOP_PAD_LEFT: [
        ["Mop Pad Worn Out", "Please replace the mop pad and reset the counter."],
        ["Mop Pad Nearly Worn Out", "Please replace the mop pad timely."],
    ],
    DreameVacuumProperty.SILVER_ION_LEFT: [
        [
            "Silver Ion Sterilizer Deteriorated",
            "Please replace the silver ion sterilizer and reset the counter.",
        ],
        [
            "Silver Ion Sterilizer Near to Deterioration",
            "Please replace the silver ion sterilizer timely.",
        ],
    ],
    DreameVacuumProperty.DETERGENT_LEFT: [
        [
            "The detergent is used up",
            "Please replace the detergent cartridge it and reset the counter.",
        ],
        [
            "The detergent is about to be used up",
            "The detergent is about to be used up, please replace it in time.",
        ],
    ],
    DreameVacuumProperty.SQUEEGEE_LEFT: [
        ["Squeegee Worn Out", "Please replace the squeegee and reset the counter."],
        ["Squeegee Nearly Worn Out", "Please replace the squeegee timely."],
    ],
    DreameVacuumProperty.ONBOARD_DIRTY_WATER_TANK_LEFT: [
        [
            "Onboard dirty water tank needs to be cleaned",
            "Please clean the onboard dirty water tank and reset the counter.",
        ]
    ],
    DreameVacuumProperty.DIRTY_WATER_TANK_LEFT: [
        [
            "Dirty water tank needs to be cleaned",
            "Please clean the dirty water tank and reset the counter.",
        ]
    ],
}
