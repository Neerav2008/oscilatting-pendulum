const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

   /* box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);*/

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    chain = new Chain(bird.body,{x:200,y:100});
}

function draw(){
    background("brown");
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
   

   

    

    bird.display();
    //platform.display();
    //log6.display();
    chain.display();    
}