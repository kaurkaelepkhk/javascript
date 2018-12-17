/* let randomGenerator = Math.floor(Math.random() * 10) + 1;
let turns = 5;

while (turns > 0) {
    let user = prompt("Vali number yhest kymneni");
    let userInput = parseInt(user);

    if (userInput === randomGenerator) {
        alert("Õige vastus!");
        turns = 0;
    } else if (userInput > randomGenerator) {
        alert("Liiga kõrge!");
        --turns;
    } else if (userInput < randomGenerator) {
        alert("Liiga madal!");
        --turns;
    }
} */

// alert("Number oli " + randomGenerator);

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

const checkGuess = () => {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Eelnevad pakkumised: '
    }
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
        //õigesti
        lastResult.innerHTML="Arvasid õigesti!";
    } else if (guessCount === 10) {
        // lõpp
    } else (userGuess < randomNumber) {
        // liiga madal
    } else if (userGuess > randomNumber) {
        // liiga kõrge
    };
    guessCount++;
};

guessSubmit.addEventListener('click', checkGuess);
