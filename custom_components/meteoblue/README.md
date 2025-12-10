# Meteoblue Weather Integration for Home Assistant

A custom integration that provides weather forecasts and air quality data from [Meteoblue](https://www.meteoblue.com/) for Home Assistant.

## Features

- 🌤️ **Weather Entity** with current conditions and forecasts
  - Current temperature, humidity, pressure, wind, and conditions
  - Hourly forecasts (up to 7 days)
  - Daily forecasts (up to 7 days)
  - Native support for Home Assistant weather cards

- 🏭 **Air Quality Monitoring** (optional)
  - PM2.5 (Particulate Matter 2.5μm)
  - PM10 (Particulate Matter 10μm)
  - O3 (Ozone)
  - NO2 (Nitrogen Dioxide)
  - SO2 (Sulfur Dioxide)
  - CO (Carbon Monoxide)

- 📊 **Additional Sensors** (optional)
  - UV Index
  - Precipitation Probability
  - Wind Gust Speed
  - Cloud Coverage
  - And more...

## Installation

### Prerequisites

You need a Meteoblue API key. Sign up for one on the [meteoblue](https://content.meteoblue.com/en/business-solutions/weather-apis) website.

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to "Integrations"
3. Click the three dots in the top right
4. Select "Custom repositories"
5. Add this repository URL and select "Integration" as the category
6. Click "Install"
7. Restart Home Assistant

### Manual Installation

1. Copy the `meteoblue` folder to your `custom_components` directory
2. Restart Home Assistant
3. Go to Settings → Devices & Services → Add Integration
4. Search for "Meteoblue Weather"

## Configuration

### Setup via UI

1. Go to **Settings** → **Devices & Services**
2. Click **+ Add Integration**
3. Search for **Meteoblue Weather**
4. Enter your configuration:
   - **API Key**: Your Meteoblue API key (required)
   - **Name**: Friendly name for this location (default: "Meteoblue")
   - **Latitude**: Location latitude (defaults to Home Assistant's location)
   - **Longitude**: Location longitude (defaults to Home Assistant's location)

5. Click **Submit**

### Options

After setup, you can configure additional options by clicking **Configure** on the integration:

- **Forecast Days**: Number of days to forecast (1-7, default: 7)
- **Enable Air Quality**: Enable air quality sensors (default: enabled)
- **Enable Additional Sensors**: Enable extra sensor entities (default: disabled)

## Usage

### Weather Card

Once configured, the weather entity will appear as `weather.meteoblue` (or with your custom name). You can use it with the standard weather card:

```yaml
type: weather-forecast
entity: weather.meteoblue
show_forecast: true
```

### Automations

#### Example: Rain Alert

```yaml
automation:
  - alias: "Rain Alert"
    trigger:
      - platform: state
        entity_id: weather.meteoblue
        to: "rainy"
    action:
      - action: notify.notify
        data:
          message: "It's going to rain! Don't forget your umbrella."
```

#### Example: Temperature Warning

```yaml
automation:
  - alias: "High Temperature Alert"
    trigger:
      - platform: numeric_state
        entity_id: weather.meteoblue
        attribute: temperature
        above: 35
    action:
      - action: notify.notify
        data:
          message: "Temperature is above 35°C! Stay hydrated."
```

#### Example: Air Quality Alert

```yaml
automation:
  - alias: "Poor Air Quality Alert"
    trigger:
      - platform: numeric_state
        entity_id: air_quality.meteoblue_air_quality
        value_template: "{{ state.attributes.particulate_matter_2_5 }}"
        above: 35
    action:
      - action: notify.notify
        data:
          message: "PM2.5 levels are high. Consider staying indoors."
```

### Forecast Service

Use the `weather.get_forecasts` service to retrieve forecast data:

```yaml
action: weather.get_forecasts
data:
  type: hourly
target:
  entity_id: weather.meteoblue
response_variable: hourly_forecast
```

## API Information

### Update Intervals

- **Forecast Data**: Every 2 hours (recommended by Meteoblue)
- **Current Conditions**: Every 15 minutes
- **Air Quality**: Every 1 hour

### API Limits

Be aware of your API plan's rate limits:
- Default rate limit: 500 calls per minute
- Daily quota varies by plan (free trial, paid plans)

### Data Attribution

Weather data provided by Meteoblue. Attribution is automatically included in all entities.

## Troubleshooting

### Integration Not Showing Up

1. Ensure you've restarted Home Assistant after installation
2. Check logs for errors: Settings → System → Logs
3. Verify the `custom_components/meteoblue` directory exists

### "Cannot Connect" Error

1. Verify your API key is correct
2. Check your internet connection
3. Ensure Meteoblue API is accessible from your network
4. Check if you've exceeded your API quota

### No Air Quality Data

1. Ensure air quality is enabled in integration options
2. Check if your API plan includes air quality data
3. Some locations may not have air quality data available

### Weather Condition Not Updating

1. Check coordinator update intervals in logs
2. Verify API is returning data (check logs)
3. Try reloading the integration

## Advanced Configuration

### Multiple Locations

You can add the integration multiple times for different locations:

1. Add Integration → Meteoblue Weather
2. Enter a different location name and coordinates
3. Each location will have its own entities

### Custom Update Intervals

Currently, update intervals are fixed. Future versions may allow customization through options.

## Development

### Project Structure

```
custom_components/meteoblue/
├── __init__.py              # Integration setup
├── manifest.json            # Integration metadata
├── const.py                 # Constants and mappings
├── config_flow.py           # UI configuration
├── coordinator.py           # API client and coordinators
├── weather.py               # Weather entity
├── air_quality.py           # Air quality entity
├── sensor.py                # Additional sensors (future)
├── strings.json             # UI translations
└── translations/
    └── en.json              # English translations
```

### Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

- **Issues**: Report bugs or request features via GitHub Issues
- **Documentation**: [Meteoblue API Documentation](https://docs.meteoblue.com/en/weather-apis)
- **Home Assistant Community**: [Home Assistant Forum](https://community.home-assistant.io/)

## License

This integration is provided as-is for use with Home Assistant.

## Credits

- **Developer**: Custom integration for Home Assistant
- **Data Provider**: [Meteoblue AG](https://www.meteoblue.com/)
- **Weather API**: [Meteoblue Weather API](https://docs.meteoblue.com/)

## Changelog

### Version 1.0.0 (Initial Release)

- ✅ Weather entity with current conditions
- ✅ Hourly and daily forecasts
- ✅ Air quality monitoring
- ✅ UI-based configuration
- ✅ Options flow for customization
- ✅ Multiple location support

## Roadmap

Future enhancements planned:

- 🔄 Additional sensor entities (UV index, precipitation probability)
- 🔄 Historical weather data
- 🔄 Weather alerts and warnings
- 🔄 Sun and moon data
- 🔄 Customizable update intervals
- 🔄 Better error handling and diagnostics

---

**Note**: This is a custom integration and is not officially affiliated with Meteoblue AG or Home Assistant.
