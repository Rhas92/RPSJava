
/// Choices from the computer and player are stored in these variables.

const computerSelection = getComputerChoice();
const playerSelection = "ROCK";


/// Function that returns either "ROCK", "PAPER" or "SCISSORS" as the computerSelection. 

function getComputerChoice() {
    
    let computerRandomChoice = Math.floor(Math.random() * 3);
    
    switch (computerRandomChoice) {
        case 0:
            return("ROCK");
            break;
        case 1:
            return("PAPER");
            break;
        case 2:
            return("SCISSORS");
            break;
    }
} 

/// These variables keep track of the player wins, computer wins and ties.

let playerWin = 0;
let computerWin = 0;
let gameTies = 0;

/// Function that prompts the player to input a choice and is case insensitive since it always converts the string toUpperCase.

function getPlayerChoice () {
   return prompt ("Please enter a choice:").toUpperCase();
}

/// This function play a round of the game by comparing the playerSelection to the computerSelection and giving an alert depending on the result of the comparison.

function playRound(playerSelection, computerSelection) {
   
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    
    if ((playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        alert ("You selected: " + playerSelection + " " + "The computer selected: " + computerSelection + "." + " You won!");
        playerWin = playerWin + 1;
    } 
    
    else if ((playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")){
        alert ("You selected: " + playerSelection + " " + "The computer selected: " + computerSelection + "." + " You lost!")
        computerWin = computerWin + 1;
    } 

    else if (playerSelection === computerSelection) {
        alert ("You selected: " + playerSelection + " " + "The computer selected: " + computerSelection + "." + " No winner!")
        gameTies = gameTies + 1;
    }
}
   
/// Plays 5 rounds of the game logging in the console the score.

function game () {
    
    for (let i = 0; i < 5; i++){
        playRound ();
        console.log("Player wins: " + playerWin);
        console.log("Computer wins: " + computerWin);
        console.log("Rounds tied: " + gameTies);
    }
}

/// Function that declares the winner comparing computerWin to playerWin.

function gameWinner () {
    
    if (computerWin > playerWin) {
        alert ("The computer has won " + computerWin + " to " + playerWin + " with " + gameTies + " ties.")
    } 
    
    else if (playerWin > computerWin) {
        alert ("You have won " + playerWin + " to " + computerWin + " with " + gameTies + " ties.")
    } 
    
    else if (playerWin === computerWin) {
        alert ("This is a tie, reload and try again.")
    }
}

/// This section initializes the program.

game ();
gameWinner ();

///

