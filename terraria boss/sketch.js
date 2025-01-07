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
let beamX = 75;
let beamY = 50;
let beamH = 200;
let beamW = 10;
let player;
let attack = true;
let goku = [];
let spriteGoku = 11;
let gokuFrame = 0;
let gokuDir = 1;
function setup() {
  player = new Player(x,y);
  backGround = loadImage("assets/giphy.webp");
  for (let i = 0; i < 18; i ++){
    goku.push(loadImage("assets/gokubase" + i + ".png"));
  }
  for (let i = 0; i < 50; i++) {
    broly.push(loadImage("assets/brolyBasessj" + i + ".png"));
    print(i);
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
  //player();
  player.move();
  player.boss();
  
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

// function player() {
//   if (gameStart === true) {
//     if (f === 1) {
//       //print(x, y);
//       x = width / 2;
//       y = height / 2;
//       f = 0;
//     }

//     circle(x, y, 6);
//     if (keyIsDown(65)) {
//       keysPressed[0] = 1;
//       x -= 4;
//     }
//     if (keyIsDown(87) && keysPressed[0] === 1) {
//       x -= 1;
//       y -= 1;
//     }
//     else if (keyIsDown(83) && keysPressed[0] === 1) {
//       x -= 1;
//       y += 1;
//     }
//     if (keyIsDown(68)) {
//       keysPressed[0] = 4;
//       x += 4;
//     }
//     if (keyIsDown(87) && keysPressed[0] === 4) {
//       x += 1;
//       y -= 1;
//     }
//     else if (keyIsDown(83) && keysPressed[0] === 4) {
//       x += 1;
//       y += 1;
//     }
//     if (keyIsDown(87)) {
//       keysPressed[0] = 2;
//       y -= 4;
//     }
//     if (keyIsDown(65) && keysPressed[0] === 2) {
//       x -= 1;
//       y -= 1;
//     }
//     else if (keyIsDown(68) && keysPressed[0] === 2) {
//       x += 1;
//       y -= 1;
//     }
//     if (keyIsDown(83)) {
//       keysPressed[0] = 3;
//       y += 4;
//     }
//     if (keyIsDown(65) && keysPressed[0] === 3) {
//       x -= 1;
//       y += 1;
//     }
//     else if (keyIsDown(68) && keysPressed[0] === 3) {
//       x += 1;
//       y += 1;
//     }
//     keysPressed[0] = 0;
//     playerPos = (x, y, 6);
//   }

// }
// function boss() {

//   if (startAttack0 === false) {
//     brolyX = width / 4;
//     brolyY = height / 4;
//   }
//   if (gameStart === true) {
//     //print(framee);
//     image(broly[spriteBroly], brolyX, brolyY, 80, 120);
//     //print(framee);
//     if (framee > 10 && bossSpawn === true) {
//       //print("hello");

//       if (spriteBroly < 9 && bossSpawn === true) {
//         spriteBroly += 1;
//         framee = 0;
//         //print(spriteBroly);
//       }
//       else {
//         bossSpawn = false;
//         startAttack0 = true;
//         framee = 0;
//       }

//     }
//     if (bossSpawn === false && startAttack0 === true) {
//       if (attack === true) {
//         bossAttack = random(1,2);
//         bossAttack = 3 //Math.round(bossAttack);
//         attack = false;
//         print("hello");
//       }
//       if (bossAttack === 1) {
//         if (attackNumber === 0) {
//           if (framee === 10) {
//             spriteBroly = 0;
//           }
//           if (framee === 15) {
//             let rando = random(2);
//             if (rando > 1) {
//               brolyX = 200;
//               brolyD = 0;
//             }
//             else {
//               brolyX = width - 200;
//               brolyD = 1;
//             }
//             brolyY = 0 + 200;
//           }
//           if (framee === 25) {
//             if (brolyD === 0) {
//               spriteBroly = 9;
//               attackNumber = 1;
//               framee = 0;
//             }
//             else {
//               spriteBroly = 10;
//               attackNumber = 1;
//               framee = 0;
//             }

//           }
//         }
//         if (attackNumber === 1) {
//           if (framee === 10 + spriteAttack && spriteAttack < 90) {
//             if (brolyD === 0) {
//               spriteBroly = 11 + spriteAttack / 10;
//               spriteAttack += 10;
//               if (spriteBroly === 19) {
//                 framee = 0;
//               }
//             }
//             if (brolyD === 1) {
//               spriteBroly = 20 + spriteAttack / 10;
//               spriteAttack += 10;
//               if (spriteBroly === 28) {
//                 framee = 0;
//               }

//             }
//           }
//           if (brolyD === 0) {
//             if (framee === 10 + spriteAttack / 10 && spriteAttack >= 90 && ballBlow === false) {

//               image(brolyBomb[bomb], brolyX + ballX, brolyY + ballY, ballW, ballH);
//               ballX += 5;
//               ballY += 10;
//               ballW += 10;
//               ballH += 10;
//               if (bomb === 0) {
//                 bomb = 1;
//               }
//               else {
//                 bomb = 0;
//               }
//               spriteAttack += 10;
//             }
//           }
//           if (brolyD === 1) {
//             if (framee === 10 + spriteAttack / 10 && spriteAttack >= 90 && ballBlow === false) {
//               image(brolyBomb[bomb], brolyX - ballX, brolyY + ballY, ballW, ballH);
//               //print(ballX);
//               ballX += 15;
//               ballY += 10;
//               ballW += 10;
//               ballH += 10;
//               if (bomb === 0) {
//                 bomb = 1;
//               }
//               else {
//                 bomb = 0;
//               }
//               spriteAttack += 10;
//             }
//           }
//           if (ballY > height / 1.5) {
//             ballBlow = true;
//             if (framee === 10 + spriteAttack / 10 && ballBlow === true) {

//               bombX = width / 2;
//               bombY = height - 50;
//               push();
//               imageMode(CENTER);
//               image(brolyExplosion, bombX, bombY, bombW, bombH);
//               pop();
//               bombW += 100;
//               bombH += 50;
//               spriteAttack += 10;
//               if (bombW > 3000) {

//                 bossAttack = 0;
//                 framee = 0;
//                 spriteAttack = 0;
//                 attackNumber = 0;
//                 spriteBroly = 9;
//                 startAttack0 = false;
//                 bossSpawn = true;
//                 ballX = 50;
//                 ballY = 50;
//                 ballW = 100;
//                 ballH = 100;
//                 bombW = 0;
//                 bombH = 0;
//                 bombX = 0;
//                 bombY = 0;
//                 ballBlow = false;
//                 attack = true;
//               }
//             }
//           }
//         }
//       }
//       if (bossAttack === 2) {
//         if (attackNumber === 0) {
//           if (framee === 10) {
//             spriteBroly = 0;
//           }
//           if (framee === 15) {
//             let rando = random(2);
//             //if (rando > 1) {
//             brolyX = 100;
//             brolyD = 0;
//             //}
//             //else {

//             //}
//             brolyY = random(0,height);
//           }
//           if (framee === 20) {
//             // if (brolyD === 0) {
//             spriteBroly = 9;
//             attackNumber = 1;
//             framee = 0;
//             //}
//             //else {
//             //   spriteBroly = 10;
//             //   attackNumber = 1;
//             //   framee = 0;
//             // }

//           }
//         }
//         if (attackNumber === 1) {
//           if (framee === 5 + spriteAttack && spriteAttack < 30) {
//             // if (brolyD === 0) {
//             spriteBroly = 35 + spriteAttack / 5;
//             spriteAttack += 5;
//             if (spriteBroly === 40) {
//               framee = 0;
//             }
//             //}
//             // if (brolyD === 1) {
//             //   spriteBroly = 41 + spriteAttack / 10;
//             //   spriteAttack += 10;
//             //   if (spriteBroly === 46) {
//             //     framee = 0;
//             //   }

//             // }

//           }
//           //if (brolyD === 0) {
//           if (framee === 5 + spriteAttack / 5 && spriteAttack >= 30 && ballBlow === false) {
//             image(beam, brolyX + beamX, brolyY - beamY, beamW, beamH);

//             beamW += 40;
//             beamH += 1;
//             beamY += 0.5;
//             spriteAttack += 5;
//             if (beamW > 2000) {
//               bossAttack = 0;
//               framee = 0;
//               spriteAttack = 0;
//               attackNumber = 0;
//               spriteBroly = 9;
//               startAttack0 = false;
//               bossSpawn = true;
//               beamY = 50;
//               beamH = 200;
//               beamW = 10;
//               ballBlow = false;
//               attack = true;
//             }


//           }
//           //}
//           // if (brolyD === 1) {
//           //   if (framee === 10 + spriteAttack / 10 && spriteAttack >= 60 && ballBlow === false) {
//           //     print("hello");
//           //     push();
//           //     angleMode(DEGREES);
//           //     rotate(180);
//           //     image(beam, brolyX - beamX, brolyY + beamY, beamW, beamH);
//           //     push();


//           //     beamW += 20;
//           //     beamH += 1;
//           //     beamY -= 0.5;

//           //     spriteAttack += 10;
//           //   }
//           // }
//         }
//       }
//       if (bossAttack === 3) {
//         if (attackNumber === 0) {
//           if (framee === 10) {
//             spriteBroly = 0;
//           }
//           if (framee === 15) {
//             brolyX = this.x;
//             brolyY = this.y + 200;
//           }
//           if (framee === 25) {
//             spriteBroly = 47;
//             attackNumber = 1;
//             framee = 0;
//           }
//         }
//       }
//     }
//     framee += 1;
//   }
// }