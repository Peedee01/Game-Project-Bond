class Game {
  constructor() {
    this.isGameOver = false;
    this.lives = 5;
    this.level = 1;
    this.gameArea = document.querySelector("#game-area");
    this.width = this.gameArea.getBoundingClientRect().width;
    this.height = this.gameArea.getBoundingClientRect().height;
    this.enemies = [];
    
  }
}

let game = new Game();