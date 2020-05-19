var words = ["location","volunteer","glass","train","awesome","quiz","center","remote","interesting","video","finish","solve","word","sprint","great","really","maybe"];



$("#start-btn").click(check);


function startGame() {

}

function pickRandomNumber() {
	return (Math.floor(Math.random() * (words.length - 1)));
}

function shuffleWord(word) {
	var newWord = word.split(""),
    n = newWord.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = newWord[i];
        newWord[i] = newWord[j];
        newWord[j] = tmp;
    }
    return newWord.join("");
}
