import logging
from .honeywell_client import HoneywellClient
from .dsc_client import DSCClient
from .alarm_state import AlarmState

_LOGGER = logging.getLogger(__name__)
COMMAND_ERR = "Cannot run this command while disconnected. Please run start() first."

class EnvisalinkAlarmPanel:
    """This class represents an envisalink-based alarm panel."""
        
    def __init__(self, host, port=4025, panelType='HONEYWELL',
                 envisalinkVersion=3, userName='user', password='user',
                 zoneTimerInterval=20, keepAliveInterval=30, eventLoop=None,
                 connectionTimeout=10, zoneBypassEnabled=False):
        self._host = host
        self._port = port
        self._connectionTimeout = connectionTimeout
        self._panelType = panelType
        self._evlVersion = envisalinkVersion
        self._username = userName
        self._password = password
        self._keepAliveInterval = keepAliveInterval
        self._zoneTimerInterval = zoneTimerInterval
        self._maxPartitions = 8
        if envisalinkVersion < 4:
            self._maxZones = 64
        else:
            self._maxZones = 128
        self._alarmState = AlarmState.get_initial_alarm_state(self._maxZones, self._maxPartitions)
        self._client = None
        self._eventLoop = eventLoop
        self._zoneBypassEnabled = zoneBypassEnabled
        
        self._loginSuccessCallback = self._defaultCallback
        self._loginFailureCallback = self._defaultCallback
        self._loginTimeoutCallback = self._defaultCallback
        self._commandResponseCallback = self._defaultCallback
        self._pollResponseCallback = self._defaultCallback
        self._keypadUpdateCallback = self._defaultCallback
        self._zoneStateChangeCallback = self._defaultCallback
        self._partitionStateChangeCallback = self._defaultCallback
        self._cidEventCallback = self._defaultCallback
        self._zoneTimerCallback = self._defaultCallback

        loggingconfig = {'level': 'DEBUG',
                     'format': '%(asctime)s %(levelname)s <%(name)s %(module)s %(funcName)s> %(message)s',
                     'datefmt': '%a, %d %b %Y %H:%M:%S'}

        logging.basicConfig(**loggingconfig)

    @property
    def host(self):
        return self._host
        
    @ property
    def port(self):
        return self._port

    @ property
    def connection_timeout(self):
        return self._connectionTimeout
        
    @property
    def user_name(self):
        return self._username
        
    @property
    def password(self):
        return self._password
        
    @property
    def panel_type(self):
        return self._panelType

    @property
    def envisalink_version(self):
        return self._evlVersion
        
    @property
    def keepalive_interval(self):
        return self._keepAliveInterval

    @property
    def zone_timer_interval(self):
        return self._zoneTimerInterval

    @property
    def alarm_state(self):
        return self._alarmState

    @property
    def callback_login(self):
        return self._defaultCallback
        
    @property
    def callback_login_success(self):
        return self._loginSuccessCallback

    @callback_login_success.setter
    def callback_login_success(self, value):
        self._loginSuccessCallback = value

    @property
    def callback_login_failure(self):
        return self._loginFailureCallback

    @callback_login_failure.setter
    def callback_login_failure(self, value):
        self._loginFailureCallback = value

    @property
    def callback_login_timeout(self):
        return self._loginTimeoutCallback

    @callback_login_timeout.setter
    def callback_login_timeout(self, value):
        self._loginTimeoutCallback = value

    @property
    def callback_poll_response(self):
        return self._pollResponseCallback

    @callback_poll_response.setter
    def callback_poll_response(self, value):
        self._pollResponseCallback = value

    @property
    def callback_command_response(self):
        return self._commandResponseCallback

    @callback_command_response.setter
    def callback_command_response(self, value):
        self._commandResponseCallback = value

    @property
    def callback_keypad_update(self):
        return self._keypadUpdateCallback

    @callback_keypad_update.setter
    def callback_keypad_update(self, value):
        self._keypadUpdateCallback = value

    @property
    def callback_zone_state_change(self):
        return self._zoneStateChangeCallback

    @callback_zone_state_change.setter
    def callback_zone_state_change(self, value):
        self._zoneStateChangeCallback = value

    @property
    def callback_partition_state_change(self):
        return self._partitionStateChangeCallback

    @callback_partition_state_change.setter
    def callback_partition_state_change(self, value):
        self._partitionStateChangeCallback = value

    @property
    def callback_realtime_cid_event(self):
        return self._cidEventCallback

    @callback_realtime_cid_event.setter
    def callback_realtime_cid_event(self, value):
        self._cidEventCallback = value

    @property
    def callback_zone_timer_dump(self):
        return self._zoneTimerCallback
 
    @callback_zone_timer_dump.setter
    def callback_zone_timer_dump(self, value):
        self._zoneTimerCallback = value
        
    def _defaultCallback(self, data):
        """This is the callback that occurs when the client doesn't subscribe."""
        _LOGGER.debug("Callback has not been set by client.")	    

    def start(self):
        """Connect to the envisalink, and listen for events to occur."""
        logging.warn("Using a copy of the pyenvisalink package.")
        logging.info(str.format("Connecting to envisalink on host: {0}, port: {1}", self._host, self._port))
        if self._panelType == 'HONEYWELL':
            self._client = HoneywellClient(self, self._eventLoop)
            self._client.start()
        elif self._panelType == 'DSC':
            self._client = DSCClient(self, self._eventLoop)
            self._client.start()
        else:
            _LOGGER.error("Unexpected panel type.")    
        
    def stop(self):
        """Shut down and close our connection to the envisalink."""
        if self._client:
            _LOGGER.info("Disconnecting from the envisalink...")
            self._client.stop()
        else:
            _LOGGER.error(COMMAND_ERR)

    def dump_zone_timers(self):
        """Request a zone timer dump from the envisalink."""
        if self._client:
            self._client.dump_zone_timers()
        else:
            _LOGGER.error(COMMAND_ERR)

    def change_partition(self, partitionNumber):
        """Request that the default partition be changed."""
        if self._client:
            self._client.change_partition(partitionNumber)
        else:
            _LOGGER.error(COMMAND_ERR)

    def keypresses_to_default_partition(self, keypresses):
        """Send a key to the current partition."""
        if self._client:
            self._client.keypresses_to_default_partition(keypresses)
        else:
            _LOGGER.error(COMMAND_ERR)

    def keypresses_to_partition(self, partitionNumber, keypresses):
        """Send a key to a partition other than the current one."""
        if self._client:
            self._client.keypresses_to_partition(partitionNumber, keypresses)
        else:
            _LOGGER.error(COMMAND_ERR)

    def arm_stay_partition(self, code, partitionNumber):
        """Public method to arm/stay a partition."""
        if self._client:
            self._client.arm_stay_partition(code, partitionNumber)
        else:
            _LOGGER.error(COMMAND_ERR)

    def arm_away_partition(self, code, partitionNumber):
        """Public method to arm/away a partition."""
        if self._client:
            self._client.arm_away_partition(code, partitionNumber)
        else:
            _LOGGER.error(COMMAND_ERR)

    def arm_max_partition(self, code, partitionNumber):
        """Public method to arm/max a partition."""
        if self._client:
            self._client.arm_max_partition(code, partitionNumber)
        else:
            _LOGGER.error(COMMAND_ERR)

    def arm_night_partition(self, code, partitionNumber):
        """Public method to arm/night a partition."""
        if self._client:
            self._client.arm_night_partition(code, partitionNumber)
        else:
            _LOGGER.error(COMMAND_ERR)

    def disarm_partition(self, code, partitionNumber):
        """Public method to disarm a partition."""
        if self._client:
            self._client.disarm_partition(code, partitionNumber)
        else:
            _LOGGER.error(COMMAND_ERR)

    def panic_alarm(self, panic_type):
        """Public method to raise a panic alarm."""
        if self._client:
            self._client.panic_alarm(panic_type)
        else:
            _LOGGER.error(COMMAND_ERR)

    def toggle_zone_bypass(self, zone):
        """Public method to toggle a zone's bypass state."""
        if not self._zoneBypassEnabled:
            _LOGGER.error(COMMAND_ERR)
        elif self._client:
            self._client.toggle_zone_bypass(zone)
        else:
            _LOGGER.error(COMMAND_ERR)

    def command_output(self, code, partitionNumber, outputNumber):
        """Public method to activate an output"""
        if self._client:
            self._client.command_output(code, partitionNumber, outputNumber)
        else:
            _LOGGER.error(COMMAND_ERR)
