const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const scoreDisplay = document.getElementById("scoreDisplay");
const roundsDisplay = document.getElementById("roundsDisplay");
const resultDisplay = document.getElementById("Result");

let userScore = 0;
let computerScore = 0;
let rounds = 0;

const choices = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

const calcScore = (userChoice) => {
  const computerChoice = getComputerChoice();
  let result;

  if (userChoice === computerChoice) {
    result = `It's a Tie! 🤝 Both chose ${userChoice}`;
    scoreDisplay.className = 'final-result tie';
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    userScore++;
    result = `You Win! 🔥 You chose ${userChoice}, Computer chose ${computerChoice}`;
    scoreDisplay.className = 'final-result won';
  } else {
    computerScore++;
    result = `Computer Wins! 🤖 You chose ${userChoice}, Computer chose ${computerChoice}`;
    scoreDisplay.className = 'final-result lost';
  }

  rounds++;
  scoreDisplay.textContent = `Score: You ${userScore} - Computer ${computerScore}`;
  roundsDisplay.textContent = `Round: ${rounds}/5`;
  resultDisplay.textContent = `Result: ${result}`;

  if (rounds >= 5) {
    endGame();
  }
};

const endGame = () => {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;

  if (userScore > computerScore) {
    scoreDisplay.textContent = `Final Result: You won the game! 🎉`;
    scoreDisplay.className = 'final-result won';
  } else if (userScore < computerScore) {
    scoreDisplay.textContent = `Final Result: Computer won the game! 🤖`;
    scoreDisplay.className = 'final-result lost';
  } else {
    scoreDisplay.textContent = `Final Result: It's a Tie! 🤝`;
    scoreDisplay.className = 'final-result tie';
  }
};

rock.addEventListener('click', () => calcScore('Rock'));
paper.addEventListener('click', () => calcScore('Paper'));
scissors.addEventListener('click', () => calcScore('Scissors'));
