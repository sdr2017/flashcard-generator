var fs = require('fs');
var inquirer = require("inquirer");
var BasicCard = require('./basicCard.js');

//prompt basic or cloze
//if basic or cloze, prompt question (front of card) associated with card type
	//create a for loop that runs through the question array
	//ask the back question, prompt a response
	//if response === back, console.log "correct!"


var cardType = function(){
	inquirer.prompt([{
		type: "input",
		message: "Cloze or Basic?",
		name: "card"
	}]).then(function(inquirerResponse){
		switch (inquirerResponse.card){
			case "basic": 
			debugger;
			getCardsFromFile();
			loopCards();
			break;

			case "cloze":
			console.log("chose cloze");
			break;
		}
	});
};

//var basicCards = []; //array to hold all the cards objects
var getCardsFromFile = function() {
	debugger;
	var cardData = fs.readFileSync("basicPresidents.txt", "utf8"); //grabbing the info from the text file
	var cardLines = cardData.split("\n"); //split the items in text file on a new line
	for(i = 0; i < cardLines.length; i++){
		var questionAnswerPair = cardLines[i].split(","); 
		var answer = questionAnswerPair[0];
		var question = questionAnswerPair[1];
		var newCard = new BasicCard(question, answer);
		//basicCards.push(newCard);
	}
	//return basicCards;
}; 	

// var loopCards = function(){
// 	debugger;
// 	for (i = 0; i < basicCards.length; i++){
// 		inquirer.prompt([{
// 			type: "input",
// 			message: basicCards[i].back,
// 			name: "back"
// 		}]).then(function(inquirerResponse){
// 			if (inquirerResponse.back === basicCards[i].back){
// 				console.log("correct!");
// 			}
// 			else {
// 				console.log("wrong answer :(");
// 			};

// 		});
// 	};
// };

cardType();


//console.log(basicCardsFromFile);