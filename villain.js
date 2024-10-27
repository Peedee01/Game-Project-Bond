class Villain {
  constructor() {
    // creating the element
    this.element = document.createElement("div");

    this.element.classList.add("villain");

    // we append the child in the game-area
    game.gameArea.appendChild(this.element);

    // we get the measurements and the position just like with the player
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.left = game.width - this.width;
    // but the enemy spawns randomly
    this.top = Math.floor(Math.random() * (game.height - 0.8 * this.height))

    // preventing the glitch in the left corner of the game-area
    this.element.style.left = this.left + 'px';
    this.element.style.top = this.top + 'px';

    // enemy speed which can be increased in different levels
    this.speed = 5;

    // push this villain in the villain array
    game.villains.push(this);
  }
  move() {
    this.left -= this.speed;

    if (this.left <= 0 - this.width) {
      this.destroy();
    }

    this.element.style.left = this.left + 'px';
    this.element.style.top = this.top + 'px';
  }

    destroy() {
      this.element.remove();
      const index = game.villains.indexOf(this);
      game.villains.splice(index, 1);
    }
  }