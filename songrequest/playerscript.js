
var list=[];
var requester=["drfate"];
const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: ['scrubing']
});

client.connect();
client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
requeste.push(username);
});

client.on('message', (channel, tags, message, self) => {
		console.log(`${tags['display-name']}: ${message}`);
		for (let i = 0, l = requester.length; i < l; i += 1) {	
	    if(tags['username']== requester[i]){
		var res = message.substring(message.length - 11, message.length);
		list.push(res);
		document.getElementById("counter").innerText = list;
		requester.pop(i)
		}
	}
	});

function myFunction() {
			document.getElementById("counter").innerText = list;
			document.getElementById("player").src = "https://www.youtube.com/embed/"+list+"?autoplay=1";
			list.pop(1)		
		}