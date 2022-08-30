/// This is pseudocode
/// I will make a game of Rock paper scissors.
/// First the user has to enter one of the three options.
/// The computer also must select from an array of choices randomly.
/// Create a function that compares the user input and the computer choice.
/// The program declares a winner for the round following the RPS rules. Rock beats scissors, Paper beats rock and Scissors beat paper.
/// This has to run until either the computer or the user have won 5 rounds.
///



/// Created a function that returns either "ROCK", "PAPER" or "SCISSORS". 

const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
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

getComputerChoice ();
console.log(computerSelection);


