function Board() {
  this.y = 0
  this.x = 0
  this.width = canvas.width
  this.height = canvas.height
  this.img = new Image()
  this.img.src = './Universo.jpg'

  this.img.onload = function () {
    console.log(this)
    this.draw()
  }.bind(this)
  this.move = function () {
    this.y += 2
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

function Snake() {
  this.width = 20 
  this.height = this.width
  this.x = (canvas.width / 2) - (this.width / 2)
  this.y = (canvas.height *(2/3)) - (this.height / 2)
  this.xspeed = 0
  this.total = 0
  this.tail = []

  this.movement = function () {
    this.x += (this.xspeed * this.width/6) //
    if (this.x + this.width > canvas.width) {
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
  this.isTouching = function (obj) {
   if ((this.y < obj.y + obj.height) &&
   (this.y > obj.y + obj.height - 2) &&
   (this.x < obj.x + obj.width) &&
   (this.x + this.width > obj.x)) {
     return true
    }
  }
}

function Numeric(x, number) {
  this.y = 0
  this.x = x
  this.blocs = 3
  this.width = canvas.width/this.blocs - 1
  this.height = 50
  this.number = Math.floor(Math.random()*10)

  this.draw = function () {
    this.y += speed
    ctx.fillStyle = 'blue'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.font = '35px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText(this.number, this.x + (1000/3/2), this.y + 35)
  }
}

function Numeric2(x, number) {
  this.y = 0
  this.x = x
  this.blocs = 3
  this.width = canvas.width / this.blocs - 1
  this.height = 50
  this.number = Math.floor(Math.random() * 10)

  this.draw = function () {
    this.y += speed
    ctx.fillStyle = 'blue'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.font = '35px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText(this.number, this.x + (1000 / 3 / 2), this.y + 35)
  }
}

function NonResult (x, number) {
  this.y = 0
  this.x = x
  this.blocs = 3
  this.width = canvas.width / this.blocs - 1
  this.height = 50
  this.number = number

  this.draw = function () {
    this.y += speed
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.font = '35px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText(this.number, this.x + (1000 / 3 / 2)-10, this.y + 35)
  }
}

function Result(x, number) {
  this.y = 0
  this.x = x
  this.blocs = 3
  this.width = canvas.width / this.blocs - 1
  this.height = 50
  //this.count = 5
  this.number = parseFloat(eval(contador.join(''))).toFixed(2)

  this.draw = function () {
    this.y += speed
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.font = '35px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText(this.number, this.x + (1000 / 3 / 2)-10, this.y + 35)
  }
}

function Operator(x, number) {
  this.y = 0
  this.x = x
  this.blocs = 3
  this.width = canvas.width / this.blocs - 1
  this.height = 50
  this.number = Math.floor(Math.random() * 4)


  this.draw = function () {
    this.y += speed
    ctx.fillStyle = 'green'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.font = '50px Arial'
    ctx.fillStyle = 'white'
    if (this.number == 0) {
      ctx.fillText('+', this.x + (1000 / 3 / 2), this.y + 42)
    }
    if (this.number == 1) {
      ctx.fillText('-', this.x + (1000 / 3 / 2), this.y + 38)
    }
    if (this.number == 2) {
      ctx.fillText('/', this.x + (1000 / 3 / 2), this.y + 40)
    }
    if (this.number == 3) {
      ctx.fillText('*', this.x + (1000 / 3 / 2), this.y + 55)
    }
  }
}

