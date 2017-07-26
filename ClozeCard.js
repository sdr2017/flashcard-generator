
function ClozeCard(textArg, clozeArg){
	this.text = textArg;
	this.cloze = clozeArg;
	this.fullText = this.text + this.cloze;
};


module.exports = ClozeCard;