var audio = new Audio("src/sound/bird.mp3");

document.getElementById("logo").addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

var elm = document.getElementById("active");
var counter = 0;

function random() {
    return Math.round((Math.random(1, 256) * 256) % 256);
}

function randomColor() {
    return "rgb(" + random() + ", " + random() + ", " + random() + ")";
}

elm.addEventListener("click", () => {
    console.log(random());
    document.getElementById("act-leaf").style.fill = randomColor();
});
