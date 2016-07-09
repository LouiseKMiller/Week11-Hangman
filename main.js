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
console.log(currentWord);

// create new instance of Word class for current Word-to-guess
var wordCheck = new Word(currentWord);

// set allGuesses to a blank array.  This will keep track of all user guesses
var allGuesses = ["w", "y"];

// create new instance of Letters class for current Word-to-guess
var letterCheck = new Letters(currentWord);
console.log("WELCOME TO HANGMAN!  YOU HAVE 10 TRIES TO GUESS THIS WORD")
console.log("letterCheck.displayWord(allGuesses): " + letterCheck.displayWord(allGuesses));
var limit = 10;
var count = 0;
var userWon = false;

function playGame(){
// inquire user - please guess a letter
    if ((count<limit) && (!userWon)) {
        inquirer.prompt([{
            name: "letter",
            message: "Please enter a letter: "
            }]).then(function(answers) {
            	// convert user input to lower case
            	var guess = answers.letter.toLowerCase();

            	// check to see that user entered a letter
                if (!wordCheck.validInput(guess)) {
                	console.log("Please make sure you enter a letter.");
                	// check to see if user already guessed that letter
                } else if (wordCheck.alreadyGuessed(guess, allGuesses)) {
            		console.log("You already guessed that letter.  Try again.");
            		console.log("Letters you have already guessed: " + allGuesses);
                	// check to see if user guessed a correct letter              	
                } else {
                	allGuesses.push(guess);
                	if (wordCheck.inWord(guess)) {
                		console.log("You guessed a correct letter.");
                		console.log("letterCheck.displayWord(allGuesses): " + letterCheck.displayWord(allGuesses));	
              			if (wordCheck.userWon(allGuesses)) {
              				userWon=true;
              			}
                	} else {
                	console.log("Sorry - that letter is not in the word.");
                	count++;
                	}
                }
                playGame();
            });
    } else {
    	if (userWon) {
    		console.log("hurrah! You won!");
            console.log("letterCheck.displayWord(allGuesses): " + letterCheck.displayWord(allGuesses));	
        } else if (count >= limit) {
        	console.log("too bad.  You lose.");
        }
        console.log("letterCheck.displayWord(allGuesses): " + letterCheck.displayWord(allGuesses));	
    }
}

playGame();





// 			// If user guessed a correct letter, update guessed word and see if user won
// 			if (hmgame.currentWord().includes(userGuess) == true) {
// 				hmgame.updateWord();
// 				hmgame.displayWord('#word', hmgame.userWordArray.join("&nbsp"));
// 				if (hmgame.currentWord() == hmgame.userWordArray.join("")) {
// 					hmgame.winGame();
// 				}
// 			}

// 			// If user guessed wrong letter, update list of guessed letters and decrement remaining tries
// 			else {		
// 				hmgame.triesRemain = hmgame.triesRemain-1;
// 				hmgame.allGuesses.push(userGuess);
// 				hmgame.displayWord('#triesLeft', hmgame.triesRemain)
// 				hmgame.displayWord('#guessList', hmgame.allGuesses)
// 				hmgame.soundAlarm();
// 				if (hmgame.triesRemain ==0) {
// 					hmgame.newGame();
// 				}
// 			}
// 		}

// 		// Invalid key entry.  Sound the alarm!
// 		else {
// 			hmgame.soundAlarm();
// 		}
// 	}