const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var hero;

function preload() {
//preload the images here
backgroundImg=loadImage("background.png")

}

function setup() {
  createCanvas(1300, 550);
  engine = Engine.create();
    world = engine.world;
  ground=new Ground(500,450,1000,20)
  hero=new Hero(400,300,50,50)

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
ground.display()
hero.display()
}

