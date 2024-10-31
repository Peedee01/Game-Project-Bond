class Villain {
  constructor() {
    // creating the element
    this.element = document.createElement("div");

    this.element.classList.add("villain");

    if (game.level >= 2) {
      this.element.classList.add("villain2");
    }

    if (game.level >= 3) {
      this.element.classList.add("villain3");
    }

    if (game.level >= 4) {
      this.element.classList.add("villain4");
    }

    if (game.level >= 5) {
      this.element.classList.add("villain5");
    }
    // we append the child in the game-area
    game.gameArea.appendChild(this.element);

    // we get the measurements and the position just like with the player
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.left = game.width - this.width;
    // getting the game-height
    const gameAreaHeight = game.gameArea.getBoundingClientRect().height;

    // creating the area where the villain can spawn
    const areaStart = gameAreaHeight * 0.78;
    const areaEnd = gameAreaHeight * 0.96;

    // letting the villain spawn randomly
    this.top = Math.floor(Math.random() * (areaStart - areaEnd) + areaStart);

    // preventing the glitch in the left corner of the game-area
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";

    // enemy speed which can be increased in different levels
    this.speed = 9;

    if (game.level >= 1) {
      this.speed += 1;
    }

    if (game.level >= 3) {
      this.speed += 3;
    }

    if (game.level >= 4) {
      this.speed += 2;
    }
    if (game.level >= 6) {
      this.speed += 2;
    }

    // push this villain in the villain array
    game.villains.push(this);
  }
  move() {
    this.left -= this.speed;

    if (this.left <= 0) {
      this.destroy();
    }

    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
  }

  destroy() {
    this.element.remove();
    const index = game.villains.indexOf(this);
    game.villains.splice(index, 1);
  }
}

let villain = new Villain();
