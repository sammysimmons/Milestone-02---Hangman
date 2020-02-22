function chooseWord(words) {
    return word[Math.floor(Math.random() * array.length)].toUpperCase()
}

function fillInWordWithLetter(letters, words) {
    return word.toLowerCase().split('').map(l => {
        if (l === letter) {
            return l.toUpperCase()
        }
        return '_'
    }).join(' ')
}
fillInWordWithLetter('', chooseWord(words))

// array of chosen words
const words = ["programmer", "HTML", "CSS", "Array", "Javascript", ];


const alphabetbuttons = [$("#a"), $("#b"), $("#c"), $("#d"), $("#e"), $("#f"), $("#g"), $("#h"), $("#i"), $("#j"), $("#k"), $("#l"), $("#m"), $("#n"), $("#o"), $("#o"), $("#p"), $("#q"), $("#r"), $("#s"), $("#t"), $("#u"), $("#v"), $("#w"), $("#x"), $("#y"), $("#z")];

//const HangmanParts = [$("#head"), $("#body"), $("#arms"), $("#legs")];




//var showLives = document.getElementById("livesleft");