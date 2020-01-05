var tl = gsap.timeline();


var sound = new Howl({
    src: ['Party.mp3'],
    volume: 0.5
});

const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: ['scrubing']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (message == 'bingSmile' && tags['display-name'] == 'DrFate') {
        tl.restart();
        tl.fromTo(".smile", { y: -200 }, { duration: 2, delay: 1, ease: "bounce.out", y: 1180 });
        tl.to(".smile", { duration: 3, ease: " circ.in", x: 200 });
    } else if (message == 'bingC' && tags['display-name'] == 'DrFate') {
        tl.restart();
        sound.play();
        tl.to(".bus", { duration: 15, repeat: 5, ease: " circ.in", x: -3000 });
        sound.stop();
    }

    console.log(`${tags['display-name']}: ${message}`);

});

client.on("cheer", (channel, userstate, message) => {

    if (userstate.bits >= 10 && userstate.bits != 5000) {
        tl.restart();
        tl.fromTo(".smile", { y: -200 }, { duration: 2, delay: 1, ease: "bounce.out", y: 1180 });
        tl.to(".smile", { duration: 3, ease: " circ.in", x: 200 });
    } else if (userstate.bits == 5000) {
        tl.restart();
        sound.play();
        tl.to(".bus", { duration: 15, repeat: 5, ease: " circ.in", x: -3000 });
        sound.play();
    }
});