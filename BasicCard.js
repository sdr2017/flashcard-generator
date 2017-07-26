//create constructor taking in front and back arguments
//front and back properties
var fs = require('fs');
var inquirer = require("inquirer");

var BasicCard = function(frontArg, backArg){
	this.front = frontArg;
	this.back = backArg;
};

var readFile = function(cb) {
	fs.readFile("basicPresidents.txt", "utf8", function(err, data){
		if (err) throw err;
		var dataTxt = data.split("; ");
		for(i = 0; i < dataTxt.length; i++){
			var splitTxt= dataTxt[i].split(", ");
			console.log(splitTxt);
		};

	});
};

readFile();

module.exports = BasicCard;

