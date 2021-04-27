const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var someElseThing;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(someElseThing){
        background(someElseThing);
    }  

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response=await fetch(" http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var hour1=await response.json();    
    var hour=hour1.datetime;
    var something2=hour.slice(11,13);
    if(something2>=04 && something2<=06){
        bg="sunrise1.png";
    }else if(something2>=06 && something2==08){
        bg="sunrise2.png";
        }else if(something2>=23 && something2==0){
            bg="sunrise10.png";
        }else if(something2==0 && something2<=03){
            bg="sunrise11.png";
        }else{
            bg="sunrise12.png";
            
        } 
    someElseThing=loadImage(bg); 

   
}
