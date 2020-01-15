# Lora Wifi Location Tracker

This is a ESP8266 and RFM96 based for low power geolocation tracker. It uses wifi networks for location discovery instead of GPS. Accuracy is not as good as GPS and locations can only calculated if there is any nearby wifi networks. For location calculation a wifi geolocate service like [mozilla](https://location.services.mozilla.com/) or [google](https://developers.google.com/maps/documentation/geolocation/intro) is needet.
The location is not calculated on the device. The small data for calculating the location is send out via LoraWAN and can then calculated on server. You can use [cycle-ttn-wifi](https://github.com/stadtulm/cykel-ttn-wifi) as location calculation bridge.

## Hardware

You can find .brd and .sch files (created in eagle) and the ready to use gerber files for the *lortinchen*-PCB in the `hardware` folder. More info in `README.md` in the hardware folder.

## Firmware configuration

For LoraWAN configuration rename `config.sample.h` to `config.h` and fill the file with your LoraWAN device config. Development, configuration, building and flashing can all be done in [PlatformIO](https://platformio.org/). Flashing firmaware to the ESP can easily be done, before soldering to the PCB with a test board fixture programmer. More on this in `hardware/README.md`.

## TTN decoder script

## Improve coverage

You can improve [coverage of mozillas location service](https://location.services.mozilla.com/map) using the [mozilla stumbler app](https://play.google.com/store/apps/details?id=org.mozilla.mozstumbler) for android or [activate location data collection in firefox for android](https://support.mozilla.org/en-US/kb/improve-mozilla-location-services-turning-location).