const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var throwThing;
var ground;
var rblock;
var yblock,yblock2;
var oblock,Oblock2,oblock3;
var Gblock,Gblock2,Gblock3,Gblock4;
var Bblock,Bblock2,Bblock3,Bblock4,Bblock4;
var Pblock,Pblock2,Pblock3,Pblock4,pblock5,Pblock6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    rblock = new Red_block(200,200,200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  rblock.display();
  
  drawSprites();
 
}
