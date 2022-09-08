import ssl
import datetime
import logging

from aiohttp.client_exceptions import ClientConnectorError, ServerDisconnectedError
from aiohttp_retry import RetryClient

from .loadshedding_schedule import isLoadSheddingNow, getNextTimeSlot, getTimeSlotsByAreaCode, getTimeSlotHour

_LOGGER = logging.getLogger(__name__)

class coct_interface:
    """Interface class to obtain loadshedding information using the CoCT API"""

    def __init__(self):
        """Initializes class parameters"""

        self.base_url_eskom = "https://loadshedding.eskom.co.za/LoadShedding"
        self.base_url_ct = "https://d42sspn7yra3u.cloudfront.net"
        self.headers = {
            "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0"
        }
        self.ssl_context = ssl.create_default_context()
        self.ssl_context.set_ciphers("DEFAULT@SECLEVEL=1")

    async def async_query_api(self, base, endpoint, payload=None):
        """Queries a given endpoint on the CoCT loadshedding API with the specified payload

        Args:
            endpoint (string): The endpoint of the CoCT API
            payload (dict, optional): The parameters to apply to the query. Defaults to None.

        Returns:
            The response object from the request
        """
        async with RetryClient() as client:
            # The CoCT API occasionally drops incoming connections, implement reies
            async with client.get(
                url=base + endpoint,
                headers=self.headers,
                params=payload,
                ssl=self.ssl_context,
                retry_attempts=50,
                retry_exceptions={
                   ClientConnectorError,
                   ServerDisconnectedError,
                   ConnectionError,
                   OSError,
                },
            ) as res:
                return await res.json()

    async def async_get_stage_eskom(self, attempts=5):
        """Fetches the current loadshedding stage from the Eskom API
        Args:
            attempts (int, optional): The number of attempts to query a sane value from the Eskom API. Defaults to 5.
        Returns:
            The loadshedding stage if the query succeeded, else `None`
        """

        # Placeholder for returned loadshedding stage
        api_result = None

        # Query the API until a sensible (> 0) value is received, or the number of attempts is exceeded
        for attempt in range(attempts):
            try:
                res = await self.async_query_api(self.base_url_eskom, "/GetStatus")

                # Check if the API returned a valid response
                if res:
                    # Store the response
                    api_result = res

                    # Only return the result if the API returned a non-negative stage, otherwise retry
                    if int(res) > 0:
                        # Return the current loadshedding stage by subtracting 1 from the query result
                        return int(res) - 1
            except Exception as e:
                _LOGGER.debug(e, exc_info=True) # log exception info at ERROR log level

        if api_result:
            # If the API is up but returning "invalid" stages (< 0), simply return 0
            return 0
        else:
            # If the API the query did not succeed after the number of attempts has been exceeded, raise an exception
            _LOGGER.debug(f"Error, no response received from API after {attempts} attempts") # log exception info at ERROR log level
            # raise Exception(
            #     f"Error, no response received from API after {attempts} attempts"
            # )

    async def async_get_stage_coct(self, attempts=5):
        """Fetches the current loadshedding stage from the CoCT API

        Args:
            attempts (int, optional): The number of attempts to query a sane value from the CoCT API. Defaults to 5.

        Returns:
            The loadshedding stage if the query succeeded, else `None`
        """

        # Placeholder for returned loadshedding stage
        api_result = None
        stage_res = -1

        # Query the API until a sensible (> 0) value is received, or the number of attempts is exceeded
        for attempt in range(attempts):
            res = await self.async_query_api(self.base_url_ct, "?")

            # Check if the API returned a valid response
            if res:
                stage_res = res[0]['currentStage']

                # Store the response
                api_result = res

                # Only return the result if the API returned a non-negative stage, otherwise retry
                if int(stage_res) > -1:
                    # Return the current loadshedding stage by subtracting 1 from the query result
                    return res

        if stage_res:
            # If the API is up but returning "invalid" stages (< 0), simply return 0
            return [{'currentStage': 0, 'startTime': None, 'nextStage': 0, 'nextStageStartTime': None, 'lastUpdated': None}]
        else:
            # If the API the query did not succeed after the number of attempts has been exceeded, raise an exception
            raise Exception(
                f"Error, no response received from API after {attempts} attempts"
            )

    async def async_get_data(self, coct_area):
        """Fetches data from the loadshedding API"""
        d = datetime.datetime.now()

        # Set empty defaults
        start_time = None
        stage = None
        stage_eskom = None
        load_shedding_active = False
        next_load_shedding_slot = "N/A"
        next_stage = None
        next_stage_start_time = None
        last_updated = None
        today_slots_hours = None
        tomorrow_slots_hours = None

        # grab json and stage
        json = await self.async_get_stage_coct()
        _LOGGER.debug("json: " + str(json))
        try:
            stage_eskom = await self.async_get_stage_eskom()
        except Exception as e:
            _LOGGER.error(e, exc_info=True) # log exception info at ERROR log level
        stage = json[0]['currentStage']
        next_stage = json[0]['nextStage']
        try:
            start_time = datetime.datetime.strptime(json[0]['startTime'], '%Y-%m-%dT%H:%M')
            # CoCT app works out different 'stage' if after 'next_stage_start_time'
            if start_time > d:
                stage = 0
        except Exception as e:
            _LOGGER.error(e, exc_info=True) # log exception info at ERROR log level
        try:
            next_stage_start_time = datetime.datetime.strptime(json[0]['nextStageStartTime'], '%Y-%m-%dT%H:%M')
            # CoCT app works out different 'stage' if after 'next_stage_start_time'
            if next_stage_start_time < d:
                stage = next_stage
                next_stage_start_time = None
        except Exception as e:
            _LOGGER.error(e, exc_info=True) # log exception info at ERROR log level
        try:
            last_updated = datetime.datetime.strptime(json[0]['lastUpdated'], '%Y-%m-%dT%H:%M:%S.000Z')
        except Exception as e:
            _LOGGER.error(e, exc_info=True) # log exception info at ERROR log level

        # Just in case, check eskom stage, if it is lower than stage use that
        if stage_eskom and stage_eskom < stage:
            stage = stage_eskom
            next_stage_start_time = None

        # if loadshedding active calculate slots for area if area set
        if stage > 0 and coct_area > 0:
            try:
                next_load_shedding_slot = getNextTimeSlot(stage, coct_area)["date"]
            except Exception as e:
                _LOGGER.error(e, exc_info=True) # log exception info at ERROR log level
            try:
                load_shedding_active = isLoadSheddingNow(stage, coct_area)["status"]
            except Exception as e:
                _LOGGER.error(e, exc_info=True) # log exception info at ERROR log level
            try:
                # Grab today's times
                ## First slots
                today_slots = getTimeSlotsByAreaCode(stage, datetime.datetime.now().day, coct_area)
                ## convert to hours
                today_slots_hours = []
                for s in today_slots:
                    today_slots_hours.append(getTimeSlotHour(s))
            except Exception as e:
                _LOGGER.error(e, exc_info=True) # log exception info at ERROR log level
            try:                    
                # Grab tomorrow's times
                tomorrow_date = datetime.datetime.now() + datetime.timedelta(1) # +1 day
                ## First slots
                tomorrow_slots = getTimeSlotsByAreaCode(stage, tomorrow_date.day, coct_area)
                ## convert to hours
                tomorrow_slots_hours = []
                for s in tomorrow_slots:
                    tomorrow_slots_hours.append(getTimeSlotHour(s))
            except Exception as e:
                _LOGGER.error(e, exc_info=True) # log exception info at ERROR log level

        data = {
            "data": {
                "stage": stage,
                "stage_eskom": stage_eskom,
                "load_shedding_active": load_shedding_active,
                "coct_area": coct_area,
                "next_load_shedding_slot": next_load_shedding_slot,
                "next_stage": next_stage,
                "next_stage_start_time": next_stage_start_time,
                "last_updated": last_updated,
                "today_slots": today_slots_hours,
                "tomorrow_slots": tomorrow_slots_hours
            },
        }
        _LOGGER.debug("Data: " + str(data))
        return data
