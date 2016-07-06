// 

function CheckLetters(currentWord) {
	this.currentWord = currentWord;
	this.userWordArray = [];
	}

CheckLetters.prototype.displayWord = function(allGuessesParam){
	for (var i=0; (i < this.currentWord.length); i++) {
		if (this.currentWord.charCodeAt(i)==32) 
			{this.userWordArray[i] = " ";
		} else { 
			if (allGuessesParam.includes(this.currentWord.charCodeAt(i))) {
				this.userWordArray[i] = this.currentWord.charCodeAt(i)}
			else
			this.userWordArray[i]= "_";
		}
	}
	return this.userWordArray;
};

module.exports = CheckLetters;
//
