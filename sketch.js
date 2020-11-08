var fixedRect,movingRect;

function setup() {

  createCanvas(800,400);
 fixedRect= createSprite(200, 200, 50, 50);
 fixedRect.shapeColor="yellow";
 movingRect=createSprite(100,200,50,50);
 fixedRect.shapeColor="yellow";
}

function draw() {
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  background(0);  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  else{
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";

  }
  drawSprites();
}