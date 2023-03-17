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
        outcomeMessage = "It'a tie!"
        console.log(outcomeMessage);
        return outcomeMessage;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        outcomeMessage = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
        console.log(outcomeMessage);
        return outcomeMessage;
    } else {
        outcomeMessage = `You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
        console.log(outcomeMessage);
        return outcomeMessage;
    }

}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));



function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors");
        

        if (!isValidSelection(playerSelection.toLowerCase())) {
            return "Invalid selection. Please choose Rock, Paper, or Scissors.";
        }
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.startsWith("You Win!")) {
            playerScore++;
        } else if (result.startsWith("You Lose!")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`Congratulations, you win the game! Final score: ${playerScore} - ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Sorry, you lose the game. Final score: ${playerScore} - ${computerScore}`);
    } else {
        console.log(`It's a tie! Final score: ${playerScore} - ${computerScore}`);
    }
}

function isValidSelection(selection) {
    const validChoices = ["rock", "paper", "scissors"];
    return validChoices.includes(selection);
}

