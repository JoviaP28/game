const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var sadPuppyMImage
var puppyMImage
var eggImage
var puppyM
var bgImage
var button

function preload() {
   puppyMImage=loadImage("images/PuppyM.png")
   sadPuppyMImage=loadImage("images/SadPuppyM.png")
   eggImage=loadImage("images/egg.png")
   bgImage=loadImage("images/background.png")
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
puppyM=createSprite(250,610,100,100)
puppyM.addImage("puppy",puppyMImage)
puppyM.scale=0.4
button=createImg("scissors.png")
button.position(220,30)
button.size(50,50)
button.mouseClicked(drop)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER)
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bgImage,width/2,height/2,490,690)
  rope.show();
  if(fruit!=null){
    image(eggImage,fruit.position.x,fruit.position.y,70,70);
  }
  
  Engine.update(engine);
  ground.show();
drawSprites()
 
   
}
function drop(){
  rope.break()
  fruit_con.detach()
  fruit_con=null
}