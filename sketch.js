var tom, tomimg1, tomimg2,tomimg3;
var jerry, jerryimg1,jerryimg2,jeeryimg3;
var bgimage;
function preload() {
    //load the images here
bgimage = loadImage("images/garden.png");
tomimg1 = loadAnimation("images/cat1.png");
tomimg2 = loadAnimation ("images/cat2.png", "images/cat3.png");
tomimg3 = loadAnimation ("images/cat4.png");
jerryimg1= loadAnimation("images/mouse1.png");
jerryimg2= loadAnimation("images/mouse2.png","images/mouse3.png");
jerryimg3=loadAnimation("images/mouse4.png")
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(860,600);
    tom.addAnimation("sleeping", tomimg1);
    tom.scale= 0.2

     jerry= createSprite(200,600)
     jerry.addAnimation("standing",jerryimg1)
     jerry.scale= 0.15;
     
}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide
      if(tom.x-jerry.x < tom.width/2-jerry.width/2){
tom.addAnimation("moving", tomimg3);
tom.scale = 0.2;
tom.x = 320;
tom.changeAnimation("moving");

jerry.addAnimation("lastimage", jerryimg3);
jerry.scale = 0.15;
jerry.changeAnimation("lastimage");
      }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
tom.velocityX=-5
tom.addAnimation("running",tomimg2);
tom.changeAnimation("running")
jerry.addAnimation("teasing",jerryimg2);
jerry.frameDelay=25;
jerry.changeAnimation("teasing")
   }

}
