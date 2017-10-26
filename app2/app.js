var m = require('mraa'),
    SerialPort = require('serialport').SerialPort;

var sp = new SerialPort('/dev/ttyS0', { baudrate: 57600 }),
    myLed = new m.Gpio(44),
    ledState = true;

sp.on('open', function () {
    sp.on('data', function (data) {
        inArduinoData = parseInt('0x' + data.toString('hex', 16));

        if (inArduinoData > 200) {
            myLed.write(0);
        } else {
            setTimeout(function () {
                
            });
        }
    });
});