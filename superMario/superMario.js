var stopMario = document.querySelector(".stop");
var runMario = document.querySelector(".run");
var pozadina = document.querySelector(".pozadina");

document.onkeydown = run;
document.onkeyup = stop;

var index = 0;

var moving = function () {
    index -= 20;
    pozadina.style = "background-position-x: " + index + "px";
};

function run(x) {
    if (x.keyCode == '39') {
        stopMario.style = "z-index: -1";
        runMario.style = "z-index: 1";
        setInterval (moving(),500);
    }
}

function stop(x) {
    if (x.keyCode == "39") {
        stopMario.style = "z-index: 1";
        runMario.style = "z-index: -1";
        clearInterval(moving);
    }
}