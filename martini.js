class Martini {
  constructor() {
    // creating the element
    this.element = document.createElement("div");

    // from level two the wodka-martinis will show up for lives
    if (game.level >= 2) {
      this.element.classList.add("martini");
    }
    // appending the element in the area
    game.gameArea.appendChild(this.element);

    // measurements
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;

    // adding a random position to the wodka-martinis
    this.left = Math.floor(Math.random() * (0 + 700));

    // getting the game-height
    const gameAreaHeight = game.gameArea.getBoundingClientRect().height;

    // creating the area where the martini can spawn (same as villain)
    const areaStart = gameAreaHeight * 0.78;
    const areaEnd = gameAreaHeight * 0.99;

    // letting the martini spawn randomly
    this.top = Math.floor(Math.random() * (areaStart - areaEnd) + areaStart);

    // preventing the glitch
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";

    game.martinis.push(this);
  }
  destroy() {
    this.element.remove();
    const index = game.martinis.indexOf(this);
    game.martinis.splice(index, 1);
  }
}

let martini = new Martini();
