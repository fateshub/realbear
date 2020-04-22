
var list = [];
var videos = []
var request = new XMLHttpRequest();
var slider = document.getElementById("myRange");
var app = new Vue({
    el: '#app',
    data: {
      queu: videos,
      users: users
    }
  })

  
var i =0;


function remeve(){
  if(list.length > 1){
    list.shift();
    videos.shift();
    player.loadVideoById(list[0]);
  }
    else if(list.length <= 1 ){
    stopVideo();
    list.shift();
    videos.shift();
    }
    else{
      player.loadVideoById(list[0]);
      list.shift();
      videos.shift();
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
      playerVars: { 'autoplay': 1, 'controls': 0 },
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  

   function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      list.shift();
      videos.shift();
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
    videoname(video_id); 
    if(list.length <= 1){
      startP();
      console.log("haha");
    }
  }

}
ComfyJS.Init( "scrubing" );

function input() {
users.push(input)  ;
console.log(users);

}



function videoname(vid ){
 request.open('GET', "https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + vid, true);
  request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data.title)
    videos.push(data.title);
  }
  
  // Send request
  request.send()
}
