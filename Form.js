class Form {
constructor(){

}
display(){
    var Title = createElement('h2')
    Title.html('Car Racing Game')
    var Input = createInput('Name')
    var Button = createButton('Play')
    Input.position(130,160)
    Button.position(250,200)
    Button.mousePressed(function(){
        Input.hide()
        Button.hide()
        var Name = Input.value()
        playerCount = playerCount+1
        player.updateName(Name)
        player.updatePlayerCount(playerCount)
        var Greetings = createElement('h3')
        Greetings.html('Hello'+Name)
        Greetings.position(130,160)
    })
}
}