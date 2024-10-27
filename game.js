class Game {
  constructor() {
    this.isGameOver = false;
    this.lives = 5;
    this.level = 1;
    this.gameArea = document.querySelector("#game-area");
    this.width = this.gameArea.getBoundingClientRect().width;
    this.height = this.gameArea.getBoundingClientRect().height;
    this.villains = [];
    this.livesElement = document.querySelector("#lives-display");
    this.levelElement = document.querySelector("#levels-display");
    this.scoreElement = document.querySelector("#score")
    this.updateLives();
  }

  updateLives() {
    this.livesElement.innerText = "❤️".repeat(this.lives);
  }
  updateLevel() {
    this.levelElement.innerText = this.level.toString();
  }
}


let game = new Game();