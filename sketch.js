var car,wall;
var speed,weight;
var deformation;


//var deformation
function setup() {
  createCanvas(800,400);
  speed= random (10,15);
  weight= random (400,800);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed
  car.shapeColor=color(255)
  wall=createSprite(800,200,60,200);
wall.shapeColor(80,80,80)
  //deformation =0.5*weight*speed*speed/22500


}

function draw() {
  background(0,0,0); 
 // car.velocityX=speed; 
if (wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  deformation =0.5*weight*speed*speed/22500;
  if(deformation<100){
    car.shapeColor=color(255,0,0);
  }
  if (deformation>100 && deformation<180){
  car.shapeColor=color(230,230,0);
  }
  if (deformation>180){
    car.shapeColor=color(0,255,0);
  }
}
   drawSprites();
}