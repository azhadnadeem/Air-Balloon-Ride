var balloon,balloonImage1,balloonImage2;
var Database;
var position;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
 
  createCanvas(1500,700);
  Database=firebase.database();
  console.log(Database)
  Database.ref('balloon/position').on("value",readposition,showerror)

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    writePosition(0,+1);
  }

  
 // fill(0);
 // stroke("white");
  //textSize(25);
 // text("**Use arrow keys to move Hot Air Balloon!",40,40);
  drawSprites();
}

//function changePosition(x,y){
  //balloon.x = balloon.x + x;
  //balloon.y = balloon.y + y;
//}

function writePosition(x,y){
  Database.ref('balloon/position').set({'x':Position.x+x,'y':position.y+y})
}
function readposition(data){
  position=data.val()
  balloon.x=position.x
  balloon.y=position.y
}
function showerror(){
  console.log("error in conecting Database")
}
