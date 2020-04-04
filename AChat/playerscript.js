

ComfyJS.Init( "scrubing" );
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
	console.log( user, message );
	document.getElementById("text").innerText = message;
	document.getElementById("user").innerText = user;

	console.log( extra.messageEmotes );
	animation("buble","jackInTheBox");
	animation("text","jackInTheBox");
	animation("user","jackInTheBox");
    Actext()
	window.fitText( document.getElementById("text"), 1.8 );
	window.fitText( document.getElementById("user"), 0.8 );

	var emote = JSON.stringify(extra.messageEmotes).split(":");
	if(extra.messageEmotes){
			document.getElementById("emotes").src = "https://static-cdn.jtvnw.net/emoticons/v1/"+emote[0].replace(/[^0-9 ]/g, "")+"/3.0";
			animation("emotes",'tada');
		} 
  }

  function animation(parameter1, parameter2) {
	var buble = document.getElementById(parameter1);
	buble.classList.add('animated',parameter2);
	buble.addEventListener("animationend", function(){
	buble.classList.remove('animated',parameter2)
	});
  } 

  function dataURItoBlob(dataURI) {
	// convert base64/URLEncoded data component to raw binary data held in a string
	var byteString;
	if (dataURI.split(',')[0].indexOf('base64') >= 0)
	  byteString = atob(dataURI.split(',')[1]);
	else
	  byteString = unescape(dataURI.split(',')[1]);
  
	// separate out the mime component
	var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  
	// write the bytes of the string to a typed array
	var ia = new Uint8Array(byteString.length);
	for (var i = 0; i < byteString.length; i++) {
	  ia[i] = byteString.charCodeAt(i);
	}
  
	return new Blob([ia], {type:mimeString});
  }
  
  var synth = new Animalese('animalese.wav', function() {
  });
  
  function Actext() { 
  var audio = new Audio();
  audio.src = synth.Animalese(document.getElementById("text").innerText, true).dataURI;
  audio.play();
  }