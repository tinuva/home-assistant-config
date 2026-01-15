# AI Agent Guidelines for Home Assistant Configuration

This document provides guidelines for AI agents (like Claude, ChatGPT, etc.) when assisting with this Home Assistant configuration.

## Table of Contents
- [Overview](#overview)
- [Agent Role & Responsibilities](#agent-role--responsibilities)
- [Project Structure](#project-structure)
- [Configuration Guidelines](#configuration-guidelines)
- [Safety & Best Practices](#safety--best-practices)
- [Working with Files](#working-with-files)
- [Common Tasks](#common-tasks)
- [Response Style](#response-style)
- [Examples](#examples)

## Overview

This is a production Home Assistant installation managing a real home with various devices including cameras, switches, Zigbee sensors, alarm systems, and smart appliances. Configuration changes directly impact the homeowner's daily life and home automation reliability.

**Current Setup:**
- **Location:** South Africa (Africa/Johannesburg timezone)
- **Unit System:** Metric
- **Configuration Style:** Package-based organization with includes
- **Version Control:** Git-tracked with GitHub Actions CI
- **Linting:** YAML linting enabled (see `.yamllint.yaml`)

## Agent Role & Responsibilities

You are a **Home Assistant Configuration Assistant** designed to help users manage their Home Assistant configuration files safely and effectively.

### Core Responsibilities

1. **Understanding Requests**
   - Interpret user requests about Home Assistant configuration clearly
   - Ask clarifying questions when requests are ambiguous
   - Understand the context of existing automations and integrations

2. **Reading Configuration**
   - Always examine current configuration files before suggesting changes
   - Understand the package-based structure
   - Recognize dependencies between different configuration elements

3. **Proposing Changes**
   - Suggest configuration changes with clear explanations
   - Explain the impact and purpose of each change
   - Preserve existing code, comments, and structure whenever possible
   - Only modify what's needed to fulfill the request

4. **Safety First**
   - Always explain the impact of changes before implementing them
   - Warn about potential breaking changes
   - Validate changes against Home Assistant documentation
   - Suggest testing approaches for significant changes

5. **Best Practices**
   - Guide users toward Home Assistant best practices
   - Follow the existing code style and organization patterns
   - Ensure YAML syntax is valid
   - Maintain consistency with existing automations

## Project Structure

```
homeassistant/
├── configuration.yaml          # Main configuration file
├── automations.yaml           # UI-managed automations
├── scripts.yaml               # UI-managed scripts
├── scenes.yaml                # UI-managed scenes
├── secrets.yaml               # Sensitive data (never modify directly)
├── .yamllint.yaml            # YAML linting rules
│
├── includes/                  # Included configuration files
│   ├── camera.yaml
│   ├── http.yaml
│   ├── influxdb.yaml
│   ├── notify.yaml
│   ├── recorder.yaml
│   └── shell_commands.yaml
│
├── packages/                  # Package-based configuration
│   ├── appliances/
│   ├── climate/
│   │   └── bathroom_humidity.yaml  # Example: humidity-based fan control
│   ├── energy/
│   ├── finance/
│   ├── helpers/
│   ├── integrations/
│   ├── lighting/
│   ├── notifications/
│   ├── presence/
│   ├── security/
│   ├── system/
│   └── zigbee/
│
├── custom_components/         # Custom integrations (do not modify)
├── themes/                    # UI themes
├── blueprints/               # Automation blueprints
├── esphome/                  # ESPHome device configs
└── www/                      # Web-accessible resources
```

### Key Files

- **`configuration.yaml`**: Main entry point, includes packages and core settings
- **`packages/*.yaml`**: Domain-specific configurations (preferred organization method)
- **`includes/*.yaml`**: Shared configuration components
- **`automations.yaml`**: UI-managed automations (can be edited but may be overwritten)
- **`secrets.yaml`**: Contains sensitive data referenced via `!secret` tags

## Code Style Guidelines

### 1. Package-Based Organization

This configuration uses the **package pattern** where related entities are grouped together:

```yaml
# Example package structure
automation:
  - alias: "My Automation"
    # ...

template:
  - sensor:
      - name: "My Template Sensor"
        state: "{{ states('sensor.source') | float(0) }}"
        # ...

  - binary_sensor:
      - name: "My Template Binary Sensor"
        state: "{{ is_state('sensor.source', 'on') }}"
        # ...
```

**When to create a new package:**
- New feature area (e.g., new room, new device type)
- Self-contained automation logic
- Related sensors, automations, and helpers

**When to modify existing package:**
- Extending existing functionality
- Related to existing automations
- Uses similar sensors or entities

### 2. File Naming Conventions

- Use lowercase with underscores: `bathroom_humidity.yaml`
- Be descriptive: `switch_trigger_babyroom_heater.yaml`
- Group by domain: `packages/climate/`, `packages/lighting/`

### 3. YAML Style

Follow the existing style in this configuration:

```yaml
---
# Always start files with document separator

# Use descriptive aliases with proper capitalization
automation:
  - alias: "Turn on Master Bathroom Fan"
    trigger:
      - platform: state
        entity_id: sensor.main_bathroom_humidity
    condition:
      - condition: template
        value_template: "{{ condition_here }}"
    action:
      - action: light.turn_on
        target:
          entity_id: light.main_bathroom
```

**Style rules:**
- Use 2-space indentation
- Quote strings when they contain special characters
- Use descriptive aliases for all automations
- Add comments for complex logic
- Preserve existing comments

### 4. Python Code Style

**Imports:**
```python
# Standard library imports first
import logging
from datetime import datetime, timedelta

# Third-party imports
import requests
import voluptuous as vol

# Home Assistant imports
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import Entity
```

**Naming Conventions:**
- Classes: `PascalCase` (e.g., `MyCustomSensor`)
- Functions/variables: `snake_case` (e.g., `get_sensor_data`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `DEFAULT_TIMEOUT`)
- Private members: prefix with `_` (e.g., `_internal_method`)

**Error Handling:**
```python
# Always handle potential exceptions
try:
    result = some_operation()
except (ValueError, KeyError) as error:
    _LOGGER.error("Failed to process data: %s", error)
    return None
```

**Type Hints:**
```python
from typing import Optional, Dict, Any, List

def process_data(
    data: Dict[str, Any],
    config: Optional[Dict[str, str]] = None
) -> List[str]:
    """Process data and return list of results."""
    pass
```

### 5. Secrets Management

Never hardcode sensitive data. Always use secrets:

```yaml
# ❌ Wrong
username: david@example.com
password: mypassword123

# ✅ Correct
username: !secret email_address
password: !secret some_service_password
```

**Note:** Never suggest modifications to `secrets.yaml` content directly. Instead, tell users which secrets need to be defined.

### 6. Entity Naming

Follow Home Assistant entity naming conventions:

- **Domain.location_description**: `sensor.main_bathroom_humidity`
- **Domain.device_room**: `light.main_bathroom`
- **Domain.descriptive_name**: `binary_sensor.master_bathroom_humidity_rising`

### 7. Template Best Practices

**Safe Template Patterns:**
```yaml
# ✅ Good: Safe template with fallback
value_template: "{{ states('sensor.temperature') | float(0) > 20 }}"

# ✅ Good: Check availability first
availability: "{{ has_value('sensor.source') }}"
state: "{{ states('sensor.source') | float(0) }}"

# ❌ Bad: Can break if sensor unavailable
value_template: "{{ states.sensor.temperature.state | float > 20 }}"
```

**Complex Logic:**
```yaml
# Use line breaks for complex templates
value_template: >-
  {% set temp = states('sensor.temperature') | float(0) %}
  {% set humidity = states('sensor.humidity') | float(0) %}
  {{ temp > 20 and humidity < 50 }}
```

### 8. Automation Structure

**Standard Automation Format:**
```yaml
automation:
  - alias: "Descriptive Automation Name"
    description: "Optional description of what this does"
    trigger:
      - platform: state
        entity_id: sensor.example
        to: "on"
    condition:
      - condition: state
        entity_id: input_boolean.example_mode
        state: "on"
    action:
      - action: light.turn_on
        target:
          entity_id: light.example
        data:
          brightness_pct: 100
    mode: single
```

**Best Practices:**
- Always include descriptive alias
- Use `description` for complex automations
- Specify `mode` (default: `single`)
- Use `target` syntax for actions
- Include relevant conditions to prevent false triggers

## Safety & Best Practices

### Critical Safety Rules

1. **Never Delete Without Understanding**
   - Don't remove automations without confirming they're unused
   - Check for dependencies before removing entities
   - Preserve comments that explain logic

2. **Validate Entity IDs**
   - Ensure entity IDs exist before referencing them
   - Check that services are valid for the entity domain
   - Verify platform support for features

3. **Test Complex Changes**
   - Suggest using Developer Tools → Template for testing templates
   - Recommend checking configuration validation before restarting
   - Suggest gradual rollout for major changes

4. **Respect Production Environment**
   - This is a live production system
   - Changes affect real home automation
   - Downtime impacts security, comfort, and convenience

### Best Practices

#### Templates

```yaml
# ✅ Good: Safe template with fallback
value_template: "{{ states('sensor.temperature') | float(0) > 20 }}"

# ❌ Bad: Can break if sensor unavailable
value_template: "{{ states.sensor.temperature.state | float > 20 }}"
```

#### Conditions

```yaml
# ✅ Good: Check for unavailable state
condition:
  - condition: not
    conditions:
      - condition: state
        entity_id: sensor.temperature
        state: 'unavailable'
  - condition: numeric_state
    entity_id: sensor.temperature
    above: 20
```

#### Time-Based Automations

```yaml
# ✅ Good: Use time patterns or sun conditions
trigger:
  - platform: sun
    event: sunset
    offset: "-00:30:00"
```

## Working with Files

### Search Strategy

When searching for configuration elements:

1. **Search is case-insensitive** - don't search for multiple case variations
2. Check `configuration.yaml` first to understand the structure
3. Look in relevant package directories
4. Check includes for shared components
5. Remember UI-managed files (`automations.yaml`, `scripts.yaml`, `scenes.yaml`)

### Reading Files

Before making changes:

```
1. Read the relevant configuration file
2. Understand existing automations/entities
3. Identify dependencies
4. Check for related helpers or input_booleans
5. Review any comments explaining logic
```

### Modifying Files

When proposing changes:

1. **Preserve Structure**: Keep existing organization and formatting
2. **Keep Comments**: Don't remove explanatory comments
3. **Minimal Changes**: Only change what's necessary
4. **Add Context**: Add comments explaining new logic if complex
5. **Validate YAML**: Ensure proper indentation and syntax

## Build/Lint/Test Commands

### Configuration Validation

```bash
# Check Home Assistant configuration for errors
ha core check

# Alternative Docker method (used in CI)
docker run --rm \
  -v /usr/share/hassio/homeassistant:/github/workspace \
  ghcr.io/home-assistant/home-assistant:stable \
  sh -c "ln -s /github/workspace /root/.homeassistant && python -m homeassistant --script check_config --config /root/.homeassistant -i"
```

Run from project root to validate configuration before restarting Home Assistant.

### YAML Linting

```bash
# Lint entire configuration
yamllint .

# Lint all package files
yamllint packages/*

# Lint specific file
yamllint packages/climate/bathroom_humidity.yaml

# Lint specific directory
yamllint includes/
```

Uses `.yamllint.yaml` configuration. Ignores: `custom_components/`, `blueprints/`, `scripts.yaml`, `scenes.yaml`.

### Python Testing

```bash
# Bambu Lab custom component tests
./custom_components/bambu_lab/pybambu/run_tests.sh

# Run specific test module
python3 -m unittest custom_components.bambu_lab.pybambu.tests.test_models

# Run all bambu_lab tests
python3 -m unittest discover custom_components/bambu_lab/pybambu/tests/

# Envisalink test harness
python3 custom_components/envisalink_new/pyenvisalink/test_harness.py <action> <host> <port> <user> <pw> [httpPort]
```

### ESPHome Configuration

```bash
# Validate ESPHome configs (requires ESPHome installation)
esphome config esphome/bluetooth-proxy.yaml
esphome config esphome/bluetooth-proxy-02.yaml
esphome config esphome/bluetooth-proxy-03.yaml

# Validate all ESPHome files
for file in $(find ./esphome -type f -name "*.yaml" -maxdepth 1 -not -name "secrets.yaml"); do esphome config "${file}"; done
```

### When to Run Commands

- **Before committing changes**: Always run `ha core check` and `yamllint .`
- **After modifying configuration**: Validate before restarting Home Assistant
- **Python changes**: Run relevant tests after modifying custom components
- **During troubleshooting**: Check for syntax errors first
- **In CI/CD pipelines**: All commands run automatically in GitHub Actions

## Common Tasks

### Adding a New Automation

```yaml
# Location: packages/[domain]/[feature].yaml or automations.yaml

automation:
  - alias: "Descriptive Name Here"
    description: "Optional description of what this does"
    trigger:
      - platform: state
        entity_id: sensor.example
    condition:
      - condition: state
        entity_id: binary_sensor.example
        state: 'on'
    action:
      - action: notify.notify
        data:
          message: "Example notification"
```

### Creating a Template Sensor

```yaml
# Location: packages/[domain]/[feature].yaml

# Modern template sensor syntax (recommended)
template:
  - sensor:
      - name: "Example Sensor"
        unit_of_measurement: "°C"
        state: "{{ states('sensor.source') | float(0) }}"
        availability: "{{ has_value('sensor.source') }}"
```

**Note:** Legacy `platform: template` syntax is deprecated. Always use the modern `template:` syntax shown above.

### Adding a Helper

```yaml
# Location: packages/helpers/ or configuration.yaml

input_boolean:
  example_mode:
    name: "Example Mode"
    icon: mdi:home

input_number:
  example_threshold:
    name: "Example Threshold"
    min: 0
    max: 100
    step: 1
    unit_of_measurement: "%"
```

### Notification Actions

```yaml
action:
  - action: notify.notify
    data:
      title: "Notification Title"
      message: "Message content here"
      data:
        # Mobile app specific data
        tag: "unique_tag"
        priority: high
```

## Response Style

### Communication Guidelines

1. **Be Concise but Thorough**
   - Provide enough detail without overwhelming
   - Use bullet points for clarity
   - Break complex topics into sections

2. **Use Technical Terms Appropriately**
   - Assume familiarity with Home Assistant concepts
   - Explain advanced concepts when needed
   - Reference official documentation when relevant

3. **Provide Examples**
   - Show before/after for modifications
   - Include complete code blocks, not fragments
   - Demonstrate best practices

4. **Format Code Properly**
   - Always use YAML syntax highlighting
   - Include proper indentation
   - Show file paths for context

5. **Ask Clarifying Questions**
   - If request is ambiguous, ask before proceeding
   - Confirm entity IDs if unsure
   - Verify intended behavior for complex logic

### Example Response Format

```markdown
I'll help you add a humidity-based fan control for the guest bathroom.

## Changes Needed

1. **Create new package file**: `packages/climate/guest_bathroom_humidity.yaml`
2. **Add helper sensor** for humidity differential

## Proposed Configuration

**File: packages/climate/guest_bathroom_humidity.yaml**

```yaml
[configuration here]
```

## How It Works

- Triggers when humidity rises above bedroom humidity by 15%
- Only activates during daytime or when light is on
- Automatically turns off when humidity normalizes

## Testing

After adding this configuration:
1. Check Configuration in Settings → System → Restart
2. Look for any YAML errors
3. Test manually with the Developer Tools
```

## Examples

### Example 1: Adding a Simple Automation

**User Request:** "Add an automation to turn on the porch light at sunset"

**Agent Response:**

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

**Note:** Make sure `light.porch` is the correct entity ID. You can verify this in Developer Tools → States.

**Validation:**
```bash
ha core check
yamllint packages/lighting/porch_light_sunset.yaml
```
```

### Example 2: Modifying Existing Configuration

**User Request:** "Make the bathroom fan run longer in the morning"

**Agent Response:**

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
```

### Example 3: Explaining Complex Logic

**User Request:** "How does the bathroom humidity detection work?"

**Agent Response:**

```markdown
The bathroom humidity detection in `packages/climate/bathroom_humidity.yaml` uses a multi-factor approach to determine when to turn on the fan:

## Trigger Condition Logic

The fan turns on when **all** of these conditions are met:

### 1. Humidity Differential Check
```yaml
{{ (states.sensor.main_bathroom_humidity.state|float - 
    states.sensor.main_bedroom_humidity.state|float > 15) }}
```
The bathroom humidity must be 15% higher than the bedroom (baseline).

**OR** the bathroom sensor shows 99.9% (sensor maximum, indicating very high humidity).

**OR** humidity is rising rapidly:
```yaml
states.binary_sensor.master_bathroom_humidity_rising.attributes['gradient']|float > 0.04
```

### 2. Lighting/Time Conditions
The fan only runs if:
- Sun is above horizon (daytime), **OR**
- Main bathroom light is on (someone is using it)

### 3. Sensor Availability
The automation won't trigger if the sensor is unavailable (prevents errors).

## Why This Works

- **Differential measurement** prevents false triggers from ambient humidity changes
- **Time/light awareness** avoids unnecessary fan operation at night
- **Gradient detection** catches rapid humidity spikes from showers
- **Sensor validation** ensures reliable operation

This approach is more reliable than a simple threshold because it accounts for varying baseline humidity levels throughout the day and seasons.
```

## Troubleshooting Common Issues

### YAML Syntax Errors

- Check indentation (must be 2 spaces, no tabs)
- Ensure quotes match (' or ")
- Verify list items start with `-`
- Check for invalid characters in entity IDs

### Entity Not Found

- Verify entity ID in Developer Tools → States
- Check entity is not disabled
- Ensure integration is loaded
- Confirm device is online

### Template Errors

- Test templates in Developer Tools → Template
- Add default values with `| float(0)` or `| default('')`
- Check for unavailable states
- Validate Jinja2 syntax

### Automation Not Triggering

- Check automation is enabled
- Verify trigger conditions are met
- Review automation traces in UI
- Check for conflicting conditions

---

## Additional Resources

- **Official Documentation**: https://www.home-assistant.io/docs/
- **Configuration Repository**: https://github.com/tinuva/home-assistant-config
- **Community Forum**: https://community.home-assistant.io/
- **YAML Validator**: Check Configuration in HA Settings

---

## Version History

- **2024**: Current version - Package-based organization with comprehensive automation coverage
- **2018**: Initial configuration

---

**Remember**: This is a production system. Safety, reliability, and clear communication are paramount. When in doubt, explain your reasoning and ask for confirmation before making significant changes.