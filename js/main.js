const Hangmanhead = document.getElementById("head");
const Hangmanbody = document.getElementById("body");
const Hangmanarms = document.getElementById("arms");
const Hangmanlegs = document.getElementById("legs");
const playagain = document.getElementById("newGamebtn");
const newgamepop = document.getElementById("newGame");
const wordsEl = document.getElementById("words");
const wrongLettersEl = document.getElementById("letters");


let showLives = 5;







// array of chosen words
const words = ["JAVASCRIPT", "PROGRAM", "DEVELOPER", "DEVELOPER", "JSON", "RUBY", "PYTHON", ];

let selectedword = words[Math.floor(Math.random() * words.length)];
console.log(selectedword);

//correct letters array
let correctLetters = [];

//wrong letter array
let wrongLetters = [];

//display hidden word
function displaywords() {
    wordsEl.innerHTML =
        selectedword
        .split('').map(letter => `<div class="letters">${correctLetters.includes(letter) ? letter : '_'}</div>`)
        //no commas
        .join('');
    //document.getElementById("words").innerHTML = selectedword;
}

displaywords();



//aphabet letter buttons
function generateButtons() {
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
            `<button class = "alphabetbuttons"
id = '` + letter + `' 
onClick = "Guess('` + letter + `')" > ` + letter + ` </button>`)
        .join('');

    document.getElementById('alphabtn').innerHTML = buttonsHTML;
}


generateButtons();




//aphabet chosen letter to appear on click
function Guess(chosenLetter) {
    selectedword.includes(chosenLetter) ? console.log($, { chosenLetter }) :
        document.getElementById(chosenLetter).setAttribute('disabled', true);

    //alert(selectedword);
    if (selectedword.includes(chosenLetter)) {
        correctLetters.push(chosenLetter);

        displaywords();
    } else {
        if (!wrongLetters.includes(chosenLetter)) {
            wrongLetters.push(chosenLetter);
            wrongLettersEl();
        }
    }

}



//document.getElementById(".livesleft");


//var HangmanParts = [$("#head"), $("#body"), $("#arms"), $("#legs")];}