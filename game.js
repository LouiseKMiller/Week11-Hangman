exports.randomWord = {
	words: ['brush', 'golden lab', 'hot dog', 'avacado', 'portmanteau'],
	pickWord: function(){
		var random = Math.floor(Math.random()*this.words.length);
		return this.words[random];
	}
}