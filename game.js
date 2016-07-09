exports.randomWord = {
	words: ['brush', 'golden lab', 'hot dog', 'avacado', 'portmanteau', "computer", "backpack", "mysql"],
	pickWord: function(){
		var random = Math.floor(Math.random()*this.words.length);
		return this.words[random];
	}
}