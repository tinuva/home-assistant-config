# Integration Points and External Dependencies

## External Services

| Service        | Purpose              | Integration Type | Key Files                           |
| -------------- | -------------------- | ---------------- | ----------------------------------- |
| Slack          | Notifications        | Webhook/API      | `packages/notifications/`           |
| Solcast        | Solar forecasting    | REST API         | `packages/energy/solcast/`          |
| Eskom SE Push  | Load shedding alerts | REST API         | `packages/energy/loadshedding/`     |
| GoodWe Cloud   | Solar monitoring     | Custom Component | `custom_components/goodwe/`         |
| GitHub         | Configuration backup | Git integration  | `.github/` workflows                |

## Hardware Integrations

- **Envisalink 4**: DSC alarm system bridge (IP: configured in secrets)
- **GoodWe Inverter**: Local network connection for solar data
- **Shelly Devices**: WiFi switches and dimmers
- **Xiaomi Gateway**: Zigbee coordinator for sensors
- **MikroTik Router**: Network monitoring and device tracking

## Internal Integration Patterns

- **Package System**: Modular configuration through `packages: !include_dir_named packages`
- **Template Sensors**: Complex logic in `sensor.platform: template`
- **Automation Triggers**: Mix of time-based, state-based, and template triggers
- **Notification System**: Centralized through `script.alert` in notification packages
