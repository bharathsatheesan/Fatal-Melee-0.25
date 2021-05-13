class Home{
    constructor(){
        this.playButton = createButton("Play");
        this.characterButton = createButton("Character Select");
        this.volumeButton = createButton("Volume");
        this.gameTitle = createElement("h1");
        this.nameInput = createInput("Your name goes here...");
        this.selectCharacterButton = createButton("Select");
        this.characterScrollInstr = createElement("h3");
    }

    hideComp(){
        this.playButton.hide();
        this.characterButton.hide();
        this.volumeButton.hide();
        this.gameTitle.hide();
        this.nameInput.hide();
    }

    display(){
        this.selectCharacterButton.hide();
        this.characterScrollInstr.hide();

        this.characterButton.mousePressed(()=>{
            this.hideComp();
            var characterNo = 1;
            if(characterNo === 1){
                //have to add code to be donw for character number 1
            }
        })
    }
}