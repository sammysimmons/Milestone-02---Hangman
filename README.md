# Milestone-02-project-Interactive-Frontend

Interactive Hangman Game
This Game is for educational purposes only. No styling templates have been used for this project. I chose hangman as this was one of my favourite games of my childhood. all graphic elements have also been designed using illustrator and exporting for web purposes

## Technologies

1.JavaScript
2.HTML
3.CSS
4.Jquery

## UX & UI

The design for this game is based around a coding theme i have designed and tailored to suit this game. By generating a Word which isnt visable, the letter buttons them become interactive, for the user to guess the letters in the word. ALl graphic elements are designed by myself in illustrator then exported for web purposes The game will also give you the option to restart once you have used all your lives up.

### both desktop and mobile friendly especially for touchscreen technology, as most smartphones do not have buttons now.

Press Play game on the start up page, this automatically generated a hidden word for you to uncover, but dont forget once all your lives are up its game over.

### Wireframe sketches
these can be accessed from the images folder in my github project.
- hangman design wireframe 02.jpeg
- hangman design wireframe 01.jpeg

## Features

When the game starts a random word is chosen and is assigned to selected word 
Also wrong counter is set to 0
Correct letters set to empty array
Wrong letters set to empty array 

On each turn the user chooses any letters from the alphabet btns  

If letter chosen is included in the selected word, this then pushes to the display line

It also pushes to array called correct letters as many times as the letter appears

If letter chosen is incorrect then wrong counter + 1 showing svgs

If the length of correct letters is equal to length of selected word = game won

If counter reaches 4 = Game over

Each iteration is in a loop which checks the conditions, which if false takes you to the next step

you can play with any device, by clicking the button elements, as most devices are now touch screen i have designed that with this in mind.

## additional features i would like to implement

Keyboard function so you dont have to rely on clicking on the buttons, this would make the game more user friendly across all devices.

Implement a lives counting functions, to tally up the lives you use.

A clue button, inwhich you can request a hint to the selectedword.

## Testing

All tests have been run manually through the console in google chrome. I have also utilising the debugger; on the lines the errors are appearing in the try and break down these errors further. Along with running the code through a syntax validator to pick up errors.
I found the debugger; test and debug tool to be the most efficient with breaking down problems, utilising the console/sources.

I have also had family members testing out the game, and playing with the intereactions of the game, to get feedback on the usibility and functions.

issue 01 - was getting the alphabet buttons to interact, i firstly built these into the html, but then after researching discovered this is not classed as best practice as you will have to duplicate instructions across each button which can get a little messy, and not very well structured. testing this function through the console running with jQuery selector log, you can see which letter has been selected from the "chosenLetter"

issue 02 - was getting the pop up function, to enable on failure or succeeding with the game my way around this was Each iteration is in a loop which checks the conditions, which if false takes you to the next step if succeeds it then goes to the valid '_'

issue 03 - SVG, firstly i built this into the html, with a full hangman, however i was also advised this is not good practise and should use Imagery or a PNG in its place, you can see from the mobile view the "hanging frame" i have left as an svg, however using media styling for larger screens i have used an SVG which i have exported from illustrator in replacement. I did however enjoy drawing the SVG manipulating the X and Y values.

issue 04 - was getting the hanging woman svg to appear on failure which has been implemented as a "Else" on the function Guess ChosenLetter, you can see this from my comments, to implement this SVG's appearance I implemented a counter function, to register the number of incorrect attempts which result in an SVG's appearance 

by checking Console.log throughout my project this helped to check if i was targeting the right element, some of these i have left in for examination purposes only.

## Deployment

The site is hosted using github pages, any additional or new commits will automatically be updated as this links to my master branch. I have done this via working with GitHub Desktop, changing my git repository name to match my username, this then enables me to publish live, through github pages.

## Credits

### Media
All media used is my own, designed and exported for web purposed with licensed design software

### Acknowledgement

Debugging tutorial - this debugging feature massively helped me to breakdown some of the hurdles i appeared stuck at and helped break down the problems i was encountering and would highly recommend the course implements this as a potential resource for students.
https://www.youtube.com/watch?v=AX7uybwukkk


SVG tutorial - this helped with my understanding of building an SVG in html, as i work with graphics daily, this was quite simple to get my head around utilising x and y axis - https://www.w3schools.com/graphics/svg_intro.asp

code validation - great tool for checking for syntax errors in your code https://esprima.org/demo/validate.html