

var wordBank = ["Australia", "Iran", "Japan", "Korea", "Egypt", "Morocco", "Nigeria", "Senegal", "Tunisia", 
 "Mexico", "Panama", "Argentina", "Brazil", "Colombia", "Peru", "Uruguay", "Belgium", "Croatia", "Denmark", "England",
 "France", "Germany", "Iceland", "Poland", "Portugal", "Russia", "Serbia", "Spain", "Sweden"];

 var randomTeam = wordBank[Math.floor(Math.random() * wordBank.length)];

var wordChoice = randomTeam.toUpperCase().split("");
var underS;
//empty array to store guesses
var answerArray = [];
var userGuess;
var lettersguessed = [];
var guessleft = 10;
var wins = 0;
var losses = 0;
var score = 0;
//answer array with underscores
function startUp() { 
  for (var i = 0; i < randomTeam.length; i++){
    answerArray[i] = "_";
  }
  
  underS = answerArray.join(" ");
  document.querySelector(".answer").innerHTML = underS;
  document.querySelector(".wins").innerHTML = wins;
  document.querySelector(".losses").innerHTML = losses;
  document.querySelector(".guessesleft").innerHTML = guessleft;
  }

  //Here is where I tried to make my reset button work but it messed up other things so I did not apply it.
  // function reset() {
  //   randomTeam = wordBank[Math.floor(Math.random() * wordBank.length)];
  //   console.log(randomTeam);
  //   console.log(wordChoice);
  //   for (var i = 0; i < wordChoice.length; i++){
     
  //     underS = answerArray.join(" ");
  //     console.log(underS);

  //   }
  //   document.querySelector(".answer").innerHTML = underS;
  //   guessleft = 10;
  //   lettersguessed = [];
  //   document.querySelector(".lettersg").innerHTML = lettersguessed;
  //   document.querySelector(".guessesleft").innerHTML = guessleft;
  //   }
  // Used this function to reload the page since the above did not work
  function reset (){
    location.reload();
  }
  document.onkeyup = function(event){
  userGuess = event.key.toUpperCase();
  lettersguessed.push(userGuess);
    
    document.querySelector(".lettersg").innerHTML = lettersguessed;
    guessleft--;  //decreases the amount of guesses left
    document.querySelector(".guessesleft").innerHTML = guessleft;

  //If the user guesses a letter from the word, that letter will replace the underscore
  for (var i = 0; i < wordChoice.length; i++){
    if (wordChoice[i] === userGuess){
      answerArray[i] = userGuess;
      score++;
      }   
    }
   if (wordChoice.length === score) {
     wins++;
   }

   if (guessleft === 0){
     losses++;
   }
   
   
//updates the answer field with letters guessed and records wins
document.querySelector(".answer").innerHTML = answerArray.join(" ");
document.querySelector(".wins").innerHTML = wins;
document.querySelector(".losses").innerHTML = losses;


  }

  startUp();
