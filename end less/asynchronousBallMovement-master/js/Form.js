class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton('play')
        this.greating = createElement('h2')
       this.title=createElement('h2')
    }
    hide(){
        this.greating.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
   
   this.title.html("Small AI")
    this.title.position(displayWidth/2-50,0)

   
   
   this.input.position(displayWidth/2-40,displayHeight/2-80)
   this.button.position(displayWidth/2+30,displayHeight/2)
   this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide() 
        player.name=this.input.value()
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
        this.greating.html("hello "+player.name)
        this.greating.position(displayWidth/2-70,displayHeight/4)
    })

}}