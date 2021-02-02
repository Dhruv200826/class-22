const Engine  = Matter.Engine;
const World  = Matter.World;
const Bodies  = Matter.Bodies;

var myEngine,myWorld;
var Box

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

Box = Bodies.rectangle(100,200,50,50);
World.add(myWorld,Box);

var options = {
  isStatic:true
}
Ground = Bodies.rectangle(200,380,400,20,options);
World.add(myWorld,Ground);
var options = {
restitution:1
}
Ball = Bodies.circle(300,200,25,options);
World.add(myWorld,Ball);
console.log(Box)
}

function draw() {
  background("yellow");
  Engine.update(myEngine);
  rectMode(CENTER) ;
  rect (200,200,50,50) ;
  rect(Box.position.x,Box.position.y,50,50);
  rect(Ground.position.x,Ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(Ball.position.x,Ball.position.y,25,25);
  drawSprites();
}