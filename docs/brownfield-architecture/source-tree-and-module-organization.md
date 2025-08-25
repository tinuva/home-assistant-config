# Source Tree and Module Organization

## Project Structure (Actual)

```text
homeassistant/
├── configuration.yaml           # Main HA config with package includes
├── packages/                    # Modular configuration (92+ files)
│   ├── appliances/             # 3D printer, vacuum, egg boiler
│   ├── climate/                # AC, humidity, temperature control
│   ├── energy/                 # Solar, load shedding, power management
│   ├── finance/                # Price indicators, stock tracking
│   ├── helpers/                # Utility scripts and switches
│   ├── integrations/           # External service integrations
│   ├── lighting/               # Motion detection, adaptive lighting
│   ├── notifications/          # Slack, camera alerts
│   ├── presence/               # Person tracking, zones
│   ├── security/               # Alarm system, cameras, access control
│   ├── system/                 # Network, updates, maintenance
│   └── zigbee/                 # Zigbee device management
├── custom_components/          # 20+ custom integrations
│   ├── hacs/                   # Home Assistant Community Store
│   ├── goodwe/                 # Solar inverter integration
│   ├── envisalink_new/         # Alarm system (DSC)
│   ├── solcast_solar/          # Solar forecasting
│   ├── adaptive_lighting/      # Dynamic lighting control
│   └── [15+ other integrations]
├── includes/                   # Core configuration files
│   ├── sensors.yaml           # Time/date and template sensors
│   ├── camera.yaml            # Camera configurations (mostly commented)
│   ├── recorder.yaml          # Database recording settings
│   └── notify.yaml            # Notification service setup
├── themes/                    # Custom UI themes
├── automations.yaml          # UI-managed automations
├── scripts.yaml              # Reusable automation scripts
└── secrets.yaml              # Credentials and API keys
```

## Key Modules and Their Purpose

- **Energy Management**: `packages/energy/` - Complex solar integration with GoodWe inverter, load shedding management, battery optimization
- **Security System**: `packages/security/alarm/` - DSC PC1864 alarm with 26+ zones via Envisalink integration
- **Lighting Automation**: `packages/lighting/` - Motion-based lighting with adaptive brightness and extensive room coverage
- **Climate Control**: `packages/climate/` - Midea AC integration, humidity-based bathroom fan control
- **Notifications**: `packages/notifications/` - Slack-based alerting system with interactive features
