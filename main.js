// 
var game = require('./game.js');
//
var Word = require('./word.js');

var Letters = require('./letter.js');

var inquirer = require('inquirer');

//
// User starts the game by typing node main.js
// First, generate a Word to guess
var currentWord = game.randomWord.pickWord();

// create new instance of Word class for current Word-to-guess
var wordCheck = new Word(currentWord);

// set allGuesses to a blank array.  This will keep track of all user guesses
var allGuesses = [];

// create new instance of Letters class for current Word-to-guess
var letterCheck = new Letters(currentWord);
console.log("WELCOME TO HANGMAN!  YOU HAVE 10 TRIES TO GUESS THIS WORD")
logWordSoFar("The word to guess :");
var limit = 10;
var count = 0;
var userWon = false;

function logWordSoFar(message){
    console.log(message + " " + letterCheck.displayWord(allGuesses).join(" "));  
    console.log(" ***************** ");
   
}

function playGame(){
// inquire user - please guess a letter
    if ((count<limit) && (!userWon)) {
        console.log("You have " + (limit-count) + " guesses left");
        inquirer.prompt([{
            name: "letter",
            message: "Please enter a letter: "
            }]).then(function(answers) {
            	// convert user input to lower case
            	var guess = answers.letter.toLowerCase();

            	// check to see that user entered a letter
                if (!wordCheck.validInput(guess)) {
                	console.log("Please make sure you enter a letter.");
                    console.log(" ***************** ");

                // check to see if user already guessed that letter
                } else if (wordCheck.alreadyGuessed(guess, allGuesses)) {
            		console.log("You already guessed that letter.  Try again.");
            		console.log("Letters you have used so far: " + allGuesses);
                    logWordSoFar("The word so far:");
     
                // check to see if user guessed a correct letter and/or won              	
                } else {
                	allGuesses.push(guess);

                    // check to see if user has won.  If so, set flag and go back to beginning
                	if (wordCheck.userWon(allGuesses)) {
                            userWon = true;

                    // if user has not won yet, check to see if guessed letter is in the word
                    } else if (wordCheck.inWord(guess)) {
                		console.log("You guessed a correct letter.");
                        console.log("Letters you have used so far: " + allGuesses);
                        logWordSoFar("The word so far:");
                    
                    // if you've gotten to this point, user has guessed an incorrect letter.  In this case,
                    // the count (number of tries so far) increases by one.
                	} else {
                	console.log("Sorry - that letter is not in the word.");
                    console.log("Letters you have used so far: " + allGuesses);
                    logWordSoFar("The word so far:");
               	    count++;
                	}
                }
                playGame();
            });

    // you arrive here if the user has either won or lost.
    } else {
    	if (userWon) {
    		console.log("hurrah! You won!");
            logWordSoFar("The word was:"); 
      } else if (count >= limit) {
        	console.log("too bad.  You lose.");
            logWordSoFar("The word was: "); 
        }
    }
}

playGame();

