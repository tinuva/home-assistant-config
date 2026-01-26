# Code Style Guide

## Package-Based Organization

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

## File Naming Conventions

- Use lowercase with underscores: `bathroom_humidity.yaml`
- Be descriptive: `switch_trigger_babyroom_heater.yaml`
- Group by domain: `packages/climate/`, `packages/lighting/`

## YAML Style

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

## Python Code Style

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

## Secrets Management

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

## Entity Naming

Follow Home Assistant entity naming conventions:

- **Domain.location_description**: `sensor.main_bathroom_humidity`
- **Domain.device_room**: `light.main_bathroom`
- **Domain.descriptive_name**: `binary_sensor.master_bathroom_humidity_rising`

## Template Best Practices

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

**Key Rules:**
- Always provide fallback values: `| float(0)`, `| default('')`
- Use `has_value()` or check for 'unavailable' states
- Test templates in Developer Tools → Template
- Prefer `states('entity_id')` over `states.entity_id.state`

## Automation Structure

**Standard Format:**
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

## Conditions Best Practices

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

## Time-Based Automations

```yaml
# ✅ Good: Use time patterns or sun conditions
trigger:
  - platform: sun
    event: sunset
    offset: "-00:30:00"
```
