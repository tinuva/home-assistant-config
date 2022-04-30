
# Tinuva's Home Assistant config files

![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE.md)

[![GitHub Actions][actions-shield]][actions]
[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

![GitHub Stars][stars-shield]
![GitHub Watchers][watchers-shield]
![GitHub Forks][forks-shield]

## About

This is my personal Home Assistant configuration, running my home automations.

Follow me on my journey and be sure to hit the GitHub :star2:

## Noteworthy (useful) automations
* [Bahtroom Light/Fan](packages/bathroom_humidity.yaml) that uses the Xiaomi Aqara humidity sensors to automatically turn the fan on/off during day time
* [Camera Slack Notification](packages/camera_notifications.yaml)

## My devices

### Cameras
* [EZVIZ C3W / ezGuard 1080p](https://www.amazon.com/gp/product/B079D8CTWJ?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B079D8CTWJ)

### Switches
* [Shelly 1](https://www.amazon.com/gp/product/B07G33LNDY?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B07G33LNDY)
* [Shelly Dimmer](https://www.amazon.com/gp/product/B07XRY1K7V?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B07XRY1K7V)
* [Sonoff T2](https://www.amazon.com/gp/product/B07CN1GND2?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B07CN1GND2)

### Alarm System
* [Envisalink 4](https://www.amazon.com/gp/product/B016WQTJ4S?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B016WQTJ4S) with [DSC PC1864](https://www.amazon.com/gp/product/B01IWQIRJO?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B01IWQIRJO) alarm system for motion + door/window states

### Vacuum
* [Xiaomi Mi Vacuum](https://www.amazon.com/gp/product/B01MU4WAUI?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B01MU4WAUI)

### Server
* [Minnowboard Turbot](https://www.amazon.com/gp/product/B01N0HB0OU?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B01N0HB0OU) with Intel Atom E3826 dual core CPU
* [120GB Western Digital Green SSD](https://www.amazon.com/gp/product/B078WYRR9S?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B078WYRR9S)

### Device tracker
* Android phones with the new iOS app (2x)

### Other
* [SureFlap Connect Door](https://www.amazon.com/gp/product/B071PDLN8L?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B071PDLN8L) with [Hub](https://www.amazon.com/gp/product/B072JFR3KH?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B072JFR3KH) (required)
* [Amazon Echo v1](https://www.amazon.com/gp/product/B00X4WHP5E?ie=UTF8&tag=linuxgeekza-20&camp=1789&linkCode=xm2&creativeASIN=B00X4WHP5E)

### Zigbee
* Gateway:
  * Current gateway: [Xiaomi Aqara Gateway](https://www.banggood.com/Original-Xiaomi-Mi-Smart-WiFi-Remote-Control-Multi-functional-Gateway-p-1045072.html?p=DX050122090268201806&custlinkid=1189776)
  * Future gateway will be a [Sonoff ZBBridge](https://www.banggood.com/SONOFF-ZBBridge-Smart-Bridge-Zigbee3_0-APP-Wireless-Remote-Controller-Smart-Home-Bridge-Works-With-Alexa-Google-Home-p-1674754.html?p=DX050122090268201806&custlinkid=1222453) 
    * See Tasmota progress [here](https://github.com/arendst/Tasmota/issues/8583)
* Router/Repeater:
  * * [Sonoff Basic ZBR3](https://www.banggood.com/SONOFF-BASICZBR3-Zig-Bee-DIY-Smart-Switch-Controlled-Via-SmartThing-APP-Works-With-SmartThings-Hub-Alexa-p-1593931.html?p=DX050122090268201806&custlinkid=1222451) 
* Devices:
  * [Xiaomi Aqara Temperature Sensor](https://www.banggood.com/XIAOMI-Portable-Real-time-High-Accuracy-Temperature-Humidity-Intelligent-Sensor-Control-Smart-Detector-Auto-Alarm-Monitoring-Home-Office-Thermometer-Measurer-p-1632931.html?p=DX050122090268201806&custlinkid=1189773) (6x)
  * [Aqara wireless button/switch](https://www.banggood.com/Original-Aqara-ZigBee-Wireless-Smart-Switch-Upgrade-Version-Smart-Home-Remote-Controller-Button-From-Xiaomi-Mijia-Eco-System-p-1478531.html?p=DX050122090268201806&custlinkid=1222446)
  This acts as a button you can press to trigger anything you want in Home Assistant
  * [Sonoff Zigbee door/windows sensor](https://www.banggood.com/Original-Aqara-ZigBee-Version-Window-Door-Sensor-Smart-Home-Kit-Remote-Alarm-Xiaomi-Eco-System-p-1149705.html?p=DX050122090268201806&custlinkid=1222463) for indoors doors not on the Alarm system
  * [Xiaomi Mi Light Detection Smart Sensor](https://www.takealot.com/xiaomi-mi-light-detection-smart-sensor/PLID72760298?gclsrc=aw.ds)

## Contributing

I consider my personal Home Assistant configuration an active open-source project.
So if you feel like adding an improvement, feel free to contribute.

Thank you for being involved! :heart_eyes:

## Authors & contributors

The original setup of this repository is by [David Bezuidenhout][tinuva].

## License

MIT License

Copyright (c) 2018-2022 Franck Nijhof

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[commits-shield]: https://img.shields.io/github/commit-activity/y/tinuva/home-assistant-config.svg
[commits]: https://github.com/tinuva/home-assistant-config/commits/master
[contributors]: https://github.com/tinuva/home-assistant-config/graphs/contributors
[frenck]: https://github.com/frenck
[actions-shield]: https://github.com/tinuva/home-assistant-config/workflows/Home%20Assistant%20CI/badge.svg
[actions]: https://github.com/tinuva/home-assistant-config/actions
[home-assistant]: https://home-assistant.io
[issue]: https://github.com/tinuva/home-assistant-config/issues
[license-shield]: https://img.shields.io/github/license/tinuva/home-assistant-config.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2022.svg
[last-commit-shield]: https://img.shields.io/github/last-commit/tinuva/home-assistant-config.svg
[stars-shield]: https://img.shields.io/github/stars/tinuva/home-assistant-config.svg?style=social&label=Stars
[forks-shield]: https://img.shields.io/github/forks/tinuva/home-assistant-config.svg?style=social&label=Forks
[watchers-shield]: https://img.shields.io/github/watchers/tinuva/home-assistant-config.svg?style=social&label=Watchers