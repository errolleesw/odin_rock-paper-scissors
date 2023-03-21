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
        document.getElementById("outcome").innerHTML = outcomeMessage;
        document.getElementById("player-selection").innerHTML = playerSelection;
        document.getElementById("computer-selection").innerHTML = computerSelection;
        return outcomeMessage;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        outcomeMessage = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
        score ('player');
        console.log(outcomeMessage);
        document.getElementById("outcome").innerHTML = outcomeMessage;
        document.getElementById("player-selection").innerHTML = playerSelection;
        document.getElementById("computer-selection").innerHTML = computerSelection;
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("computer-score").innerHTML = computerScore;
        return outcomeMessage;
    } else {
        outcomeMessage = `You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
        score ('computer');
        console.log(outcomeMessage);
        document.getElementById("outcome").innerHTML = outcomeMessage;
        document.getElementById("player-selection").innerHTML = playerSelection;
        document.getElementById("computer-selection").innerHTML = computerSelection;
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("computer-score").innerHTML = computerScore;
        return outcomeMessage;
    }

}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


let playerScore = 0;
let computerScore = 0;
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    console.log(playerScore, computerScore);
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}

function score(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    console.log(playerScore, computerScore);
}


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

