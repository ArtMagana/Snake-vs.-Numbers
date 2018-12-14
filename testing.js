let arreglo = []

arreglo.push(Math.floor(Math.random() * 10))

for (let i=0; i<3; i++) {
 arreglo.push('+')
arreglo.push(Math.floor(Math.random() * 5))
}

console.log(arreglo)
console.log(eval(arreglo.join('')))

for (let i=0; i<arreglo.length; i++) {
  var count = 0
  for (let i=0; i<arreglo.length; i+=2) {
    count += arreglo[(i)]
  }

    count++
  }


console.log(count-1)

let numero = arreglo[0]
let numero2 = arreglo[2]
let operador = arreglo[1]

if (operador == '+') {
  resultado = numero + numero2
}
if (operador == '-') {
  resultado = numero - numero2
}
if (operador == '/') {
  resultado = numero / numero2
}
if (operador == '*') {
  resultado = numero * numero2
}
//console.log(resultado)

/*
Se debe establecer una forma en que se almacene
en un arreglo la secuencia de números y operadores

para que después mediante un método se elijan los números
y se pasen a una función de operación
*/

var numbers = [1, 2, 'numero'];

  function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

var random = shuffle(numbers);
console.log(random)
