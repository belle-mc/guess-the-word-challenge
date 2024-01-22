const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messageAppear = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";

//Display the dots for the hidden letters
const placeholder = function (word) {
   const  placeholderLetters = [];
   for (const letter of word) {
    console.log(letter);
   placeholderLetters.push("●");
   } 
   wordProgress.innerText = placeholderLetters.join("");
    };

    placeholder(word);

    guessButton.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = textInput.value;
        console.log(guess);
        textInput.value = "";
    });