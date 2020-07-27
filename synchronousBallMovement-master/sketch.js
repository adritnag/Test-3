var database;
var form, player , game;
var gamestate = 0;
var playerCount;
var allplayers;
var distance = 0;
var car1, car2, car3, car4;
var cars = [];

function setup(){
  database = firebase.database();
  createCanvas(displayWidth - 20, displayHeight - 30);
  game = new Game();
  game.getState();
  game.start();
  

}
  

function draw(){
  background("white");
  if (playerCount === 4){
    game.update(1);
  }
  if (gamestate === 1){
    clear();
    game.play();
  }

  
}