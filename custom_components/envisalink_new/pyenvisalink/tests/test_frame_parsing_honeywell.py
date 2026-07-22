"""Regression tests for HoneywellClient._parse_frames buffering across TCP read boundaries.

Without buffering, a frame split across two TCP recv() calls is processed as
two malformed pieces and logged as "Unrecognized data recieved". These tests
feed byte chunks through HoneywellClient._parse_frames and verify each
complete frame reaches the parser exactly once.
"""

import unittest
from unittest.mock import MagicMock

from pyenvisalink.alarm_state import AlarmState
from pyenvisalink.honeywell_client import HoneywellClient


class _TestClient(HoneywellClient):
    """HoneywellClient with the asyncio side of __init__ skipped, plus a
    capture of every line that reaches the parser for assertion."""

    def __init__(self):
        panel = MagicMock()
        panel.alarm_state = AlarmState.get_initial_alarm_state(64, 8)
        self._loggedin = True
        self._alarmPanel = panel
        self._shutdown = False
        self._cachedCode = None

class TestFrameParsingHoneywell(unittest.TestCase):
    def setUp(self):
        self.client = _TestClient()

    def test_complete_frame_in_one_chunk(self):
        frames, remainder = self.client._parse_frames("%01,02000004000000000000000000000000$\r\n")
        self.assertEqual(frames, ["%01,02000004000000000000000000000000"])
        self.assertEqual(remainder, "\r\n")

    def test_two_frames_in_one_chunk(self):
        frames, remainder = self.client._parse_frames(
            "%01,02000004000000000000000000000000$\r\n"
            "%00,01,1C08,08,00,****DISARMED****  Ready to Arm  $\r\n"
        )
        self.assertEqual(frames, [
            "%01,02000004000000000000000000000000",
            "%00,01,1C08,08,00,****DISARMED****  Ready to Arm  ",
        ])
        self.assertEqual(remainder, "\r\n")

    def test_frame_split_mid_payload(self):
        """The reproducer for the bug: TCP delivers half a frame, then the rest."""
        full = "%00,01,0008,30,00,FAULT 30                        $\r\n"
        first, second = full[:26], full[26:]
        frames, remainder = self.client._parse_frames(first)
        self.assertEqual(frames, [])  # truncated line must not reach the parser
        frames, remainder = self.client._parse_frames(remainder + second)
        self.assertEqual(frames, [
            "%00,01,0008,30,00,FAULT 30                        ",
        ])
        self.assertEqual(remainder, "\r\n")

    def test_frame_split_at_terminator(self): # TODO
        """The CRLF itself is split between two recv() calls."""
        frames, remainder = self.client._parse_frames("%02,01000000$\r")
        self.assertEqual(frames, ["%02,01000000"])
        frames, remainder = self.client._parse_frames(remainder + "\n")
        self.assertEqual(frames, [])
        self.assertEqual(remainder, "\r\n")

    def test_split_inside_middle_frame(self):
        frames, remainder = self.client._parse_frames(
            "%01,02000004000000000000000000000000$\r\n"
            "%00,01,0008,05,00,FAULT"
        )
        self.assertEqual(frames, ["%01,02000004000000000000000000000000"])
        frames, remainder = self.client._parse_frames(remainder + 
            " 05                        $\r\n"
            "%02,03000000$\r\n"
        )
        self.assertEqual(frames, [
            "%00,01,0008,05,00,FAULT 05                        ",
            "%02,03000000",
        ])
        self.assertEqual(remainder, "\r\n")

    def test_empty_chunk_is_a_noop(self):
        frames, remainder = self.client._parse_frames("")
        self.assertEqual(frames, [])
        self.assertEqual(remainder, "")

    def test_login_prompt_is_delivered_when_terminator_arrives(self):
        """Pre-login the EVL sends 'Login:\\r\\n'; buffer must release it."""
        self.client._loggedin = False
        frames, remainder = self.client._parse_frames("Login:")
        self.assertEqual(frames, [])
        frames, remainder = self.client._parse_frames(remainder + "\r\n")
        self.assertEqual(frames, ["Login:"])
        self.assertEqual(remainder, "")

    def test_login_response_with_additional_frame(self):
        """Login success response and an additional frame in the same buffer."""
        self.client._loggedin = False
        frames, remainder = self.client._parse_frames(
            "OK\r\n"
            "%01,02000004000000000000000000000000$\r\n"
            "%02,03000000$\r\n"
        )
        self.assertEqual(frames, [
            "OK",
            "%01,02000004000000000000000000000000",
            "%02,03000000",
        ])
        self.assertEqual(remainder, "\r\n")

    def test_two_frames_in_one_chunk_no_crlf(self):
        frames, remainder = self.client._parse_frames(
            "%01,02000004000000000000000000000000$"
            "%00,01,1C08,08,00,****DISARMED****  Ready to Arm  $"
        )
        self.assertEqual(frames, [
            "%01,02000004000000000000000000000000",
            "%00,01,1C08,08,00,****DISARMED****  Ready to Arm  ",
        ])
        self.assertEqual(remainder, "")

    def test_extra_characters_between_frames(self):
        frames, remainder = self.client._parse_frames(
            "%01,02000004000000000000000000000000$"
            "GARBAGE"
            "%00,01,1C08,08,00,****DISARMED****  Ready to Arm  $"
        )
        self.assertEqual(frames, [
            "%01,02000004000000000000000000000000",
            "%00,01,1C08,08,00,****DISARMED****  Ready to Arm  ",
        ])
        self.assertEqual(remainder, "")

    def test_percent_sentinel_in_keypad_alpha(self):
        frames, remainder = self.client._parse_frames(
            "%00,01,1C08,08,00,BATTERY % at 100$"
        )
        self.assertEqual(frames, [
            "%00,01,1C08,08,00,BATTERY % at 100",
        ])
        self.assertEqual(remainder, "")

    def test_dollar_sign_sentinel_in_keypad_alpha(self):
        frames, remainder = self.client._parse_frames(
            "%00,01,1C08,08,00,MAKING $ HERE$\r\n"
            "%02,03000000$\r\n"
        )
        self.assertEqual(frames, [
            "%00,01,1C08,08,00,MAKING ",
            " HERE",
            "%02,03000000"
        ])
        self.assertEqual(remainder, "\r\n")

if __name__ == "__main__":
    unittest.main()
