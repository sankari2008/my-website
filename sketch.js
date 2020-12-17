var fixedrectangle, movingrectangle;

function setup() {
  createCanvas(800,400);
 fixedrectangle= createSprite(400, 200, 50, 50);
 movingrectangle=createSprite(200,100,70,70);
 movingrectangle.shapeColor="pink";
 fixedrectangle.shapeColor="blue";
}

function draw() {
  
  background("white");
  movingrectangle.x=mouseX
  movingrectangle.y=mouseY
  drawSprites();
}