const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messageAppear = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

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
        messageAppear.innerText = "";
        const guess = textInput.value;
        const goodGuess = validateInput(guess);

       if (goodGuess) {
        makeGuess(guess);
       }
       textInput.value = "";
});

    const validateInput = function (input) {
        const acceptedLetter = /[a-zA-Z]/;
        if (input.length === 0) {
            messageAppear.innerText = "Please enter a letter";
    
          }  else if (input.length > 1) {
          messageAppear.innerText = "Please enter a single letter only";

           } else if  (!input.match(acceptedLetter)) { 
           messageAppear.innerText = "Please enter a letter from A to Z";

           } else {
            return input;
           }
          
        };

        const makeGuess = function (guess) {
            guess = guess.toUpperCase ();
            if (guessedLetters.includes(guess)) {
              messageAppear.innerText = "You already guessed that letter. Please try again";
            } else {
                guessedLetters.push(guess);
                console.log(guessedLetters);
                showGuessedLetters();
                updateWordInProgress(guessedLetters);
            }

            };

            const showGuessedLetters = function () {
                // Clear the list 
                guessedLettersElement.innerHTML = "";
                for (const letter of guessedLetters) {
                  const li = document.createElement("li");
                  li.innerText = letter;
                  guessedLettersElement.append(li);
                }
              };
              
              const updateWordInProgress = function (guessedLetters) {
                const wordUpper = word.toUpperCase();
                const wordArray = wordUpper.split("");
                const revealWord = [];
                for (const letter of wordArray) {
                  if (guessedLetters.includes(letter)) {
                    revealWord.push(letter.toUpperCase());
                  } else {
                    revealWord.push("●");
                  }
                }
                // console.log(revealWord);
                wordProgress.innerText = revealWord.join("");
                checkIfWin();
              };
              
              const checkIfWin = function () {
                if (word.toUpperCase() === wordProgress.innerText) {
                  messageAppear.classList.add("win");
                  messageAppear.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
                }
              };
