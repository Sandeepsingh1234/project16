
var monkey , monkey_running
var fruit ,fruitImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  fruitImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas(600,600)
  
  //create a trex sprite
  monkey = createSprite(80,315,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  //create a ground sprite
  ground = createSprite(400,350,1200,20);
 
  ground.x = ground.width /2;
  ground.velocityX = -4;
  fruitGroup=new Group();
  obstacleGroup= new Group();
  
}


function draw() {
background("pink");
  
   
  
  
  
  
  // jump when the space key is pressed
  if(keyDown("space") ) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  monkey.collide(ground);
  
  //Spawn Clouds
  spawnfruit();
  spawnobstacle();
 drawSprites();
}


function spawnobstacle(){
  if(frameCount%300===0){
 // write your code here 
 var obstacle=createSprite(800,320,40,10)
  obstacle.velocityX=-2
   
 
   obstacle .addImage(obstacleImage)
    obstacle.scale=0.15
    obstacleGroup.add(obstacle)
   
  }
  }

function spawnfruit(){
  if(frameCount%80===0){
 // write your code here 
 var fruit=createSprite(600,250,40,10)
  fruit.velocityX=-2
   fruit.y=Math.round(random(120,200))
 fruit.addImage(fruitImage)
    fruit.scale=0.05
    fruit.depth=monkey.depth
    monkey.depth=monkey.depth+1
    fruitGroup.add(fruit);
  }
  }



