# Common Patterns

## Adding a New Automation

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

**Choosing location:**
- **New feature area:** Create `packages/[domain]/[feature].yaml`
- **Extending existing feature:** Modify existing package file
- **Simple UI automation:** Can use `automations.yaml`

## Creating a Template Sensor

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

### Template Binary Sensor

```yaml
template:
  - binary_sensor:
      - name: "Example Binary Sensor"
        state: "{{ states('sensor.humidity') | float(0) > 60 }}"
        availability: "{{ has_value('sensor.humidity') }}"
        device_class: moisture
```

## Adding Helpers

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

input_select:
  example_option:
    name: "Example Option"
    options:
      - "Option 1"
      - "Option 2"
      - "Option 3"
    initial: "Option 1"
    icon: mdi:format-list-bulleted

input_text:
  example_text:
    name: "Example Text"
    initial: ""
    max: 100
```

## Notification Patterns

### Basic Notification

```yaml
action:
  - action: notify.notify
    data:
      title: "Notification Title"
      message: "Message content here"
```

### Mobile App Notification with Data

```yaml
action:
  - action: notify.mobile_app_device_name
    data:
      title: "Alert Title"
      message: "Message content"
      data:
        tag: "unique_tag"
        priority: high
        notification_icon: "mdi:alert"
        color: "red"
```

### Conditional Notification

```yaml
action:
  - choose:
      - conditions:
          - condition: state
            entity_id: input_boolean.notifications_enabled
            state: "on"
        sequence:
          - action: notify.notify
            data:
              message: "Conditional notification"
```

## Sun-Based Automation

```yaml
automation:
  - alias: "Porch Light at Sunset"
    trigger:
      - platform: sun
        event: sunset
        offset: "-00:30:00"  # 30 minutes before sunset
    action:
      - action: light.turn_on
        target:
          entity_id: light.porch
        data:
          brightness_pct: 80
```

## Humidity-Based Fan Control

```yaml
automation:
  - alias: "Bathroom Fan on High Humidity"
    trigger:
      - platform: numeric_state
        entity_id: sensor.bathroom_humidity
        above: 60
    condition:
      - condition: template
        value_template: >-
          {{ states('sensor.bathroom_humidity') | float(0) - 
             states('sensor.bedroom_humidity') | float(0) > 15 }}
    action:
      - action: switch.turn_on
        target:
          entity_id: switch.bathroom_fan
      - delay:
          minutes: 30
      - action: switch.turn_off
        target:
          entity_id: switch.bathroom_fan
```

## Time-Based Conditions

```yaml
condition:
  # Between two times
  - condition: time
    after: "08:00:00"
    before: "22:00:00"
    
  # Specific weekdays
  - condition: time
    weekday:
      - mon
      - tue
      - wed
      - thu
      - fri
```

## State Change with Duration

```yaml
trigger:
  - platform: state
    entity_id: binary_sensor.motion_sensor
    to: "on"
    for:
      minutes: 5  # Must be on for 5 minutes
```

## Multiple Triggers

```yaml
trigger:
  # State change
  - platform: state
    entity_id: sensor.example
    to: "on"
  
  # Time-based
  - platform: time
    at: "08:00:00"
  
  # Numeric threshold
  - platform: numeric_state
    entity_id: sensor.temperature
    above: 25
```

## Choose Action (If-Then-Else)

```yaml
action:
  - choose:
      # If condition 1
      - conditions:
          - condition: state
            entity_id: input_select.mode
            state: "Home"
        sequence:
          - action: light.turn_on
            target:
              entity_id: light.living_room
      
      # If condition 2
      - conditions:
          - condition: state
            entity_id: input_select.mode
            state: "Away"
        sequence:
          - action: light.turn_off
            target:
              area_id: living_room
    
    # Else (default)
    default:
      - action: notify.notify
        data:
          message: "Unknown mode"
```

## Repeat Actions

```yaml
# Repeat until condition
action:
  - repeat:
      until:
        - condition: state
          entity_id: binary_sensor.door
          state: "off"
      sequence:
        - action: notify.notify
          data:
            message: "Door still open!"
        - delay:
            minutes: 5

# Repeat count
action:
  - repeat:
      count: 3
      sequence:
        - action: light.toggle
          target:
            entity_id: light.notification
        - delay:
            seconds: 1
```

## Presence Detection Pattern

```yaml
automation:
  - alias: "Welcome Home"
    trigger:
      - platform: state
        entity_id: person.david
        from: "not_home"
        to: "home"
    action:
      - action: light.turn_on
        target:
          area_id: entrance
      - action: notify.notify
        data:
          message: "Welcome home!"
```

## Timer-Based Automation

```yaml
# Create timer helper first
timer:
  bathroom_fan:
    duration: "00:30:00"

# Automation to start timer
automation:
  - alias: "Start Bathroom Fan Timer"
    trigger:
      - platform: state
        entity_id: switch.bathroom_fan
        to: "on"
    action:
      - action: timer.start
        target:
          entity_id: timer.bathroom_fan

  # Turn off when timer finishes
  - alias: "Bathroom Fan Timer Finished"
    trigger:
      - platform: event
        event_type: timer.finished
        event_data:
          entity_id: timer.bathroom_fan
    action:
      - action: switch.turn_off
        target:
          entity_id: switch.bathroom_fan
```

## Debounce Pattern (Prevent Rapid Triggers)

```yaml
automation:
  - alias: "Motion Light with Debounce"
    mode: restart  # Restart timer on new motion
    trigger:
      - platform: state
        entity_id: binary_sensor.motion
        to: "on"
    action:
      - action: light.turn_on
        target:
          entity_id: light.hallway
      - wait_for_trigger:
          - platform: state
            entity_id: binary_sensor.motion
            to: "off"
            for:
              minutes: 5
      - action: light.turn_off
        target:
          entity_id: light.hallway
```
