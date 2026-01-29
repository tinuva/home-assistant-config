# Git Hooks

This directory contains git hooks for automated validation of Home Assistant configuration.

## Available Hooks

### pre-commit
Runs before each commit to validate:
1. **yamllint** - Catches YAML syntax errors, trailing spaces, and indentation issues
2. **ha core check** - Validates Home Assistant configuration

If either check fails, the commit will be blocked until issues are resolved.

## Installation

Run the installation script from the repository root:

```bash
./hooks/install.sh
```

This will copy the hooks to `.git/hooks/` and make them executable.

## Manual Installation

Alternatively, copy the hooks manually:

```bash
cp hooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

## Bypassing Hooks (Not Recommended)

In rare cases where you need to commit despite validation failures:

```bash
git commit --no-verify -m "your message"
```

**Warning:** This should only be used in exceptional circumstances, as it bypasses critical safety checks for a production Home Assistant installation.
