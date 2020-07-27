class Game{
    constructor(){
    }

    getState(){
        var gsref = database.ref("gameState");
        gsref.on("value", function (data){
            gamestate = data.val();
        } )
    }
    update(state){
        database.ref('/').update({
            gamstate: state,
        })

        
    }

async start(){
        if (gamestate === 0){
            player = new Player();
            var pcRef = await database.ref('playerCount').once("value");
            if (pcRef.exists()){
                playerCount = pcRef.val();
                player.getCount();
            } 
            form = new Form();
            form.display();
        }

        car1 = createSprite(100,200,25,25);
        car2 = createSprite(200,200,25,25);
        car3 = createSprite(300,200,25,25);
        car4 = createSprite(400,200,25,25);


        cars = [car1,car2,car3,car4];
 



 

    }

    play(){
        form.hide();
        
        Player.getPlayerinfo();
        if (allplayers !== undefined){
            
        
            var index = 0;
            var x = 0;
            var y = 0;
            for (var i in allplayers){
               index++;
               x = x + 200;
               y = displayHeight - allplayers[i].distance;
               cars[index - 1].x = x;
               cars[index  - 1].y = y;

               if (index = player.index){
                   cars[index-1].shapeColor = "red";
                   camera.position.x = displayWidth/2;
                   camera.position.y  = cars[index - 1].y;
                   
                 
               }




        }
    }

        if (KeyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
         


         
        drawSprites();
    

    }

   


}