# Troubleshooting

## YAML Syntax Errors

### Common Issues

**Problem:** Indentation errors
```yaml
# ❌ Wrong
automation:
- alias: "Test"
  trigger:
  - platform: state
```

```yaml
# ✅ Correct (2-space indentation)
automation:
  - alias: "Test"
    trigger:
      - platform: state
```

**Problem:** Unmatched quotes
```yaml
# ❌ Wrong
message: "Hello world'

# ✅ Correct
message: "Hello world"
```

**Problem:** Invalid characters in entity IDs
```yaml
# ❌ Wrong
entity_id: sensor.my-sensor

# ✅ Correct
entity_id: sensor.my_sensor
```

### Validation

```bash
# Check configuration
ha core check

# Lint YAML
yamllint packages/domain/file.yaml
```

## Entity Not Found

### Diagnostic Steps

1. **Verify entity exists:**
   - Go to Developer Tools → States
   - Search for the entity ID
   - Check if entity is disabled

2. **Check entity availability:**
   - Look for "unavailable" or "unknown" state
   - Verify device is online
   - Check integration is loaded

3. **Confirm integration loaded:**
   - Settings → Devices & Services
   - Ensure integration shows "Loaded"
   - Check for error messages

4. **Review entity naming:**
   ```yaml
   # Common mistakes
   light.main_bathroom  # Check underscore vs hyphen
   sensor.temperature   # Check for missing room prefix
   ```

## Template Errors

### Problem: Template returns "unknown" or "unavailable"

**Cause:** Source entity not available or template accessing unavailable state

**Solution:**
```yaml
# ❌ Problematic
state: "{{ states.sensor.temperature.state }}"

# ✅ Safe with fallback
state: "{{ states('sensor.temperature') | float(0) }}"
availability: "{{ has_value('sensor.temperature') }}"
```

### Problem: Template syntax error

**Diagnostic:**
- Use Developer Tools → Template to test
- Check for mismatched braces `{{ }}` or `{% %}`
- Verify filter syntax

**Common fixes:**
```yaml
# ❌ Wrong
value_template: {{ states('sensor.temp') }}  # Missing quotes

# ✅ Correct
value_template: "{{ states('sensor.temp') }}"

# ❌ Wrong
value_template: "{{ states.sensor.temp }}"  # Old syntax

# ✅ Correct
value_template: "{{ states('sensor.temp') }}"
```

## Automation Not Triggering

### Diagnostic Checklist

1. **Check automation is enabled:**
   - Settings → Automations & Scenes
   - Look for disabled toggle

2. **Review automation trace:**
   - Open automation
   - Click "Traces" tab
   - Check last trigger attempts

3. **Verify trigger conditions:**
   ```yaml
   # State trigger requires state change
   trigger:
     - platform: state
       entity_id: sensor.temperature
       # Add specific 'to' value if needed
       to: "20"
   ```

4. **Check conditions:**
   - Conditions must ALL be true
   - Use Developer Tools → Template to test condition logic
   - Review automation trace to see which condition failed

5. **Verify mode setting:**
   ```yaml
   mode: single    # Won't trigger if already running
   mode: restart   # Restarts on new trigger
   mode: queued    # Queues multiple triggers
   mode: parallel  # Runs in parallel
   ```

### Common Issues

**Problem:** Automation triggers but action doesn't run

**Cause:** Condition block preventing action

**Solution:** Check condition logic in automation trace

---

**Problem:** Automation only works sometimes

**Cause:** Time-based condition or entity availability

**Solution:**
```yaml
condition:
  # Add availability check
  - condition: not
    conditions:
      - condition: state
        entity_id: sensor.source
        state: 'unavailable'
  # Other conditions...
```

## Configuration Won't Load

### After Restart

1. **Check logs:**
   ```bash
   # View Home Assistant logs
   ha core logs
   ```

2. **Common error messages:**
   - "Integration X could not be set up" - Integration configuration error
   - "Invalid config for automation" - YAML syntax error in automation
   - "Template error" - Invalid Jinja2 template

3. **Validate configuration:**
   ```bash
   ha core check
   ```

### Validation Fails

**Problem:** "Integration X not found"

**Cause:** Integration not installed or name misspelled

**Solution:** 
- Verify integration name in documentation
- Check if custom integration needs installation

---

**Problem:** "Platform X does not exist"

**Cause:** Invalid platform name or integration not supporting that platform

**Solution:**
- Check integration documentation for supported platforms
- Verify spelling of platform name

## Secrets Not Working

### Problem: `!secret` tag returns error

**Diagnostic steps:**

1. **Verify secret exists in `secrets.yaml`:**
   ```yaml
   # secrets.yaml
   my_password: actual_password_value
   ```

2. **Check secret name matches:**
   ```yaml
   # configuration.yaml
   password: !secret my_password  # Must match exactly
   ```

3. **Ensure no quotes around !secret:**
   ```yaml
   # ❌ Wrong
   password: "!secret my_password"
   
   # ✅ Correct
   password: !secret my_password
   ```

## Service Call Errors

### Problem: "Service X not found"

**Cause:** Service name changed or entity domain incorrect

**Solution:**
- Use Developer Tools → Actions to find correct service name
- Check official documentation for service names
- Verify entity supports the service

### Problem: "Unable to find service X"

**Cause:** Integration not loaded or entity doesn't support service

**Solution:**
```yaml
# Check entity domain matches service
# ❌ Wrong
- action: light.turn_on
  target:
    entity_id: switch.light  # This is a switch, not a light

# ✅ Correct
- action: switch.turn_on
  target:
    entity_id: switch.light
```

## Performance Issues

### Problem: Automations running slowly

**Diagnostic:**
- Check automation traces for long-running actions
- Look for excessive delays or wait_for_trigger timeouts

**Solution:**
- Reduce delay times if unnecessary
- Optimize template sensors (add scan_interval)
- Consider splitting complex automations

### Problem: Template sensors causing CPU load

**Diagnostic:**
- Check if template updates constantly
- Look for sensors without proper availability checks

**Solution:**
```yaml
# Add scan_interval to reduce updates
template:
  - sensor:
      - name: "Heavy Calculation"
        state: "{{ complex_template }}"
        availability: "{{ has_value('sensor.source') }}"
        scan_interval: 60  # Update every 60 seconds
```

## Integration-Specific Issues

### ESPHome Devices

**Problem:** Device unavailable

**Solution:**
1. Check device WiFi connection
2. Verify ESPHome API configuration
3. Check Home Assistant ESPHome integration
4. Re-validate ESPHome config: `esphome config device.yaml`

### Zigbee Devices

**Problem:** Device not responding

**Solution:**
1. Check Zigbee coordinator connection
2. Verify device is within range (add router if needed)
3. Check for interference (WiFi on same channel)
4. Try re-pairing device

## Git & Version Control Issues

### Problem: Merge conflicts in UI-managed files

**Files affected:**
- `automations.yaml`
- `scripts.yaml`
- `scenes.yaml`

**Solution:**
- Accept UI version (these files are managed by UI)
- Manually merge if needed
- Prefer using package files for important automations

## Need More Help?

1. **Check Home Assistant logs:** `ha core logs`
2. **Validate configuration:** `ha core check && yamllint .`
3. **Test templates:** Developer Tools → Template
4. **Review traces:** Open automation → Traces tab
5. **Community support:** https://community.home-assistant.io/
