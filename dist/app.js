var tl = gsap.timeline({ repeat: Infinity, repeatDelay: 600 });

//tl.fromTo(".smile", { x: -400, ease: " bounce.in" }, { duration: 1, x: 100 });
tl.fromTo(".smile", { y: -200 }, { duration: 2, delay: 10, ease: "bounce.out", y: 980 });
tl.to(".smile", { duration: 3, ease: " circ.in", x: 200 });




const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: ['scrubing']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // "Alca: Hello, World!"
    console.log(`${tags['display-name']}: ${message}`);
});