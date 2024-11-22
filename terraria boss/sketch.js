// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let sizee = 0;
let framee = 0;
let rotatee = 0;
let rotateUpDown = -20;
let textySize = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  drawTitleScreen();
}


function drawTitleScreen() {
  push();
  translate(width/2, height / 4);
  textAlign(CENTER);
  textSize(textySize);
  rotate(rotateUpDown);
  
  text("GoldenTale",0,0 );
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
    if (sizee > 35){
      textySize -= 1;
      if (sizee === 70){
        sizee = 0;
      }
    }
    if (framee === 4) {
      rotatee += 1;
      if (rotatee <= 40){
        rotateUpDown += 1;
      }
      if (rotatee > 40){
        rotateUpDown -= 1;
        if (rotatee === 80){
          rotatee = 0;
        }
      }
    }
    framee = 0;
    
  }
  pop();
  //hi
}
// class Title{
//   constructor(){
//     this.s = 100;
//     this.y = height/4;
//     this.t = []
//   }

//   update(){
//     for(let i = 0; i < 20; i++){
//       this.s += 1;
//     }
//     for(let t = 0; t < 20; t++){
//       this.s -= 1;
//     }
//     drawTitleScreen(width/2,height/4);
//   }

// }
