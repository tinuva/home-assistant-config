import datetime
import logging

from .const import (
    TIME_SLOT_HOURS,
    TIME_SLOT_MINUTES,
    NUM_TIME_SLOTS,
    HIGHEST_STAGE,
    NUM_AREA_CODES,
    MAX_MONTH_DAY,
    NUM_DAY_GROUPS,
    DAY_AREA_EXTRA_INCREMENTS,
    DAY_AREA_EXTR_INCREMENTS_STAGE_LOWER,
    STAGE_STARTING_AREAS,
)

_LOGGER = logging.getLogger(__name__)


def getAreaCodesByTimeSlot(stage, day, timeSlot):
    day = _clipDayToGroup(day)
    areaCodeAcc = _getAreaCodeAccumulationDayStart(stage, day) + timeSlot
    areaCode = _nomalizeAreaCode(stage, areaCodeAcc)
    areaCodes = [areaCode]

    if stage == 4 and timeSlot == 4 and day == 15:
        areaCodes = []

    if stage > 1:
        areaCodes = areaCodes + getAreaCodesByTimeSlot(stage - 1, day, timeSlot)

    return areaCodes


def getAreaCodesByTimeValue(
    stage, day, time, includeoverlap=False, previousMonthLastDay=31
):
    isOddHour = time.hour % TIME_SLOT_HOURS != 0
    timeSlot = _getTimeslotFromHour(time.hour)

    areaCodes = getAreaCodesByTimeSlot(stage, day, timeSlot)
    if includeoverlap and (not isOddHour) and time.minute <= TIME_SLOT_MINUTES:
        if timeSlot > 1:
            timeSlot -= 1
        else:
            timeSlot = NUM_TIME_SLOTS

            if day > 1:
                day -= 1
            else:
                day = previousMonthLastDay

        areaCodes = areaCodes + getAreaCodesByTimeSlot(stage, day, timeSlot)

    return areaCodes


def getTimeSlotsByAreaCode(stage, day, areaCode):
    timeSlots = []
    for i in range(NUM_TIME_SLOTS):
        areas = getAreaCodesByTimeSlot(stage, day, i + 1)
        try:
            if areas.index(areaCode) > -1:
                timeSlots.append(i + 1)
                continue
        except:
            pass

    return timeSlots


def getNextTimeSlotInDay(stage, day, areaCode, fromHour=-1):
    slots = getTimeSlotsByAreaCode(stage, day, areaCode)

    for slot in slots:
        slotHour = getTimeSlotHour(slot)

        if fromHour == -1 or slotHour > fromHour:
            return slot

    return None


def getNextTimeSlot(stage, areaCode):
    result = {"slot": None, "day": None, "date": None}

    if stage < 1 or stage > HIGHEST_STAGE:
        logging.error("getNextTimeSlot() stage out of bounds")
        return result

    if areaCode < 1 or areaCode > NUM_AREA_CODES:
        logging.error("getNextTimeSlot() areaCode out of bounds")
        return result

    d = datetime.datetime.now() # + datetime.timedelta(hours=2)
    fromHour = d.hour
    fromDay = d.day

    slot = None
    day = fromDay
    dayAccum = 0

    while slot == None:
        slot = getNextTimeSlotInDay(
            stage, day, areaCode, fromHour if day == fromDay else -1
        )

        if slot == None:
            if day >= MAX_MONTH_DAY:
                day = 1
            else:
                day += 1

            dayAccum += 1

    newDate = datetime.datetime(d.year, d.month, d.day, getTimeSlotHour(slot), 0, 0)
    newDate = newDate + datetime.timedelta(days=dayAccum)

    result["slot"] = slot
    result["day"] = day
    result["date"] = newDate

    return result


def isLoadSheddingNow(stage, areaCode):
    d = datetime.datetime.now() #+ datetime.timedelta(hours=2)
    #d = datetime.datetime.strptime("2022-07-10T14:20", '%Y-%m-%dT%H:%M')

    hour = d.hour
    areaCodes = getAreaCodesByTimeValue(
        stage, d.day, datetime.time(hour=d.hour, minute=d.minute)
    )
    _LOGGER.debug("Areas in loadshedding now: " + str(areaCodes))

    result = {"status": False, "endDate": None}
    _LOGGER.debug("Result: " + str(result))

    try:
        if areaCodes.index(areaCode) > -1:
            result["status"] = True
            _LOGGER.debug('status = true')
    except:
        pass

    if result["status"]:
        slot = _getTimeslotFromHour(hour)
        _LOGGER.debug('TimeSlotHour:' + str(getTimeSlotHour(slot)))
        _LOGGER.debug('TIME_SLOT_HOURS:' + str(TIME_SLOT_HOURS))
        end_hour = getTimeSlotHour(slot) + TIME_SLOT_HOURS
        _LOGGER.debug('end_hour:' + str(end_hour))
        if end_hour > 23:
            end_hour = end_hour - 24
            endDate = datetime.datetime(d.year, d.month, d.day, end_hour, TIME_SLOT_MINUTES)
            endDate = endDate + datetime.timedelta(1) # +1 day since we removed 24 hours
        else:
            endDate = datetime.datetime(d.year, d.month, d.day, end_hour, TIME_SLOT_MINUTES)
        result["endDate"] = endDate
    _LOGGER.debug("Final result: " + str(result))
    return result


def getTimeSlotHour(slot):
    return (slot - 1) * TIME_SLOT_HOURS


def _getTimeslotFromHour(hour):
    isOddHour = (hour % TIME_SLOT_HOURS) != 0

    timeSlot = hour
    if isOddHour:
        timeSlot -= 1

    return timeSlot // TIME_SLOT_HOURS + 1


def _clipDayToGroup(day):
    if day > NUM_DAY_GROUPS:
        day -= NUM_DAY_GROUPS
    return day


def _getAreaCodeAccumulationDayStart(stage, day):
    if day <= 1:
        return 0

    dayBefore = day - 1
    areaCodeAcc = dayBefore * NUM_TIME_SLOTS

    for i in DAY_AREA_EXTRA_INCREMENTS:
        if day >= i:
            areaCodeAcc += 1

    if stage <= 4:
        for i in DAY_AREA_EXTR_INCREMENTS_STAGE_LOWER:
            if day >= i:
                areaCodeAcc += 1

    return areaCodeAcc


def _nomalizeAreaCode(stage, areaCodeAcc):
    areaCode = areaCodeAcc % NUM_AREA_CODES
    areaCode += STAGE_STARTING_AREAS[stage] - 1
    if areaCode > NUM_AREA_CODES:
        areaCode -= NUM_AREA_CODES

    return areaCode


# nextday = getNextTimeSlot(2, 6)["day"]
# nextslot = getNextTimeSlot(2, 6)["slot"]
# print(nextslot)
# print(nextday)
# print(getTimeSlotHour(nextslot))
# print(getNextTimeSlot(2, 6)["date"])
# print(getAreaCodesByTimeSlot(2, 15, 3))
# print(getAreaCodesByTimeValue(2, 7, datetime.time(hour=1, minute=52)))
# print(getAreaCodesByTimeValue(3, 26, datetime.time(hour=14, minute=25), True))
# print(getTimeSlotsByAreaCode(4, 3, 11))
