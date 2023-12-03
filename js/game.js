class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro')
      this.gameScreen = document.getElementById('game-screen')
      this.endScreen = document.getElementById('game-end')
      this.height = 800
      this.width = 1678
      this.player = null
      this.obstacles = []
      //changed
      this.energys = []

      this.animateId = null
      this.score = 0
      this.lives = 7
      this.isGameOver = false
    }
  
    start() {
      this.startScreen.style.display = 'none'
      this.endScreen.style.display = 'none'
      this.gameScreen.style.display = 'block'
      this.gameScreen.style.height = `${this.height}px`
      this.gameScreen.style.width = `${this.width}px`
      console.dir(this.gameScreen)
      this.player = new Player(this.gameScreen)
      this.gameLoop()
    }
  
    gameLoop() {
      this.player.move()


//obstacle
      const nextObstacles = []
      this.obstacles.forEach(currentObstacle => {
        currentObstacle.move()
        if (currentObstacle.top < 800) {
          if (this.player.didCollide(currentObstacle)) {
            console.log('collision')
            currentObstacle.element.remove()
            this.lives -= 1
            if (this.lives <= 0) {
              this.isGameOver = true
            }
          } else {
            nextObstacles.push(currentObstacle)
          }
        } else {
          currentObstacle.element.remove()
          this.score += 10
        }
      })
      this.obstacles = nextObstacles
  
      if (this.animateId % 5 === 0) {
        this.obstacles.push(new Obstacle(this.gameScreen))
      }
  
      console.log(this.obstacles)






    //Energy added
/*
      const new_Energy = []
      this.energys.forEach(currentEnergy => {
        currentEnergy.move()
        if (currentEnergy.top < 800) {
          if (this.player.didCollide(currentEnergy)) {
            console.log('collision')
            currentEnergy.element.remove()
            this.lives += 1
            this.score -= 20
            new_Energy.push(currentEnergy)
          } 
        } 
      })
      this.energys = new_Energy
  
      if (this.animateId % 5 === 0) {
        this.energys.push(new Energy(this.gameScreen))
      }
      console.log(this.energys)
      */


  
      document.getElementById('score').innerText = this.score
      document.getElementById('lives').innerText = this.lives
  
      if (this.isGameOver) {
        this.gameScreen.style.display = 'none'
        this.endScreen.style.display = 'block'
        this.player.element.remove()
      } else {
        console.log(this.animateId)
        this.animateId = requestAnimationFrame(() => this.gameLoop())
      }
    }
  }


// 计算障碍物和能量数组中较长的长度


/*
// another solution
let maxLength = Math.max(this.obstacles.length, this.energy.length);

const nextObstacles = [];
const newEnergy = [];

for (let i = 0; i < maxLength; i++) {
    if (i < this.obstacles.length) {
        let currentObstacle = this.obstacles[i];
        currentObstacle.move();

        if (currentObstacle.top < 800) {
            if (this.player.didCollide(currentObstacle)) {
                console.log('collision with obstacle');
                currentObstacle.element.remove();
                this.lives -= 1;
                if (this.lives <= 0) {
                    this.isGameOver = true;
                }
            } else {
                nextObstacles.push(currentObstacle);
            }
        } else {
            currentObstacle.element.remove();
            this.score += 10;
        }
    }

    if (i < this.energy.length) {
        let currentEnergy = this.energy[i];
        currentEnergy.move();

        if (currentEnergy.top < 800) {
            if (this.player.didCollide(currentEnergy)) {
                console.log('collision with energy');
                currentEnergy.element.remove();
                this.lives += 1;
                this.score += 20;
                if (this.lives > 3) {
                    this.lives = 3;
                }
            } else {
                newEnergy.push(currentEnergy);
            }
        } 
    }
}

this.obstacles = nextObstacles;
this.energy = newEnergy;

if (this.animateId % 5 === 0) {
    this.obstacles.push(new Obstacle(this.gameScreen));
}

if (this.animateId % 50 === 0) {
    this.energy.push(new Energy(this.gameScreen));
}

console.log(this.obstacles);
console.log(this.energy);

document.getElementById('score').innerText = this.score;
document.getElementById('lives').innerText = this.lives;

if (this.isGameOver) {
    this.gameScreen.style.display = 'none';
    this.endScreen.style.display = 'block';
    this.player.element.remove();
} else {
    console.log(this.animateId);
    this.animateId = requestAnimationFrame(() => this.gameLoop());
}




}
}
*/