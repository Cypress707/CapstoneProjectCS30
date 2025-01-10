// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let title = true;
let titleScreen = false;
let startScreen = true;
let characterSelect = false;
let gameStart = false;
let bgX = 50;
let bgY = 50;
let sizee = 0;
let framee = 0;
let rotatee = 0;
let rotateUpDown = -20;
let textySize = 100;
let colourly = 255;
let colour1 = 0;
let backGround;
let x = 0;
let y = 0;
let b = 1;
let f = 1;
let keysPressed = [];
let spriteBroly = 0;
let broly = [];
let bossSpawn = true;
let startAttack0 = false;
let bossAttack = 0;
let brolyX = 0;
let brolyY = 0;
let brolyD = 0;
let attackNumber = 0;
let spriteAttack = 0;
let brolyBomb = [];
let bomb = 0;
let ballW = 100;
let ballH = 100;
let ballX = 50;
let ballY = 50;
let ballBlow = false;
let brolyExplosion;
let bombW = 0;
let bombH = 0;
let bombX;
let bombY;
let beam;
let beamX = 30;
let beamY = 105;
let beamH = 200;
let beamW = 10;
let player;
let attack = true;
let goku = [];
let spriteGoku = 11;
let gokuFrame = 0;
let gokuDir = 1;
let immFrames = false;
let cooldown = 0;
let lives = 3;
function setup() {
  player = new Player(x,y);
  backGround = loadImage("assets/giphy.webp");
  for (let i = 0; i < 19; i ++){
    goku.push(loadImage("assets/gokubase" + i + ".png"));
  }
  for (let i = 0; i < 50; i++) {
    broly.push(loadImage("assets/brolyBasessj" + i + ".png"));
  }
  for (let i = 0; i < 2; i++) {
    brolyBomb.push(loadImage("assets/brolyBasessjbomb" + i + ".png"));
  }
  // for (let i = 0; i < 2; i++) {
  //   beam.push(loadImage("assets/brolyBasessjBeam" + i + ".png"));
  // }
  beam = loadImage("assets/brolyBasessjBeam0.png");
  brolyExplosion = loadImage("assets/brolyExplode2.png");
  vyke = loadImage("assets/25b38ek4hu191.jpg");
  archer = loadImage("assets/archer.jpg");
  mage = loadImage("assets/mage.jpg_large");
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);

}

function draw() {
  background(backGround);
  backgroundTitle();

  drawTitleScreen();
  pressStart();
  selectCharacter();
  player.move();
  player.boss();
  player.hitbox();
  
}


function drawTitleScreen() {
  if (title === true) {
    push();
    stroke(0);
    translate(width / 2, height / 4);
    strokeWeight(5);
    textAlign(CENTER);
    textSize(textySize);
    rotate(rotateUpDown);
    fill(colourly, 255, 0);
    text("Broly's Onslaught", 0, 0);
    framee += 1;
    //print(framee);
    if (framee === 4) {
      sizee += 1;
      //print(rotateUpDown);
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






      if (framee === 2 || framee === 4) {
        colour1 += 1;
        if (colour1 <= 155) {
          colourly -= 1;
        }
        if (colour1 > 155) {
          colourly += 1;
          if (colour1 === 310) {
            colour1 = 0;
          }
        }
      }



      framee = 0;

    }
    pop();
  }
}

function backgroundTitle() {
  if (title === true) {
    for (let i = 0; i < 7; i++) {
      push();
      noStroke();
      translate(bgX * i * 5, bgY * i * 5);
      rotate(315);
      rectMode(CENTER);
      fill(67, 117, 202);
      rect(bgX - 30, bgY - 30, 10000, 20);
      rect(bgX + 30, bgY + 30, 10000, 20);
      fill("steelblue");
      rect(bgX - 40, bgY - 40, 10000, 20);
      rect(bgX + 40, bgY + 40, 10000, 20);
      fill('royalblue');
      rect(bgX, bgY, 10000, 50);

      pop();
    }




    push();
    fill('steelblue');
    noStroke();
    rectMode(CENTER);
    rect(0, 0, 10000, 50);
    rotate(90);
    rect(0, height, 10000, 50);
    rect(width, 0, 10000, 50);
    rotate(0);
    rect(width, height, 10000, 50);
    pop();
  }
}







function pressStart() {
  if (startScreen === true && characterSelect === false) {
    push();
    textSize(60);
    textAlign(CENTER);
    fill(255);
    text("Click to Start", width / 2, height / 2);
    pop();
  }




  if (titleScreen === true) {
    for (let i = 0; i < 50; i++) {
      push();
      strokeWeight(5);
      if (i > 0) {
        noStroke();
      }
      rectMode(CENTER);
      fill(90 - i, 5, 45 - i);
      rect(width / 2, height / 2 + 30, 400 - i * 2, 200 - i, 25);
      pop();
    }
    push();
    fill(25, 95, 175);
    stroke(0);
    strokeWeight(5);
    textAlign(CENTER);
    textSize(30);
    text("Press to Play", width / 2, height / 2 + 30);
  }
}





function mousePressed() {
  if (characterSelect === true && mouseX > width / 4 - 125 && mouseX < width / 4 + 125 && mouseY > height / 2 - 250 && mouseY < height / 2 + 250) {
    characterSelect = false;
    startScreen = false;
    titleScreen = false;
    title = false;
    gameStart = true;
    backGround = loadImage("assets/brolyBackground.webp");


  }
  if (titleScreen === true && mouseX > width / 2 - 200 && mouseX < width / 2 + 200 && mouseY > height / 2 - 100 && mouseY < height / 2 + 100) {
    characterSelect = true;
    titleScreen = false;
    //print(characterSelect);

  }
  if (startScreen === true) {
    startScreen = false;
    titleScreen = true;

  }


}

function selectCharacter() {
  if (characterSelect === true) {
    for (let i = 1; i < 4; i++) {
      push();
      rect(width / 4 * i, height / 1.8, 250, 500);
      if (i === 1) {
        imageMode(CENTER);
        image(vyke, width / 4 * i, height / 1.8, 240, 490);
        rect(width / 4 * i, height / 1.8 - 250, 100, 50);
        fill(255);
        text("Knight", width / 4 * i, height / 1.8 - 240);
      }
      if (i === 2) {
        imageMode(CENTER);
        image(archer, width / 4 * i, height / 1.8, 240, 490);
        rect(width / 4 * i, height / 1.8 - 250, 100, 50);
        fill(255);
        text("Archer", width / 4 * i, height / 1.8 - 240);
      }
      if (i === 3) {
        imageMode(CENTER);
        image(mage, width / 4 * i, height / 1.8, 240, 490);
        rect(width / 4 * i, height / 1.8 - 250, 100, 50);
        fill(255);
        text("Mage", width / 4 * i, height / 1.8 - 240);
      }
      pop();
    }
  }
}

