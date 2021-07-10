
function preload() {

  seaImage = loadImage("sea.png");
  shipImage = loadImage(//list the names of pgn files that you want to load);



function setup(){
  createCanvas(400,400);
  
}


function draw() {
  background("blue");
 
  spriteName.addImage(seaImage);

  if(sea.x < 0 ){
    sea,x = sea.width/2;
  }
