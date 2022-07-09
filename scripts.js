let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    let index = getRandomMove();
    return moves[index];
}

function getRandomMove() {
    return Math.floor(Math.random() * 3);
}

function getPlayerInput() {
    return prompt("Which move would you like to make(rock/paper/scissors)").toLowerCase();
}

function determineWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        trackScore("tie");
        return `You tied! ${playerSelection} matches ${computerSelection}`;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        trackScore("player");
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        trackScore("player");
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        trackScore("player");
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        trackScore("computer");
        return `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        trackScore("computer");
        return `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        trackScore("computer");
        return `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
    

}

function playRound(playerSelection, computerSelection) {
    return determineWinner(playerSelection, computerSelection);

}
function trackScore(winner) {
    

    if(winner === "player") {
        playerScore++;
    }
    else if(winner ==="computer") {
        computerScore++;
    }
    else {
        playerScore++;
        computerScore++;
    }

}

function game() {
    
    for(let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerInput(), computerPlay()));
        console.log("player: " + playerScore + "  |  " + "computer: " + computerScore);
    
    }
    if(playerScore === computerScore) {
        console.log("You tied");
    }
    else if(playerScore > computerScore) {
        console.log("You won");

    }
    else if(playerScore < computerScore) {
        console.log("You lost");
    }
    
}

console.log(game());
/* rock vs rock OK
   rock vs scissors OK
   rock vs paper OK
   paper vs rock OK
   paper vs scissors OK
   paper vs paper OK 
   scissors vs rock OK
   scissors vs scissors OK
   scissors vs paper OK

*/