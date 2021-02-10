const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


var hammer;
var stone;
var plane;
var rubber;
var ball;
var sand;
var sand2;
var sand3;
var sand4;
var sand5;


function setup() {

	var canvas = createCanvas(1200,400);

	engine  = Engine.create();

	world   = engine.world;

	hammer  = new Hammer(100,100);
    
    stone   = new Stone(700,320);

	plane   = new Plane(600,height,1200,20,"red");

	rubber  = new Rubber(600,350,70);

	//creating sand object
	sand1    = new Sand(200,10,20);

	sand2   = new Sand(200,20,20);

	sand3   = new Sand(200,30,20);

	sand4   = new Sand(200,40,20);

	sand5   = new Sand(200,50,20);
	
	sand6   = new Sand(200,60,20);

	//Engine.run(engine);

	// ball=Bodies.rectangle(200,200,50,100,{isStatic:false});
	// World.add(world,this.ball)
  
}


function draw(){
    
    Engine.update(engine);
	background(0);
	stone.display();
   rubber.display();
   hammer.display();
	plane.display();
	sand1.display();
	sand2.display();
    sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();

    
	
}



