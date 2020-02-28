let wrongCounter = 0;
const newgamepop = document.getElementById("newGame");
let showLives = 5;
const wordsEl = document.getElementById("words");
const wrongLettersEl = document.getElementById("letters");
const womanhanging = document.getElementById("manhanging");


var HangmanParts = [$("#svg1"), $("#svg2"), $("svg3"), $("#svg4")];







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
    wordsEl.innerHTML = selectedword
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

        //svg to appear on failure
    } else {
        wrongCounter += 1;
        womanhanging.src = wrongCounter + '.svg';
        console.log(womanhanging.src)
        const bodyParts = document.getElementById(wrongCounter + 'svg');
        bodyParts.style.display = "block";

        document.getElementById(wrongCounter)
        console.log(bodyParts);
        console.log(HangmanParts);
        Gamewon();
        //GameLost();

    }

}

function Gamewon() {
    console.log("selectedword :", selectedword);
    console.log("WordsEl.innerHTML :", wordsEl.innerHTML);
    if (WordsEl.innerHTML === selectedword) {
        document.getElementById('newGame');
        newgamepop.style.display = "block";
    }
}