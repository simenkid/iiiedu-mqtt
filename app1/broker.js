var mosca = require('mosca');

var broker = new mosca.Server({
    port: 1883,
    persistence: {
        factory: mosca.persistence.LevelUp,
        path: './persist'
    }
});

broker.on('ready', function () {
    console.log('Mosca server is up and running');
});

// fired when a client connects
broker.on('clientConnected', function(client) {
    console.log('Client Connected:', client.id);
});

// fired when a client disconnects
broker.on('clientDisconnected', function(client) {
    console.log('Client Disconnected:', client.id);
});

// fired when a message is published
broker.on('published', function(packet, client) {
    // console.log('Published', packet);
    // console.log('Client', client.id);
});