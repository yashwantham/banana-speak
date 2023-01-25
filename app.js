var btnTranslate = document.querySelector("#btn-translate"); //reference to html element(button)
var txtInput = document.querySelector("#txt-input"); 
var outputDiv = document.querySelector("#output");



function clickEventHandler() {
    outputDiv.innerText = "adjdlj " + txtInput.value;
};
//Event listener
btnTranslate.addEventListener("click",clickEventHandler)


