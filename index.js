window.onload = function () {
  function update () {
    frames++

    board.draw()
    snake.movement() 
    snake.drawSnake()
    generateNumber()
    drawNumbers()
    touchFirstNumber()

  }
function startGame() {
  interval = setInterval(update, 1000 / 12);
}

startGame()  
}
