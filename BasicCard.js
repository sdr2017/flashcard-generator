//create constructor taking in front and back arguments
//front and back properties
var fs = require('fs');
var inquirer = require("inquirer");

var BasicCard = function(frontArg, backArg){
	this.front = frontArg;
	this.back = backArg;
};

module.exports = BasicCard;

