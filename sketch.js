
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObject, paperObject, groundObject
var world;

    function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(200, 450, 70);
	groundObject = new ground(width/2, 670, width, 20);
	dustbinObject = new dustbin(1200,650);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  groundObject.display();
  dustbinObject.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.applyForce(paperObject.body, paperObject.body.position, {x:130, y:-145});
	}
}

