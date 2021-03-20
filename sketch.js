const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thief1,thief2,thief3,thief4;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/background2.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

  
    thief1 = new Thief(810, 350);
    thief2 = new Thief(810, 220);
    thief3 = new Thief(510, 350);
    thief4 = new Thief(510, 220);
   
    superman = new Superman(100,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

   
 
    
    thief1.display();
    thief2.display();
    thief3.display();
    thief4.display();

    

    superman.display();
}
