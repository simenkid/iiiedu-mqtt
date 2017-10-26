var Board = require('firmata');

var board = new Board("/dev/ttyS0"),
    pinLed = 4, // D4
    pinLux = 0; // A0

var ledStatus = board.pins[pinLed].value,
    luxValue = board.pins[board.analogPins[lightPin]].value;

// board.digitalWrite()
// board.analogRead()

board.pinMode(pinLed, board.MODES.OUTPUT);
board.pinMode(pinLux, board.MODES.ANALOG);

var Board = require("firmata");
var board = new Board("/dev/ttyS0");

board.on("ready", () => {
  // Arduino is ready to communicate
});


var sensorObj = require('jsupm_sht1x');

// Instantiate a SHT1X sensor using D2 as the clock, and D3 as the
// data pin.
var sensor = new sensorObj.SHT1X(2, 3);

// Every 2 seconds, update and print values
setInterval(function() {
    sensor.update();

    console.log("Temperature: " + sensor.getTemperature() + " C");
    console.log("Humidity:    " + sensor.getHumidity() + " RH");
}, 2000);



// Load UPM module
var upm = require('jsupm_relay');

// Create the relay switch object using GPIO pin 0
var relay = new upm.Relay(0);

var i = 0;
var waiting = setInterval(function() {
    if (i % 2 == 0) {
        relay.on();
        if (relay.isOn())
            console.log(relay.name() + " is on");
    } else {
        relay.off();
        if (relay.isOff())
            console.log(relay.name() + " is off");
    }
    i++;
    if (i == 6) clearInterval(waiting);
}, 1000);