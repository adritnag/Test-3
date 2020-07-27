class Player{
    constructor(){
     this.name = null;
     this.distance = 0;
     this.index = null;

    }

    getCount(){
        var pref = database.ref("playerCount");
        pref.on("value", function (data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count,
        })
    }

    update(){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }


    static getPlayerinfo(){
        var playerInforef = database.ref('players');
        playerInforef.on("value",(data)=>{
            allplayers = data.val();
        })
        

    }


      
}