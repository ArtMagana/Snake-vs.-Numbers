function Board() {
  this.y = 0
  this.x = 0
  this.width = canvas.width
  this.height = canvas.height
  this.img = new Image()
  this.img.src = 'https://cdn.pixabay.com/photo/2016/01/19/21/08/starry-1150477_960_720.jpg'

  this.img.onload = function () {
    console.log(this)
    this.draw()
  }.bind(this)
  this.move = function () {
    this.y+=3
    if (this.height < this.y) {
      this.y = 0
    }
  }
  this.draw = function () {
    this.move()
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x, this.y - this.height, this.width, this.height)
  }
}

function Snake () {
  this.width = 20
  this.height = this.width
  this.x = (canvas.width / 2) - (this.width / 2)
  this.y = (canvas.height / 2) - (this.height / 2)
  this.xspeed = 0
  this.total = 0
  this.tail = [] 

  this.movement = function () {
    this.x += (this.xspeed * this.width)
    if (this.x+this.width > canvas.width) {
      this.xspeed = -1
    } else if (this.x < 0) {
      this.xspeed = 1
    }
  }
  this.direction = function (x) {
      this.xspeed = x
  }
  this.drawSnake = function () {
    ctx.fillStyle = 'white'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  this.isTouching = function (numeric) {
    return (this.y < numeric.y + numeric.parameter) 
  }
}




function Numeric (x, width) {
  this.y = 0
  this.x = x
  this.parameter = snake.width*4
  this.bloc = 8
  this.arreglo = []
  for (var i = 0; i < this.bloc; i++) {
    var count = 0;
    for (var j = 0; j < Math.floor(Math.random() * 1000); j++) {
      count++;
    }
    this.arreglo.push(j)
  }

  this.draw = function () {
    this.y+=3
    ctx.fillStyle = 'blue'
    for (let i=0; i <= canvas.width; i+=canvas.width/this.bloc){
      ctx.fillRect(i, this.y, (canvas.width / this.bloc) - 1, this.parameter)
      ctx.clearRect(i + (canvas.width / (this.bloc * 2)) - this.parameter / 2, this.y + this.parameter / 4, this.parameter, this.parameter / 2)
  }
    for (let i = 0; i < this.bloc; i++) {
      ctx.font = '20px Arial'
      ctx.fillStyle = 'black'
      ctx.fillText(this.arreglo[i], canvas.width / (this.bloc * 2) - 10 + (i * canvas.width / this.bloc - 1), this.y + this.parameter / 2 + 5, 100)
    }
  }
}

function Result () {
  //this.total++
}

function Operator () {
}

