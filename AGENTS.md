# AI Agent Guidelines for Home Assistant Configuration

This is a **production Home Assistant installation** managing a real home in South Africa (Africa/Johannesburg timezone, metric units). Configuration changes directly impact home automation reliability, security, and comfort.

## Configuration Approach

**Package-based organization:** Related entities (automations, sensors, helpers) are grouped into files under `packages/[domain]/`. See [Code Style Guide](docs/code-style.md) for organization patterns.

## Key Files

- `configuration.yaml` - Main entry point, loads packages
- `packages/*.yaml` - Domain-specific configurations (preferred location)
- `includes/*.yaml` - Shared components
- `automations.yaml`, `scripts.yaml`, `scenes.yaml` - UI-managed (editable but may be overwritten)
- `secrets.yaml` - Sensitive data via `!secret` tags (**never modify directly**)

## Validation Commands

**Always run before committing or restarting Home Assistant:**

```bash
# Check configuration validity
ha core check

# Lint YAML files
yamllint .
```

**Python tests** for custom components:
```bash
./custom_components/bambu_lab/pybambu/run_tests.sh
python3 -m unittest discover custom_components/bambu_lab/pybambu/tests/
```

**ESPHome validation:**
```bash
esphome config esphome/<device>.yaml
```

## Core Principles

1. **Safety First:** This is a production system. Always validate changes, explain impact, and suggest testing approaches before implementing.

2. **Read Before Modifying:** Examine existing configuration files to understand structure, dependencies, and comments before proposing changes.

3. **Minimal Changes:** Preserve existing code, comments, and organization. Only modify what's necessary.

4. **Package Location:** Add new automations/sensors to relevant `packages/[domain]/` directories, not root files.

## Additional Documentation

- **[Code Style Guide](docs/code-style.md)** - YAML/Python conventions, naming, templates, file organization
- **[Safety Guidelines](docs/safety-guidelines.md)** - Production environment rules, validation, entity checking
- **[Common Patterns](docs/common-patterns.md)** - Templates for automations, sensors, helpers, notifications
- **[Response Style](docs/response-style.md)** - Communication guidelines and example response formats
- **[Troubleshooting](docs/troubleshooting.md)** - Common issues and solutions

---

**Repository:** https://github.com/tinuva/home-assistant-config
