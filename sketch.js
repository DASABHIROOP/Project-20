var bg,sleep,brush,gym,eat,drink,bath,move;
var astronaut;
var bground;

function preload() {
bg = loadImage("iss.png");
sleep = loadImage("sleep.png")
brush = loadImage("brush.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
bath = loadAnimation("bath1.png","bath2.png");
move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,500);

  bground = createSprite(400,250);
  bground.addImage("bgImg",bg);
  bground.scale = 0.2;

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background("black");

  edges= createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addImage("brushing",brush);
    astronaut.changeImage("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  drawSprites();
  textSize(20);
  fill("white")
  text("Instructions:",10,20);
  text("Up Arrow = Brushing",10,45);
  text("Down Arrow = Gymming",10,75);
  text("Left Arrow = Eating",10,105);
  text("Right Arrow = Bathing",10,135);
  text("M key = Moving",10,165);
}