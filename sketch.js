var ball;
var database , position ;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
var Address = database.ref("ball/position")
Address.on("value",read,error);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeBase(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeBase(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeBase(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeBase(0,+1);
    }
    drawSprites();
}

function read(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function error(){
    console.log("error");
}
function writeBase(x,y){
var Address = database.ref("ball/position")
Address.set({
    x:position.x+x,
    y:position.y+y
})
}