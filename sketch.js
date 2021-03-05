const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var max=100
var drop;
var drops=[]
function preload(){
  // manwalking=loadAnimation("walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png")
}

function setup(){
    var canvas = createCanvas(400, 1200);
    engine = Engine.create();
    world = engine.world;
    drop=new Drops(100,100,50)
    if(frameCount%150===0){
for (var i =0 ;i<max;i++){

  var  drop=new Drops(Math.round(random(0,400)),Math.round(random(0,400)),5)
   drops.push(drop)

}console.log(drops)

    }
   
}
function draw(){
    background(0)
    Engine.update(engine);
   for(var i=0;i<drops.length;i++){
    drops[i].display()
   
   }
   drop.display();
   //drops[0].display()
}   

