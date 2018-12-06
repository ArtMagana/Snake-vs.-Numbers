  addEventListener('keydown', function keyPressed(e) {
    if (e.keyCode === 37) {
      snake.direction(-1)
    } else if (e.keyCode === 39) {
      snake.direction(1)
    }
  })