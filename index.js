window.onload = function () {
  function update () {
    frames++
    //console.log(frames)

    board.draw()
    snake.movement() 
    snake.drawSnake()

    generateNumerics()
    generateOperator()
    generateNumerics2()
    generateNonResult()
    generateResult()

    drawNumerics()
    drawOperator()
    drawNumerics2()
    drawNonResult()
    drawResult()

    takeNumeric()
    takeOperator()
    takeNumeric2()
    takeNonResult()
    takeResult()
  }
function startGame() {
  interval = setInterval(update, 1000 / 50);
}
startGame()  
}
