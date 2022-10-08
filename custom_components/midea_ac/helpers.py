
"""Helper methods."""
from __future__ import annotations

import logging

_LOGGER = logging.getLogger(__name__)


def method_exists(device, method):
    if callable(getattr(device, method, None)):
        return True
    else:
        _LOGGER.warn(f"Device does not support '{method}' method.")
        return False


def property_exists(device, prop):
    if getattr(device, prop, None) is None:
        _LOGGER.warn(f"Device does not support '{prop}' property.")
        return False

    return True

def set_properties(device, props, value):
    success = False
    for prop in props:
        if hasattr(device, prop):
            setattr(device, prop, value)
            success = True
    
    if not success:
        _LOGGER.warn(f"Device does not support any of the properties: '{', '.join(props)}'.")
