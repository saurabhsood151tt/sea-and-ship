var seabg;
var ship, shipmoving;

function preload(){
seabg = loadImage("sea.png");
shipmoving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addImage(seabg);
  sea.scale= 0.3;

  ship = createSprite(100,230,30,30);
  ship.addAnimation("moving",shipmoving);
  ship.scale = 0.2;
}

function draw() {
  background("blue");
  sea.velocityX=-2;
  sea.velocityX=sea.velocityX+0.8;
 drawSprites();
}