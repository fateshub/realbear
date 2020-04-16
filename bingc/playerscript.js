
//lmfao
const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: [ 'drfate' ]
});
var count = [];
var prev;
client.connect();

client.on('message', (channel, tags, message, self) => {
	if(tags.username === 'drfate' && message.toLowerCase() === '!hello') {
	console.log(`${tags['display-name']}: ${message}`);
	count.push(message);
	console.log(count);
	}
  }	)

  function animation(parameter1, parameter2) {
	var buble = document.getElementById(parameter1);
	buble.classList.add('animated',parameter2);
	buble.addEventListener("animationend", function(){
	buble.classList.remove('animated',parameter2)
	});
  } 
  
  setInterval(alert,20000);

  function alert() {
	if(count.length == 1){
	var audio = new Audio('sound.mp3');
    audio.play();
	var wave = anime({
		targets:  ['#wave','#waveb'],
		bottom: '0px',
		duration: 2000,
		easing: 'easeOutExpo'
	  });
	animation("wave","shake");
	animation("waveb","shake");
	var bingc = anime({
		targets:  '#bingc',
		left: '-400px',
		duration: 20000,
		easing: 'linear',
		begin: function(anim) {

		},
		complete: function(anim) {
			console.log("cunt");
			anime({
				targets:  ['#wave','#waveb'],
				bottom: '-230px',
				duration: 2000,
				easing: 'easeOutExpo',
				
			  });
			  anime({
				targets:  '#bingc',
				left: '1400px',
				duration: 1,
				easing: 'linear'
			});
			count.pop(0);

		}
	  });
	}
  }
  
  