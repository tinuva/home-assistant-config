# Technical Debt and Known Issues

## Critical Technical Debt

1. **Camera Integration**: Most camera configurations are commented out in `includes/camera.yaml` - suggests abandoned or problematic integration
2. **Alexa Integration**: Commented out in main config - possibly deprecated or non-functional
3. **SureFlap Integration**: Commented out in main config, but shell commands remain
4. **Mixed Integration Patterns**: Some integrations use old patterns, others use newer config flow methods

## Workarounds and Gotchas

- **Secrets Management**: Heavy reliance on `secrets.yaml` - ensure this file is properly configured
- **Package Dependencies**: 92+ package files create complex interdependencies - changes may have cascading effects
- **Custom Component Updates**: 20+ custom components require manual maintenance and compatibility checking
- **South African Specific**: Load shedding integration is location-specific (South Africa)
- **Database Size**: SQLite database can grow large with extensive sensor data - recorder config filters some entities

## Configuration Patterns

- **Mixed Config Methods**: Uses both YAML packages and UI configuration (automations, scripts)
- **Template Sensors**: Heavy use of Jinja2 templates for complex logic
- **Group-Based Security**: Alarm sensors organized into groups for different armed states
- **Utility Meters**: Energy tracking uses utility_meter platform for daily/monthly statistics
