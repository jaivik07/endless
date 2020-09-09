class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState')

        gameStateRef.on("value",function(data) {
            gameState=data.val()
        })

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var  playerCountRef=await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val()
                player.getCount()
            }
           
            form=new Form()
            form.display()
        }
        player1 = createSprite(100,200);
        player1.addImage("player1",p1)
        player2 = createSprite(300,200);
        player2 .addImage("player2 ",p2)
        player3 = createSprite(500,200);
        player3.addImage("player3",p3)
        player4 = createSprite(700,200);
        player4.addImage(" player4",p4)
        player = [player1, player2, player3, player4];
    }
    play(){
        form.hide()
     
       
        Player.getplayerinfo()

        if(allplayers !== undefined){
            var index=0
            var x=0
            var y
           //var displayposition=130
            for(var plr in allplayers){
                index=index+1
                x=x+200
                y=displayHeight-allplayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y

                if(index===player.index){

                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y

                }
               
            } 
           
        }
        if(keyIsDown(UP_ARROW)&&player.index !== null){
         player.distance += 50
         player.update()
        }
        drawSprites()
    }

    
}