const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var balls_option = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.6,
		density: 0.1,
	}
	ball = Bodies.circle(width/3,height/3,15,balls_option);
	World.add(world,ball);

	groundObj = new ground(width/2,height/1.1,width,20);
	leftSide = new ground(width/1.3,height/1.2,20,120);
	rightSide = new ground(width/1.5,height/1.2,20,120);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  fill("write");
  ellipse(ball.position.x, ball.position.y,15);
  
  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:4, y:-3})
	}
}



