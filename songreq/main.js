
var list = [];
var slider = document.getElementById("myRange");
var app = new Vue({
    el: '#app',
    data: {
      message: 'Welcome To The Furry Pirates ',
      queu: list
    }
  })

  
var i =0;


function remeve(){
  if(list.length > 1){
    list.shift();
    player.loadVideoById(list[0]);
  }
    else if(list.length == 1 && player.data == YT.PlayerState.PLAYING ){
    stopVideo();
    list.shift();
    }
    else{
      player.loadVideoById(list[0]);
      list.shift();
    }
  }

  

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  

   function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      list.shift();
      player.loadVideoById(list[0]);
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

  function pauseVideo() {
    player.pauseVideo();
  }
   async function startP(){
    player.loadVideoById(list[0]);
  }

  slider.oninput = function() {
    player.setVolume(this.value);
    
  } 

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( (flags.broadcaster  || user.toLowerCase() == "dib760") && command === "sr" ) {
    
    var video_id = message.split('v=')[1];
var ampersandPosition = video_id.indexOf('&');
if(ampersandPosition != -1) {
  video_id = video_id.substring(0, ampersandPosition);
}
    list.push(video_id);
  }
}
ComfyJS.Init( "drfate" );
