//create constructor taking in front and back arguments
//front and back properties
var fs = require('fs');
var inquirer = require("inquirer");

var BasicCard = function(frontArg, backArg){
	debugger;
	this.front = frontArg;
	this.back = backArg;
	this.print = function(){
	debugger;
		inquirer.prompt([{
			type: "input",
			message: this.front,
			name: "back"
		}]).then(function(inquirerResponse){
			if (inquirerResponse.back === this.back){
				console.log("Correct!");
			}
			else {
				console.log("Sorry, wrong answer.");
			};
		});
	};
	this.print();
};

module.exports = BasicCard;

