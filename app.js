

var turtleX;
var turtleY;
var turtleHeading = 0;
var length;
var W = 800;
var H = 800;
var n = 2;

function setup() {
  createCanvas(W, H);
  turtleX = 0;
  turtleY = 0;
  background(0);
  strokeWeight(30);
  stroke(255,0,0);
  noLoop();
}

function draw() {

  length = W / n;

  for (var i = 1 ; i < n+1 ; i++){
    turnRight();
    oneCurveLeft();
  }
}

function oneCurveRight(){
  walk();
  turnRight();
  walk();
  turnRight();
  walk();
}

function oneCurveLeft(){
  walk();
  turnLeft();
  walk();
  turnLeft();
  walk();
}

function walk(){
  forward(length);
}

function turnLeft(){
  rotateTurtle(270);
}

function turnRight(){
  rotateTurtle(90);
}

function forward(amount) {
  var newX = turtleX + cos(radians(turtleHeading)) * amount;
  var newY = turtleY + sin(radians(turtleHeading)) * amount;
  line(turtleX, turtleY, newX, newY);
  fill(0);
  turtleX = newX;
  turtleY = newY;
}

function rotateTurtle(degrees) {
  turtleHeading += degrees;
}
