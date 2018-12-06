  function generateNumber() {
  if(!(frames % 100 === 0)) return
  let numeric = new Numeric (0, canvas.width)
  theNumbers.push(numeric)
}
function drawNumbers () {
  theNumbers.forEach(function(oneNumber){
    oneNumber.draw()
  })
}
function touchFirstNumber() {
  theNumbers.forEach(function(oneNumber){
    if (snake.isTouching(oneNumber)) {
      let firstNumber = Math.ceil(((snake.x + (snake.width) / 2)) / ((canvas.width / oneNumber.bloc) - 1)) - 1
      console.log(oneNumber.arreglo[Math.ceil(((snake.x + (snake.width) / 2)) / ((canvas.width / oneNumber.bloc) - 1)) - 1])
      //clearInterval(interval)
      //interval = 0
      
      
    }
  })
}
