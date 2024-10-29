class Game {
  constructor() {
    this.isGameOver = false;
    this.lives = 5;
    this.level = 0;
    this.score = 0;
    this.startScreen = document.querySelector("#start-scren");
    this.gameArea = document.querySelector("#game-area");
    this.width = this.gameArea.getBoundingClientRect().width;
    this.height = this.gameArea.getBoundingClientRect().height;
    this.villains = [];
    this.martinis = [];
    this.bullets = [];
    this.levelElement = document.querySelector("#levels-display");
    this.livesElement = document.querySelector("#lives-display");
    this.scoreElement = document.querySelector("#score-display");
    this.gameOverScreen = document.querySelector("#game-over");
    this.scoreElement2 = document.querySelector("#score-diplay2")
    this.updateLives();
  }

  updateLives() {
    this.livesElement.innerText = "❤️".repeat(this.lives);
  }
  updateLevel() {
    this.levelElement.innerText = " 007 - LEVEL:  " + this.level.toString();
  }
  updateScore() {
    this.scoreElement.innerText = "SCORE:  " + this.score.toString();
  }
}

let game = new Game();

