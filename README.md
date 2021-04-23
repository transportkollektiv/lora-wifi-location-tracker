# Lora Wifi Location Tracker

This is a ESP8266 and RFM96 based for low power geolocation tracker. It uses wifi networks for location discovery instead of GPS. Accuracy is not as good as GPS and locations can only be calculated if there is any nearby wifi networks. For location calculation a wifi geolocate service like [mozilla](https://location.services.mozilla.com/) or [google](https://developers.google.com/maps/documentation/geolocation/intro) is needed.
The location is not calculated on the device. The small data for calculating the location is send out via LoRaWAN and can then calculated on server. You can use [cycle-ttn-wifi](https://github.com/stadtulm/cykel-ttn-wifi) as location calculation bridge.

## Hardware

You can find .brd and .sch files (created in eagle) and the ready to use gerber files for the *lortinchen*-PCB in the `hardware` folder. More info in [`README.md`](./hardware/README.md) in the hardware folder.
The board can be power by two AA batteries.

## Firmware configuration

For LoRaWAN configuration rename `config.sample.h` to `config.h` and fill the file with your LoRaWAN device config. Development, configuration, building and flashing can all be done in [PlatformIO](https://platformio.org/).
To make the wifi scan more effective, we currently have to patch `ESP8266WiFiScan`. Call `make patch` to modify the file in your platformio framework-arduinoespressif8266 - or look into the `ESP8266WiFiScan.patch` if you want to make the changes yourself.
More on physically flashing firmware at `hardware/README.md`.

## TTN decoder script

The [TTN](https://www.thethingsnetwork.org/) payload decoder script can be found in [`ttn-decoder-script.js`](./ttn-decoder-script.js) for TTN Stack V2 or in [`ttnv3-decoder-script.js`](./ttnv3-decoder-script.js) if you are using TTN Stack V3.

## Improve coverage

You can improve [coverage of mozillas location service](https://location.services.mozilla.com/map) using the [mozilla stumbler app](https://play.google.com/store/apps/details?id=org.mozilla.mozstumbler) for android or by [activating location data collection in firefox for android](https://support.mozilla.org/en-US/kb/improve-mozilla-location-services-turning-location).