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
    this.left = Math.floor(Math.random() * (game.width - this.width));
    this.top = Math.floor(Math.random() * (game.height - this.height));
    
    // preventing the glitch
    this.element.style.left = this.left + 'px';
    this.element.style.top = this.top + 'px';

    game.martinis.push(this);
  } 
  destroy() {
    this.element.remove();
    const index = game.martinis.indexOf(this);
    game.martinis.splice(index, 1);
  }
}