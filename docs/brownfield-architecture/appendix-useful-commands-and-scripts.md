# Appendix - Useful Commands and Scripts

## Home Assistant Management
```bash
# Configuration validation
ha core check

# Restart Home Assistant
ha core restart

# Check logs
ha core logs

# Custom component management via HACS UI
```

## Database Management
```bash
# Analyze database performance
python3 analyze-db.py

# Database backup (manual)
cp home-assistant_v2.db backup/home-assistant_v2.db-$(date +%Y%m%d)
```

## Git Operations
```bash
# Commit configuration changes
git add .
git commit -m "Configuration update"
git push origin master

# Rollback to previous version
git reset --hard HEAD~1
```

## Device Management
- **Shelly Devices**: Web interface on device IPs
- **Envisalink**: Web interface for alarm system status
- **GoodWe**: SEMS app or local web interface
- **HACS**: Manage custom components via HA frontend
