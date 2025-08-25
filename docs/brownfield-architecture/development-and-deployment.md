# Development and Deployment

## Local Development Setup

1. **Requirements**: Home Assistant 2025.8.3+ (supervised installation recommended)
2. **Dependencies**: All custom components must be installed via HACS or manually
3. **Secrets**: Copy `secrets.fake.yaml` to `secrets.yaml` and populate with actual values
4. **Database**: SQLite database will be created automatically
5. **Network**: Ensure access to local devices (Envisalink, GoodWe, Shelly devices)

## Configuration Management

- **Version Control**: Git repository with GitHub integration
- **Backup Strategy**: GitHub commits for configuration, separate database backups needed
- **Validation**: YAML lint configured (`.yamllint.yaml`)
- **Testing**: Home Assistant configuration check before restart

## Deployment Process

- **Method**: Direct file editing or git pull to HA config directory
- **Restart Required**: Most changes require HA restart or reload
- **Validation**: Use HA config check before applying changes
- **Rollback**: Git history allows configuration rollback
