var tl = gsap.timeline();


const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: ['scrubing']
});

client.connect();

function finger() {
    tl.to(".finger", { duration: 4, ease: "circ.in", x: 200 }, );
    tl.to(".finger", { delay: 5, duration: 4, ease: "circ.out", x: -200 }, );
    tl.restart();
    tl.remove();
    return;
}


client.on('message', (channel, tags, message, self) => {
    console.log(`${tags['display-name']}: ${message}`);
    if (message == "bingFinger") {
        finger();
        return;
    } else if (message == "!stop" && tags['display-name'] == "DrFate") {
        tl.remove();
        tl.restart();
        return;
    }

});