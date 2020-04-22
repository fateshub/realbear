
var list = [];
var users = ["drfate", "dib760"]
var slider = document.getElementById("myRange");
var app = new Vue({
    el: '#app',
    data: {
      queu: list,
      users: users
    }
  })

  
var i =0;


function remeve(){
  if(list.length > 1){
    list.shift();
    player.loadVideoById(list[0]);
  }
    else if(list.length <= 1 ){
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
  function playVideo() {
    player.playVideo();
  }


  ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if(flags.highlighted){    
    var video_id = message.split('v=')[1];
var ampersandPosition = video_id.indexOf('&');
if(ampersandPosition != -1) {
  video_id = video_id.substring(0, ampersandPosition);
}
    list.push(video_id);
    if(list.length <= 1){
      startP();
      console.log("haha");
    }
  }

}
ComfyJS.Init( "scrubing" );

