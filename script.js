/// These variables keep track of the player wins, computer wins, ties and the round winner.

let playerWin = 0;
let computerWin = 0;
let gameTies = 0;
let roundWinner = '';
let currentRound = 1;

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

function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }


/// This function play a round of the game by comparing the playerSelection to the computerSelection and giving an alert depending on the result of the comparison.
/// If the player didn't choose a valid option the round restarts.

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection === "PAPER" && computerSelection === "ROCK") || 
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
            
            playerWin ++;
            roundWinner = "player";
            currentRound ++;
            console.log(roundWinner);
    } 
    
    else if ((playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
             (playerSelection === "ROCK" && computerSelection === "PAPER") ||
             (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
            
            computerWin ++;
            roundWinner = "computer";
            currentRound ++;
            console.log(roundWinner);
    } 

    else if (playerSelection === computerSelection) {     
            gameTies ++;
            roundWinner = "tie";
            currentRound ++;
            console.log(roundWinner);
    }
}



   
/// UI
const playerSign = document.getElementById("playerSign")
const playerScore = document.getElementById("playerScore")
const computerSign = document.getElementById("computerSign")
const computerScore = document.getElementById("computerScore")
const paperBtn = document.getElementById("paperBtn")
const rockBtn = document.getElementById ("rockBtn")
const scissorsBtn = document.getElementById("scissorsBtn")
const round = document.getElementById("round")
const currentScore = document.getElementById("currentScore")

paperBtn.addEventListener("click", () => handleClick("PAPER"));
rockBtn.addEventListener("click", () => handleClick("ROCK"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));


function handleClick (playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
}


/// Function that declares the winner comparing computerWin to playerWin.

function gameWinner () {
    
    if (computerWin > 2) {
        alert ("The computer has won " + computerWin + " to " + playerWin + " with " + gameTies + " ties.")
    } 
    
    else if (playerWin > 2) {
        alert ("You have won " + playerWin + " to " + computerWin + " with " + gameTies + " ties.")
    } 
}


/// Coded by Ramon Aller August 31st 2022.