var mqtt = require('mqtt');
var client1  = mqtt.connect('mqtt://localhost', { clientId: "test1" });
 
client1.on('connect', function () {
  client1.subscribe('presence')
  client1.publish('presence', 'Hello mqtt')
});
 
client1.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
});

//client1.subscribe({ 'home/bedroom/light': 0 });

