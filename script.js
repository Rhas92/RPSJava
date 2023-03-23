/// These variables keep track of the player wins, computer wins, ties and the round winner.

let playerWin = 0;
let computerWin = 0;
let gameTies = 0;
let roundWinner = '';
let currentRound = 1;
let gameWinner = '';

/// Function that returns either "ROCK", "PAPER" or "SCISSORS" as the computerSelection. 

function getComputerChoice() {
    
    let computerRandomChoice = Math.floor(Math.random() * 3);
    
    switch (computerRandomChoice) {
        case 0:
            return("ROCK");
        case 1:
            return("PAPER");
        case 2:
            return("SCISSORS");
    }
} 

/// Function that check if the game is over and who won.

function isGameOver() {
    if (playerWin === 5) {
        gameWinner = "you";
    } else if (computerWin === 5) {
        gameWinner = "computer";
    }
    if (playerWin === 5 || computerWin === 5) {   
        alert("Game Over! " + gameWinner + " won!")
    }
    return playerWin === 5 || computerWin === 5
  }
 

/// This function plays a round of the game by comparing the playerSelection to the computerSelection.

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection === "PAPER" && computerSelection === "ROCK") || 
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
            
            playerWin ++;
            roundWinner = "player";
            currentRound ++;
    } 
    
    else if ((playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
             (playerSelection === "ROCK" && computerSelection === "PAPER") ||
             (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
            
            computerWin ++;
            roundWinner = "computer";
            currentRound ++;
    } 

    else if (playerSelection === computerSelection) {     
            gameTies ++;
            roundWinner = "tie";
            currentRound ++;
    }
}

/// UI
const playerSign = document.getElementById("playerSign")
const playerScore = document.getElementById("playerScore")
const computerSign = document.getElementById("computerSign")
const computerScore = document.getElementById("computerScore")
const ties = document.getElementById("ties")
const paperBtn = document.getElementById("paperBtn")
const rockBtn = document.getElementById ("rockBtn")
const scissorsBtn = document.getElementById("scissorsBtn")
const round = document.getElementById("round")
const restartBtn = document.getElementById("restartBtn")
round.textContent = "The current round is: " + `${currentRound}`

///Event listeners for the buttons users can click to play + handleClick function

paperBtn.addEventListener("click", () => handleClick("PAPER"));
rockBtn.addEventListener("click", () => handleClick("ROCK"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));
restartBtn.addEventListener("click", restartGame);

function restartGame() {
    playerWin = 0;
    computerWin = 0;
    gameTies = 0;
    roundWinner = '';
    currentRound = 1;
    gameWinner = '';
    playerScore.textContent = "Player: " + `${playerWin}`;
    computerScore.textContent = "Computer: " + `${computerWin}`;
    ties.textContent = "Ties: " + `${gameTies}`;
    playerSign.textContent = "?";
    computerSign.textContent = "?";
    round.textContent = "The current round is: " + `${currentRound}`;
}

function handleClick (playerSelection) {
    if (isGameOver()) {   
        alert("Game Over! " + gameWinner + " won!")
    }
    else {
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        updateScore();
        updateSigns(playerSelection,computerSelection);
        isGameOver();
        round.textContent = "The current round is: " + `${currentRound}`;
    }
}

/// function that updates the score depending on who won

function updateScore(){
    if (roundWinner === "player"){

        playerScore.textContent = "Player: " + `${playerWin}`;

    } else if(roundWinner === "computer") {

        computerScore.textContent = "Computer: " + `${computerWin}`;

    } else if(roundWinner === "tie") {

        ties.textContent = "Ties: " + `${gameTies}`;

    }

}

///function that updates the signs depending on the player and computer selection

function updateSigns(playerSelection, computerSelection){   

    switch (playerSelection) {
        case "PAPER":
            playerSign.textContent = "🗞"
            break
        case "ROCK":
            playerSign.textContent = "✊"
            break
        case "SCISSORS":
            playerSign.textContent = "✄"
            break
    }

    switch (computerSelection) {
        case "PAPER":
            computerSign.textContent = "🗞"
            break
        case "ROCK":
            computerSign.textContent = "✊"
            break
        case "SCISSORS":
            computerSign.textContent = "✄"
            break
    }
}





/// Function that declares the winner comparing computerWin to playerWin.


/// Coded by Ramon Aller August 31st 2022.