const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	floor = new Ground(400,800,800,20);

	trashcan1 = new Dustbin(650,640,20,100);
	trashcan2 = new Dustbin(675,680,50,20);
	trashcan3 = new Dustbin(700,640,20,100);

	crumple = new Paper(100,650,20);

	
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);

  floor.display();

  trashcan1.display();
  trashcan2.display();
  trashcan3.display();

  keyPressed();

  crumple.display();
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW) {

Matter.Body.applyForce(crumple.body,crumple.body.position,{x:85,y:-85});

}

}

