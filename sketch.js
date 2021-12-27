
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ball;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var Ball_options = {
		isStatic:false,
		restitution:-11,
		friction:0,
		density:1.2
	}

	Engine.run(engine);
  
	groundObj =new Ground(625,600,windowWidth,20);
	Ball = Bodies.circle(200,100,20,Ball_options);
	Leftside = new Ground(900,530,20,120);
	Rightside = new Ground(800,530,20,120);
	World.add(world,Ball);
}


function draw() {
  rectMode(CENTER);
  background("lightPink");
  
  ellipse(Ball.position.x,Ball.position.y,20,20)

  groundObj.show();
  Leftside.show();
  Rightside.show();



  drawSprites();
 
}


function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(Ball, {x:0, y:0}, {x:50, y:-3})
	}

}
