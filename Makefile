clean:
	pio run -t clean

prepare:
	pio lib install
	pio platform install -f espressif8266@^2 --with-package framework-arduinoespressif8266

build: prepare
	pio run