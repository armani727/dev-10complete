// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables (once)
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";

let explosion = document.createElement("audio");
explosion.src = "sound/explosion.wav"

let propeller = document.createElement("audio");
propeller.src = "sound/propeller.wav"

let mouseispressed = false;
let best = 0;


// global variables (reset)
let wallspeed;
let wallaccel;
let distance;
let state;
let heli;
let wall1, wall2, wall3;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    rungame();
  } else if (state === "gameover") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// event stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseuphander);

function mousedownHandler() {
  mouseispressed = true;

  // play propeller sound
  propeller.currentTime = 0;
  propeller.play();

  // start game on mousedown
  if (state === "start") {
    state = "gameon";
  }
}

function mouseuphander() {
  mouseispressed = false;
  propeller.pause();
}