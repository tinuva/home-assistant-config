# Safety Guidelines

## Production Environment Context

This is a **live production system** where:
- Changes affect real home automation
- Downtime impacts security, comfort, and convenience
- Breaking changes can disrupt daily routines

## Before Making Changes

### 1. Read Existing Configuration

Before proposing any changes:
1. Read the relevant configuration file
2. Understand existing automations/entities
3. Identify dependencies
4. Check for related helpers or input_booleans
5. Review any comments explaining logic

### 2. Validate Entity IDs

- Ensure entity IDs exist before referencing them
- Check that services are valid for the entity domain
- Verify platform support for features
- Use Developer Tools → States to confirm entity availability

### 3. Preserve Structure

- Keep existing organization and formatting
- Don't remove explanatory comments
- Only change what's necessary
- Add comments explaining new logic if complex

## Validation Workflow

### Before Committing

**Always run these commands:**
```bash
ha core check
yamllint .
```

### After Modifying Configuration

1. Validate configuration before restarting Home Assistant
2. Check for YAML syntax errors
3. Review automation traces for existing automations
4. Test new logic in isolation when possible

### Testing Complex Changes

- Use Developer Tools → Template for testing templates
- Test automations manually via Developer Tools → Actions
- Suggest gradual rollout for major changes
- Monitor logs after deployment

## Working with Files

### Package Files (`packages/`)

**Preferred location for new automations and sensors**

When creating new functionality:
- Choose appropriate domain directory
- Create self-contained packages
- Group related entities together

### UI-Managed Files

**Files that can be overwritten by UI:**
- `automations.yaml`
- `scripts.yaml`
- `scenes.yaml`

These can be edited but may be modified by the UI. Prefer package files for complex automations.

### Never Modify

- `secrets.yaml` - Tell users which secrets to define, don't edit the file
- `custom_components/` - Custom integrations (treat as read-only)

## Dependency Checking

Before removing or modifying entities:

1. Search for entity ID across all configuration files
2. Check for usage in:
   - Automations (triggers, conditions, actions)
   - Template sensors
   - Scripts and scenes
   - Lovelace UI configuration (if accessible)

## Entity Availability

Always handle unavailable states in templates and conditions:

```yaml
# ✅ Good: Check availability
availability: "{{ has_value('sensor.source') }}"
state: "{{ states('sensor.source') | float(0) }}"

# ✅ Good: Condition checks for unavailable
condition:
  - condition: not
    conditions:
      - condition: state
        entity_id: sensor.temperature
        state: 'unavailable'
```

## Explaining Changes

When proposing changes, always include:

1. **What:** Specific files and sections being modified
2. **Why:** Purpose and benefit of the change
3. **Impact:** What will change in behavior
4. **Testing:** How to verify the change works correctly
5. **Rollback:** How to revert if needed

## Warning About Breaking Changes

Explicitly warn users when:
- Removing or renaming entities
- Changing automation triggers or conditions
- Modifying critical security/safety automations
- Changes affect multiple dependent systems

## Configuration Validation Methods

### Home Assistant Check
```bash
# Primary validation method
ha core check

# Docker-based validation (CI)
docker run --rm \
  -v /usr/share/hassio/homeassistant:/github/workspace \
  ghcr.io/home-assistant/home-assistant:stable \
  sh -c "ln -s /github/workspace /root/.homeassistant && python -m homeassistant --script check_config --config /root/.homeassistant -i"
```

### YAML Linting
```bash
# Lint entire configuration
yamllint .

# Lint specific package
yamllint packages/climate/bathroom_humidity.yaml

# Lint directory
yamllint includes/
```

### Python Tests
```bash
# Custom component tests
./custom_components/bambu_lab/pybambu/run_tests.sh
python3 -m unittest discover custom_components/bambu_lab/pybambu/tests/
```

### ESPHome Validation
```bash
# Validate specific device
esphome config esphome/bluetooth-proxy.yaml

# Validate all ESPHome configs
for file in $(find ./esphome -type f -name "*.yaml" -maxdepth 1 -not -name "secrets.yaml"); do 
  esphome config "${file}"
done
```

## When to Run Validation

| Scenario | Commands to Run |
|----------|----------------|
| Before committing changes | `ha core check && yamllint .` |
| After modifying configuration | `ha core check` |
| Python component changes | Relevant test suite |
| During troubleshooting | Check for syntax errors first |
| CI/CD pipelines | All validation commands (automatic) |
