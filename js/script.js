window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.querySelector('#restart-button')
    
  
    let game
  
    function startGame() {
      game = new Game()
      game.start()
    }
  
    startButton.addEventListener('click', function () {
      startGame()
    })
  
    restartButton.addEventListener('click', function () {
      location.reload()
    })
  
    document.addEventListener('keydown', event => {
      if (event.code === 'ArrowUp' || event.code === 'KeyW') {
    
        game.player.directionY = -5
      }
      if (event.code === 'ArrowDown' || event.code === 'KeyS') {
      
        game.player.directionY = 5
      }
      if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
       
        game.player.directionX = -5
      }
      if (event.code === 'ArrowRight' || event.code === 'KeyD') {
        
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
        
        game.player.directionY = 0
      }
      if (
        event.code === 'ArrowLeft' ||
        event.code === 'KeyA' ||
        event.code === 'ArrowRight' ||
        event.code === 'KeyD'
      ) {
        
        game.player.directionX = 0
      }
    })

// bullet shooting
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        const bullet = game.player.shoot()
        game.bullets.push(bullet)
        
  }
});


    //page link
    document.querySelector(".logo-img").addEventListener("click", function() {
      document.getElementById("game-intro-container").scrollIntoView();
  });

  })
  


