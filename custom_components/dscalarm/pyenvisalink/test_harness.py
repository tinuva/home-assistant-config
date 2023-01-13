#!/usr/bin/env python3
import signal
import sys
from .alarm_panel import EnvisalinkAlarmPanel

#This is a test harness for the pyenvisalink library.  It will assist in testing the library against both Honeywell and DSC.

#Get Details from the user...
ip = input("Please input the IP address of your envisalink device: ")
port = input("Please input the port of your envisalink device (4025 is default): ")
version = input("Which envisalink device do you have? Enter 3 for evl3 or 4 for evl4: ")
panel = input("Input DSC if you have a DSC panel, or HONEYWELL if you have a honeywell panel: ")
pw = input("Please input your envisalink password: ")

na = input("Config complete. Please press enter now to connect to the envisalink.  When finished, use Ctrl+C to disconnect and exit")
testpanel = EnvisalinkAlarmPanel(ip, int(port), panel, int(version), pw, pw)
testpanel.start()

def signal_handler(signal, frame):
        print('You pressed Ctrl+C!')
        testpanel.stop()
        sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)
signal.pause()
