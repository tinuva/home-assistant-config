# Meteoblue API - Manual Testing Guide

## Testing with curl

### Basic Forecast Test

Replace `YOUR_API_KEY`, `YOUR_LAT`, and `YOUR_LON` with your actual values:

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=YOUR_LAT&lon=YOUR_LON&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc"
```

### Example for Cape Town

```bash
# Replace YOUR_API_KEY with your actual key
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc"
```

---

## Pretty Print JSON Output

### Using `jq` (if installed):

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc" | jq
```

### Using Python (always available):

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc" | python3 -m json.tool
```

---

## Check Specific Fields

### UV Index Only:

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc" | jq '.data_1h.uvindex'
```

Output:
```json
[0, 0, 0, 0, 0, 0, 1, 2, 4, 5, 7, 8, 8, 7, 6, 4, 2, 1, 0, 0, 0, ...]
```

### Time Array:

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc" | jq '.data_1h.time'
```

Output:
```json
["2025-12-10 00:00", "2025-12-10 01:00", "2025-12-10 02:00", ...]
```

### Temperature + UV + Time Together:

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc" | jq '{time: .data_1h.time, temperature: .data_1h.temperature, uvindex: .data_1h.uvindex}'
```

---

## Test All Packages (What Integration Uses)

### Current Weather:

```bash
curl "https://my.meteoblue.com/packages/current?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc"
```

### Hourly Forecast:

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc"
```

### Daily Forecast:

```bash
curl "https://my.meteoblue.com/packages/basic-day?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc"
```

### Air Quality:

```bash
curl "https://my.meteoblue.com/packages/airquality-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&tz=utc"
```

### Combined (What Integration Fetches):

```bash
# Forecast + Daily
curl "https://my.meteoblue.com/packages/basic-1h_basic-day?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc"
```

---

## Extract Your Coordinates from Home Assistant

```bash
# SSH into Home Assistant
ha core info | grep -E "latitude|longitude"
```

Or check `configuration.yaml`:
```yaml
homeassistant:
  latitude: -33.809
  longitude: 18.667
```

Or from Developer Tools → Template:
```yaml
{{ state_attr('zone.home', 'latitude') }}
{{ state_attr('zone.home', 'longitude') }}
```

---

## Check Your API Key

From your Home Assistant configuration:

```bash
# View integration config (don't share this!)
cat /usr/share/hassio/homeassistant/.storage/core.config_entries | grep -A 20 meteoblue
```

Or check in UI:
```
Settings → Devices & Services → Meteoblue → Configure
```

---

## Save Output to File

```bash
# Save full response
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc" > meteoblue_response.json

# View with less
less meteoblue_response.json

# Search for specific field
grep -i "uvindex" meteoblue_response.json
```

---

## Compare UV Values at Different Times

Run this command at different times of day to see how UV changes:

```bash
# Morning (8 AM)
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&tz=utc" | jq '{current_time: .data_1h.time[8], uv: .data_1h.uvindex[8]}'

# Noon (12 PM)
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&tz=utc" | jq '{current_time: .data_1h.time[12], uv: .data_1h.uvindex[12]}'
```

---

## Check for Decimal vs Integer UV

```bash
# Check if Meteoblue returns decimals or integers
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&tz=utc" | jq '.data_1h.uvindex | map(type)'
```

Should return:
```json
["number", "number", "number", ...]
```

To see actual values:
```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&tz=utc" | jq '.data_1h.uvindex[0:24]'
```

---

## Test Error Handling

### Invalid API Key:

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=INVALID&format=json"
```

Should return HTTP 401 or error message.

### Invalid Coordinates:

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=999&lon=999&apikey=YOUR_API_KEY&format=json"
```

### Rate Limiting Test:

```bash
# Run 10 requests quickly
for i in {1..10}; do
  curl "https://my.meteoblue.com/packages/current?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json"
  echo "Request $i completed"
done
```

If rate limited, you'll see HTTP 429.

---

## Advanced: Compare All Weather Attributes

```bash
curl "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json&temperature=C&windspeed=ms-1&tz=utc" | jq '{
  time: .data_1h.time[8],
  temperature: .data_1h.temperature[8],
  humidity: .data_1h.relativehumidity[8],
  pressure: .data_1h.sealevelpressure[8],
  windspeed: .data_1h.windspeed[8],
  winddirection: .data_1h.winddirection[8],
  felttemperature: .data_1h.felttemperature[8],
  uvindex: .data_1h.uvindex[8],
  precipitation: .data_1h.precipitation[8],
  precipitation_probability: .data_1h.precipitation_probability[8]
}'
```

Output example:
```json
{
  "time": "2025-12-10 08:00",
  "temperature": 18.3,
  "humidity": 65,
  "pressure": 1017.43,
  "windspeed": 8.86,
  "winddirection": 153,
  "felttemperature": 17.1,
  "uvindex": 5,
  "precipitation": 0,
  "precipitation_probability": 0
}
```

---

## One-Liner for Quick Check

```bash
# Replace with your values
API_KEY="YOUR_API_KEY"
LAT="-33.809"
LON="18.667"

curl "https://my.meteoblue.com/packages/basic-1h?lat=$LAT&lon=$LON&apikey=$API_KEY&format=json&tz=utc" | jq '{time: .data_1h.time[0:12], uv: .data_1h.uvindex[0:12]}'
```

---

## Troubleshooting

### No `jq` installed?

Install it:
```bash
# Ubuntu/Debian
apt-get install jq

# macOS
brew install jq

# Or use Python instead:
curl "..." | python3 -m json.tool
```

### Connection timeout?

Add timeout:
```bash
curl --max-time 30 "https://my.meteoblue.com/packages/basic-1h?..."
```

### See HTTP headers:

```bash
curl -I "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY"
```

### Verbose output:

```bash
curl -v "https://my.meteoblue.com/packages/basic-1h?lat=-33.809&lon=18.667&apikey=YOUR_API_KEY&format=json"
```

---

## Quick Reference

### Get your coordinates:
```bash
echo "{{ state_attr('zone.home', 'latitude') }}" | ha-cli template
echo "{{ state_attr('zone.home', 'longitude') }}" | ha-cli template
```

### Test current weather:
```bash
curl "https://my.meteoblue.com/packages/current?lat=YOUR_LAT&lon=YOUR_LON&apikey=YOUR_KEY&format=json"
```

### Check UV right now:
```bash
HOUR=$(date +%-H)
curl "https://my.meteoblue.com/packages/basic-1h?lat=YOUR_LAT&lon=YOUR_LON&apikey=YOUR_KEY&format=json&tz=utc" | jq ".data_1h.uvindex[$HOUR]"
```

---

## Expected Response Structure

```json
{
  "metadata": {
    "name": "Location Name",
    "latitude": -33.809,
    "longitude": 18.667,
    "height": 50,
    "timezone_abbrevation": "UTC",
    "utc_timeoffset": 0.0,
    "modelrun_utc": "2025-12-10 06:00",
    "modelrun_updatetime_utc": "2025-12-10 07:22"
  },
  "units": {
    "time": "YYYY-MM-DD hh:mm",
    "temperature": "C",
    "windspeed": "ms-1",
    "winddirection": "degree",
    "precipitation": "mm"
  },
  "data_1h": {
    "time": ["2025-12-10 00:00", "2025-12-10 01:00", ...],
    "temperature": [15.2, 14.8, ...],
    "uvindex": [0, 0, 0, 0, 0, 1, 2, 4, 5, 7, 8, ...],
    "...": "..."
  }
}
```

---

## Security Warning

⚠️ **Never share your API key publicly!**

- Don't commit to git
- Don't post in forums
- Don't include in screenshots
- Store in secrets.yaml or environment variables

---

**Last Updated**: December 10, 2025
**Integration Version**: 1.1
**Meteoblue API Documentation**: https://docs.meteoblue.com/