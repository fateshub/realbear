

ComfyJS.Init( "scrubing" );
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
	console.log( user, message );
	console.log( extra.messageEmotes );
	var emote = JSON.stringify(extra.messageEmotes).split(":");
	if(flags.highlighted){
	if(extra.messageEmotes){
			document.getElementById("emotes").src = "https://static-cdn.jtvnw.net/emoticons/v1/"+emote[0].replace(/[^0-9 ]/g, "")+"/3.0";
			var emoteanim = document.getElementById("emotes");
			emoteanim.classList.add('animated','tada');
			emoteanim.addEventListener("animationend", function(){
				emoteanim.classList.remove('animated','tada')
			});
			

		} 
	}
  }


