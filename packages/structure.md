# Packages Structure

## Climate
climate/
├── ac_automations.yaml             # AC control automations
├── climate_config.yaml             # Base climate configuration
├── average_temp.yaml               # Temperature averaging
├── feels_like.yaml                 # Temperature calculations
├── midea_ac.yaml                   # Midea AC configuration
├── weather_today_static_sensors.yaml

## Energy
energy/
├── energy_config.yaml              # Base energy configuration
├── goodwe/                         # Solar inverter
│   ├── goodwe_config.yaml
│   ├── goodwe_automations.yaml
│   ├── goodwe_cap_mgmt.yaml
│   ├── goodwe_dis_charge_times.yaml
│   ├── goodwe_dod.yaml
│   └── goodwe_mode.yaml
├── geysers/
│   ├── geysers.yaml
│   ├── geysers_loadshedding.yaml
│   └── geysers_solar.yaml
├── loadshedding/
│   ├── eskomsepush.yaml
│   └── power_alert.yaml
├── pool.yaml
├── power_sensors.yaml
├── solcast/
│   ├── solcast_integration.yaml
│   └── solcast_rest.yaml

## Lighting
lighting/
├── lighting_config.yaml            # Base lighting configuration
├── adaptive_lighting.yaml          # Adaptive lighting settings
├── all_lights.yaml                 # Group definitions
├── automations/
│   ├── motion_kitchen.yaml
│   ├── motion_lounge.yaml
│   ├── motion_mainbedroom.yaml
│   ├── motion_babyroom.yaml
│   ├── motion_hallway.yaml
│   ├── motion_ensuite_mbr.yaml
│   ├── triggers_morning.yaml
│   ├── triggers_plex.yaml
│   └── triggers_front.yaml
├── scripts/
│   └── light_scripts.yaml

## Security
security/
├── alarm/
│   ├── alarm.yaml
│   ├── alarm_armed_state_triggers.yaml
│   ├── alarm_auto_arm_away.yaml
│   ├── alarm_bypass.yaml
│   ├── alarm_morning_disarm.yaml
│   └── alarm_notifications.yaml
├── cameras/
│   ├── bi.yaml
│   └── camera_notifications.yaml

## Appliances
appliances/
├── vacuum/
│   ├── dreame_vacuum.yaml
│   ├── dreame_vacuum_automations.yaml
│   ├── dreame_vacuum_helpers.yaml
│   └── xiaomi_rockrobo_vacuum.yaml
├── 3dprinter/
│   ├── 3dprinter.yaml
│   ├── bambu_x1c_legend.yaml
│   └── moonraker.yaml

## Presence
presence/
├── persons.yaml
├── return_home.yaml
└── zones.yaml

## System
system/
├── helpers/
│   └── switch_scripts.yaml
