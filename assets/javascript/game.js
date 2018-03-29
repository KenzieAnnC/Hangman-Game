var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','q','r','s','t','u','v','w','x','y','z'];

var word;                       // current word
var guess;                      // word user is building
var guessedLetters = [];        // letter the user has guessed
var remainingGuesses = 0;       // how many "lives" the user has left
var letterSpaces;               // spaces where correct letters go
var wins;                       // how many times the user has won
var losses;                     // how many times the user has lost

var gameWords = [
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