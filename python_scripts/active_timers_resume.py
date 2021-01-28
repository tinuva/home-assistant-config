ts = hass.states.get('input_text.active_timers')
if ts is not None and ts.state != 'unknown' and ts.state != '':
  timers = ts.state.split(',')
  for t in timers:
    z = t.split()
    duration = int(z[1]) - int(datetime.datetime.now().timestamp())
    if duration > 0:
      service_data = {'entity_id': 'timer.{}'.format(z[0]), 'duration':'{}'.format(duration)}
      hass.services.call('timer', 'start', service_data, False)
      if state == "paused":
        hass.services.call('timer', 'pause', {'entity_id' : 'timer.{}'.format(z[0])}, False)