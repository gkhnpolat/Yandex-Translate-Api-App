function UI(){

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.language = document.getElementById("language");




}

UI.prototype.changeUI = function(){
    
    //Arayuz Degisimi

    this.outputImage.src = `images/${this.languageList.value}.png`;

    //this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;

    //console.log(this.languageList.options[this.languageList.selectedIndex].textContent);
    //console.log(this.languageList.selectedIndex);

}

UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}