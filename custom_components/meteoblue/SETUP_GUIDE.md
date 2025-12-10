# Meteoblue Weather Integration - Quick Setup Guide

This guide will help you set up the Meteoblue Weather integration in Home Assistant.

## Prerequisites

### 1. Get a Meteoblue API Key

You need an API key from Meteoblue to use this integration.

**How to get an API key:**
1. Email [email protected]
2. Request a free trial or discuss pricing for a paid plan
3. They will provide you with an API key

**API Plans:**
- **Free Trial**: Available for testing (limited calls)
- **Paid Plans**: Various tiers based on call volume
- **Rate Limit**: 500 calls per minute (default)

### 2. Know Your Location Coordinates

The integration needs latitude and longitude coordinates. By default, it will use your Home Assistant's configured location, but you can specify different coordinates if needed.

**Finding coordinates:**
- Use your Home Assistant location: Settings → System → General
- Or use Google Maps: Right-click on a location → "What's here?"
- For South Africa (example): Cape Town is approximately `-33.9249, 18.4241`

---

## Installation Steps

### Step 1: Install the Integration

The integration is already in your `custom_components` folder at:
```
/config/custom_components/meteoblue/
```

If you moved or copied it from elsewhere, ensure all files are present.

### Step 2: Restart Home Assistant

After installation, restart Home Assistant:
- Settings → System → Restart
- Wait for Home Assistant to come back online

### Step 3: Add the Integration

1. Go to **Settings** → **Devices & Services**
2. Click the **+ ADD INTEGRATION** button (bottom right)
3. Search for **"Meteoblue"**
4. Click on **Meteoblue Weather**

### Step 4: Configure

You'll see a configuration form with these fields:

| Field | Description | Required | Default |
|-------|-------------|----------|---------|
| **API Key** | Your Meteoblue API key | Yes | - |
| **Name** | Friendly name for this location | No | "Meteoblue" |
| **Latitude** | Location latitude | No | Your HA latitude |
| **Longitude** | Location longitude | No | Your HA longitude |

**Example Configuration:**
```
API Key: your_meteoblue_api_key_here
Name: Home Weather
Latitude: -33.9249  (leave empty to use HA default)
Longitude: 18.4241  (leave empty to use HA default)
```

### Step 5: Submit

Click **SUBMIT**. The integration will:
1. Validate your API key
2. Test the connection to Meteoblue
3. Fetch initial weather data

If successful, you'll see a success message and the integration will be added.

---

## Post-Setup Configuration

### Configure Options

After setup, you can customize the integration:

1. Go to **Settings** → **Devices & Services**
2. Find **Meteoblue Weather** in the list
3. Click **CONFIGURE**
4. Adjust these options:

| Option | Description | Default |
|--------|-------------|---------|
| **Forecast Days** | How many days to forecast (1-7) | 7 |
| **Enable Air Quality** | Create air quality sensors | Enabled |
| **Enable Additional Sensors** | Create extra sensor entities | Disabled |

### Entities Created

After setup, you'll have these entities:

#### Weather Entity (Always)
- `weather.meteoblue` (or your custom name)
  - Current temperature, humidity, pressure, wind
  - Hourly forecasts (up to 7 days)
  - Daily forecasts (up to 7 days)

#### Air Quality Entity (If Enabled)
- `air_quality.meteoblue_air_quality`
  - PM2.5 (Particulate Matter 2.5μm)
  - PM10 (Particulate Matter 10μm)
  - O3 (Ozone)
  - NO2 (Nitrogen Dioxide)
  - SO2 (Sulfur Dioxide)
  - CO (Carbon Monoxide)

---

## Using the Weather Entity

### Add Weather Card to Dashboard

1. Edit your dashboard
2. Add a new card
3. Select **Weather Forecast**
4. Choose entity: `weather.meteoblue`
5. Configure display options
6. Save

**Example YAML:**
```yaml
type: weather-forecast
entity: weather.meteoblue
show_forecast: true
```

### Check Current Conditions

View the entity in Developer Tools:
- Go to **Developer Tools** → **States**
- Search for `weather.meteoblue`
- View all attributes

---

## Testing the Integration

### 1. Verify Weather Data

Check that current conditions are showing:
```yaml
# In Developer Tools → Template
{{ states('weather.meteoblue') }}
{{ state_attr('weather.meteoblue', 'temperature') }}
{{ state_attr('weather.meteoblue', 'humidity') }}
```

### 2. Test Forecasts

Get hourly forecast:
```yaml
action: weather.get_forecasts
data:
  type: hourly
target:
  entity_id: weather.meteoblue
response_variable: forecast
```

### 3. Check Air Quality (If Enabled)

```yaml
# In Developer Tools → Template
{{ state_attr('air_quality.meteoblue_air_quality', 'particulate_matter_2_5') }}
{{ state_attr('air_quality.meteoblue_air_quality', 'ozone') }}
```

---

## Troubleshooting

### Issue: Integration Not Found

**Solution:**
1. Verify files exist in `custom_components/meteoblue/`
2. Restart Home Assistant completely
3. Clear browser cache
4. Check Home Assistant logs for errors

### Issue: "Cannot Connect" Error

**Possible causes and solutions:**

1. **Invalid API Key**
   - Double-check your API key (no extra spaces)
   - Verify it's activated by Meteoblue
   - Contact Meteoblue support

2. **Network Issues**
   - Check internet connection
   - Verify firewall isn't blocking `my.meteoblue.com`
   - Test API manually: `curl "https://my.meteoblue.com/packages/current?lat=-33.92&lon=18.42&apikey=YOUR_KEY"`

3. **API Quota Exceeded**
   - Check if you've exceeded daily call limit
   - Wait until quota resets (usually midnight UTC)
   - Upgrade to higher tier plan

### Issue: No Air Quality Data

**Solutions:**
1. Enable air quality in integration options
2. Verify your API plan includes air quality package
3. Some locations may not have air quality data
4. Check Meteoblue API documentation for coverage

### Issue: Weather Not Updating

**Solutions:**
1. Check coordinator logs:
   ```
   Settings → System → Logs
   Filter: meteoblue
   ```
2. Verify update intervals:
   - Forecast: Every 2 hours
   - Current: Every 15 minutes
   - Air Quality: Every 1 hour
3. Reload integration:
   - Settings → Devices & Services
   - Meteoblue → ⋮ → Reload

---

## Checking Logs

View integration logs for debugging:

1. Go to **Settings** → **System** → **Logs**
2. Filter by `meteoblue` or `custom_components.meteoblue`
3. Look for errors or warnings

**Common log entries:**
- `Fetching forecast data for lat=...` (normal update)
- `Invalid API key` (authentication error)
- `Rate limit exceeded` (too many requests)
- `Request timeout` (network issue)

---

## Multiple Locations

You can add multiple locations:

1. Add Integration again (Step 3-5 above)
2. Use different coordinates
3. Give it a unique name (e.g., "Cape Town Weather", "Johannesburg Weather")
4. Each location creates separate entities

**Example:**
- Location 1: `weather.home_weather` (Cape Town)
- Location 2: `weather.work_weather` (Johannesburg)

---

## API Usage Tips

### Optimize API Calls

The integration is optimized to minimize API usage:
- Forecast updates every 2 hours (not every minute)
- Current weather every 15 minutes
- Air quality every 1 hour

**Estimated daily calls:**
- Forecast: ~12 calls/day
- Current: ~96 calls/day
- Air Quality: ~24 calls/day
- **Total**: ~132 calls/day per location

### Monitor Usage

Check API usage in Meteoblue account dashboard (if available) or monitor through logs.

---

## Advanced: Using in Automations

### Example 1: Close Windows Before Rain

```yaml
automation:
  - alias: "Close Windows - Rain Alert"
    trigger:
      - platform: state
        entity_id: weather.meteoblue
        to: "rainy"
    condition:
      - condition: state
        entity_id: binary_sensor.window_bedroom
        state: "on"
    action:
      - action: notify.mobile_app
        data:
          message: "It's going to rain! Close bedroom window."
```

### Example 2: Air Quality Alert

```yaml
automation:
  - alias: "Poor Air Quality - Stay Indoors"
    trigger:
      - platform: numeric_state
        entity_id: air_quality.meteoblue_air_quality
        value_template: "{{ state.attributes.particulate_matter_2_5 }}"
        above: 35
    action:
      - action: notify.notify
        data:
          title: "Air Quality Alert"
          message: "PM2.5 is {{ states.air_quality.meteoblue_air_quality.attributes.particulate_matter_2_5 }}. Consider staying indoors."
```

### Example 3: Weather-Based Climate Control

```yaml
automation:
  - alias: "AC On - High Temperature"
    trigger:
      - platform: numeric_state
        entity_id: weather.meteoblue
        attribute: temperature
        above: 30
    condition:
      - condition: state
        entity_id: binary_sensor.someone_home
        state: "on"
    action:
      - action: climate.set_temperature
        target:
          entity_id: climate.living_room
        data:
          temperature: 22
          hvac_mode: cool
```

---

## Updating the Integration

When updates are available:

1. Replace files in `custom_components/meteoblue/`
2. Restart Home Assistant
3. Check changelog for breaking changes
4. Reconfigure if needed

---

## Uninstalling

To remove the integration:

1. Go to **Settings** → **Devices & Services**
2. Find **Meteoblue Weather**
3. Click **⋮** (three dots)
4. Select **Delete**
5. Confirm deletion
6. (Optional) Remove files from `custom_components/meteoblue/`

---

## Getting Help

**Support Resources:**
- Check `README.md` for detailed documentation
- Review logs: Settings → System → Logs
- Home Assistant Community Forum
- GitHub Issues (if available)

**Information to Provide When Asking for Help:**
- Home Assistant version
- Integration version (1.0.0)
- Error message from logs
- Configuration (without API key)
- Steps to reproduce issue

---

## Summary Checklist

- [ ] Obtained Meteoblue API key
- [ ] Installed integration files
- [ ] Restarted Home Assistant
- [ ] Added integration via UI
- [ ] Configured with API key and location
- [ ] Integration shows as "Connected"
- [ ] Weather entity appears in States
- [ ] Weather card added to dashboard
- [ ] Air quality configured (if needed)
- [ ] Tested in automations (optional)

---

**Congratulations!** Your Meteoblue Weather integration is now set up and ready to use. Enjoy accurate weather forecasts and air quality monitoring in your Home Assistant!

For more information, see the full [README.md](README.md).