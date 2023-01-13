import asyncio
import async_timeout
import threading
import logging
import re
from .alarm_state import AlarmState

_LOGGER = logging.getLogger(__name__)

from asyncio import ensure_future

class EnvisalinkClient(asyncio.Protocol):
    """Abstract base class for the envisalink TPI client."""

    def __init__(self, panel, loop):
        self._loggedin = False
        self._alarmPanel = panel
        if loop is None:
            _LOGGER.info("Creating our own event loop.")
            self._eventLoop = asyncio.new_event_loop()
            self._ownLoop = True
        else:
            _LOGGER.info("Latching onto an existing event loop.")
            self._eventLoop = loop
            self._ownLoop = False

        self._transport = None
        self._shutdown = False
        self._cachedCode = None
        self._reconnect_task = None

    def start(self):
        """Public method for initiating connectivity with the envisalink."""
        self._shutdown = False
        ensure_future(self.connect(), loop=self._eventLoop)
        ensure_future(self.keep_alive(), loop=self._eventLoop)

        if self._alarmPanel.zone_timer_interval > 0:
            ensure_future(self.periodic_zone_timer_dump(), loop=self._eventLoop)

        if self._ownLoop:
            _LOGGER.info("Starting up our own event loop.")
            self._eventLoop.run_forever()
            self._eventLoop.close()
            _LOGGER.info("Connection shut down.")

    def stop(self):
        """Public method for shutting down connectivity with the envisalink."""
        self._loggedin = False
        self._shutdown = True

        if self._ownLoop:
            _LOGGER.info("Shutting down Envisalink client connection...")
            self._eventLoop.call_soon_threadsafe(self._eventLoop.stop)
        else:
            _LOGGER.info("An event loop was given to us- we will shutdown when that event loop shuts down.")

    async def connect(self):
        """Internal method for making the physical connection."""
        _LOGGER.info(str.format("Started to connect to Envisalink... at {0}:{1}", self._alarmPanel.host, self._alarmPanel.port))
        try:
            async with async_timeout.timeout(self._alarmPanel.connection_timeout):
                coro = self._eventLoop.create_connection(lambda: self, self._alarmPanel.host, self._alarmPanel.port)
                await coro
        except:
            self.handle_connect_failure()

    def connection_made(self, transport):
        """asyncio callback for a successful connection."""
        _LOGGER.info("Connection Successful!")
        self._transport = transport
        
    def connection_lost(self, exc):
        """asyncio callback for connection lost."""
        self._loggedin = False
        if not self._shutdown:
            _LOGGER.error('The server closed the connection. Reconnecting...')
            self.schedule_reconnect(30)

    def schedule_reconnect(self, delay):
        """Internal method for reconnecting."""
        if self._reconnect_task is not None:
            _LOGGER.debug('Reconnect already scheduled.')
        else:
            self._reconnect_task = ensure_future(self.reconnect(30), loop=self._eventLoop)

    async def reconnect(self, delay):
        """Internal method for reconnecting."""
        self.disconnect()
        await asyncio.sleep(delay)
        self._reconnect_task = None
        await self.connect()

    async def keep_alive(self):
        """Used to periodically send a keepalive message to the envisalink."""
        raise NotImplementedError()

    async def periodic_zone_timer_dump(self):
        """Used to periodically get the zone timers to make sure our zones are updated."""
        raise NotImplementedError()
            
    def disconnect(self):
        """Internal method for forcing connection closure if hung."""
        _LOGGER.debug('Closing connection with server...')
        if self._transport:
            self._transport.close()
            
    def send_data(self, data):
        """Raw data send- just make sure it's encoded properly and logged."""
        _LOGGER.debug(str.format('TX > {0}', data.encode('ascii')))
        try:
            self._transport.write((data + '\r\n').encode('ascii'))
        except RuntimeError as err:
            _LOGGER.error(str.format('Failed to write to the stream. Reconnecting. ({0}) ', err))
            self._loggedin = False
            if not self._shutdown:
                self.schedule_reconnect(30)

    def send_command(self, code, data):
        """Used to send a properly formatted command to the envisalink"""
        raise NotImplementedError()

    def dump_zone_timers(self):
        """Public method for dumping zone timers."""
        raise NotImplementedError()

    def change_partition(self, partitionNumber):
        """Public method for changing the default partition."""
        raise NotImplementedError()

    def keypresses_to_default_partition(self, keypresses):
        """Public method for sending a key to a particular partition."""
        self.send_data(keypresses)

    def keypresses_to_partition(self, partitionNumber, keypresses):
        """Public method to send a key to the default partition."""
        raise NotImplementedError()

    def arm_stay_partition(self, code, partitionNumber):
        """Public method to arm/stay a partition."""
        raise NotImplementedError()

    def arm_away_partition(self, code, partitionNumber):
        """Public method to arm/away a partition."""
        raise NotImplementedError()

    def arm_max_partition(self, code, partitionNumber):
        """Public method to arm/max a partition."""
        raise NotImplementedError()

    def disarm_partition(self, code, partitionNumber):
        """Public method to disarm a partition."""
        raise NotImplementedError()

    def panic_alarm(self, panicType):
        """Public method to trigger the panic alarm."""
        raise NotImplementedError()

    def toggle_zone_bypass(self, zone):
        """Public method to toggle a zone's bypass state."""
        raise NotImplementedError()

    def command_output(self, code, partitionNumber, outputNumber):
        """Public method to activate the selected command output"""
        raise NotImplementedError()

    def parseHandler(self, rawInput):
        """When the envisalink contacts us- parse out which command and data."""
        raise NotImplementedError()
        
    def data_received(self, data):
        """asyncio callback for any data recieved from the envisalink."""
        if data != '':
            try:
                fullData = data.decode('ascii').strip()
                cmd = {}
                result = ''
                _LOGGER.debug('----------------------------------------')
                _LOGGER.debug(str.format('RX < {0}', fullData))
                lines = str.split(fullData, '\r\n')
            except:
                _LOGGER.error('Received invalid message. Skipping.')
                return

            for line in lines:
                cmd = self.parseHandler(line)
            
                try:
                    _LOGGER.debug(str.format('calling handler: {0} for code: {1} with data: {2}', cmd['handler'], cmd['code'], cmd['data']))
                    handlerFunc = getattr(self, cmd['handler'])
                    result = handlerFunc(cmd['code'], cmd['data'])
    
                except (AttributeError, TypeError, KeyError) as err:
                    _LOGGER.debug("No handler configured for evl command.")
                    _LOGGER.debug(str.format("KeyError: {0}", err))
            
                try:
                    _LOGGER.debug(str.format('Invoking callback: {0}', cmd['callback']))
                    callbackFunc = getattr(self._alarmPanel, cmd['callback'])
                    callbackFunc(result)
    
                except (AttributeError, TypeError, KeyError) as err:
                    _LOGGER.debug("No callback configured for evl command.")

                _LOGGER.debug('----------------------------------------')

    def convertZoneDump(self, theString):
        """Interpret the zone dump result, and convert to readable times."""
        returnItems = []
        zoneNumber = 1
        # every four characters
        inputItems = re.findall('....', theString)
        for inputItem in inputItems:
            # Swap the couples of every four bytes (little endian to big endian)
            swapedBytes = []
            swapedBytes.insert(0, inputItem[0:2])
            swapedBytes.insert(0, inputItem[2:4])

            # add swapped set of four bytes to our return items, converting from hex to int
            itemHexString = ''.join(swapedBytes)
            itemInt = int(itemHexString, 16)

            # each value is a timer for a zone that ticks down every five seconds from maxint
            MAXINT = 65536
            itemTicks = MAXINT - itemInt
            itemSeconds = itemTicks * 5

            status = ''
            #The envisalink never seems to report back exactly 0 seconds for an open zone.
            #it always seems to be 10-15 seconds.  So anything below 30 seconds will be open.
            #this will of course be augmented with zone/partition events.
            if itemSeconds < 30:
                status = 'open'
            else:
                status = 'closed'

            returnItems.append({'zone': zoneNumber, 'status': status, 'seconds': itemSeconds})
            zoneNumber += 1
        return returnItems
            
    def handle_login(self, code, data):
        """Handler for when the envisalink challenges for password."""
        raise NotImplementedError()

    def handle_login_success(self, code, data):
        """Handler for when the envisalink accepts our credentials."""
        self._loggedin = True
        _LOGGER.debug('Password accepted, session created')

    def handle_login_failure(self, code, data):
        """Handler for when the envisalink rejects our credentials."""
        self._loggedin = False
        _LOGGER.error('Password is incorrect. Server is closing socket connection.')
        self.stop()

    def handle_connect_failure(self):
        """Handler for if we fail to connect to the envisalink."""
        self._loggedin = False
        if not self._shutdown:
            _LOGGER.error('Unable to connect to envisalink. Reconnecting...')
            self._alarmPanel._loginTimeoutCallback(False)
            self.schedule_reconnect(30)

    def handle_keypad_update(self, code, data):
        """Handler for when the envisalink wishes to send us a keypad update."""
        raise NotImplementedError()
        
    def handle_poll_response(self, code, data):
        """When sending our keepalive message, handle the response back."""
        raise NotImplementedError()
        
    def handle_command_response(self, code, data):
        """When we send any command- this will be called to parse the initial response."""
        raise NotImplementedError()

    def handle_zone_state_change(self, code, data):
        """Callback for whenever the envisalink reports a zone change."""
        raise NotImplementedError()

    def handle_partition_state_change(self, code, data):
        """Callback for whenever the envisalink reports a partition change."""
        raise NotImplementedError()

    def handle_realtime_cid_event(self, code, data):
        """Callback for whenever the envisalink triggers alarm arm/disarm/trigger."""
        raise NotImplementedError()

    def handle_zone_timer_dump(self, code, data):
        """Handle the zone timer data."""
        zoneInfoArray = self.convertZoneDump(data)
        for zoneNumber, zoneInfo in enumerate(zoneInfoArray, start=1):
            self._alarmPanel.alarm_state['zone'][zoneNumber]['status'].update({'open': zoneInfo['status'] == 'open', 'fault': zoneInfo['status'] == 'open'})
            self._alarmPanel.alarm_state['zone'][zoneNumber]['last_fault'] = zoneInfo['seconds']
            _LOGGER.debug("(zone %i) %s", zoneNumber, zoneInfo['status'])
