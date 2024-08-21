const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const rockBtn = document.getElementById('rock');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const humanScoreDisplay = document.getElementById("humanScoreDisplay");

let humanScore = 0;
let computerScore = 0;

// GET computer random choice
const getComputerChoice = () => {
  choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// EVALUATE Choices
const evalChoices = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    scoreDisplay.innerHTML = '<b>Tie!</b>';
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    humanScore++;
    scoreDisplay.innerHTML = '<b>You</b> win! 🔥';
  } else {
    computerScore++;
    scoreDisplay.innerHTML = '<b>Computer</b> win! 🤖';
  }

  humanScoreDisplay.innerHTML = `Your score: <b>${humanScore}</b>`;
  computerScoreDisplay.innerHTML = `Computer score: <b>${computerScore}</b>`;
}

// GET user choice
const getChoice = (choice) => {
  const computerChoice = getComputerChoice();

  evalChoices(choice, computerChoice);
}

scissorsBtn.addEventListener("click", () => getChoice("Scissors"));
rockBtn.addEventListener("click", () => getChoice("Rock"));
paperBtn.addEventListener("click", () => getChoice("Paper"));