class Bullet {
  constructor(){
    this.element = document.createElement("div");
    this.element.classList.add("bullet");
    
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height; 
    
    // position at the players location
    this.left = player.left + player.width;
    this.top = player.top + 0.2 * player.height;
    this.speed = 14;
    
    game.gameArea.appendChild(this.element);
    this.element.style.left = this.left + 'px';
    this.element.style.top = this.top + 'px';

    game.bullets.push(this);
  }

  move() {
    this.left += this.speed;
    this.element.style.left = this.left + 'px';

    if (this.left >= game.width - this.width) {
      this.destroy();
    }
  }

  destroy() {
      this.element.remove();
      const index = game.bullets.indexOf(this);
      game.bullets.splice(index, 1);
    }
}

