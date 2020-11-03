const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(800,480);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(780,240,480,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  for(var k =0, k =< innerWidth; k = k+ 80){
    divisions.push(new Div(k, height = divisionHeight/2, 10,divisionHeight));
  }
  
  for (var j = 40; j <=width; j=j+50){
  plinkos . push(new Plinko(j, 75) );
  }
  for (var j = 15; j <=width-10; j=j+50){
    plinkos . push(new Plinko(j, 175)) ;
  }
  
  for (var j = 0; j < particles. length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions. length; k++) {  
    divisions[k].display();
  }
  ground.display();
  drawSprites();
}