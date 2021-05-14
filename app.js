// Prototype, Ajax, Callback

eventListeners();


function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);

    // Change
    document.getElementById("language").onchange = function(){
        // Arayuz Islemleri

        console.log("Event");
        UI.changeUI();

    }

}

const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
const ui = new UI();

function translateWord(e){

    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);

    translate.translateWord(function(err,response){
        if(err ){
            // Hata
            console.log(err);
        }
        else {
            //console.log(response);

            ui.diplayTranslate(response);
        }
    });

    e.preventDefault();
}