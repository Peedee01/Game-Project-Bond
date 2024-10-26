// this file contains all the attributes of the player

class Player {
  constructor() {
    this.element = document.querySelector('#player');
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.left = 0;
    this.top = 0;
    this.speed = 10;
    this.direction = 0;
  }
  
  move() {
    switch (this.direction) {
      case "up":
        this.top -= this.speed;
        break;
      case "down":
        this.top += this.speed;
        break;
      case "left":
        this.left -= this.speed;
        break;
      case "right":
        this.left = + this.speed;
        break;
    }
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
  }
}

let player = new Player();



