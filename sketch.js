var tower,towerImage;
var ghost,ghostImage;
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup;
var invisible

function preload() {

towerImage = loadImage("tower.png");
doorImage = loadImage ("door.png");
climberImage = loadImage("climber.png");
ghostImage = loadImage("ghost-standing.png");

}

function setup () {
  createCanvas(600,600);
  
tower = createSprite(300,300,10,10);
tower.addImage(towerImage);
tower.velocityY = 1;
tower.scale = 1.5;

doorGroup = new Group();
climberGroup = new Group();

ghost = createSprite(200,200,10,10);
ghost.addImage(ghostImage);
ghost.scale = 0.3;

}

function draw() {
background(0);

if(tower.y > 600) {
tower.y = 300;
}

if (keyDown("space")){
ghost.velocityY -5;
}
ghost.velocityY = ghost.velocityY +.8

if (keyDown("left_arrow")){
ghost.x = ghost.x -5;
}

if (keyDown("right_arrow")){
ghost.x = ghost.x +5;
}

if(climberGroup.isTouching(ghost)){
ghost.velocityY = 0;
}


Doors();
drawSprites();

}

function Doors() {

if(frameCount % 250 === 0){
door = createSprite(200,-50,10,10);
door.addImage(doorImage);
door.velocityY = 1;
door.x = Math.round(random(100,500));
door.lifetime = 600;
doorGroup.add(door);

climber = createSprite(200,10,10,10);
climber.addImage(climberImage);
climber.velocityY = 1;
climber.lifetime = 600;
climberGroup.add(climber);
climber.x = door.x;
}
}

