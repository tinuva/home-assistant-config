# Quick Reference - Key Files and Entry Points

## Critical Files for Understanding the System

- **Main Entry**: `configuration.yaml` (primary Home Assistant config)
- **Package Configuration**: `packages/` directory (modular organization)
- **Custom Integrations**: `custom_components/` (20+ custom integrations)
- **Core Configuration**: `includes/` directory (sensors, cameras, etc.)
- **Secrets Management**: `secrets.yaml` (credentials and sensitive data)
- **Version Info**: `.HA_VERSION` (currently 2025.8.3)
- **Automations**: `automations.yaml` (UI-managed automations)
- **Scripts**: `scripts.yaml` (reusable automation scripts)

## Key Integration Points

- **Alarm System**: `packages/security/alarm/alarm.yaml` (DSC PC1864 via Envisalink)
- **Solar/Energy**: `packages/energy/goodwe/goodwe.yaml` (GoodWe inverter integration)
- **Lighting**: `packages/lighting/` (motion-based and adaptive lighting)
- **Climate**: `packages/climate/` (AC automation and humidity control)
- **Notifications**: `packages/notifications/` (Slack integration primary)
