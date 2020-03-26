

const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: ['drfate']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
    document.getElementById("player").src = message +"?autoplay=1";
    console.log(`${tags['display-name']}: ${message}`);

});
		
