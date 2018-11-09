var time = 0;
var yPos = 0;
var xPos = 0;
var bG = 0;
var bGTime = 0;
var radius = 30;
var fillShape = 0;

const frameMax = 570;
let recording = false;
let gifRecorder = null;

function setup() {
  createCanvas(960, 480);
  angleMode(DEGREES);
}

function mousePressed() {
  if(recording == false) {
    recording = true;
    gifRecorder = new p5recorder(frameMax, "wallpaper.gif");
  }
}

function draw() {

  background(0, 0, 0, 75);

  let cur_frame = frameCount % frameMax;
  let cur_frac = map(cur_frame, 0, frameMax, 0, 1);

  noStroke();

  for(var i = 0; i < 20; i++){
    xPos = map(sin(time+20*i), -1, 1, 100, 800);
    yPos = map(cos(time+20*i), -1, 1, 100, 800);
    radius = map(sin(time), -1, 1, 0, 40);

    ribbon();

  }

  for(var i = 0; i < 20; i++){
    xPos = map(sin(time+20*i), 1, -1, 50, 700);
    yPos = map(cos(time+20*i), -1, 1, 50, 700);
    radius = map(sin(time), 1, -1, 0, 40);
    
    ribbon();

  }

  for(var i = 0; i < 20; i++){

    xPos = map(sin(time+20*i), 1, -1, 150, 850);
    yPos = map(cos(time+20*i), -1, 1, 150, 850);
    radius = map(sin(time), 1, -1, 0, 40);
    
    ribbon();

  }
  
  time = time + 0.6;
  bGTime = bGTime + 2;
  bG = map(sin(bGTime), -1, 1, 150, 250);

  if(recording) {
    gifRecorder.addBuffer();
  }

}

function ribbon() {

  fillShape = map(sin(bGTime), -1, 1, 170, 250);
  fill(xPos, fillShape, fillShape);

  for(var i = 0; i < 9; i++){
    ellipse(xPos, yPos, radius/3, radius/2);
    rotate(PI/4);
  }

}


function keyTyped() {

  if (key == '!') {
    saveBlocksImages();
  }

}