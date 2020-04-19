var app = new Vue({
    el: '#app',
    data: {
      message: 'Welcome To The Furry Pirates '
    }
  })

  var bing = document.getElementById("bingc");
  var wave = document.getElementById("wave");
  var waveb = document.getElementById("waveb");
  var audio = new Audio('sound.mp3');
  var tl = gsap.timeline();



  ComfyJS.onSub = ( user, message, subTierInfo, extra  ) => {
    console.log( user, message );
    tl.to('h1',{ duration: 3,  ease: "bounce. in" ,y: 300}).call(playSound);
    tl.to(wave,{ duration: 1, y: -200,  ease: "bounce. out"});
  tl.to(waveb,{ duration: 1, y: -200,  ease: "bounce. out"});
  tl.to(bing,{ duration: 16, x: -1808,ease: " expo. out"}, ">");
  tl.to(bing,{ duration: 0, x: 1408}, ">");
  tl.to(wave,{ duration: 1, y: 400});
  tl.to(waveb,{ duration: 1, y: 400});
  tl.to('h1',{ duration: 2, y: -300});

  }
  
    ComfyJS.onResub = ( user, message, streamMonths, cumulativeMonths, subTierInfo, extra) => {
    console.log( user, message );
    tl.to('h1',{ duration: 3,  ease: "bounce. in" ,y: 300}).call(playSound);
    tl.to(wave,{ duration: 1, y: -200,  ease: "bounce. out"});
  tl.to(waveb,{ duration: 1, y: -200,  ease: "bounce. out"});
  tl.to(bing,{ duration: 16, x: -1808,ease: " expo. out"}, ">");
  tl.to(bing,{ duration: 0, x: 1408}, ">");
  tl.to(wave,{ duration: 1, y: 400});
  tl.to(waveb,{ duration: 1, y: 400});
  tl.to('h1',{ duration: 2, y: -300});

  }

    ComfyJS.onSubGift = ( gifterUser, streakMonths, recipientUser, senderCount, subTierInfo, extra ) => {
    tl.to('h1',{ duration: 3,  ease: "bounce. in" ,y: 300}).call(playSound);
    tl.to(wave,{ duration: 1, y: -200,  ease: "bounce. out"});
  tl.to(waveb,{ duration: 1, y: -200,  ease: "bounce. out"});
  tl.to(bing,{ duration: 16, x: -1808,ease: " expo. out"}, ">");
  tl.to(bing,{ duration: 0, x: 1408}, ">");
  tl.to(wave,{ duration: 1, y: 400});
  tl.to(waveb,{ duration: 1, y: 400});
  tl.to('h1',{ duration: 2, y: -300});

}
   
  ComfyJS.onChat = ( user, message, flags, self, extra  ) => {
    console.log( user, message );
    if(user.toLowerCase() == "drfate" && message === "testing"){
    tl.to('h1',{ duration: 3,  ease: "bounce. in" ,y: 300}).call(playSound);
    tl.to(wave,{ duration: 1, y: -200,  ease: "bounce. out"});
  tl.to(waveb,{ duration: 1, y: -200,  ease: "bounce. out"});
  tl.to(bing,{ duration: 16, x: -1808,ease: " expo. out"}, ">");
  tl.to(bing,{ duration: 0, x: 1408}, ">");
  tl.to(wave,{ duration: 1, y: 400});
  tl.to(waveb,{ duration: 1, y: 400});
  tl.to('h1',{ duration: 2, y: -300});

  }
} 
    
ComfyJS.Init( "scrubing" );


function playSound(){
  audio.play();  
}
