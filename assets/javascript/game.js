
// VARIABLES //
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','q','r','s','t','u','v','w','x','y','z'];

var word;                       // current word
var wordGuess = [];             // word user is building
var guessedLetters = [];        // letter the user has guessed
var remainingGuesses = 0;       // how many "lives" the user has left
var letterSpaces;               // spaces where correct letters go
var wins;                       // how many times the user has won
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



// GET THOSE ELEMENTS YO //
var timesWon = document.getElementById("wins")
console.log(timesWon);

// Problem: start and reset game to "factory settings"

function resetGame() {
    remainingGuesses = maxGuesses;
    startGame = false;

    word = Math.floor(Math.random() * (gameWords.length));

    //clear the letters the user guessed and the word being built

    guessedLetters = [];
    wordGuess = [];

    for (var i = 0; i < gameWords[word].length; i++) {
        wordGuess.push("_");

    };

    updateUserScreen();

};

