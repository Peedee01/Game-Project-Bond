// this file is in charge of the game logic

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
    case "ArrowLeft":
      player.direction = "left";
      break;
    case "d":
    case "ArrowRight":
      player.direction = "right";
      break;
    case "s":
    case "ArrowDown":
      player.direction = "down";
      break;
    case "w":
    case "ArrowUp" :
      player.direction = "up"
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "a":
    case "ArrowLeft":
    case "d":
    case "ArrowRight":
    case "s":
    case "ArrowDown":
    case "w":
    case "ArrowUp":
      player.direction = null;
  }
});

let frames = 0;

// the game loop function that runs the game
function gameLoop() {
  if (!game.isGameOver) {
    frames++;
    player.move();
    
  }





  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop)


