const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}`;
  }

  const winRules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (computerSelection === winRules[playerSelection]) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScores() {
  playerScoreText.textContent = `Player: ${playerScore}`;
  computerScoreText.textContent = `Computer: ${computerScore}`;
}

function checkWinner() {
  if (playerScore === 5) {
    resultDiv.textContent = '🎉 You won the game!';
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = '😞 Computer won the game!';
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const result = playRound(button.id);
    updateScores();
    resultDiv.textContent = result;
    checkWinner();
  });
});

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  resultDiv.textContent = '';

  buttons.forEach(button => button.disabled = false);
});