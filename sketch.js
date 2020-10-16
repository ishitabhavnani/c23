const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var  myEngine, myWorld ;

var box1, box2; 
var ground;


function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();  //myEngine.world
  myWorld = myEngine.world;


  //Create new box objects using Box class
  box1 = new Box(200,200,50,50);
  box2 = new Box(240,100,50,50);

  //Create a ground using Ground class
  ground= new Ground(200,390,400,10);
}

function draw() {
  background("black");

  Engine.update(myEngine);

  fill ("red");
  box1.display();

  fill ("green");
  box2.display();

  fill("white");
  ground.displayGround();


}