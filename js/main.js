const showLives = document.getElementById(".livesleft");
const Hangmanhead = document.getElementById("head");
const Hangmanbody = document.getElementById("body");
const Hangmanarms = document.getElementById("arms");
const Hangmanlegs = document.getElementById("legs");
const playagain = document.getElementById("newGamebtn");
const newgamepop = document.getElementById("newGame");
const wordsEl = document.getElementById("words");
const wrongLetters = document.getElementById("letters");
const aplhabet = document.getElementById("alphabetbuttons");




// array of chosen words
const words = ["programmer", "HTML", "CSS", "Array", "Javascript", ];

let selectedword = words[Math.floor(Math.random() * words.length)];
console.log(selectedword);





//const alphabetbuttons = [$("#a"), $("#b"), $("#c"), $("#d"), $("#e"), $("#f"), $("#g"), $("#h"), $("#i"), $("#j"), $("#k"), $("#l"), $("#m"), $("#n"), $("#o"), $("#o"), $("#p"), $("#q"), $("#r"), $("#s"), $("#t"), $("#u"), $("#v"), $("#w"), $("#x"), $("#y"), $("#z")];
//const HangmanParts = [$("#head"), $("#body"), $("#arms"), $("#legs")];