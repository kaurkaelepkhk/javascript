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
const reset = document.querySelector('.reset');
const warning = document.querySelector('.warning');

let randomNumber = Math.floor(Math.random() * 100) + 1;

// let arr = [];

let guessCount = 1;

let lowOrHighText = 'Viimane pakkumine oli liiga ';

const checkGuess = () => {

    let userGuess = Number(guessField.value);

    /* arr.push(userGuess);
    console.log(arr); */
    if (guessCount === 1) {
        guesses.textContent = 'Eelnevad pakkumised: '
    } /* else if (userGuess === arr.includes) {
        warning.textContent = 'Juba kasutasid seda!';
        guessCount--;
    } */
    guesses.textContent += `${userGuess} `;
    if (userGuess === randomNumber) {
        //õigesti
        lastResult.textContent = 'Palju õnne, sa võitsid!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        gameOver();
    } else if (guessCount === 10) {
        // lõpp
        lastResult.textContent = 'Palju õnne, sa kaotasid!';
        lastResult.style.backgroundColor = 'red';
        lowOrHigh.textContent = '';
        gameOver();
    } else {
        lastResult.textContent = 'Vale vastus!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            // liiga madal
            lowOrHigh.textContent = lowOrHighText + 'madal';
        } else if (userGuess > randomNumber) {
            // liiga kõrge
            lowOrHigh.textContent = lowOrHighText + 'kõrge';
        };
    };
    guessCount++;
    guessField.value = '';
    // mängu lõpp
    function gameOver() {
        guessField.disabled = true;
        guessSubmit.style.display = 'none';
        reset.style.display = 'inline-block';
    }
    // mängu reset
    reset.addEventListener('click', function () {
        guessCount = 1;
        guessField.disabled = false;
        guessSubmit.style.display = 'inline-block';
        reset.style.display = 'none';
        // nulli teksti sisu
        lastResult.textContent = '';
        lastResult.style.backgroundColor = '';
        guesses.textContent = '';
    })
};

guessSubmit.addEventListener('click', checkGuess);
