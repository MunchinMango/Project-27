
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic: true
	}
	bar = Bodies.rectangle(400,50,400,20,options)
	World.add(world,bar)
	
	bob1 = new Bob(560,600,40)
	bob2 = new Bob(480,600,40)
	bob3 = new Bob(400,600,40)
	bob4 = new Bob(320,600,40)
	bob5 = new Bob(240,600,40)

	rope1 = new Rope(bob1.body,bar,{x:160,y:0})
	rope2 = new Rope(bob2.body,bar,{x:80,y:0})
	rope3 = new Rope(bob3.body,bar,{x:0,y:0})
	rope4 = new Rope(bob4.body,bar,{x:-80,y:0})
	rope5 = new Rope(bob5.body,bar,{x:-160,y:0})

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 rect(bar.position.x,bar.position.y,400,20)
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}
function keyPressed(){
	if(keyCode===DOWN_ARROW){
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-200,y:255})
	}
  }