function randomNum() {
 let num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
 return num;
}

function computerPlay() {
 let choice = randomNum();
 switch (choice) {
  case 1:
   return "Rock";
   break;
  case 2:
   return "Paper";
   break;
  case 3:
   return "Scissors";
   break;
 }
}

let userScore = 0;
let computerScore = 0;
function reset() {
 computerScore = 0;
 userScore = 0;
}
function playRound(playerSelection, computerSelection) {
 if (playerSelection === computerSelection) {
  return `Tie game! ${
   playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
  } : ${
   computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
  }.`;
 } else if (
  (playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")
 ) {
  userScore++;
  return `Lets go!!! You won. ${
   playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
  } beats ${computerSelection}.`;
 } else {
  computerScore++;
  return `Oh no! You lost. ${
   computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
  } beats ${playerSelection}.`;
 }
}
function game() {
 const choicesArray = [...document.querySelectorAll(".user-choice")];
 document.querySelector(".result-container").style.display = "none";
 let round = 1;

 choicesArray.forEach((choice) => {
  choice.addEventListener("click", () => {
   let computerSelection = computerPlay().toLowerCase();
   let playerSelection = choice.children[0].src
    .replace(
     "https://razarifa.github.io/rock-paper-scissors.github.io/images/",
     ""
    )
    .replace(".png", "")
    .trim()
    .toLowerCase();

   let im1 = document.querySelector(".your-choice-img");
   let im2 = document.querySelector(".computer-choice-img");
   im1.setAttribute("src", `images/${playerSelection}.png`);
   im1.setAttribute("alt", `${playerSelection}`);
   im1.style.width = "100px";
   im2.setAttribute("src", `images/${computerSelection}.png`);
   im1.setAttribute("alt", `${computerSelection}`);
   im2.style.width = "100px";

   document.querySelector(".instant-result").innerText = playRound(
    playerSelection,
    computerSelection
   );
   round++;
   if (round == 6) {
    document.querySelector(".choice-images").style.display = "none";
    document.querySelector(".choice-container").style.display = "none";
    document.querySelector(".instant-result").style.display = "none";
    document.querySelector(".result-container").style.display = "flex";
    document.querySelector(".new-game").addEventListener("click", () => {
     location.reload();
    });
    let res =
     userScore > computerScore
      ? `You won against the comp ${userScore}:${computerScore}`
      : `Computer won! ${computerScore}:${userScore}`;
    document.querySelector(".result").innerText = res;
   }
  });
 });
}
game();
