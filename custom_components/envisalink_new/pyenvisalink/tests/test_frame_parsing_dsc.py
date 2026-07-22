"""Regression tests for HoneywellClient._parse_frames buffering across TCP read boundaries.

Without buffering, a frame split across two TCP recv() calls is processed as
two malformed pieces and logged as "Unrecognized data recieved". These tests
feed byte chunks through HoneywellClient._parse_frames and verify each
complete frame reaches the parser exactly once.
"""

import unittest
from unittest.mock import MagicMock

from pyenvisalink.alarm_state import AlarmState
from pyenvisalink.dsc_client import DSCClient


class _TestClient(DSCClient):
    """DscClient with the asyncio side of __init__ skipped, plus a
    capture of every line that reaches the parser for assertion."""

    def __init__(self):
        panel = MagicMock()
        panel.alarm_state = AlarmState.get_initial_alarm_state(64, 8)
        self._loggedin = True
        self._alarmPanel = panel
        self._shutdown = False
        self._cachedCode = None

class TestFrameParsingDsc(unittest.TestCase):
    def setUp(self):
        self.client = _TestClient()

    def test_complete_frame_in_one_chunk(self):
        frames, remainder = self.client._parse_frames("61000229\r\n")
        self.assertEqual(frames, ["61000229"])

    def test_two_frames_in_one_chunk(self):
        frames, remainder = self.client._parse_frames(
            "61000229\r\n"
            "6100032A\r\n"
        )
        self.assertEqual(frames, [
            "61000229",
            "6100032A",
        ])

    def test_frame_split_mid_payload(self):
        """The reproducer for the bug: TCP delivers half a frame, then the rest."""
        full = "6100032A\r\n"
        first, second = full[:4], full[4:]
        frames, remainder = self.client._parse_frames(first)
        self.assertEqual(frames, [])  # truncated line must not reach the parser
        frames, remainder = self.client._parse_frames(remainder + second)
        self.assertEqual(frames, [
            "6100032A",
        ])

    def test_frame_split_at_terminator(self):
        """The CRLF itself is split between two recv() calls."""
        frames, remainder = self.client._parse_frames("6100032A\r")
        self.assertEqual(frames, [])
        frames, remainder = self.client._parse_frames(remainder + "\n")
        self.assertEqual(frames, ["6100032A"])

    def test_split_inside_middle_frame(self):
        frames, remainder = self.client._parse_frames(
            "6100032A\r\n"
            "651"
        )
        self.assertEqual(frames, ["6100032A"])
        frames, remainder = self.client._parse_frames(remainder + 
            "1CD\r\n"
            "6732D2\r\n"
        )
        self.assertEqual(frames, [
            "6511CD",
            "6732D2",
        ])

    def test_empty_chunk_is_a_noop(self):
        frames, remainder = self.client._parse_frames("")
        self.assertEqual(frames, [])
        self.assertEqual(remainder, "")

if __name__ == "__main__":
    unittest.main()
