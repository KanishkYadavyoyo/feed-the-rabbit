var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
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
    cloud= createSprite(600 , 100 , 40,20);
    cloud.addImage("cloud",cloudImg);
    cloud.scale = 0.4;
    cloud.velocityX = -5;
    cloud.y= Math.round( random (10,100));
  }
  rabbit.collide(edges);
  
  drawSprites();
}