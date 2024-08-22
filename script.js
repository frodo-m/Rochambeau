// Take inputs
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");

// Post outputs
const scoreDisplay = document.getElementById("score");
const roundsDisplay = document.getElementById("rounds");
const resultDisplay = document.getElementById("result");

let userScore = 0;
let computerScore = 0;
let rounds = 0;
const MAX_ROUNDS = 5;

// Generate computer choice
const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
};

// Evaluate the choices
const calcChoices = (userChoice) => {
  let computerChoice = getComputerChoice();
  let result;

  if (userChoice === computerChoice) {
    result = `It's a Tie! 🤝 Both chose ${userChoice}`;
    updateResultDisplay(result, 'tie');
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userScore++;
    result = `You Win! 🔥 You chose ${userChoice}, Computer chose ${computerChoice}`;
    updateResultDisplay(result, 'won');
  } else {
    computerScore++;
    result = `Computer Wins! 🤖 You chose ${userChoice}, Computer chose ${computerChoice}`;
    updateResultDisplay(result, 'lost');
  }

  rounds++;
  scoreDisplay.innerHTML = `Score: You ${userScore} - Computer ${computerScore}`;
  roundsDisplay.innerHTML = `Rounds: ${rounds}/${MAX_ROUNDS}`;

  if (rounds === MAX_ROUNDS) {
    displayScore();
  }
};

// Update display and CSS
const updateResultDisplay = (message, className) => {
  resultDisplay.innerHTML = message;
  resultDisplay.className = `final-result ${className}`;
};

const initGame = (e) => {
  const userChoice = e.target.id;
  calcChoices(userChoice);
};

const displayScore = () => {
  if (userScore > computerScore) {
    updateResultDisplay(`Final Result: You won the game! 🎉`, 'won');
  } else if (userScore < computerScore) {
    updateResultDisplay(`Final Result: Computer won the game! 🤖`, 'lost');
  } else {
    updateResultDisplay(`Final Result: It's a Tie! 🤝`, 'tie');
  }

  rockBtn.removeEventListener('click', initGame);
  paperBtn.removeEventListener('click', initGame);
  scissorsBtn.removeEventListener('click', initGame);
};

const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  rounds = 0;

  scoreDisplay.innerHTML = `Score: You ${userScore} - Computer ${computerScore}`;
  roundsDisplay.innerHTML = `Rounds: ${rounds}/${MAX_ROUNDS}`;
  resultDisplay.textContent = `Result: `;
  resultDisplay.className = '';

  rockBtn.addEventListener('click', initGame);
  paperBtn.addEventListener('click', initGame);
  scissorsBtn.addEventListener('click', initGame);
};

rockBtn.addEventListener('click', initGame);
paperBtn.addEventListener('click', initGame);
scissorsBtn.addEventListener('click', initGame);
resetBtn.addEventListener('click', resetGame);
