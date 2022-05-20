class Game {
constructor(){

}
getGameState(){
  var Address = database.ref('gameState')
  Address.on('value',function(data){
    gameState = data.val()
  })
}
updateGameState(gs){
  var Address = database.ref('/')
  Address.update({
    gameState : gs
  })
}
Start(){
  if(gameState===0){
    player=new Player()
    player.getPlayerCount()
    form = new Form () 
    form.display()
  }
}
}