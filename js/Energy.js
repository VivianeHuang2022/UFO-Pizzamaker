class Energy {
    constructor(gameScreen) {
      this.gameScreen = gameScreen
      this.width = 120
      this.height = 80
      this.left = Math.floor(Math.random() * (1620 - this.width - 60) + 60)
      this.top = -100
  
      this.element = document.createElement('img')
      this.element.src = 'images/n_mushroom.png'
      this.element.style.position = 'absolute'
  
      this.element.style.height = `${this.height}px`
      this.element.style.width = `${this.width}px`
  
      this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
  
      this.gameScreen.appendChild(this.element)
    }
  
    move() {
      this.top += 12
      this.updatePosition()
      this.left += 10
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
    }
  }
  