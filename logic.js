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
    game.villains.forEach((villain) => {
      villain.move();
      collisionTest(villain);
    })

    if (frames % 100 === 0) {
      new Villain();
    }
    if (frames % 800 === 0) {
      game.level++;
      game.updateLevel();
    }
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop)

function collisionTest(villain) {
  const playerLeftEdge = player.left;
  const playerRightEdge = player.left + player.width;
  const playerTopEdge = player.top;
  const playerBottomEdge = player.top + player.height;

  const villainLeftEdge = villain.left;
  const villainRightEdge = villain.left + villain.width;
  const villainTopEdge = villain.top;
  const villainBottomEdge = villain.top + villain.height;

  if (
    playerLeftEdge < villainRightEdge &&
    playerRightEdge > villainLeftEdge &&
    playerTopEdge < villainBottomEdge &&
    playerBottomEdge > villainTopEdge
  ) {
    // destroy villain and remove lives
    game.lives--;
    game.updateLives();
    villain.destroy();

    if (game.lives <= 0) {
      game.isGameOver = true;
    }
  }
}
