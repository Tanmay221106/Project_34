class Player {
constructor(){

}
getPlayerCount() {
  var Address = database.ref('playerCount');
  Address.on('value',function(data){
    playerCount = data.val()
  })
}
updatePlayerCount(pc) {
  var Address = database.ref('/');
  Address.update({
    playerCount:pc
  })
}
updateName(nm){
  var playerIndex = 'player'+playerCount
  var Address = database.ref(playerIndex)
  Address.set({
    name:nm
  })
}
}