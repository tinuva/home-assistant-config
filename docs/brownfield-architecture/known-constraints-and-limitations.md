# Known Constraints and Limitations

## Hardware Constraints
- **Envisalink**: Single connection limit, requires specific network configuration
- **GoodWe**: Local network access required, cloud integration as backup
- **Zigbee**: Limited to Xiaomi gateway capabilities (noted plans to upgrade)

## Software Limitations
- **Custom Components**: Manual update process, compatibility risks
- **Database**: SQLite performance limitations with extensive sensor data
- **Backup**: Configuration only, database and media require separate backup strategy

## Location-Specific Dependencies
- **South African Grid**: Load shedding integration specific to Eskom
- **Timezone**: Africa/Johannesburg hardcoded
- **Currency**: ZAR pricing calculations in energy cost sensors
