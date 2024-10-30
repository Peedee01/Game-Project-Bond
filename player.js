// this file contains all the attributes of the player

class Player {
  constructor() {
    this.element = document.querySelector('#player');
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.left = 0;
    this.top = 300;
    this.speed = 12;
    this.direction = 0;
  } 
  
  move() {
    switch (this.direction) {
      case "up":
        if (this.top <= 300) {
          this.top = 300;
        } else {
          this.top -= this.speed;
        }
        break;
      case "down":
        if (this.top >= game.height - this.height) {
          this.top = game.height - this.height;
        } else {
          this.top += this.speed;
        }
        break;
      case "left":
        if (this.left <= this.width) {
          this.left = 0;
        } else {
          this.left -= this.speed;
        }
        break;
      case "right":
        if (this.left >= game.width - this.width) {
          this.left = game.width - this.width;
        } else {
          this.left += this.speed;
        }
        break;
    }
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
  }
}

let player = new Player();



