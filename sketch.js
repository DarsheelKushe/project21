var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(590,400);

    block1 = createSprite(75,380,140,30);
    block1.shapeColor = "red";

    block2 = createSprite(225,380,140,30);
    block2.shapeColor = "orange";

    block3 = createSprite(370,380,140,30);
    block3.shapeColor = "blue";

    block4 = createSprite(517,380,140,30);
    block4.shapeColor = "green";

   

    ball = createSprite(70,0,20,20);
    ball.shapeColor = "white";
    ball.velocityY = 9;

    ball.setCollider("circle",0,0,10);
    ball.debug = false;

    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    


    
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
        music.play();
       ball.velocityX = 4;
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
       music.play();
       ball.velocityX = -4;
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "blue";
       music.play();
       ball.velocityX = 4;
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
       music.play();
       ball.velocityX = -4;
    }
    
    
    drawSprites();
}
