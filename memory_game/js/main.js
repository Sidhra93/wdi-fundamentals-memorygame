var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var score = 0;
var tries = 0;

var displayScore = function(){
	document.getElementById('spanScore').innerHTML = score + "/" + tries;
}

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
			score++;
		} 
		else{
			alert("Sorry try again.");
		}
		tries++;
		displayScore();
		if(confirm("Do you want to keep playing?") === true){
			resetBoard();
		}

};

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);	
	if (cardsInPlay.length === 2) {
		setTimeout(checkForMatch, 100);
	}
};

var createBoard = function(){
	displayScore();
	cardsInPlay = [];
	document.getElementById('game-board').innerHTML = "";
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

var resetBoard = function(){
	createBoard();
}

document.getElementById('reset').addEventListener('click', resetBoard);