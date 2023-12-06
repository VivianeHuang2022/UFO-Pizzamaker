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
      this.lives = 10
      this.mutation = 0
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
      console.log('hello2')
      this.updateBackgroundImage()


//obstacle
      const nextObstacles = []
      this.obstacles.forEach(currentObstacle => {
        currentObstacle.move()
        if (currentObstacle.top < 800) {
          if (this.player.didCollide(currentObstacle)) {
            console.log('collision')
            currentObstacle.element.remove()
            this.lives -= 1
            this.mutation += 5
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
  
      if (this.animateId % 20 === 0) {
        this.obstacles.push(new Obstacle(this.gameScreen))
      }
  
      console.log(this.obstacles)



    //Energy added

      const new_Energy = []
      this.energys.forEach(currentEnergy => {
        currentEnergy.move()
        if (currentEnergy.top < 800) {
          if (this.player.didCollide(currentEnergy)) {
            console.log('collision with energy')
            currentEnergy.element.remove()
            this.lives += 1
            this.score -= 20
            this.mutation += 5
            new_Energy.push(currentEnergy)
          } 
          
          
        } 
      })
      //this.energys = new_Energy
  
      if (this.animateId % 27 === 0) {
        this.energys.push(new Energy(this.gameScreen))
      }
      console.log('hello', this.energys, this.animateId)

      document.getElementById('score').innerText = this.score
      document.getElementById('lives').innerText = this.lives
      document.getElementById('mutation').innerText = this.mutation
  
      if (this.isGameOver) {
        this.gameScreen.style.display = 'none'
        this.endScreen.style.display = 'block'
        this.player.element.remove()
        this.startMoneyRain()

      } else {
        console.log(this.animateId)
        this.animateId = requestAnimationFrame(() => this.gameLoop())
        this.stopMoneyRain()
      }
    
  }



  //image background updated
  updateBackgroundImage() {
    if (this.mutation >= 50) {
      this.gameScreen.style.backgroundImage = "url('../images/background_mutation_1.png')"; 
      this.player.updateImage('images/character_smallGirl.png'); 
    }
  }


  //money rain
 startMoneyRain() {
    const container = document.getElementById('money-rain-container');
    container.style.display = 'block';

    // moneyrain
    if(this.isGameOver = true){
      for (let i = 0; i < 100; i++) {
        let money = document.createElement('div');
        money.classList.add('money-rain');
        money.style.left = Math.random() * 100 + '%'; // random position
        money.style.animationDuration = Math.random() * 3 + 2 + 's'; // random time
        money.style.animationDelay = Math.random() * 5 + 's'; // random delay
        container.appendChild(money);
    }
    }
}

stopMoneyRain() {
    const container = document.getElementById('money-rain-container');
    container.style.display = 'none';
    container.innerHTML = ''; // clear 
}
}

//  startMoneyRain 
// stopMoneyRain 