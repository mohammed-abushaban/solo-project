var words = ["people","thing","glass","train","time","quiz","day","man","woman","video","finish","child","word","easy","great","really","maybe"];

var start = $("#start-btn");
var answer = $("#answer-btn");
var input = $("#input-word");
var mainWord = $("#main-word");
var timeDisplay = $('#time');
var next = $("#next-btn");
var userName = $("#user-name");
var userAge = $("#user-age");
var newGame =$("#new-game");
var result = $("#result");
var win = $("#win-photo");
var lose = $("#lose-photo");
var num = 0;


start.click(startGame);
answer.click(submitAnswer);
next.click(nextWord);
newGame.click(newRound);

var randomNumer = Math.floor(Math.random() * (words.length - 1));


function newRound() {
	win.addClass("hide");
	lose.addClass("hide");
	newGame.addClass("hide");
	num = 0;
	randomNumer = Math.floor(Math.random() * (words.length - 1));
	mainWord.text (shuffleWord(pickRandomWord()));

	startGame();
}

function startGame() {
	start.addClass("hide");
	answer.removeClass("hide");
	input.removeClass("hide");
	mainWord.removeClass("hide");
	next.removeClass("hide");
	userAge.addClass("hide");
	userName.addClass("hide");
	result.removeClass("hide");
	startTime();
	mainWord.text (shuffleWord(pickRandomWord()));
}


function pickRandomWord() {
	return (words[randomNumer]);
}


function shuffleWord(word) {
	var newWord = word.split("")	
    n = newWord.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = newWord[i];
        newWord[i] = newWord[j];
        newWord[j] = tmp;
    }
    return newWord.join("");
}

function submitAnswer() {
	if(input.val() === words[randomNumer]) {
		 ++num;
		 result.text("your score is " + num);
		randomNumer = Math.floor(Math.random() * (words.length - 1));
		mainWord.text (shuffleWord(pickRandomWord()));
		input.val("");
	}
}


function nextWord() {
	mainWord.text (" ");
	randomNumer = Math.floor(Math.random() * (words.length - 1));
	mainWord.text (shuffleWord(pickRandomWord()));
	input.val("");

}

function finishGame() {
	answer.addClass("hide");
	input.addClass("hide");
	mainWord.addClass("hide");
	next.addClass("hide");
	if (num >= 10) {
		win.removeClass("hide");
	} else {
		lose.removeClass("hide");
	}
	newGame.removeClass("hide");
}

function startTime() {
	var i = 60;
	var x = setInterval(function(){
		$('#time').text(i +"s");
		--i;
		if (i === -1) {
		clearInterval(x);
		finishGame();
		}
	},1000);

}

