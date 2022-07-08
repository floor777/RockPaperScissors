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
        return `You tied! ${playerSelection} matches ${computerSelection}`;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        return `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
    

}

function playRound(playerSelection, computerSelection) {
    return determineWinner(playerSelection, computerSelection);

}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(int i = 0; i < 5; i++) {
        playRound(getPlayerInput(), computerPlay());
        

    }
}

console.log(playRound(getPlayerInput(), computerPlay()));
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