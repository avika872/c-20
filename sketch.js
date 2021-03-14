var mr,fr


function setup() {
createCanvas(800,400);
  mr=createSprite(500,300,90,80)
  fr=createSprite(300,100,50,80)
  mr.shapeColor="red"
  fr.shapeColor="green"
}

function draw() {
  background(0);
  mr.y=World.mouseY
  mr.x=World.mouseX
  console.log(mr.x-fr.x)
  if(mr.x-fr.x<mr.width/2 + fr.width/2
    && fr.x-mr.x<mr.width/2 + fr.width/2
    &&  mr.y-fr.y<mr.height/2 + fr.height/2
    && fr.y-mr.y<mr.height/2 + fr.height/2){
    mr.shapeColor="pink"
    fr.shapeColor="pink"
     }
 else{
  mr.shapeColor="red"
  fr.shapeColor="green"
 }




  drawSprites();
}