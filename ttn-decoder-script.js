function Decoder(bytes, port) {
  // Decode an uplink message from a buffer
  // (array) of bytes to an object of fields.
  
  var devices = []
  for (var i = 0; i*6 < bytes.length; i++){
    addrbytes = bytes.slice(i*6,i*6+6);
    var addrArray = []
    for(var j=0; j < 6; j++) {
      var str = addrbytes[j].toString(16)
      if (str.length == 1){
        str = '0' + str
      }
      addrArray.push(str)
    }
    devices.push({
      macAddress: addrArray.join(":")
    })
  }
  var decoded = {
    "wifiAccessPoints": devices,
    "fallbacks": {
        "lacf": false,
        "ipf": false
    }
  };
  
  return {data: JSON.stringify(decoded)};
}