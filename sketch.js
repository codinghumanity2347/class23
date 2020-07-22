//namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxOne;
var boxTwo;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    //new there is an object to be created!
    //immediately after new you write class name;
    boxOne = new Box(190, 50);
    boxTwo = new Box(10, 10);
}

function draw() {
    background(0);
    Engine.update(engine);
    boxOne.display();
    boxTwo.display();
}