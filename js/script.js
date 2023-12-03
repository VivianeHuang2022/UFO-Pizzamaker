window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')
  
    let game
  
    function startGame() {
      console.log('start game')
      game = new Game()
      game.start()
    }
  
    startButton.addEventListener('click', function () {
      startGame()
    })
  
    restartButton.addEventListener('click', function () {
      // startGame()
      location.reload()
    })
  
    document.addEventListener('keydown', event => {
      if (event.code === 'ArrowUp' || event.code === 'KeyW') {
        console.log('Go up !')
        game.player.directionY = -5
      }
      if (event.code === 'ArrowDown' || event.code === 'KeyS') {
        console.log('Go down !')
        game.player.directionY = 5
      }
      if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
        console.log('Go left !')
        game.player.directionX = -5
      }
      if (event.code === 'ArrowRight' || event.code === 'KeyD') {
        console.log('Go right !')
        game.player.directionX = 5
      }
    })
  
    document.addEventListener('keyup', event => {
      if (
        event.code === 'ArrowUp' ||
        event.code === 'KeyW' ||
        event.code === 'ArrowDown' ||
        event.code === 'KeyS'
      ) {
        console.log('Stop moving on Y')
        game.player.directionY = 0
      }
      if (
        event.code === 'ArrowLeft' ||
        event.code === 'KeyA' ||
        event.code === 'ArrowRight' ||
        event.code === 'KeyD'
      ) {
        console.log('Stop moving on X')
        game.player.directionX = 0
      }
    })
  })
  