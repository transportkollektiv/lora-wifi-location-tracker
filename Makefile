clean:
	pio run -t clean

prepare:
	pio lib install
	pio platform install -f espressif8266@^2 --with-package framework-arduinoespressif8266

patch:
	patch ~/.platformio/packages/framework-arduinoespressif8266/libraries/ESP8266WiFi/src/ESP8266WiFiScan.cpp ESP8266WiFiScan.patch

build: prepare patch
	pio run