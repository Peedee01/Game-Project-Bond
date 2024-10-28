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

// shooting mechanics
document.addEventListener('keydown', (e) => {
  if (e.code === "Space") {
    new Bullet();
  }
})

let frames = 0;

// the game loop function that runs the game
function gameLoop() {
  if (!game.isGameOver) {
    frames++;
    player.move();
    
    // every 400 frames a new martini
    if (frames % 600 === 0) {
      new Martini();
    }

    // martinis array
    game.martinis.forEach((martini) => {
      collisionTest(martini);
      // remove martini after a set number of frames
      if (frames - martini.spawnFrame === 500) {
        martini.destroy();
      };
    })

    // bullets array move and shootcrash
    game.bullets.forEach((bullet) => {
      bullet.move();
      game.villains.forEach((villain) => {
        shootTest(bullet, villain);
      })
    })

    // looping through villains array and colissiontest
    game.villains.forEach((villain) => {
      villain.move();
      collisionTest(villain);
    })

    if (frames % 50 === 0) {
      new Villain();
    }

    // every 800 frames a new level
    if (frames % 800 === 0) {
      game.level++;
      game.updateLevel();
      new Villain();
      Villain.speed += 2
    }
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop)

function collisionTest(object) {
  const playerLeftEdge = player.left;
  const playerRightEdge = player.left + player.width;
  const playerTopEdge = player.top;
  const playerBottomEdge = player.top + player.height;

  const objectLeftEdge = object.left;
  const objectRightEdge = object.left + object.width;
  const objectTopEdge = object.top;
  const objectBottomEdge = object.top + object.height;
  
  if (
    playerLeftEdge < objectRightEdge &&
    playerRightEdge > objectLeftEdge &&
    playerTopEdge < objectBottomEdge &&
    playerBottomEdge > objectTopEdge
  ) {
    
    if (object instanceof Martini) {
      game.lives += 1;
      game.updateLives();
      object.destroy();
    }

    // destroy villain and remove lives
    if (object instanceof Villain) {
      game.lives--;
      game.updateLives();
      object.destroy();
    }
    if (game.lives <= 0) {
      game.isGameOver = true;
    }
  }
}

function shootTest(bullet, villain) {
  const bulletLeftEdge = bullet.left;
  const bulletRightEdge = bullet.left + bullet.width;
  const bulletTopEdge = bullet.top;
  const bulletBottomEdge = bullet.top + bullet.height;

  const villainLeftEdge = villain.left;
  const villainRightEdge = villain.left + villain.width;
  const villainTopEdge = villain.top;
  const villainBottomEdge = villain.top + villain.height;
  
  if (
    bulletLeftEdge < villainRightEdge &&
    bulletRightEdge > villainLeftEdge &&
    bulletTopEdge < villainBottomEdge &&
    bulletBottomEdge > villainTopEdge
  ) {
    villain.destroy();
    bullet.destroy();
  }
}

