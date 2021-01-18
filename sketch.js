const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var ball, ballImg, slingshot;
var basketballHoop, basketballHoopImg

var gameState = "onSling";
var bg = "sprites/bg.png";
var score = 0;

function preload() {
    
    basketballImg = loadImage("sprites/basketballHoop.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    
    ball = new Ball(200,50);

    //log6 = new Log(230,180,80, PI/2);
    

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    ball.display();
    basketballHoop.display();
    ground.display();
    bg.display();
    
    
    platform.display();
    //log6.display();
   

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


