var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  car=createSprite(20, 200, 40, 20);
  wall=createSprite(1500,200,60,hight/2);

  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {
  background(0);  
  car.velocityX=speed;

  if(wall.X*car.X<(car.width+wall.width)/2){
    car.velocityX=0;

var deformation= 0.5* weight*speed*speed/22509;

if(deformation>180){
  car.shapeColor=color(255,0,0);

}
if(deformation < 180 && >100){
  car.shapeColor = color(230,230,0);
}
if(deformation < 100){
  car.shapeColor = color(0,255,0);
}
  }


    
  
  drawSprites();
}