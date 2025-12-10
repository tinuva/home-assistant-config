# Meteoblue Integration - Logging Guide

## Quick Setup

### Enable Logging

Add to your `logging/logger.yaml` (or `configuration.yaml` logger section):

```yaml
logger:
  logs:
    custom_components.meteoblue: info
```

For detailed debugging, use `debug` level:

```yaml
logger:
  logs:
    custom_components.meteoblue: debug
```

### Apply Changes

**Option 1 - Reload Logger** (No restart needed):
```
Developer Tools → YAML → Reload "Logging"
```

**Option 2 - Restart Home Assistant**:
```bash
ha core restart
```

---

## Log Levels Explained

| Level | What You'll See | Use When |
|-------|-----------------|----------|
| `debug` | Everything (API calls, data parsing, field lists) | Troubleshooting issues |
| `info` | Updates, field availability, important events | Normal monitoring |
| `warning` | Potential problems, missing data | Default usage |
| `error` | Failures, API errors | Production (default) |

**Recommended**: Start with `info`, switch to `debug` only when troubleshooting.

---

## What You'll See in Logs

### Normal Operation (info level)

After reloading the integration, you'll see:

```
[custom_components.meteoblue] Current data fields available: ['temperature', 'pictocode', 'windspeed', 'winddirection', 'isdaylight', 'relativehumidity', 'sealevelpressure', 'totalcloudcover', 'felttemperature']

[custom_components.meteoblue] Forecast 1h data fields available: ['time', 'temperature', 'pictocode', 'windspeed', 'winddirection', 'precipitation', 'precipitation_probability', 'relativehumidity', 'sealevelpressure', 'totalcloudcover', 'uvindex']

[custom_components.meteoblue] Forecast day data fields available: ['time', 'temperature_max', 'temperature_min', 'precipitation', 'precipitation_probability', 'windspeed_mean', 'winddirection', 'pictocode']
```

This shows **exactly what data Meteoblue is providing** for your location and API plan.

### Debug Level

With `debug` level, you'll also see:

```
[custom_components.meteoblue.coordinator] Fetching forecast data for lat=-33.xx, lon=18.xx
[custom_components.meteoblue.coordinator] Fetching current weather data for lat=-33.xx, lon=18.xx
[custom_components.meteoblue.coordinator] Fetching air quality data for lat=-33.xx, lon=18.xx
```

Plus detailed API responses and data parsing info.

---

## Viewing Logs

### Method 1: Home Assistant UI

1. Go to **Settings → System → Logs**
2. Use the search/filter box: type `meteoblue`
3. View recent log entries

### Method 2: Live Logs (SSH/Terminal)

```bash
ha core logs -f | grep meteoblue
```

Press `Ctrl+C` to stop.

### Method 3: Log File

```bash
# View last 50 lines
tail -50 /config/home-assistant.log | grep meteoblue

# Follow live
tail -f /config/home-assistant.log | grep meteoblue
```

---

## Common Log Messages

### Success Messages

✅ **Integration loaded successfully**:
```
INFO: Current data fields available: [...]
```

✅ **Data updated**:
```
DEBUG: Fetching forecast data for lat=...
```

✅ **No errors** - Everything is working!

### Error Messages

❌ **Invalid API Key**:
```
ERROR: Invalid API key
UpdateFailed: Invalid API key
```
**Fix**: Check API key in integration settings

❌ **Rate Limited**:
```
ERROR: Rate limit exceeded
UpdateFailed: Rate limit exceeded
```
**Fix**: Wait for quota reset or upgrade API plan

❌ **Network Timeout**:
```
ERROR: Request timeout
UpdateFailed: Request timeout
```
**Fix**: Check internet connection

❌ **API Response Error**:
```
ERROR: API response error: 403
```
**Fix**: Check API plan permissions

### Warning Messages

⚠️ **Missing Data**:
```
WARNING: Error parsing daily forecast at index 3: ...
```
Usually not critical - means some forecast data is incomplete

⚠️ **Coordinator Not Available**:
```
WARNING: Current coordinator data not available, using forecast fallback
```
Normal if current data hasn't updated yet

---

## Troubleshooting with Logs

### Issue: Attributes Not Showing

**Check logs for**:
```
Current data fields available: [...]
```

**Compare with your attributes**:
- If field is in log but not showing → Check property mapping in code
- If field NOT in log → Meteoblue doesn't provide it for your location/plan

**Example**: 
```
# If logs show:
Current data fields available: ['temperature', 'windspeed', 'relativehumidity']

# But you're missing humidity:
# → Property mapping issue (likely fixed in latest version)

# If logs DON'T show 'uvindex':
# → Meteoblue doesn't provide UV data for your plan/location
```

### Issue: Weather Not Updating

**Enable debug logging**, then check:

```
DEBUG: Fetching forecast data for lat=-33.xx, lon=18.xx
```

**If you DON'T see this**:
- Coordinator might be paused
- Check: Settings → Devices & Services → Meteoblue → Device Info → "Last Updated"

**If you see errors after the fetch**:
- API issue (check error message)
- Network issue
- Rate limiting

### Issue: Air Quality Not Working

**Check logs for**:
```
DEBUG: Fetching air quality data for lat=-33.xx, lon=18.xx
```

**If missing**:
- Air quality might be disabled in options
- Check: Integration → Configure → "Enable Air Quality"

**If showing but empty**:
- Meteoblue might not provide air quality for your location
- Check API plan includes air quality package

---

## Debug Checklist

When troubleshooting, gather this info:

1. **Enable debug logging**:
   ```yaml
   custom_components.meteoblue: debug
   ```

2. **Reload integration**:
   ```
   Settings → Devices & Services → Meteoblue → Reload
   ```

3. **Check logs** for:
   - [ ] "Current data fields available" message
   - [ ] "Forecast 1h data fields available" message
   - [ ] Any ERROR or WARNING messages
   - [ ] "Fetching ... data" messages

4. **Copy relevant log entries**

5. **Check entity attributes**:
   ```yaml
   # Developer Tools → Template
   {{ states.weather.meteoblue.attributes }}
   ```

6. **Compare**:
   - What fields are in logs?
   - What attributes are showing?
   - What's missing?

---

## Log Rotation

Home Assistant automatically rotates logs. To keep more history:

In `configuration.yaml`:
```yaml
logger:
  default: error
  logs:
    custom_components.meteoblue: info
  
recorder:
    purge_keep_days: 7
```

---

## Performance Impact

**Info Level**: Minimal impact
- Logs only important events
- Recommended for daily use

**Debug Level**: Moderate impact
- Logs every API call and data processing
- Use only when troubleshooting
- Switch back to `info` when done

---

## Advanced: Logging Specific Components

Log only specific parts:

```yaml
logger:
  logs:
    # Main integration
    custom_components.meteoblue: info
    
    # Only coordinator (API calls)
    custom_components.meteoblue.coordinator: debug
    
    # Only weather entity
    custom_components.meteoblue.weather: debug
    
    # Only config flow
    custom_components.meteoblue.config_flow: debug
```

---

## Example: Full Debug Session

1. **Enable debug**:
   ```yaml
   logger:
     logs:
       custom_components.meteoblue: debug
   ```

2. **Reload logger**:
   ```
   Developer Tools → YAML → Reload Logging
   ```

3. **Reload integration**:
   ```
   Settings → Devices & Services → Meteoblue → Reload
   ```

4. **Watch logs**:
   ```bash
   ha core logs -f | grep meteoblue
   ```

5. **You should see**:
   ```
   DEBUG: Fetching forecast data...
   DEBUG: Fetching current weather data...
   INFO: Current data fields available: [...]
   INFO: Forecast 1h data fields available: [...]
   ```

6. **Check entity**:
   ```yaml
   {{ states.weather.meteoblue.attributes }}
   ```

7. **Disable debug** when done:
   ```yaml
   custom_components.meteoblue: info
   ```

---

## Summary

**Quick Start**:
```yaml
# Add to logging/logger.yaml
custom_components.meteoblue: info
```

**Reload**: Developer Tools → YAML → Reload Logging

**View**: Settings → System → Logs → Filter "meteoblue"

**Look for**: "Current data fields available" to see what Meteoblue provides

**Switch to debug** only when troubleshooting specific issues!

---

## Need Help?

When asking for help, provide:
1. Home Assistant version
2. Integration version (check manifest.json)
3. Log output (with sensitive data removed)
4. Entity attributes from Developer Tools
5. What's missing or not working

Example:
```
HA Version: 2024.x.x
Integration: meteoblue 1.0.0

Logs show:
Current data fields: ['temperature', 'windspeed']

Entity shows:
temperature: 20.3
Missing: humidity, pressure

Issue: humidity and pressure not showing despite being in other integrations
```

This gives context for troubleshooting!

---

**Remember**: Always switch back to `info` or `warning` level after troubleshooting to reduce log noise! 📝