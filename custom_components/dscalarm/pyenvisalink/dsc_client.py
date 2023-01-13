import asyncio
import logging
import json
import re
import asyncio
import datetime
from .envisalink_base_client import EnvisalinkClient
from .dsc_envisalinkdefs import *

_LOGGER = logging.getLogger(__name__)

from asyncio import ensure_future

class DSCClient(EnvisalinkClient):
    """Represents a dsc alarm client."""

    def __init__(self, panel, loop):
        self._refreshZoneByassState = False
        self._zoneBypassRefreshTask = None
        super().__init__(panel, loop)

    def to_chars(self, string):
        chars = []
        for char in string:
            chars.append(ord(char))
        return chars

    def get_checksum(self, code, data):
        """part of each command includes a checksum.  Calculate."""
        return ("%02X" % sum(self.to_chars(code)+self.to_chars(data)))[-2:]

    def send_command(self, code, data):
        """Send a command in the proper honeywell format."""
        to_send = code + data + self.get_checksum(code, data)
        self.send_data(to_send)

    def dump_zone_timers(self):
        """Send a command to dump out the zone timers."""
        self.send_command(evl_Commands['DumpZoneTimers'], '')

    def keypresses_to_partition(self, partitionNumber, keypresses):
        """Send keypresses (max of 6) to a particular partition."""
        self.send_command(evl_Commands['PartitionKeypress'], str.format("{0}{1}", partitionNumber, keypresses[:6]))

    async def keep_alive(self):
        """Send a keepalive command to reset it's watchdog timer."""
        while not self._shutdown:
            if self._loggedin:
                self.send_command(evl_Commands['KeepAlive'], '')
            await asyncio.sleep(self._alarmPanel.keepalive_interval)

    async def periodic_zone_timer_dump(self):
        """Used to periodically get the zone timers to make sure our zones are updated."""
        while not self._shutdown:
            if self._loggedin:
                self.dump_zone_timers()
            await asyncio.sleep(self._alarmPanel.zone_timer_interval)

    def arm_stay_partition(self, code, partitionNumber):
        """Public method to arm/stay a partition."""
        self._cachedCode = code
        self.send_command(evl_Commands['ArmStay'], str(partitionNumber))

    def arm_away_partition(self, code, partitionNumber):
        """Public method to arm/away a partition."""
        self._cachedCode = code
        self.send_command(evl_Commands['ArmAway'], str(partitionNumber))

    def arm_max_partition(self, code, partitionNumber):
        """Public method to arm/max a partition."""
        self._cachedCode = code
        self.send_command(evl_Commands['ArmMax'], str(partitionNumber))

    def arm_night_partition(self, code, partitionNumber):
        """Public method to arm/max a partition."""
        self.arm_max_partition(code, partitionNumber)

    def disarm_partition(self, code, partitionNumber):
        """Public method to disarm a partition."""
        self._cachedCode = code
        self.send_command(evl_Commands['Disarm'], str(partitionNumber) + str(code))

    def panic_alarm(self, panicType):
        """Public method to raise a panic alarm."""
        self.send_command(evl_Commands['Panic'], evl_PanicTypes[panicType])

    def toggle_zone_bypass(self, zone):
        """Public method to toggle a zone's bypass state."""
        self.keypresses_to_partition(1, "*1%02d#" % zone)

    def command_output(self, code, partitionNumber, outputNumber):
        """Used to activate the selected command output"""
        self._cachedCode = code
        self.send_command(evl_Commands['CommandOutput'], str.format("{0}{1}", partitionNumber, outputNumber))	

    def parseHandler(self, rawInput):
        """When the envisalink contacts us- parse out which command and data."""
        cmd = {}
        dataoffset = 0
        if rawInput != '':
            if re.match('\d\d:\d\d:\d\d\s', rawInput):
                dataoffset = dataoffset + 9
            code = rawInput[dataoffset:dataoffset+3]
            cmd['code'] = code
            cmd['data'] = rawInput[dataoffset+3:][:-2]
            
            try:
                #Interpret the login command further to see what our handler is.
                if evl_ResponseTypes[code]['handler'] == 'login':
                    if cmd['data'] == '3':
                      handler = 'login'
                    elif cmd['data'] == '2':
                      handler = 'login_timeout'
                    elif cmd['data'] == '1':
                      handler = 'login_success'
                    elif cmd['data'] == '0':
                      handler = 'login_failure'

                    cmd['handler'] = "handle_%s" % handler
                    cmd['callback'] = "callback_%s" % handler

                else:
                    cmd['handler'] = "handle_%s" % evl_ResponseTypes[code]['handler']
                    cmd['callback'] = "callback_%s" % evl_ResponseTypes[code]['handler']
            except KeyError:
                _LOGGER.debug(str.format('No handler defined in config for {0}, skipping...', code))
                
        return cmd

    def handle_login(self, code, data):
        """When the envisalink asks us for our password- send it."""
        self.send_command(evl_Commands['Login'], self._alarmPanel.password) 

    def handle_login_success(self, code, data):
        """Handler for when the envisalink accepts our credentials."""
        super().handle_login_success(code, data)
        dt = datetime.datetime.now().strftime('%H%M%m%d%y')
        self.send_command(evl_Commands['SetTime'], dt)
        self.send_command(evl_Commands['StatusReport'], '')

        if self._alarmPanel._zoneBypassEnabled:
            """ Initiate request for zone bypass information """
            self._refreshZoneBypassStatus = True
            if self._zoneBypassRefreshTask == None:
                self._zoneBypassRefreshTask = ensure_future(self.dump_zone_bypass_status(), loop=self._eventLoop)

    def handle_command_response(self, code, data):
        """Handle the envisalink's initial response to our commands."""
        _LOGGER.debug("DSC ack recieved.")

    def handle_command_response_error(self, code, data):
        """Handle the case where the DSC passes back a checksum failure."""
        _LOGGER.error("The previous command resulted in a checksum failure.")

    def handle_poll_response(self, code, data):
        """Handle the response to our keepalive messages."""
        self.handle_command_response(code, data)

    def handle_zone_state_change(self, code, data):
        """Handle when the envisalink sends us a zone change."""
        """Event 601-610."""
        parse = re.match('^[0-9]{3,4}$', data)
        if parse:
            zoneNumber = int(data[-3:])
            self._alarmPanel.alarm_state['zone'][zoneNumber]['status'].update(evl_ResponseTypes[code]['status'])
            _LOGGER.debug(str.format("(zone {0}) state has updated: {1}", zoneNumber, json.dumps(evl_ResponseTypes[code]['status'])))
            return zoneNumber
        else:
            _LOGGER.error("Invalid data has been passed in the zone update.")

    def handle_partition_state_change(self, code, data):
        """Handle when the envisalink sends us a partition change."""
        """Event 650-674, 652 is an exception, because 2 bytes are passed for partition and zone type."""
        if code == '652':
            parse = re.match('^[0-9]{2}$', data)
            if parse:
                partitionNumber = int(data[0])
                self._alarmPanel.alarm_state['partition'][partitionNumber]['status'].update(evl_ArmModes[data[1]]['status'])
                _LOGGER.debug(str.format("(partition {0}) state has updated: {1}", partitionNumber, json.dumps(evl_ArmModes[data[1]]['status'])))
                return partitionNumber
            else:
                _LOGGER.error("Invalid data has been passed when arming the alarm.") 
        else:
            parse = re.match('^[0-9]+$', data)
            if parse:
                partitionNumber = int(data[0])
                self._alarmPanel.alarm_state['partition'][partitionNumber]['status'].update(evl_ResponseTypes[code]['status'])
                _LOGGER.debug(str.format("(partition {0}) state has updated: {1}", partitionNumber, json.dumps(evl_ResponseTypes[code]['status'])))
                
                '''Log the user who last armed or disarmed the alarm'''
                if code == '700':
                    lastArmedBy = {'last_armed_by_user': int(data[1:5])}
                    self._alarmPanel.alarm_state['partition'][partitionNumber]['status'].update(lastArmedBy)
                elif code == '750':
                    lastDisarmedBy = {'last_disarmed_by_user': int(data[1:5])}
                    self._alarmPanel.alarm_state['partition'][partitionNumber]['status'].update(lastDisarmedBy)

                if code == '655' and self._alarmPanel._zoneBypassEnabled:
                    """Partition was disarmed which means the bypassed zones have likley been reset so force a zone bypass refresh"""
                    self._refreshZoneBypassStatus = True

                return partitionNumber
            else:
                _LOGGER.error("Invalid data has been passed in the parition update.")

    def handle_send_code(self, code, data):
        """The DSC will, depending upon settings, challenge us with the code.  If the user passed it in, we'll send it."""
        if self._cachedCode is None:
            _LOGGER.error("The envisalink asked for a code, but we have no code in our cache.")
        else:
            self.send_command(evl_Commands['SendCode'], self._cachedCode)
            self._cachedCode = None

    def handle_keypad_update(self, code, data):
        """Handle general- non partition based info"""
        if code == '849':
            bits = "{0:016b}".format(int(data,16))
            trouble_description = ""
            ac_present = True
            for i in range(0, 7):
                if bits[15-i] == '1':
                    trouble_description += evl_verboseTrouble[i] + ', '
                    if i == 1:
                        ac_present = False
            new_status = {'alpha':trouble_description.strip(', '), 'ac_present': ac_present}
        else:
            new_status = evl_ResponseTypes[code]['status']
       
        for part in self._alarmPanel.alarm_state['partition']:
            self._alarmPanel.alarm_state['partition'][part]['status'].update(new_status)
        _LOGGER.debug(str.format("(All partitions) state has updated: {0}", json.dumps(new_status)))

    def handle_zone_bypass_update(self, code, data):
        """ Handle zone bypass update triggered when *1 is used on the keypad """
        if not self._alarmPanel._zoneBypassEnabled:
            return

        self._refreshZoneBypassStatus = False
        if len(data) == 16:
            updates = {}
            for byte in range(8):
                bypassBitfield = int('0x' + data[byte * 2] + data[(byte * 2) + 1], 0)

                for bit in range(8):
                    zoneNumber = (byte * 8) + bit + 1
                    bypassed = (bypassBitfield & (1 << bit) != 0)
                    if self._alarmPanel.alarm_state['zone'][zoneNumber]['bypassed'] != bypassed:
                        updates[zoneNumber] = bypassed
                    self._alarmPanel.alarm_state['zone'][zoneNumber]['bypassed'] = bypassed
                    _LOGGER.debug(str.format("(zone {0}) bypass state has updated: {1}", zoneNumber, bypassed))


            _LOGGER.debug(str.format("zone bypass updates: {0}", updates))
            return updates
        else:
            _LOGGER.error(str.format("Invalid data length ({0}) has been received in the bypass update.", len(data)))

    async def dump_zone_bypass_status(self):
        """ Loop requesting zone bypass status until the command succeeds.
            This is necessary to deal with TPI/DSC buffer overrun errors.
            Ideally all commands would be queued with a retry mechanism when BUSY or BUFFER_OVERRUN is received back"""
        while not self._shutdown:
            if self._loggedin and self._refreshZoneBypassStatus and not self.is_any_partition_armed():
                """ Trigger a 616 'Bypassed Zones Bitfield Dump' to initialize the bypass state.
                    There is unfortunately not a specific command to request a zone bypass dump so the *1# keypresses are sent instead.
                    It appears that limitations in the envisalink API (or perhaps the panel itself) makes it impossible for this feature
                    to work if the alarm panel is setup to require a code to bypass zones.

                    Only issue the command if the alarm is not armed since the EVL will not send a 616 when in the armed state.
                    """
                self.keypresses_to_partition(1, "*1#")
            await asyncio.sleep(5)

    def is_any_partition_armed(self) -> bool:
        """ Check if any partition is either armed or arming/disarming """
        for partition, state in self._alarmPanel.alarm_state['partition'].items():
            status = state['status']
            away = status.get('armed_away', False)
            stay = status.get('armed_stay', False)
            exit_delay = status.get('exit_delay', False)
            entry_delay = status.get('entry_delay', False)
            if away or stay or exit_delay or entry_delay:
                _LOGGER.debug(f"is_any_partition_armed: partition {partition} status={status}")
                return True
        _LOGGER.debug("is_any_partition_armed: no partitions are armed")
        return False

