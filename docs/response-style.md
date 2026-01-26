# Response Style

## Communication Approach

When responding to requests:

1. **Explain changes clearly** - What files are being modified and why
2. **Show impact** - What will change in behavior
3. **Include validation steps** - How to test the changes
4. **Format code properly** - Always use YAML syntax highlighting with file paths

## Response Structure Template

Use this format for configuration changes:

```markdown
[Brief acknowledgment of the request]

## Changes Needed

1. [List specific files and modifications]
2. [Group related changes together]

## Proposed Configuration

**File: path/to/file.yaml**

```yaml
[Complete configuration block with context]
```

[Additional files as needed]

## How It Works

[Explain the logic in plain language]
- Key point 1
- Key point 2

## Testing

After adding this configuration:
1. Run validation: `ha core check && yamllint .`
2. [Specific testing steps for this change]
3. [How to verify it's working]
```

## Example Response 1: Adding Simple Automation

**User:** "Add an automation to turn on the porch light at sunset"

**Agent:**

```markdown
I'll add an automation to turn on the porch light at sunset.

Since this is a simple lighting automation, I'll add it to `packages/lighting/` directory.

**File: packages/lighting/porch_light_sunset.yaml**

```yaml
---
automation:
  - alias: "Turn on Porch Light at Sunset"
    description: "Automatically turn on the porch light 30 minutes before sunset"
    trigger:
      - platform: sun
        event: sunset
        offset: "-00:30:00"
    condition: []
    action:
      - action: light.turn_on
        target:
          entity_id: light.porch
        data:
          brightness_pct: 80
```

This will turn on the porch light 30 minutes before sunset at 80% brightness.

**Note:** Verify `light.porch` is the correct entity ID in Developer Tools → States.

**Validation:**
```bash
ha core check
yamllint packages/lighting/porch_light_sunset.yaml
```
```

## Example Response 2: Modifying Existing Configuration

**User:** "Make the bathroom fan run longer in the morning"

**Agent:**

```markdown
I'll modify the bathroom fan automation to extend the morning runtime.

Looking at `packages/climate/bathroom_humidity.yaml`, the current morning duration (04:30-08:29) is 45 minutes.

**Change in: packages/climate/bathroom_humidity.yaml**

In the timer.start action, I'll update the morning time window:

```yaml
{% elif '04:30' < time <= '08:29' %}
  {{60*60|int}}  # Changed from 45 to 60 minutes
```

This extends the morning fan runtime from 45 minutes to 60 minutes (1 hour) when showers are taken between 4:30 AM and 8:29 AM.

The other time periods remain unchanged:
- 8:00 PM - 11:59 PM: 30 minutes
- 12:00 AM - 4:30 AM: 10 minutes
- All other times: 25 minutes

**Testing:**
1. Validate: `ha core check`
2. Restart Home Assistant
3. Trigger a morning shower to verify the new duration
```

## Example Response 3: Explaining Complex Logic

**User:** "How does the bathroom humidity detection work?"

**Agent:**

```markdown
The bathroom humidity detection in `packages/climate/bathroom_humidity.yaml` uses a multi-factor approach to determine when to turn on the fan:

## Trigger Logic

The fan turns on when **all** of these conditions are met:

### 1. Humidity Differential Check

```yaml
{{ (states.sensor.main_bathroom_humidity.state|float - 
    states.sensor.main_bedroom_humidity.state|float > 15) }}
```

The bathroom humidity must be 15% higher than the bedroom (baseline).

**OR** the bathroom sensor shows 99.9% (sensor maximum, indicating very high humidity).

**OR** humidity is rising rapidly (gradient > 0.04).

### 2. Lighting/Time Conditions

The fan only runs if:
- Sun is above horizon (daytime), **OR**
- Main bathroom light is on (someone is using it)

### 3. Sensor Availability

The automation won't trigger if the sensor is unavailable (prevents errors).

## Why This Approach Works

- **Differential measurement** prevents false triggers from ambient humidity changes
- **Time/light awareness** avoids unnecessary fan operation at night
- **Gradient detection** catches rapid humidity spikes from showers
- **Sensor validation** ensures reliable operation

This is more reliable than a simple threshold because it accounts for varying baseline humidity levels throughout the day and seasons.
```

## Asking Clarifying Questions

When requests are ambiguous:

```markdown
I can help you add that automation. First, I need to clarify a few things:

1. **Entity ID**: What's the exact entity ID for [device]? You can find this in Developer Tools → States.
2. **Trigger condition**: Should this activate [condition A] or [condition B]?
3. **Location**: Should this go in an existing package or create a new one?

Once you provide these details, I'll create the configuration.
```

## Code Formatting Rules

**Always:**
- Use triple backticks with `yaml` language identifier
- Include file paths as headings before code blocks
- Show complete configuration sections, not fragments
- Preserve indentation exactly as it should appear in the file

**Example:**
```markdown
**File: packages/climate/bathroom_fan.yaml**

```yaml
---
automation:
  - alias: "Bathroom Fan Control"
    # ... complete configuration
```
```

## Warning About Breaking Changes

When changes could break existing functionality:

```markdown
⚠️ **Warning:** This change will affect the following automations:
- `automation.existing_automation_1`
- `automation.existing_automation_2`

**Impact:** [Describe what will change]

**Recommendation:** [Suggest testing approach or gradual rollout]

Proceed with this change?
```

## Validation Reminders

End responses involving configuration changes with:

```markdown
**Before committing:**
```bash
ha core check
yamllint .
```

[Additional testing steps specific to the change]
```
