
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var bobImage

function preload()
{
	bobImage = loadImage("pixil-frame-0.png");
}

function setup() {
	createCanvas(800, 700);

	roof = createSprite(400,100,600,20);

	bobObject1 = createSprite(230,300,20,20);
	bobObject1.addImage(bobImage);
	bobObject1.scale = 2;

	//rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	
	bobObject2 = createSprite(310,300,20,20);
	bobObject2.addImage(bobImage);
	bobObject2.scale = 2;

	//rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0);

	bobObject3 = createSprite(390,300,20,20);
	bobObject3.addImage(bobImage);
	bobObject3.scale = 2;

	//rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0);

	bobObject4 = createSprite(470,300,20,20);
	bobObject4.addImage(bobImage);
	bobObject4.scale = 2;

	//rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2,0);

	bobObject5 = createSprite(550,300,20,20);
	bobObject5.addImage(bobImage);
	bobObject5.scale = 2;

	//rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2,0);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



