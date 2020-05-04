var tl = gsap.timeline();
var audio = new Audio("laugh.mp3");
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  if ((flags.broadcaster || flags.mod) && command === "kirby") {
    tl.to("#kirby", {
      x: -window.innerWidth,
      rotation: -360,
      duration: 6,
      ease: "elastic",
    });
    tl.to("#kirby", {
      x: -window.innerWidth,
    }).call(playSound);
    tl.to("#kirby", {
      x: window.innerWidth,
      duration: 0,
      rotation: 360,
      delay: 5,
    });
  }
};
ComfyJS.Init("buffdaddy");
function playSound() {
  audio.play();
}
