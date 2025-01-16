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
let lose = false;
let attacks = 0;
let heart;
let blast = [];
function setup() {
  player = new Player(x, y);
  backGround = loadImage("assets/giphy.webp");
  for (let i = 0; i < 3; i ++){
    blast.push(loadImage("assets/brolyblast" + i + ".png"));
  }
  for (let i = 0; i < 19; i++) {
    goku.push(loadImage("assets/gokubase" + i + ".png"));
  }
  for (let i = 0; i < 51; i++) {
    broly.push(loadImage("assets/brolyBasessj" + i + ".png"));
  }
  for (let i = 0; i < 2; i++) {
    brolyBomb.push(loadImage("assets/brolyBasessjbomb" + i + ".png"));
  }
  // for (let i = 0; i < 2; i++) {
  //   beam.push(loadImage("assets/brolyBasessjBeam" + i + ".png"));
  // }
  heart = loadImage("assets/heart.webp");
  beam = loadImage("assets/brolyBasessjBeam0.png");
  brolyExplosion = loadImage("assets/brolyExplode2.png");
  vyke = loadImage("assets/easy.jpg");
  archer = loadImage("assets/ssj.webp");
  mage = loadImage("assets/prowler.webp");
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);

}

function draw() {
  background(backGround);
  if (lose === false) {
    backgroundTitle();

    drawTitleScreen();
    pressStart();
    selectCharacter();
    player.move();
    player.boss();
    player.hitbox();
  }
  player.loss();
}


function drawTitleScreen() {
  //colourly is to make the title slowly change colours
  //framee is to make each action go by a different frame, eg each action goes on frame 4 instead of every frame
  //textySize is the size of the text, helping it grow and shrink
  //rotateUpDown makes the title move up and down
  //sizee and colour1 are addons to other variables

  if (title === true) {
    push();
    stroke(0);
    translate(width / 2, height / 4);
    strokeWeight(5);
    textAlign(CENTER);
    textSize(textySize);
    rotate(rotateUpDown);
    fill(colourly, 205, 0);
    text("Broly Blast Clash", 5, 5);
    fill(colourly, 255, 0);
    text("Broly Blast Clash", 0, 0);
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
      fill(0, 117, 202);
      rect(bgX - 30, bgY - 30, 10000, 20);
      rect(bgX + 30, bgY + 30, 10000, 20);
      fill(45, 85, 205);
      //rect(bgX - 40, bgY - 40, 10000, 20);
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
  if (lose === true) {
    backGround = loadImage("assets/giphy.webp");
    attacks = 0;
    title = true;
    titleScreen = false;
    startScreen = true;
    characterSelect = false;
    gameStart = false;
    bgX = 50;
    bgY = 50;
    sizee = 0;
    framee = 0;
    rotatee = 0;
    rotateUpDown = -20;
    textySize = 100;
    colourly = 255;
    colour1 = 0;
    backGround;
    x = 0;
    y = 0;
    b = 1;
    f = 1;
    spriteBroly = 0;
    bossSpawn = true;
    startAttack0 = false;
    bossAttack = 0;
    brolyX = 0;
    brolyY = 0;
    brolyD = 0;
    attackNumber = 0;
    spriteAttack = 0;
    bomb = 0;
    ballW = 100;
    ballH = 100;
    ballX = 50;
    ballY = 50;
    ballBlow = false;
    brolyExplosion;
    bombW = 0;
    bombH = 0;
    bombX;
    bombY;
    beam;
    beamX = 30;
    beamY = 105;
    beamH = 200;
    beamW = 10;
    player;
    attack = true;
    spriteGoku = 11;
    gokuFrame = 0;
    gokuDir = 1;
    immFrames = false;
    cooldown = 0;
    lives = 3;
    lose = false;
  }
  if (characterSelect === true && mouseX > width / 4 - 125 && mouseX < width / 4 + 125 && mouseY > height / 2 - 250 && mouseY < height / 2 + 250) {
    characterSelect = false;
    startScreen = false;
    titleScreen = false;
    title = false;
    gameStart = true;
    lives = 3;
    backGround = loadImage("assets/brolyBackground.webp");


  }
  if (characterSelect === true && mouseX > width / 2 - 125 && mouseX < width / 2 + 125 && mouseY > height / 2 - 250 && mouseY < height / 2 + 250) {
    characterSelect = false;
    startScreen = false;
    titleScreen = false;
    title = false;
    gameStart = true;
    backGround = loadImage("assets/brolyBackground.webp");
    lives = 2;

  }
  if (characterSelect === true && mouseX > width / 1.5 - 125 && mouseX < width / 1.5 + 250 && mouseY > height / 2 - 250 && mouseY < height / 2 + 250) {
    characterSelect = false;
    startScreen = false;
    titleScreen = false;
    title = false;
    gameStart = true;
    backGround = loadImage("assets/brolyBackground.webp");
    lives = 1;

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
        text("Easy", width / 4 * i, height / 1.8 - 240);
      }
      if (i === 2) {
        imageMode(CENTER);
        image(archer, width / 4 * i, height / 1.8, 240, 490);
        rect(width / 4 * i, height / 1.8 - 250, 100, 50);
        fill(255);
        text("Normal", width / 4 * i, height / 1.8 - 240);
      }
      if (i === 3) {
        imageMode(CENTER);
        image(mage, width / 4 * i, height / 1.8, 240, 490);
        rect(width / 4 * i, height / 1.8 - 250, 100, 50);
        fill(255);
        text("Hard", width / 4 * i, height / 1.8 - 240);
      }
      pop();
    }
  }
}

