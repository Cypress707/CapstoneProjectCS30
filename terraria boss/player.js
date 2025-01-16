class Player {
  constructor(x, y, xh1, xh2, yh1, yh2) {
    this.x = x;
    this.y = y;
    this.xh1 = xh1;
    this.xh2 = xh2;
    this.yh1 = yh1;
    this.yh2 = yh2;
  }
  move() {
    //print(this.xh1,this.xh2,this.yh1,this.yh2);
    push();
    imageMode(CENTER);
    if (gameStart === true) {
      if (lives === 3) {
        image(heart, 50, 0 + 50, 50, 50);
        image(heart, 100, 0 + 50, 50, 50);
        image(heart, 150, 0 + 50, 50, 50);
      }
      if (lives === 2) {
        image(heart, 50, 0 + 50, 50, 50);
        image(heart, 100, 0 + 50, 50, 50);
      }
      if (lives === 1) {
        image(heart, 50, 0 + 50, 50, 50);
      }
      if (f === 1) {
        //print(x, y);
        this.x = width / 2;
        this.y = height / 2;
        f = 0;
      }

      if (this.x > width) {
        this.x = 100;
      }
      if (this.x < 0) {
        this.x = width - 100;
      }
      if (this.y > height) {
        this.y = 100;
      }
      if (this.y < 0) {
        this.y = height - 100;
      }
      push();
      imageMode(CENTER);
      image(goku[spriteGoku], this.x, this.y, 60, 90);
      pop();
      if (keyIsDown() === false) {
        if (gokuDir === 2) {
          spriteGoku = 18;
        }
        if (gokuDir === 1) {
          spriteGoku = 11;
        }
      }
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
        if (gokuDir === 2) {
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
        if (gokuDir === 2) {
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
  boss() {
    imageMode(CORNER);
    if (startAttack0 === false) {
      brolyX = width / 4;
      brolyY = height / 4;
    }
    if (gameStart === true) {
      push();
      imageMode(CENTER);
      //print(framee);
      image(broly[spriteBroly], brolyX, brolyY, 80, 120);
      //print(framee);
      pop();
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
          bossAttack = random(1, 3);
          bossAttack = Math.round(bossAttack);
          attack = false;
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
                ballX += 10;
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
                ballX += 20;
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
                  //spriteBroly = 9;
                  //startAttack0 = false;
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
            if (ballX > width || ballX < 0) {
              bossAttack = 0;
              framee = 0;
              spriteAttack = 0;
              attackNumber = 0;
              //spriteBroly = 9;
              //startAttack0 = false;
              bossSpawn = true;
              ballX = 50;
              ballY = 50;
              ballW = 100;
              ballH = 100;
              bombW = 0;
              bombH = 0;
              bombX = 1000000;
              bombY = 10000000;
              ballBlow = false;
              attack = true;
              attacks += 1;
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
              brolyY = this.y;
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
                push();
                fill(0);
                circle(beamX, beamY, 100);
                pop();
                bossAttack = 0;
                framee = 0;
                spriteAttack = 0;
                attackNumber = 0;
                //spriteBroly = 9;
                //startAttack0 = false;
                bossSpawn = true;
                beamY = 105;
                beamH = 200;
                beamW = 0;
                ballBlow = false;
                attack = true;
                attacks += 1;
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
          if (attackNumber === 1) {
            spriteBroly = 48;
            if (framee === 1 && brolyY < height) {
              framee = 0;
              spriteAttack += 8;
              brolyY += 15;
            }
            if (brolyY >= height) {
              bossAttack = 0;
              framee = 0;
              spriteAttack = 0;
              attackNumber = 0;
              //spriteBroly = 9;
              //startAttack0 = false;
              bossSpawn = true;
              attack = true;
              attacks += 1;
            }
          }
        }
        // if (bossAttack === 4) {
        //   if (attackNumber === 0) {
        //     if (framee === 10) {
        //       spriteBroly = 0;
        //     }
        //     if (framee === 15) {
        //       brolyX = width - 200;
        //       brolyY = height / 2;
        //     }
        //     if (framee === 20) {
        //       spriteBroly = 50;
        //       attackNumber = 1;
        //       framee = 0;
        //     }

        //   }
        //   if (attackNumber === 1) {
        //     if (framee === spriteAttack * 5) {
        //       spriteAttack += 1
        //       image()
        //     }
        //   }
        // }
      }
      framee += 1;
    }
  }
  hitbox() {
    if (immFrames === false) {
      if (this.x >= brolyX - 40 && this.x <= brolyX + 40 && this.y >= brolyY - 40 && this.y <= brolyY + 40) {
        print("hiiii");
        immFrames = true;
        lives -= 1;
      }
      if (this.x >= bombX - bombW / 4 && this.x <= bombX + bombW / 4 && this.y >= bombY - bombH / 3) {
        print("hiiii");
        immFrames = true;
        lives -= 1;
      }
      if (this.x <= beamW && this.y > brolyY - 85 && this.y < brolyY + 85) {
        print("hiiii");
        immFrames = true;
        lives -= 1;
      }
    }
    if (immFrames === true) {
      cooldown += 1;
      print(cooldown);
      if (cooldown === 150) {
        immFrames = false;
        cooldown = 0;
      }
    }
  }
  loss() {
    if (lives === 0) {
      lose = true;

      if (lose === true) {
        print("loser");
        push();
        textSize(200);
        textAlign(CENTER);
        text("YOU LOSE", width / 2, height / 2);
        pop();
        push();
        textSize(50);
        textAlign(CENTER);
        text("survived " + attacks + " rounds", width / 2, height / 2 - 300);


      }
    }
  }
}



