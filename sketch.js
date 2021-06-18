var garden,rabbit;
var gardenImg,rabbitImg;
let apple , appleImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  if(keyDown("left"))  {
    rabbit.velocityX = -3
  }
  if(keyDown("right"))  {
    rabbit.velocityX = 3
  }
  if(frameCount%60 === 0){
    apple= createSprite(100 , 0 , 40,20);
    apple. addImage("apple",appleImg);
    apple.scale = 0.1;
    apple.velocityY = 5;
    apple.x= Math.round( random (10,650));
  }

  rabbit.collide(edges);
  
  drawSprites();
}