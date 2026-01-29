#!/bin/bash
# Install git hooks for Home Assistant configuration validation

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GIT_HOOKS_DIR="$(git rev-parse --git-dir)/hooks"

echo "Installing git hooks..."

# Install pre-commit hook
if [ -f "$SCRIPT_DIR/pre-commit" ]; then
    cp "$SCRIPT_DIR/pre-commit" "$GIT_HOOKS_DIR/pre-commit"
    chmod +x "$GIT_HOOKS_DIR/pre-commit"
    echo "✓ Installed pre-commit hook"
else
    echo "✗ Error: pre-commit hook not found"
    exit 1
fi

echo ""
echo "Git hooks installed successfully!"
echo "The pre-commit hook will now run yamllint and 'ha core check' before each commit."
