/////////car vars
var car, carfimg,carrimg,carlimg,carbimg;
//////vertical road vars
var road1,road2,road3,roadimg;
///horizontal road vars
var troad1,troad2,troadimg;
///parking vars
var pbumper,rightl,leftl,backl,parkingimg,parkingBG,parkingsign;
/// Restriction/instructions signs vars
var parkingh,parkinghimg,nocar,nocarimg;


function preload(){
  //car
carfimg=loadAnimation("carfront.png");
carrimg=loadAnimation("carrightside.png");
carlimg=loadAnimation("carleftside.png");
carbimg=loadAnimation("carback.png");
///vertical road
roadimg=loadImage("road.jpg");
///horizontal road
troadimg=loadImage("rotated road.webp");
///parking images
parkingimg=loadImage("parkin.png");
parkinghimg=loadImage("right parking.png");
///restrictions
nocarimg=loadImage("noCAR.png");
}
function setup() {
  createCanvas(1500,850);
  //////Vertical Road
    road1=createSprite(500,425,80,80)
    road1.addImage("roadimg",roadimg);
    road1.scale=0.65
    road2= createSprite(500,660,80,80)
    road2.addImage("roadimg",roadimg)
    road2.scale=0.65;
    road3=createSprite(500,70,80,80)
    road3.addImage("roadimg",roadimg)
    road3.scale=0.65;
   //////horizontal road
    troad1=createSprite(178,325,80,80)
    troad1.addImage("troadimg",troadimg);
    troad1.scale=0.5;
    troad2=createSprite(824,325,80,80)
    troad2.addImage("troadimg",troadimg)
    troad2.scale=0.5
    troad3=createSprite(1275,325,80,80)
    troad3.addImage("troadimg",troadimg)
    troad3.scale=0.5
   //////parking spot sprites
   parkingBG=createSprite(1125,554,240,220)
   leftl=createSprite(1000,549,10,250);
   leftl.shapeColor=(214, 215, 210);
   rightl=createSprite(1250,549,10,250);
   rightl.shapeColor=(214, 215, 210);
   backl=createSprite(1125,669,250,10);
   backl.shapeColor=(214, 215, 210)
   parkingsign=createSprite(1125,550,10,10)
   parkingsign.addImage("parkingimg",parkingimg)
   parkingsign.scale=0.50;
   pbumper=createSprite(1125,650,225,10)
   pbumper.shapeColor=(127, 127, 127)
  /////// Help 
parkingh=createSprite(500,200,30,30)
parkingh.addImage("parkinghimg",parkinghimg)
parkingh.scale=0.07
//////restriction
nocar = createSprite(200,325,80,80);
nocar.addImage("nocarimg",nocarimg)
nocar.scale=0.3;
//car
car=createSprite(500,700,80,80);
car.addAnimation("carfimg",carfimg);
car.scale=0.3;
}

function draw() {
  background("green");  

if(keyDown("RIGHT_ARROW")){
  car.velocityX=3;
  car.changeAnimation("carrimg",carrimg)
}
if(keyWentUp("RIGHT_ARROW")){
  car.velocityX=0
}


  drawSprites();
}