var count = 0;

const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: ['scrubing']
});

client.connect();

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
	count++;
	document.getElementById("hah").innerHTML = count;
	document.getElementById("non").innerHTML = username;

});


client.on("raw_message", (messageCloned, message) => {
    console.log(message.raw);
});
