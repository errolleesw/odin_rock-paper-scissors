function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // convert playerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

