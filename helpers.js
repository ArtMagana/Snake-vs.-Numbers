function generateNumerics() {
  if (!(frames === 250 * 1)) return
  for (var i = 0; i < 5; i+=1) {
    let numeric = new Numeric(0.5+(200 * i));
    numericBloc.push(numeric)
  }
}

function drawNumerics() {
  numericBloc.forEach(function(oneNumber){
    oneNumber.draw()
  })
}
function takeNumeric() {
  numericBloc.forEach(function(oneNumber){
    if(snake.isTouching(oneNumber)) {
      contador.push(oneNumber.number)
      console.log(contador)
      console.log(eval(contador.join('')))
      document.getElementById('score').innerHTML = contador.join('')
      document.getElementById('contador').innerHTML = parseFloat(eval(contador.join(''))).toFixed(2)
    }
  })
}

function generateNumerics2() {
  if (!(frames % 1200 === 750)) return
  for (var i = 0; i < 5; i+=1) {
    let numeric2 = new Numeric2 (0.5+(200 * i));
    numericBloc2.push(numeric2)
  }
}

function drawNumerics2() {
  numericBloc2.forEach(function(oneNumber2){
    oneNumber2.draw()
  })
}
function takeNumeric2() {
  numericBloc2.forEach(function(oneNumber2){
    if(snake.isTouching(oneNumber2)) {
      contador.push(oneNumber2.number)
      console.log(contador)
      console.log(eval(contador.join('')))
      document.getElementById('score').innerHTML = contador.join('')
      document.getElementById('contador').innerHTML = parseFloat(eval(contador.join(''))).toFixed(2)
    }
  })
}



function generateNonResult () {
  if (!(frames % 1200 === 1000)) return
    var elResultado = Math.floor(Math.random() * 3)

    if (elResultado === 0) {
      var randomArreglo = [1, 2]
      var primerRandom = randomArreglo[Math.floor(Math.random() * randomArreglo.length)]
      if (primerRandom === 1) {
        var segundoRandom = 2
      }
      if (primerRandom === 2) {
        var segundoRandom = 1
      }
    }

    if (elResultado === 1) {
      var randomArreglo = [0, 2]
      var primerRandom = randomArreglo[Math.floor(Math.random() * randomArreglo.length)]
      if (primerRandom === 0) {
        var segundoRandom = 2
      }
      if (primerRandom === 2) {
        var segundoRandom = 0
      }
    }

    if (elResultado === 2) {
      var randomArreglo = [0, 1]
      var primerRandom = randomArreglo[Math.floor(Math.random() * randomArreglo.length)]
      if (primerRandom === 0) {
        var segundoRandom = 1
      }
      if (primerRandom === 1) {
        var segundoRandom = 0
      }
    }
    console.log(elResultado)
    console.log(primerRandom)
    console.log(segundoRandom)

    let nonResult = new NonResult(0.5 + ((1000 / 3) * primerRandom), parseFloat(Math.floor(Math.random() * 100)).toFixed(2));
    resultNonBloc.push(nonResult)
    let nonResult2 = new NonResult(0.5 + ((1000 / 3) * segundoRandom), parseFloat(Math.floor(Math.random() * 100)).toFixed(2));
    resultNonBloc.push(nonResult2)
    let result = new Result(0.5 + ((1000 / 3) * elResultado));
    resultBloc.push(result)
}

function generateResult() {
  if (!(frames % 1200 === 1000)) return
}

function drawNonResult () {
  resultNonBloc.forEach(function (oneNonResult) {
    oneNonResult.draw()
  })
}

function drawResult() {
  resultBloc.forEach(function (oneResult) {
    oneResult.draw()
  })
}

function takeResult () {
  resultNonBloc.forEach(function (oneNonResult) {
    if (snake.isTouching(oneNonResult)) {
      console.log(contador)
      clearInterval(interval)
      interval = 0
    }
  })
}

function generateOperator() {
  if (!(frames % 1200 === 500)) return
  for (var i = 0; i < 3; i += 1) {
    let operator = new Operator(0.5 + ((1000/3) * i));
    operatorBloc.push(operator)
  }
}

function drawOperator() {
  operatorBloc.forEach(function (oneOperator) {
    oneOperator.draw()
  })
}

function takeOperator() {
  operatorBloc.forEach(function (oneOperator) {
    if (snake.isTouching(oneOperator)) {
      if (oneOperator.number == 0) {
      contador.push(')+')
      contador.unshift('(')
      }
      if (oneOperator.number == 1) {
      contador.push(')-')
      contador.unshift('(')
      } 
      if (oneOperator.number == 2) {
      contador.push(')/')
      contador.unshift('(')
      }
      if (oneOperator.number == 3) {
      contador.push(')*')
      contador.unshift('(')
      }
      console.log(contador)
      document.getElementById('score').innerHTML = contador.join('')
    }
    
  })
}
let contador = []
