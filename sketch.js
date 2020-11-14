var wall
var car
function setup() {
  createCanvas(800,800);
  wall =createSprite(400, 200, 90, 50);
  car = createSprite(600, 250, 50, 90);
  wall.shapeColor = "grey";
  car.shapeColor = "yellow"

  car.debug = true
  wall.debug = true
}

function draw() {
  background(255,255,255);  
  car.x = World.mouseX
  car.y = World.mouseY
  if (car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2 && 
    car.y - wall.y < car.height/2 + wall.height/2 && wall.y - car.y < car.height/2 + wall.height/2){
    car.shapeColor = "darkred"
  }
  else{
  car.shapeColor = "yellow"
  }
  drawSprites();
}