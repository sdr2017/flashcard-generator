var getCardsFromFile = function() {
	debugger;
	var cardData = fs.readFileSync("basicPresidents.txt", "utf8"); //grabbing the info from the text file
	var cardLines = cardData.split("\n"); //split the items in text file on a new line
	var basicCards = []; //array to hold all the cards objects
	for(i = 0; i < cardLines.length; i++){
		var questionAnswerPair = cardLines[i].split(","); 
		var answer = questionAnswerPair[0];
		var question = questionAnswerPair[1];
		var newCard = new BasicCard(question, answer);
		basicCards.push(newCard);
	}
	//return basicCards;
};