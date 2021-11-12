
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,20,ball_options)
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
	var ball_options = {
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2
	  }
	  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}

function hForce() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  }

function vForce() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
  }


