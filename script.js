const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const rockBtn = document.getElementById('rock');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const userScoreDisplay = document.getElementById("userScoreDisplay");
const endGameBtn = document.getElementById("endGame");

let userScore = 0;
let computerScore = 0;
let rounds = 0;

// GET computer random choice
const computerRandomChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// EVALUATE Choices
const calcWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
    scoreDisplay.innerHTML = `<b>Tie</b>! 🤝 `;
  } else if (
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Rock" && computerChoice === "Scissors")
  ) {
    userScore++;
    scoreDisplay.innerHTML = `<b>You</b> win! 🔥`;
  } else {
    computerScore++;
    scoreDisplay.innerHTML = `<b>Computer</b> wins! 🤖`;
  }

  userScoreDisplay.innerHTML = `🧘 Your score: <b>${userScore}</b>`;
  computerScoreDisplay.innerHTML = `💻️ Computer score: <b>${computerScore}</b>`;

  rounds++;
  if (rounds >= 5) {
    endGame(); // Call the endGame function
  }
}

// GET user choice
const getChoice = (userChoice) => {
  const computerChoice = computerRandomChoice();
  computerChoiceDisplay.textContent = `Computer choice is ${computerChoice}`;
  calcWinner(userChoice, computerChoice);
}

// END GAME
const endGame = () => {
  scissorsBtn.disabled = true;
  paperBtn.disabled = true;
  rockBtn.disabled = true;

  if (userScore > computerScore) {
    scoreDisplay.innerHTML = `<b>You</b> won the game! 🎉`;
  } else if (userScore < computerScore) {
    scoreDisplay.innerHTML = `<b>Computer</b> won the game! 🤖`;
  } else {
    scoreDisplay.innerHTML = `<b>Tie</b> Game! 🤝 `;
  }
}

scissorsBtn.addEventListener("click", () => getChoice("Scissors"));
rockBtn.addEventListener("click", () => getChoice("Rock"));
paperBtn.addEventListener("click", () => getChoice("Paper"));
