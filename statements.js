let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let board = new Board();
let snake = new Snake();
let result = new Result ();
let operator = new Operator ();
let interval, frames = 0
let theNumbers = []
