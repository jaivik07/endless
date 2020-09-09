var canvas,backgroundimg;
var gameState=0
var playerCount;
var database;
var form,player,game
var allplayers
var player1,player2,player3, player4,player

function preload(){
    p1=loadImage("images/black.png")
    p2=loadImage("images/green.jpg")
    p3=loadImage("images/red.jpg")
    p4=loadImage("images/pink.jpg")
    t1=loadImage("images/track.jpg")
  
  }

function setup() {
    canvas=createCanvas(displayWidth-20,displayHeight-30)
    database=firebase.database()
    game= new Game()
     game.getState()
     game.start()
}

function draw(){
if(playerCount===4){
    game.update(1)
   
}
if( gameState===1){
    clear()
    game.play()

}
}

