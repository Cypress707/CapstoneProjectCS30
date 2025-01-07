class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move() {
    if (gameStart === true) {
      if (f === 1) {
        //print(x, y);
        this.x = width / 2;
        this.y = height / 2;
        f = 0;
      }
      if(this.x > width){
        this.x = 100;
      }
      if(this.x < 0){
        this.x = width - 100;
      }
      if(this.y > height){
        this.y = 100;
      }
      if(this.y < 0){
        this.y = height - 100;
      }
      image(goku[spriteGoku],this.x,this.y,80,120);
      if (keyIsDown(65)) {
        keysPressed[0] = 1;
        this.x -= 8;
        spriteGoku = 12;
        gokuDir = 2;
      }
      if (keyIsDown(87) && keysPressed[0] === 1) {
        this.x -= 1;
        this.y -= 1;
        spriteGoku = 12;
        gokuDir = 2;
      }
      else if (keyIsDown(83) && keysPressed[0] === 1) {
        this.x -= 1;
        this.y += 1;
        spriteGoku = 12;
        gokuDir = 2;
      }
      if (keyIsDown(68)) {
        keysPressed[0] = 4;
        this.x += 8;
        spriteGoku = 13;
        gokuDir = 1;
      }
      if (keyIsDown(87) && keysPressed[0] === 4) {
        this.x += 1;
        this.y -= 1;
        spriteGoku = 13;
        gokuDir = 1;
      }
      else if (keyIsDown(83) && keysPressed[0] === 4) {
        this.x += 1;
        this.y += 1;
        spriteGoku = 13;
        gokuDir = 1;
      }
      if (keyIsDown(87)) {
        keysPressed[0] = 2;
        this.y -= 8;
        if (gokuDir === 2){
          spriteGoku = 15;
        }
        else {
          spriteGoku = 14;
        }
      }
      if (keyIsDown(65) && keysPressed[0] === 2) {
        this.x -= 1;
        this.y -= 1;
        spriteGoku = 12;
        gokuDir = 2;
      }
      else if (keyIsDown(68) && keysPressed[0] === 2) {
        this.x += 1;
        this.y -= 1;
        spriteGoku = 13;
        gokuDir = 1;
      }
      if (keyIsDown(83)) {
        keysPressed[0] = 3;
        this.y += 8;
        if (gokuDir === 2){
          spriteGoku = 17;
        }
        else {
          spriteGoku = 16;
        }
      }
      if (keyIsDown(65) && keysPressed[0] === 3) {
        this.x -= 1;
        this.y += 1;
        spriteGoku = 12;
        gokuDir = 2;
      }
      else if (keyIsDown(68) && keysPressed[0] === 3) {
        this.x += 1;
        this.y += 1;
        spriteGoku = 13;
        gokuDir = 1;
      }
      keysPressed[0] = 0;
    }

  }
  boss(){
    if (startAttack0 === false) {
      brolyX = width / 4;
      brolyY = height / 4;
    }
    if (gameStart === true) {
      //print(framee);
      image(broly[spriteBroly], brolyX, brolyY, 80, 120);
      //print(framee);
      if (framee > 10 && bossSpawn === true) {
        //print("hello");
  
        if (spriteBroly < 9 && bossSpawn === true) {
          spriteBroly += 1;
          framee = 0;
          //print(spriteBroly);
        }
        else {
          bossSpawn = false;
          startAttack0 = true;
          framee = 0;
        }
  
      }
      if (bossSpawn === false && startAttack0 === true) {
        if (attack === true) {
          bossAttack = random(1,3);
          bossAttack = Math.round(bossAttack);
          attack = false;
          print("hello");
        }
        if (bossAttack === 1) {
          if (attackNumber === 0) {
            if (framee === 10) {
              spriteBroly = 0;
            }
            if (framee === 15) {
              let rando = random(2);
              if (rando > 1) {
                brolyX = 200;
                brolyD = 0;
              }
              else {
                brolyX = width - 200;
                brolyD = 1;
              }
              brolyY = 0 + 200;
            }
            if (framee === 25) {
              if (brolyD === 0) {
                spriteBroly = 9;
                attackNumber = 1;
                framee = 0;
              }
              else {
                spriteBroly = 10;
                attackNumber = 1;
                framee = 0;
              }
  
            }
          }
          if (attackNumber === 1) {
            if (framee === 10 + spriteAttack && spriteAttack < 90) {
              if (brolyD === 0) {
                spriteBroly = 11 + spriteAttack / 10;
                spriteAttack += 10;
                if (spriteBroly === 19) {
                  framee = 0;
                }
              }
              if (brolyD === 1) {
                spriteBroly = 20 + spriteAttack / 10;
                spriteAttack += 10;
                if (spriteBroly === 28) {
                  framee = 0;
                }
  
              }
            }
            if (brolyD === 0) {
              if (framee === 10 + spriteAttack / 10 && spriteAttack >= 90 && ballBlow === false) {
  
                image(brolyBomb[bomb], brolyX + ballX, brolyY + ballY, ballW, ballH);
                ballX += 5;
                ballY += 10;
                ballW += 10;
                ballH += 10;
                if (bomb === 0) {
                  bomb = 1;
                }
                else {
                  bomb = 0;
                }
                spriteAttack += 10;
              }
            }
            if (brolyD === 1) {
              if (framee === 10 + spriteAttack / 10 && spriteAttack >= 90 && ballBlow === false) {
                image(brolyBomb[bomb], brolyX - ballX, brolyY + ballY, ballW, ballH);
                //print(ballX);
                ballX += 15;
                ballY += 10;
                ballW += 10;
                ballH += 10;
                if (bomb === 0) {
                  bomb = 1;
                }
                else {
                  bomb = 0;
                }
                spriteAttack += 10;
              }
            }
            if (ballY > height / 1.5) {
              ballBlow = true;
              if (framee === 10 + spriteAttack / 10 && ballBlow === true) {
  
                bombX = width / 2;
                bombY = height - 50;
                push();
                imageMode(CENTER);
                image(brolyExplosion, bombX, bombY, bombW, bombH);
                pop();
                bombW += 100;
                bombH += 50;
                spriteAttack += 10;
                if (bombW > 3000) {
  
                  bossAttack = 0;
                  framee = 0;
                  spriteAttack = 0;
                  attackNumber = 0;
                  spriteBroly = 9;
                  startAttack0 = false;
                  bossSpawn = true;
                  ballX = 50;
                  ballY = 50;
                  ballW = 100;
                  ballH = 100;
                  bombW = 0;
                  bombH = 0;
                  bombX = 0;
                  bombY = 0;
                  ballBlow = false;
                  attack = true;
                }
              }
            }
          }
        }
        if (bossAttack === 2) {
          if (attackNumber === 0) {
            if (framee === 10) {
              spriteBroly = 0;
            }
            if (framee === 15) {
              let rando = random(2);
              //if (rando > 1) {
              brolyX = 100;
              brolyD = 0;
              //}
              //else {
  
              //}
              brolyY = random(0,height);
            }
            if (framee === 20) {
              // if (brolyD === 0) {
              spriteBroly = 9;
              attackNumber = 1;
              framee = 0;
              //}
              //else {
              //   spriteBroly = 10;
              //   attackNumber = 1;
              //   framee = 0;
              // }
  
            }
          }
          if (attackNumber === 1) {
            if (framee === 5 + spriteAttack && spriteAttack < 30) {
              // if (brolyD === 0) {
              spriteBroly = 35 + spriteAttack / 5;
              spriteAttack += 5;
              if (spriteBroly === 40) {
                framee = 0;
              }
              //}
              // if (brolyD === 1) {
              //   spriteBroly = 41 + spriteAttack / 10;
              //   spriteAttack += 10;
              //   if (spriteBroly === 46) {
              //     framee = 0;
              //   }
  
              // }
  
            }
            //if (brolyD === 0) {
            if (framee === 5 + spriteAttack / 5 && spriteAttack >= 30 && ballBlow === false) {
              image(beam, brolyX + beamX, brolyY - beamY, beamW, beamH);
  
              beamW += 40;
              beamH += 1;
              beamY += 0.5;
              spriteAttack += 5;
              if (beamW > 2000) {
                bossAttack = 0;
                framee = 0;
                spriteAttack = 0;
                attackNumber = 0;
                spriteBroly = 9;
                startAttack0 = false;
                bossSpawn = true;
                beamY = 50;
                beamH = 200;
                beamW = 10;
                ballBlow = false;
                attack = true;
              }
  
  
            }
            //}
            // if (brolyD === 1) {
            //   if (framee === 10 + spriteAttack / 10 && spriteAttack >= 60 && ballBlow === false) {
            //     print("hello");
            //     push();
            //     angleMode(DEGREES);
            //     rotate(180);
            //     image(beam, brolyX - beamX, brolyY + beamY, beamW, beamH);
            //     push();
  
  
            //     beamW += 20;
            //     beamH += 1;
            //     beamY -= 0.5;
  
            //     spriteAttack += 10;
            //   }
            // }
          }
        }
        if (bossAttack === 3) {
          if (attackNumber === 0) {
            if (framee === 10) {
              spriteBroly = 0;
            }
            if (framee === 15) {
              brolyX = this.x;
              brolyY = this.y - 200;
            }
            if (framee === 25) {
              spriteBroly = 47;
              attackNumber = 1;
              framee = 0;
            }
          }
          if (attackNumber === 1){
            spriteBroly = 48;
            if (framee === 1 && brolyY < height){
              framee = 0;
              spriteAttack += 8;
              brolyY += 15;
            }
            if (brolyY >= height){
              bossAttack = 0;
              framee = 0;
              spriteAttack = 0;
              attackNumber = 0;
              spriteBroly = 9;
              startAttack0 = false;
              bossSpawn = true;
              attack = true;
            }
          }
        }
      }
      framee += 1;
    }
  }
}



// function player(x, y) {
//     if (gameStart === true) {
//         if (f === 1) {
//             //print(x, y);
//             x = width / 2;
//             y = height / 2;
//             f = 0;
//         }

//         circle(x, y, 6);
//         if (keyIsDown(65)) {
//             keysPressed[0] = 1;
//             x -= 4;
//         }
//         if (keyIsDown(87) && keysPressed[0] === 1) {
//             x -= 1;
//             y -= 1;
//         }
//         else if (keyIsDown(83) && keysPressed[0] === 1) {
//             x -= 1;
//             y += 1;
//         }
//         if (keyIsDown(68)) {
//             keysPressed[0] = 4;
//             x += 4;
//         }
//         if (keyIsDown(87) && keysPressed[0] === 4) {
//             x += 1;
//             y -= 1;
//         }
//         else if (keyIsDown(83) && keysPressed[0] === 4) {
//             x += 1;
//             y += 1;
//         }
//         if (keyIsDown(87)) {
//             keysPressed[0] = 2;
//             y -= 4;
//         }
//         if (keyIsDown(65) && keysPressed[0] === 2) {
//             x -= 1;
//             y -= 1;
//         }
//         else if (keyIsDown(68) && keysPressed[0] === 2) {
//             x += 1;
//             y -= 1;
//         }
//         if (keyIsDown(83)) {
//             keysPressed[0] = 3;
//             y += 4;
//         }
//         if (keyIsDown(65) && keysPressed[0] === 3) {
//             x -= 1;
//             y += 1;
//         }
//         else if (keyIsDown(68) && keysPressed[0] === 3) {
//             x += 1;
//             y += 1;
//         }
//         keysPressed[0] = 0;
//         playerPos = (x, y, 6);
//     }

// }