class Bullet {
    constructor(gameScreen, player) {
      this.gameScreen = gameScreen;
      this.top = player.top + player.height/2;
      this.left = player.left + player.width;
      this.width = 20;
      this.height = 20;
      this.speed = 10;
  
      this.element = document.createElement('img');

      this.element.src = 'images/star-use1.png';
      this.element.style.position = 'absolute';
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      console.log( this.element.style.left );

      this.element.style.top = `${this.top}px`;
      this.element.style.backgroundColor = 'purple';
  
      this.gameScreen.appendChild(this.element);
    }
  
    move() {
      this.left += this.speed;
  
     // if (this.left > this.gameScreen.offsetWidth) {
      //  this.element.remove(); // if bullet leave screen , remove it
     // }
      this.element.style.left = `${this.left}px`;
    }
 

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect()
    const obstacleRect = obstacle.element.getBoundingClientRect()

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true
    } else {
      return false
    }
  }
}