// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let bgX = 50;
let bgY = 50;
let sizee = 0;
let framee = 0;
let rotatee = 0;
let rotateUpDown = -20;
let textySize = 100;
let colourly = 255;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background('silver');
  backgroundTitle();

  drawTitleScreen();
}


function drawTitleScreen() {
  push();
  translate(width / 2, height / 4);
  textAlign(CENTER);
  textSize(textySize);
  rotate(rotateUpDown);
  fill(colourly);
  text("GoldenTale", 0, 0);
  framee += 1;
  //print(framee);
  if (framee === 4) {
    sizee += 1;
    print(rotateUpDown);
    //print("hello");
    textSize(textySize);
    if (sizee <= 35) {
      //print(textySize);
      textySize += 1;
    }
    if (sizee > 35) {
      textySize -= 1;
      if (sizee === 70) {
        sizee = 0;
      }
    }
    if (framee === 4) {
      rotatee += 1;
      if (rotatee <= 40) {
        rotateUpDown += 1;
      }
      if (rotatee > 40) {
        rotateUpDown -= 1;
        if (rotatee === 80) {
          rotatee = 0;
        }
      }
    }
    if (framee === 4) {
      colourly -= 1;
      if(colourly === 200){
        colourly = 255;
      }
    }
    framee = 0;

  }
  pop();

}
function backgroundTitle() {
  for (let i = 0; i < 7; i++) {
    push();
    noStroke();
    translate(bgX * i * 5, bgY * i * 5);
    rotate(315);
    rectMode(CENTER);
    fill(67,117,202);
    rect(bgX-30,bgY-30,10000,20);
    rect(bgX+30,bgY+30,10000,20);
    fill("steelblue");
    rect(bgX-40,bgY-40,10000,20);
    rect(bgX+40,bgY+40,10000,20);
    fill('royalblue');
    rect(bgX,bgY,10000,50);
    
    pop();
  }
  push();
  fill('steelblue');
  noStroke();
  rectMode(CENTER);
  rect(0,0,10000,50);
  rotate(90);
  rect(0,height,10000,50);
  rect(width,0,10000,50);
  rotate(0);
  rect(width,height,10000,50);
  pop();
}

