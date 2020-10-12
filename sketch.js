const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var raindrops = [],umbrella;
var drops=[];
var thunder1,thunder2 ,thunderImg1 , thunderImg2 , thunderImg3;

function preload(){
  
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");


}

function setup(){
 
var canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  
    engine = Engine.create();
    world = engine.world;
  
thunderImg1 = createSprite(displayWidth/2,5,10,40);
thunderImg2 = createSprite(200,5,10,40);
thunderImg3 = createSprite(1100,5,10,40);

    umbrella = new Umbrella(250,200,100,500);
}

function draw(){
  createCanvas(1100,700);
  umbrella.display();
    
  var maxDrops=100;

  for(var i=0; i<maxDrops; i++){
      drops.push(new drop(random(0,400),random(0,400)));
  }
 
  Engine.update(engine);
  
  if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg1.addImage(thunder2);
                break;
        default: break;
      }
    }   
 
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunderImg2.addImage(thunder1);
                  break;
          case 2: thunderImg2.addImage(thunder2);
                  break;
          default: break;
        }
      }   
  
      if(frameCount % 10 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1:thunderImg3.addImage(thunder1);
                    break;
            case 2: thunderImg3.addImage(thunder2);
                    break;
            default: break;
          }
        } 

  for(var i = 0; i<maxDrops; i++) 
  { drops[i].showDrop(); drops[i].updateY() }
    drawSprites();
}   


