var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector('#txt-input')
var outputDiv = document.querySelector('#output')

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Something wrong with the server! please try again after some time")
}

function clickHandler() {
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => outputDiv.textContent = json.contents.translated)
        .catch(errorHandler)
}

btnTranslate.addEventListener('click', clickHandler)
