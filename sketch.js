var car,wall;
var speed, weight;
var deformation; 
function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200, 10,10);
  car2=createSprite(50,300, 10,10);
  car3=createSprite(50,100, 10, 10);
  wall=createSprite(1600,200,20,60);
  wall2=createSprite(1600,300,20,60);
  wall3=createSprite(1600,100,20,60);
  speed=random (50,90);
  weight=random(400,1500);
  car.shapeColor="orange";
  car2.shapeColor="orange";
  car3.shapeColor="orange";
  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
}


function draw() {
  background("white");  
  drawSprites();
deformation=(0.5*weight*speed*speed)/22500
//I need help on calaculating the deformation;
  if(car.x>=1450){
car.collide(wall);
  }
  if(car2.x>=1450){
    car2.collide(wall2);
      }
      if(car3.x>=1450){
        car3.collide(wall3);
          }

  if(deformation>80&&deformation<180){
car.shapeColor="yellow";
car2.shapeColor="yellow";
car3.shapeColor="yellow";
  }
 
  else if(deformation>180){
car.shapeColor="black";
car2.shapeColor="black";
car3.shapeColor="black";
  }
  else if(deformation<80){
car.shapeColor="brown";
car2.shapeColor="brown";
car3.shapeColor="brown";
  }

}