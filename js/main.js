const Hangmanhead = document.getElementById("head");
const Hangmanbody = document.getElementById("body");
const Hangmanarms = document.getElementById("arms");
const Hangmanlegs = document.getElementById("legs");
const playagain = document.getElementById("newGamebtn");
const newgamepop = document.getElementById("newGame");
const wordsEl = document.getElementById("words");
const wrongLettersEl = document.getElementById("letters");


let showLives = 5;

let correctanswer = '';





// array of chosen words
const words = ["JAVASCRIPT", "PROGRAM", "DEVELOPER", "DEVELOPER", "JSON", "RUBY", "PYTHON", ];

let selectedword = words[Math.floor(Math.random() * words.length)];
console.log(selectedword);

//correct letters array
const correctLetters = [];

//wrong letter array
const wrongLetters = [];

//display hidden word
function displaywords() {
    wordsEl.innerHTML = `${selectedword
        .split('').map(letter => ` 
             <div class="letters">
        ${correctLetters.includes(letter) ? letter : '_'}
</div>`)
//no commas
.join('')}
`;
//document.getElementById("words").innerHTML = selectedword;
}

displaywords();



//aphabet letter buttons

//aphabet on click function
function generateButtons() {
        let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
          `
            <button
              class="alphabetbuttons"
              id='` + letter + `'
              onClick="Guess('` + letter + `')"
            >
              ` + letter + `
            </button>
          `).join('');
      
        document.getElementById('alphabtn').innerHTML = buttonsHTML;
      }
      

generateButtons();


document.getElementById(".livesleft");

//chosen letter to appear
function Guess(chosenLetter) {
    correctLetters.includes(chosenLetter) === -1 ? correctLetters.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

   alert(selectedword);
    if (selectedword.indexOf(chosenLetter) >= 0) {
        displaywords();
    }
}


//var HangmanParts = [$("#head"), $("#body"), $("#arms"), $("#legs")];}