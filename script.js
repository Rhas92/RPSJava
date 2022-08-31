/// This is pseudocode
/// I will make a game of Rock paper scissors.
/// First the user has to enter one of the three options.
/// The computer also must select from an array of choices randomly.
/// Create a function that compares the user input and the computer choice.
/// The program declares a winner for the round following the RPS rules. Rock beats scissors, Paper beats rock and Scissors beat paper.
/// This has to run until either the computer or the user have won 5 rounds.
///

/// Choices from the computer and player are stored in these variables.

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

/// Function that returns either "ROCK", "PAPER" or "SCISSORS". 

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

/// Function that prompts the player to input a choice and is case insensitive since it always converts the string toUpperCase.

function getPlayerChoice () {
   return prompt ("Please enter a choice:").toUpperCase();
}

/// This function play a round of the game by comparing the playerSelection to the computerSelection and giving an alert depending on the result of the comparison.

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        return alert ("You choosed: " + playerSelection + " " + "The computer choosed: " + computerSelection + "." + " You won!");
    } 
    
    else if ((playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")){
        return alert ("You choosed: " + playerSelection + " " + "The computer choosed: " + computerSelection + "." + " You lost!")
    } 

    else if (playerSelection === computerSelection) {
        return alert ("You choosed: " + playerSelection + " " + "The computer choosed: " + computerSelection + "." + " No winner!")
    }
}
   
  console.log(playRound(playerSelection, computerSelection));