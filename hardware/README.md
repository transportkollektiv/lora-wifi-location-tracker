# Lortinchen

Lortinchen is a small PCB combining an ESP8266 with an RFM96 for Lora Communication. We use this as an Wifi location tracker in our OpenBike project to track our Bikes.

## Parts

### Required

 * ESP8266 Modules (ESP-12E or ESP-12F with on board PCB antenna or ESP-07 or ESP-07S for external antennas)
 * RFM96
 * 5x 10K 0603 resistors
 * 1x 100uF 107A capacitor

### Optional

 * 2x 1K 0603 resistors (for serial connection and flashing after soldering)
 * 2x SMD 2Pin 3X4 mm tactile buttons (for easy flashing and resetting after soldering)
 * 1x AMS111733 LDO (only if power supply is more than 3,3V, but will consume more power)
 * 1x 680K(?) and 1x 100K(?) 0603 resistor (for voltage devider, currently not suppported by firmware, will drain battery, only usefull in combination with AMS111733 or when 3V and 12V supply is bridged)