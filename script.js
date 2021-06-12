function randomNum() {
    let num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return num;
}

function computerPlay() {
    let choice = randomNum();
    switch (choice) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
        default:
            return 'Not choosen'
            break;
    }
}
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    let computerSelect = computerSelection.toLowerCase();
    switch (playerSelect, computerSelect) {
        case ("rock", "paper"):
            computerScore++;
            return "Oh no! You lost. Paper beats rock."
            break;
        case ("rock", "scissors"):
            userScore++;
            return "Lets go!!! You won. Rock beats scissors."
            break;
        case ("paper", "rock"):
            userScore++;
            return "Lets go!!! You won. Paper beats rock."
            break;
        case ("paper", "scissors"):
            computerScore++;
            return "Oh no! You lost. Scissors beats paper."
            break;
        case ("scissors", "rock"):
            computerScore++;
            return "Oh no! You lost. Rock beats scissors.";
            break;
        case ("scissors", "paper"):
            userScore++;
            return "Lets go!!! You won. Scissors beats paper."
            break;
        default:
            return "Tie game";
            break;
    }

}

function game() {
    let round = 1;
    do {
        const playerSelection = prompt("Rock, Paper, Scissors");
        const computerSelection = computerPlay();
        console.group(`Round: ${round}`);
        console.log(`Computer choice: ${computerSelection}`);
        console.log(`Yout choice: ${playerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        ++round;
        if (round == 6) {
            console.log(userScore > computerScore ? `You won against the comp ${userScore}:${computerScore}` : `Computer won! ${computerScore}:${userScore}`);
        }
    }
    while (round <= 5)
}
game();