
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObject, stoneObject,groundObject, launcherObject;
var mango1,sling;
var world,boy;
// var launchingForce = 100;

function preload(){
	boy=loadImage("images/boy.jpg");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1200,120,30);
	mango3=new Mango(1200,90,20);
	mango4=new Mango(1400,100,40);
	mango5=new Mango(1300,120,30);

	sling=new Launcher(boy.body,{x:150,y:400});

	stoneObject=new Rock(150,400,50,50);

	treeObject=new Tree(1050,580);
  groundObject=new Ground(width/2,600,width,20);
 
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
  //Add code for displaying text here!
  // textSize(35);
  //text("Press Space to get a second chance to play",50,50)


  image(boy ,200,340,200,300);
  

  treeObject.display();

  stoneObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
  
  sling.display();

  
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}
