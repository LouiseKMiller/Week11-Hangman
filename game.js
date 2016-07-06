exports.randomWord = {
	words: ['word1', 'word2', 'word3', 'word4', 'word5'],
	pickWord: function(){
		var random = Math.floor(Math.random()*this.words.length);
		return this.words[random];
	}
}