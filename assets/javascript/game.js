
// VARIABLES //
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','q','r','s','t','u','v','w','x','y','z'];

var currentWord;                // word user is trying to guess
var wordGuess = [];             // array of letters the user has guessed                                    correctly in the currentWord
var guessedLetters = [];        // letters the user has guessed
var remainingGuesses = 0;       // how many "lives" the user has left
var wins = 0;                   // how many times the user has won
var losses;                     // how many times the user has lost
var startGame = false;          // start/reset the game
var gameFinish = false;         // time to start the game again
const maxGuesses = 10;          // maximum amount of guesses the user gets

var gameWords = [               // game play words
    "westeros",
    "winterfell",
    "stark",
    "targaryen",
    "lannister",
    "wildling",
    "longclaw",
    "khaleesi",
    "dragon",
    "hodor"
];




// Problem: start and reset game to "factory settings"

function resetGame() {
    remainingGuesses = maxGuesses;
    startGame = false;

    console.log(remainingGuesses);

    word = Math.floor(Math.random() * (gameWords.length));
  

    //clear the letters the user guessed and the word being built

    guessedLetters = [];
    wordGuess = [];

    for (var i = 0; i < gameWords[currentWord].length; i++) {
        wordGuess.push("_");


        document.getElementById("youWin").style.cssText = "display: none";
        document.getElementById("youLose").style.cssText = "display: none";
        document.getElementById("tryAgain").style.cssText = "display: none";
    };

    updateDisplay();

};

function updateDisplay() {

    document.getElementById("wins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < wordGuess.length; i++) {
        document.getElementById("currentWord").innerText += wordGuess[i];
    }

    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("lettersGuessed").innerText = guessedLetters;
    if(remainingGuesses <= 0) {
        document.getElementById("youLose").style.cssText = "display: block";
        gameFinish: true;
    }

};



document.onkeydown = function (event) {
        if (gameFinish) {
            resetGame();
            gameFinish = false;
        } else {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                makeGuess(event.key.toLowerCase());
                updateDisplay();
                checkWin();
                checkloss();
            }
        }
    };


function makeGuess(alphabet) {
    if (remainingGuesses > 0) {
        if (!startGame) {
            startGame = true;
        }

    if (guessedLetters.indexOf(alphabet) === -1) {
        guessedLetters.push(alphabet);
        compareGuesss(alphabet);

        }

    }

    updateDisplay();
   

};

function compareGuesss(alphabet) {

    var positions = [];

    for (var i = 0; i < gameWords[currentWord].length; i++) {
        if(gameWords[currentWord][i] === alphabet) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuesses --;
    } else {
        for(var i = 0; i < positions.length; i++) {
            wordGuess[positions[i]] = alphabet;
        }
    }
};

function checkWin() {
    if(wordGuess.indexOf("_") === -1) {
        document.getElementById("youWin").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
        wins++;
        gameFinish: true;
    }
};

function checkloss()
{
    if(remainingGuesses <= 0) {
    document.getElementById("youLose").style.cssText = "display: block";
    document.getElementById("tryAgain").style.cssText = "display: block";
    gameFinish: true;
    }
}
