const MAX_SCORE = 20;
const MAX_NUMBER = 20;

let gameNumber = Math.trunc(Math.random() * MAX_NUMBER) + 1;
//TODO: Multiply MAX_NUMBER to get range between 0 ➡️ MAX_NUMBER then plus 1 to avoid have 0 number because the rage of random method is 0 to 1 (1 is exclude).
let scoreContent = document.querySelector(".score");
let scoreNumber = MAX_SCORE;
let highScoreContent = document.querySelector(".high-score");
let highScoreNumber = Number(highScoreContent.textContent);
let number = document.querySelector(".number");
let guessContent = document.querySelector(".guess");
let guessNumber = "";
let message = document.querySelector(".message");
const check = document.querySelector(".check");

const updateScore = () => {
    scoreNumber--;
    scoreContent.textContent = scoreNumber;
};

const displayMessage = (msg) => {
    message.textContent = msg;
};

const changeValues = (color, width, isRead, isDisabled) => {
    color && (document.querySelector("body").style.backgroundColor = `#${color}`);
    width && (number.style.width = `${width}rem`);
    guessContent.readOnly = isRead;
    check.disabled = isDisabled;
};

document.querySelector(".again").addEventListener("click", () => {
    scoreContent.textContent = MAX_SCORE;
    scoreNumber = MAX_SCORE;
    gameNumber = Math.trunc(Math.random() * MAX_NUMBER) + 1;
    number.textContent = "?";
    displayMessage("Start guessing...");
    guessContent.value = "";
    changeValues("222", 15, false, false);
});

check.addEventListener("click", () => {
    guessNumber = Number(guessContent.value.trim());
    console.log(highScoreNumber);
    if (scoreNumber > 0) {
        console.log(gameNumber);
        if (!guessNumber) {
            displayMessage("⛔ No number!");
            updateScore();
        } else if (guessNumber !== gameNumber) {
            displayMessage(guessNumber < gameNumber ? "📈 Too low!" : "📉 Too high!");
            updateScore();
        } else if (guessNumber === gameNumber) {
            changeValues("60b347", 30, true, true);
            displayMessage("🎉 Correct answer");
            number.textContent = gameNumber;
            highScoreNumber = gameNumber;
            if (highScoreNumber <= scoreNumber)
                highScoreContent.textContent = scoreNumber;
        } else if (guessNumber < 1 || guessNumber > MAX_NUMBER) {
            displayMessage("😁 Enter a number between 1 and 20!");
        }
    } else if (scoreNumber <= 0) {
        changeValues(null, null, true, true);
        displayMessage("🫠 No attempts available!");
    }
});
