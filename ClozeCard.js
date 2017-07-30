var fs = require('fs');
var inquirer = require("inquirer");

function ClozeCard(textArg, clozeArg){
	this.text = textArg;
	this.cloze = clozeArg;
	this.fullText = this.cloze + this.text;
};


module.exports = ClozeCard;