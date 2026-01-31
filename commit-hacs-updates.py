#!/usr/bin/env python3

import subprocess
from pathlib import Path


def get_commit_message(folder: str) -> str:
    """Generate conventional commit message for HACS update."""
    # Map folder paths to conventional commit types and scopes
    if folder.startswith("www/community/"):
        plugin = folder.split("/")[2]
        return f"chore(frontend): update {plugin} via HACS"
    elif folder.startswith("themes/"):
        theme = folder.split("/")[1]
        return f"chore(theme): update {theme} via HACS"
    elif folder == "custom_components/hacs/":
        return "chore(hacs): update HACS integration"
    elif folder == "custom_components/":
        return "chore(integration): update custom components via HACS"
    elif folder == "python_scripts/":
        return "chore(scripts): update Python scripts via HACS"
    else:
        return f"chore: update {folder} via HACS"


cmd = "git status --porcelain".split()
p = subprocess.run(cmd, capture_output=True).stdout.decode()

ha_version = ".HA_VERSION"
ha_update = False

folders_to_add = set()
for line in p.split("\n"):
    if line.startswith(" M") or line.startswith("??"):
        path = line[3:]

        community = "www/community/"
        if path.startswith(community):
            plugin = path.split("/")[2]
            folders_to_add.add(community + plugin)

        themes = "themes/"
        if path.startswith(themes):
            theme = path.split("/")[1]
            folders_to_add.add(themes + theme)

        hacs = "custom_components/hacs/"
        if path.startswith(hacs):
            folders_to_add.add(hacs)

        custom_components = "custom_components/"
        if path.startswith(custom_components):
            folders_to_add.add(custom_components)

        python_scripts = "python_scripts/"
        if path.startswith(python_scripts):
            folders_to_add.add(python_scripts)

        if path == ha_version:
            ha_update = True

for folder in folders_to_add:
    print(folder)
    subprocess.run(f"git add {folder}".split())
    commit_msg = get_commit_message(folder)
    subprocess.run(["git", "commit", "-m", commit_msg])

if ha_update:
    with open(ha_version) as f:
        version = f.read().strip()
    subprocess.run(f"git add {ha_version}".split())
    subprocess.run(["git", "commit", "-m", f"chore(core): update Home Assistant to {version}"])