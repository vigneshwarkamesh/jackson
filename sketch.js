var jake, jake_running,  ground, groundImage, invisibleGround, invisibleGround
function preload() {
  //pre-load images
  jake_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  groundImage = loadImage("path.png");

}
function setup(){
  createCanvas(400,400);
  //create sprites here
  ground = createSprite(200,200);
  ground.addAnimation("path", groundImage);
  ground.scale = 0.9;
  ground.velocityY = 8;
  ground.tint = 'yellow';
   invisibleGround = createSprite(370, 200, 100, 400);
  invisibleGround.visible = false;
  
  invisibleGround2 = createSprite(40, 200, 100, 400);
  invisibleGround2.visible = false;
jake = createSprite(200,300);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.6;

}


  function draw() {
  background("white");
    jake.x=World.mouseX;
  if(ground.y >= 470){
    ground.y = 5;
  }
    drawSprites();
  }
