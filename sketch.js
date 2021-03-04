var ball;
var database,pos,position
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    pos=database.ref("Ball/Position")
    pos.on("value",readposition)
    
}   

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
pos.set({
    x:position.x+x,
    y:position.y+y

})
}
function readposition(Data){
    position=Data.val()
    ball.x=position.x
    ball.y=position.y
}