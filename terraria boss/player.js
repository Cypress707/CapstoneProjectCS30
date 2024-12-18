class Player {
  constructor(x,y){
    player.x = x;
    player.y = y;
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