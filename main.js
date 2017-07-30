var fs = require('fs');
var inquirer = require("inquirer");
var BasicCard = require('./basicCard.js');
var ClozeCard = require('./ClozeCard.js');

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
		var whatKindOfCard = inquirerResponse.card.toLowerCase();
		switch (whatKindOfCard){
			case "basic": 
				getBasicCardsFromFile();
				askQuestion();
			break;

			case "cloze":
				getClozeCardsFromFile();
				askClozeQuestion();
			break;
		}
	});
};


var basicCards = []; //array to hold all the cards objects
var getBasicCardsFromFile = function() {
	var cardData = fs.readFileSync("basicPresidents.txt", "utf8"); //grabbing the info from the text file
	var cardLines = cardData.split("\n"); //split the items in text file on a new line
	for(i = 0; i < cardLines.length; i++){
		var questionAnswerPair = cardLines[i].split(","); 
		var answer = questionAnswerPair[0].toUpperCase();
		var question = questionAnswerPair[1];
		var newCard = new BasicCard(question, answer);
		basicCards.push(newCard);
	};
}; 	


var index = 0;
function askQuestion(){
	if (index < basicCards.length){
		inquirer.prompt ([{
			name: "front",
			message: basicCards[index].front,
		}]).then(function(inquirerResponse){
			var response = inquirerResponse.front.toUpperCase();
			if (response === basicCards[index].back){
				console.log("Correct!");
				index++;
				askQuestion();
			}
			else {
				console.log("Incorrect!");
				index++;
				askQuestion();
			};
		});
	};
};


var clozeCards = []; 
var getClozeCardsFromFile = function() {
	var cardData = fs.readFileSync("clozePresidents.txt", "utf8"); //grabbing the info from the text file
	var cardLines = cardData.split("\n"); //split the items in text file on a new line
	for(i = 0; i < cardLines.length; i++){
		var questionAnswerPair = cardLines[i].split(","); 
		var answer = questionAnswerPair[0].toUpperCase();
		var question = questionAnswerPair[1];
		var newCard = new ClozeCard(question, answer);
		clozeCards.push(newCard);
	};
}; 	


var clozeIndex = 0;
function askClozeQuestion(){
	if (clozeIndex < clozeCards.length){
		inquirer.prompt ([{
			name: "question",
			message: "..." + clozeCards[clozeIndex].text,
		}]).then(function(inquirerResponse){
			var response = inquirerResponse.question.toUpperCase();
			if (response === clozeCards[clozeIndex].cloze){
				console.log("Correct! " + clozeCards[clozeIndex].fullText);
				clozeIndex++;
				askClozeQuestion();
			}
			else {
				console.log("Incorrect!" + clozeCards[index].fullText);
				clozeIndex++;
				askClozeQuestion();
			};
		});
	};
};



console.log(clozeCards);
cardType();



