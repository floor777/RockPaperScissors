function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    let index = getRandomMove();
}

function getRandomMove() {
    return Math.floor(Math.random() * 3);
}

computerPlay();