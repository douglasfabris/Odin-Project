const options = ["rock", "paper", "scissors"]

function getComputerChoice () {
    return options[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie";
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        document.querySelector("#results").textContent = playRound(playerSelection, computerSelection)
    })
})


// function getPlayerChoice(options) {
//     while (true) {
//         let playerChoice = prompt("Type rock, paper or scissors");
//         playerChoice = playerChoice.toLowerCase();
//         if (options.includes(playerChoice)) {
//             return playerChoice
//         } else {
//             continue
//         }
//     }
// }


// function game () {
//     for (i = 0; i < 5; i++) {
//         const playerSelection = getPlayerChoice(options);
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game();
