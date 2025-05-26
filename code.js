console.log("Hello, World!");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let humanChoice;
    do {
        humanChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    } while (!choices.includes(humanChoice));
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return;
  }

  
  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  
  console.log(`Score → Human: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

 for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("----- Game Over -----");
  if (humanScore > computerScore) {
    console.log("You win the game! 🎉");
  } else if (humanScore < computerScore) {
    console.log("Computer wins the game! 💻");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();  
