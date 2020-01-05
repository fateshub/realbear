var tl = gsap.timeline();

//tl.fromTo(".smile", { x: -400, ease: " bounce.in" }, { duration: 1, x: 100 });





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
        tl.fromTo(".smile", { y: -200 }, { duration: 2, delay: 10, ease: "bounce.out", y: 1180 });
        tl.to(".smile", { duration: 3, ease: " circ.in", x: 200 });
        tl.restart();
    }

    console.log(`${tags['display-name']}: ${message}`);

});

client.on("cheer", (channel, userstate, message) => {

    if (userstate.bits == 10) {
        tl.fromTo(".smile", { y: -200 }, { duration: 2, delay: 10, ease: "bounce.out", y: 1180 });
        tl.to(".smile", { duration: 3, ease: " circ.in", x: 200 });
        tl.restart();
    }
});