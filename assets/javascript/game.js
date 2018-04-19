

var wordBank = ["Australia", "Iran", "Japan", "Korea", "Egypt", "Morocco", "Nigeria", "Senegal", "Tunisia", 
 "Mexico", "Panama", "Argentina", "Brazil", "Colombia", "Peru", "Uruguay", "Belgium", "Croatia", "Denmark", "England",
 "France", "Germany", "Iceland", "Poland", "Portugal", "Russia", "Serbia", "Spain", "Sweden", "Switzerland"];

 var randomTeam = wordBank[Math.floor(Math.random() * wordBank.length)];

var wordChoice = randomTeam.toLowerCase().split("");
console.log(wordChoice)
var underS;
var count = 0;
//empty array to store guesses
var answerArray = [];
var userGuess;
var lettersguessed = [];
var guessleft = 10;
var wins = 0;
var losses = 0;

//answer array with underscores
function startUp() { 
  for (var i = 0; i < randomTeam.length; i++)
  {
    answerArray[i] = "_";
  }
  
  underS = answerArray.join(" ");
  document.querySelector(".answer").innerHTML = underS;
  document.querySelector(".wins").innerHTML = wins;
  document.querySelector(".losses").innerHTML = losses;
  document.querySelector(".guessesleft").innerHTML = guessleft;

  }
  document.onkeyup = function(event){
  userGuess = event.key.toLowerCase();
  lettersguessed.push(userGuess);
  console.log(lettersguessed);
    
    document.querySelector(".lettersg").innerHTML = lettersguessed;
    guessleft--;  //decreases the amount of guesses left
    document.querySelector(".guessesleft").innerHTML = guessleft;

    
  for (var i = 0; i < wordChoice.length; i++){
    console.log(wordChoice[i]);
    if (wordChoice[i] === userGuess){
      console.log(wordChoice)
      answerArray[i] = userGuess;

    }
  
}
  document.querySelector(".answer").innerHTML = answerArray.join(" ");

  }

  console.log(randomTeam); 
  startUp();

