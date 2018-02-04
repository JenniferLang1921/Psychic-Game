//variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letter;
var playerGuess= [];

var emptyString = "";
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//pick a random letter and save it in emptyString variable
function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
var randomLetter;

while (emptyString.length < 1) {
  randomLetter = getRandomLetter();
  emptyString += randomLetter;
} 
console.log("Letter to guess:" + emptyString);
//note to self: above this line works!

//connect onkeyup with id and array
document.onkeyup = function(event) {
  var guess = document.getElementById("guessesSoFarDisplay");  //connects onkeyup event with location of #alreadyGuessed
  guess.textContent = event.key;  //textContent is a special property that makes text show up
  var guess = event.key;
  playerGuess.push(guess);  //stores the letters in the variable array for later use  
  var guessDisplay = playerGuess.join();
  document.getElementById("guessesSoFarDisplay").innerHTML = guessDisplay;
  
//   Example:  document.getElementById("demo2").innerHTML = "How are you?";

// Display Results

    document.getElementById("winsDisplay").innerHTML = wins;
    document.getElementById("lossesDisplay").innerHTML = losses;
    document.getElementById("guessesLeftDisplay").innerHTML = guessesLeft;  
    
    function resetGame(){
      guessesLeft = 9;
      playerGuess = [];
      emptyString = alphabet[Math.floor(Math.random() * alphabet.length)];
     console.log("Letter to guess:" + emptyString);

    } 
    if (emptyString === guess) {
      wins++;
      resetGame();
}
    if (emptyString !== guess) {
      guessesLeft--;
    }

    if (guessesLeft === 0) {
      losses++;
      resetGame();
    }
}
   
