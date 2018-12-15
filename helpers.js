function generateNumerics() {
  if (!(frames === (totalFrames/5))) return
  for (var i = 0; i < 5; i+=1) {
    let numeric = new Numeric(0.5+((1000/3) * i));
    numericBloc.push(numeric)
  }
}
function generateNumerics2() {
  if (!(frames % totalFrames === (totalFrames*3)/5)) return
  for (var i = 0; i < 5; i += 1) {
    let numeric2 = new Numeric2(0.5 + ((1000 / 3) * i));
    numericBloc2.push(numeric2)
  }
}
function generateResult() {
  if (!(frames % totalFrames === (totalFrames * 4) / 5)) return
}
function generateOperator() {
  if (!(frames % totalFrames === (totalFrames * 2) / 5)) return
  for (var i = 0; i < 3; i += 1) {
    let operator = new Operator(0.5 + ((1000 / 3) * i));
    operatorBloc.push(operator)
  }
}
function generateNonResult() {
  if (!(frames % totalFrames === (totalFrames * 4) / 5)) return
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

  let delta = 10
  let techoI = parseFloat(eval(contador.join('') + '+' + 1)).toFixed(2)
  let techoF = parseFloat(eval(contador.join('') + '+' + delta)).toFixed(2)
  let pisoI = parseFloat(eval(contador.join('') + '-' + 1)).toFixed(2)
  let pisoF = parseFloat(eval(contador.join('') + '-' + delta)).toFixed(2)

  let noContador1 = parseFloat(eval(contador.join(''))) + 1
  let noContador2 = parseFloat(eval(contador.join(''))) - 1

  let nonResult = new NonResult(0.5 + ((1000 / 3) * primerRandom), parseFloat(Math.random() * (delta) + noContador1).toFixed(Math.floor(Math.random() * 3)));
  resultNonBloc.push(nonResult)
  let nonResult2 = new NonResult(0.5 + ((1000 / 3) * segundoRandom), parseFloat(Math.random() * (-delta) + noContador2).toFixed(Math.floor(Math.random() * 3)));
  resultNonBloc.push(nonResult2)
  let result = new Result(0.5 + ((1000 / 3) * elResultado));
  resultBloc.push(result)
}

function drawNumerics() {
  numericBloc.forEach(function(oneNumber){
    oneNumber.draw()
  })
}
function drawNumerics2() {
  numericBloc2.forEach(function (oneNumber2) {
    oneNumber2.draw()
  })
}
function drawNonResult() {
  resultNonBloc.forEach(function (oneNonResult) {
    oneNonResult.draw()
  })
}
function drawResult() {
  resultBloc.forEach(function (oneResult) {
    oneResult.draw()
  })
}
function drawOperator() {
  operatorBloc.forEach(function (oneOperator) {
    oneOperator.draw()
  })
}

function takeNumeric() {
  numericBloc.forEach(function(oneNumber){
    if(snake.isTouching(oneNumber)) {
      contador.push(oneNumber.number)
      console.log(contador)
      console.log(eval(contador.join('')))
      document.getElementById('title').innerHTML = 'Your first number is ' + oneNumber.number
    }
  })
}
function takeNumeric2() {
  numericBloc2.forEach(function(oneNumber2){
    if(snake.isTouching(oneNumber2)) {
      contador.push(oneNumber2.number)
      console.log(contador)
      console.log(eval(contador.join('')))
      let evaluador = contador.length-2
      let anteEvaluador = contador.length-3
      console.log(contador[anteEvaluador])
      console.log(contador.slice(1,evaluador))
      if (contador[evaluador].includes('+')) {
        document.getElementById('title').innerHTML = eval(contador.slice(1,evaluador).join('')) + ' plus ' + oneNumber2.number
      }
      if (contador[evaluador].includes('-')) {
        document.getElementById('title').innerHTML = eval(contador.slice(1, evaluador).join('')) + ' minus ' + oneNumber2.number
      }
      if (contador[evaluador].includes('/')) {
        document.getElementById('title').innerHTML = eval(contador.slice(1, evaluador).join('')) + ' divided by ' + oneNumber2.number
      }
      if (contador[evaluador].includes('*')) {
        document.getElementById('title').innerHTML = eval(contador.slice(1, evaluador).join('')) + ' times ' + oneNumber2.number
      }      
    }
  })
}
function takeResult() {
  resultBloc.forEach(function (oneResult) {
    if (snake.isTouching(oneResult)) {
      document.getElementById('title').innerHTML = parseFloat(eval(contador.join(''))) + ' great job!'
    }
  })
}
function takeNonResult() {
  resultNonBloc.forEach(function (oneNonResult) {
    if (snake.isTouching(oneNonResult)) {
      console.log(contador)
      clearInterval(interval)
      interval = 0
      document.getElementById('title').innerHTML = 'Not smart enough!'
    }
  })
}
function takeOperator() {
  operatorBloc.forEach(function (oneOperator) {
    if (snake.isTouching(oneOperator)) {
      if (oneOperator.number == 0) {
      document.getElementById('title').innerHTML = 'an addition to ' + parseFloat(eval(contador.join(''))) 
      contador.push(')+')
      contador.unshift('(')
      }
      if (oneOperator.number == 1) {
      document.getElementById('title').innerHTML = 'a subtraction to ' + parseFloat(eval(contador.join('')))
      contador.push(')-')
      contador.unshift('(')
      } 
      if (oneOperator.number == 2) {
      document.getElementById('title').innerHTML = 'now divide your ' + parseFloat(eval(contador.join('')))
      contador.push(')/')
      contador.unshift('(')
      }
      if (oneOperator.number == 3) {
      document.getElementById('title').innerHTML = 'now multiplicate your ' + parseFloat(eval(contador.join('')))
      contador.push(')*')
      contador.unshift('(')
      }
      //console.log(contador)
    }
    
  })
}

let contador = []
let speed = 1.5
let totalFrames = 1500