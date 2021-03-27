const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,hexagon;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var block17,block18,block19,block20,block21;
var block22,block23,block24;
var block25;

var ball,ballImage;
var slingShot


function preload(){
  ballImage=loadImage("polygon.png")
}
function setup(){
    createCanvas(1366,625);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(685,615,1366,25);


    stand1=new Ground(600,450,250,15);

    block1=new Box(510,420,30,40)
    block2=new Box(540,420,30,40)
    block3=new Box(570,420,30,40)
    block4=new Box(600,420,30,40)
    block5=new Box(630,420,30,40)
    block6=new Box(660,420,30,40)
    block7=new Box(690,420,30,40)

    block8=new Box(540,380,30,40)
    block9=new Box(570,380,30,40)
    block10=new Box(600,380,30,40)
    block11=new Box(630,380,30,40)
    block12=new Box(660,380,30,40)

    block13=new Box(570,340,30,40)
    block14=new Box(600,340,30,40)
    block15=new Box(630,340,30,40)
  
    block16=new Box(600,300,30,40)


    stand2=new Ground(1100,350,250,15);
   
    block17=new Box(1040,320,30,40)
    block18=new Box(1070,320,30,40)
    block19=new Box(1100,320,30,40)
    block20=new Box(1130,320,30,40)
    block21=new Box(1160,320,30,40)
        
    block22=new Box(1070,280,30,40)
    block23=new Box(1100,280,30,40)
    block24=new Box(1130,280,30,40)

    block25=new Box(1100,250,30,40)

    var options={
        'isStatic':false,
        
    }
    ball=Bodies.circle(50,200,20,options)
    World.add(world,ball)

    slingShot=new Slingshot(this.ball,{x:100,y:200})
     
}

function draw(){
    Engine.update(engine);
    background("rgb(60, 46, 46)");
    
    ground.display();

    stand1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();


    stand2.display()
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    
    block22.display();
    block23.display();
    block24.display();

    block25.display();
    
    textSize(20)
    stroke("white")
    fill("white")
    text("DRAG THE HEXAGONAL STONE AND RELEASE IT, TO DESTROY THE BLOCKS !",300,50)

    
    imageMode(CENTER)
    image(ballImage,ball.position.x,ball.position.y,50,50)
stroke("black")
    slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(this.ball,{x:50,y:200});
        slingShot.attach(this.ball);

    }
}