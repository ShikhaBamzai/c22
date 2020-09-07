const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ballOptions ={
    restitution: 5.0
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    ball = Bodies.rectangle(300,220,50,50,ballOptions);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rectMode(CENTER);
    rect(ball.position.x,ball.position.y,50,50);
}