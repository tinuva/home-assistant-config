# Data Models and Integrations

## Core Integrations

### Built-in Integrations
- **Default Config**: Enabled for most standard HA features
- **Frontend**: Lovelace UI with custom themes
- **Recorder**: SQLite database with custom filtering
- **Logger**: Custom logging configuration in `logging/`

### Custom Components (20+ Active)

| Component           | Version  | Purpose                        | Critical Notes               |
| ------------------- | -------- | ------------------------------ | ---------------------------- |
| HACS                | 2.0.5    | Community Store                | Core dependency              |
| GoodWe              | 0.9.9.29 | Solar inverter integration     | Energy management critical   |
| Envisalink New      | 1.1.0    | DSC alarm system              | Security system core         |
| Solcast Solar       | v4.3.5   | Solar forecasting             | Energy optimization          |
| Adaptive Lighting   | 1.26.0   | Dynamic lighting control      | Lighting automation          |
| Bambu Lab           | 2.1.27   | 3D printer monitoring         | Appliance management         |
| Dreame Vacuum       | v2.0.0b16| Vacuum automation             | Cleaning automation          |
| Load Shedding       | 1.5.2    | South African power alerts    | Energy management            |
| Midea AC            | 2025.7.0 | Air conditioning control      | Climate management           |
| Average             | 2.4.0    | Statistical sensors           | Data processing              |

## Device Ecosystem

### Security Devices
- **Alarm Panel**: DSC PC1864 with Envisalink 4 interface
- **Zones**: 26 configured zones (PIR sensors, door/window contacts, beams)
- **Access Control**: SureFlap pet door integration
- **Cameras**: EZVIZ C3W systems (configuration mostly commented out)

### Energy & Solar
- **Inverter**: GoodWe solar inverter with battery storage
- **Monitoring**: Solcast solar forecasting
- **Load Management**: Eskom load shedding integration for South Africa
- **Smart Switches**: Shelly devices for automation

### Lighting & Climate
- **Smart Lighting**: Adaptive lighting with motion detection across all rooms
- **Climate Control**: Midea AC units with automation
- **Environmental**: Xiaomi Aqara temperature/humidity sensors

### Appliances & IoT
- **Vacuum**: Dreame vacuum with scheduling
- **3D Printer**: Bambu Lab X1C with monitoring
- **Network**: MikroTik router integration
