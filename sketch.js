const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground
var rect1,rect2,rect3;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world();

	var ball_options={
		restitution:0.5
	}

	rect1 = new Box(520,610,20,100);

	rect2 = new Box(660,610,20,100);

	rect3 = new Box(590,655,150,20);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(100,650,20,ball_options);
	world.add(world,ball);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  moveForward();
  rect1.display();
  rect2.display();
  rect3.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();

}

function moveForward(){
	if(keyDown("UP_ARROW")){
		Body.setStatic(ball,false);
		Matter.Body.applyForce(ball.Body.x,ball.Body.y,position,{x:85,y:85})
	}
}


