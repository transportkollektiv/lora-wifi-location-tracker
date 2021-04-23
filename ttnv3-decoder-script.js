function decodeUplink(input) {

    var payloadVersion = null;

    if (input.bytes.length % 6 === 0) {
        payloadVersion = 1;
    } else {
        payloadVersion = input.bytes[0];
    }


    var wifiStartByte = null;
    switch (payloadVersion) {
        case 1:
            wifiStartByte = 0;
            break;
        case 2:
            wifiStartByte = 2;
            break;
    }

    var devices = [];
    for (var i = 0; i * 6 + wifiStartByte < input.bytes.length; i++) {
        addrbytes = input.bytes.slice(i * 6 + wifiStartByte, i * 6 + 6 + wifiStartByte);
        var addrArray = [];
        for (var j = 0; j < 6; j++) {
            var str = addrbytes[j].toString(16);
            if (str.length == 1) {
                str = '0' + str;
            }
            addrArray.push(str);
        }
        devices.push({
            macAddress: addrArray.join(":")
        });
    }

    var decoded = {
        "wifiAccessPoints": devices,
        "fallbacks": {
            "lacf": false,
            "ipf": false
        }
    };

    var voltage = null;
    if (payloadVersion > 1) {
        var value = parseInt(input.bytes[1], 10);
        voltage = ((value / 1024 * 4) * 7.8).toFixed(2);
    }

    var resultData = {
        data: JSON.stringify(decoded),
        payloadVersion: payloadVersion
    };
    if (voltage) {
        resultData.voltage = voltage;
    }
    return {
        data: resultData
    };
}