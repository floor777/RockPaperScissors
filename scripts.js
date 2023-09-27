let playerScore = 0;
let computerScore = 0;
let roundResult = "";

let rockButton = document.getElementById("rockButton");

rockButton.addEventListener("click", () => playRound("rock", computerPlay()));
let paperButton = document.getElementById("paperButton");
paperButton.addEventListener("click", () => playRound("paper", computerPlay()));
let scissorsButton = document.getElementById("scissorsButton");
scissorsButton.addEventListener("click", () => playRound("scissors", computerPlay()));
let resultsDiv = document.getElementById("results");


let playerScoreParagraph = document.getElementById("playerScore");
let computerScoreParagraph = document.getElementById("computerScore");
let resultParagraph = document.getElementById("result");

// resultsDiv.appendChild(rockButton);
// resultsDiv.appendChild(paperButton);
// resultsDiv.appendChild(scissorsButton);

let winnerParagraph = document.getElementById("winner");

let playAgainButton = document.getElementById("playAgainButton");

let endGameMenu = document.getElementById("endGameMenu");
playAgainButton.addEventListener("click", () => resetGame());

function resetGame() {

    playerScore = 0;
    computerScore = 0;
    
    // playAgainButton.style.display = "none";
    // winnerParagraph.style.display = "none";
    endGameMenu.style.display = "none";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    rockButton.style.display = "block"
    paperButton.style.display = "block"
    scissorsButton.style.display = "block"
    playerScoreParagraph.textContent = "Player: " + playerScore;
    computerScoreParagraph.textContent = "Computer: " + computerScore;
    resultParagraph.textContent = "Result: The outcome of the round will be displayed here!";
}


function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    let index = getRandomMove();
    return moves[index];
}

function getRandomMove() {
    return Math.floor(Math.random() * 3);
}

function getPlayerInput() {
    let response = prompt("Which move would you like to make(rock/paper/scissors)").toLowerCase();
    if(checkForValidInput(response)) {
        return response;
    }
    else {
        getPlayerInput();
    }
}

function checkForValidInput(playerSelection) {
    if(playerSelection === 'paper' || playerSelection === 'rock' || playerSelection === 'scissors') {
        return true;
    }
    else {
        return false;
    }
}

function determineRoundWinner(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(!checkForValidInput(playerSelection)) {
        while(!checkForValidInput(playerSelection)) {
            playerSelection = prompt("Invalid player input. Please input a valid move(rock|paper|scissors").toLowerCase();
        }
        
    }
    
    if(playerSelection === computerSelection) {
        trackScore("tie");
        playerScoreParagraph.textContent = "Player: " + playerScore;
        computerScoreParagraph.textContent = "Computer: " + computerScore;
        roundResult = `You tied! ${playerSelection} matches ${computerSelection}`;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        trackScore("player");
        playerScoreParagraph.textContent = "Player: " + playerScore;
        roundResult = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        trackScore("player");
        playerScoreParagraph.textContent = "Player: " + playerScore;

        roundResult = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        trackScore("player");
        playerScoreParagraph.textContent = "Player: " + playerScore;
        roundResult = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        trackScore("computer");
        computerScoreParagraph.textContent = "Computer: " + computerScore;
        roundResult = `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        trackScore("computer");
        computerScoreParagraph.textContent = "Computer: " + computerScore;

        roundResult = `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        trackScore("computer");
        computerScoreParagraph.textContent = "Computer: " + computerScore;
        roundResult = `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
    resultParagraph.textContent = "Result: " + roundResult;
    checkForWinner();
    
}

function checkForWinner() {

    if (playerScore === 5 || computerScore === 5) {
        console.log('someone won')
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        rockButton.style.display = "none"
        paperButton.style.display = "none"
        scissorsButton.style.display = "none"
        endGameMenu.style.display = "flex";
        // playAgainButton.style.display = "block";
        if(playerScore === 5 && computerScore === 5) {
            console.log('tied ')
            
            winnerParagraph.innerText = "Tie!"
            winnerParagraph.style.display = "block"
        }
        else if(playerScore === 5) {
            rockButton.disabled = true;
            winnerParagraph.innerText = "Player wins!"
            winnerParagraph.style.display  = "block";
            console.log("You won");
    
        }
        else if(computerScore === 5) {
            rockButton.disabled = true;
            winnerParagraph.innerText = "Computer wins!"
            winnerParagraph.style.display = "block";
            console.log("You lost");
        }

    }
    
    
}

function playRound(playerSelection, computerSelection) {

    return determineRoundWinner(playerSelection, computerSelection);

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
    
    // for(let i = 0; i < 5; i++) {
        // "getPlayerInput()"
        console.log(playRound("rock", computerPlay()));
        console.log("player: " + playerScore + "  |  " + "computer: " + computerScore);
    
    // }
    
}

// game();
