let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) return "rock";
  else if (random < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const input = prompt("Enter rock, paper, or scissors:").toLowerCase();
  return input;
}

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    console.log(`It's a tie! You both chose ${human}`);
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${human} beats ${computer}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${human}`);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`\nFinal Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (humanScore < computerScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a tie overall!");
  }
}
playGame();