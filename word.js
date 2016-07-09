//  word.js will perform the following:
//  check a user's input (on a per letter basis) to see if
//    1.  the user's input is a valid input (letter a-z, lower or upper case),
//        if valid, proceed.  if not, return error message
//    2.  whether the user has already chosen that letter,
//        if not, proceed. if yes, return error message
//    3.  whether the letter matches a letter in the currentWord
//        if matches, return true
//        if no match, return false

// Build constructor function that is the 'prototype' for each round
//     currentWord = randomly selected word to guess
//     allGuesses = array that keeps track of all user's guesses per round
// 
//
function WordCheck(currentWord) {
	this.currentWord = currentWord;
}

WordCheck.prototype.validInput = function(userGuess) {
	return ((userGuess.charCodeAt(0) > 96) && (userGuess.charCodeAt(0) < 123));
};

WordCheck.prototype.alreadyGuessed = function(userGuess, allGuesses) {
    return (allGuesses.includes(userGuess));
};

WordCheck.prototype.inWord = function (userGuess) {
	for (var i=0; (i < this.currentWord.length); i++) {
		if (userGuess.charCodeAt(0) == this.currentWord.charCodeAt(i)) {
			return true;
		}
	}
	return false;
};

WordCheck.prototype.userWon = function (allGuessesParam) {
	for (var i=0; (i < this.currentWord.length); i++) {
		if (!allGuessesParam.includes(this.currentWord.charAt(i))) {
			return false;
		}
	}
	return true;
};
module.exports = WordCheck;
//
