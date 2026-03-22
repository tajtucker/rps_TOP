function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        return "rock"
    } else if (choice == 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    return prompt("Enter Rock, Paper, or Scissors: ")
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    
    if (humanChoice == "paper" && computerChoice == "rock"){ 
        console.log("You Win! Paper beats Rock!")
         humanScore += 1
    } else if (humanChoice == "scissors" && computerChoice == "paper"){ 
        console.log("You Win! Scissors beats Paper!")
        humanScore += 1
    } else if (humanChoice == "rock" && computerChoice == "scissors"){ 
        console.log("You Win! Rock beats Scissors!")
        humanScore += 1
    } else if (humanChoice == "paper" && computerChoice == "scissors"){ 
         console.log("You Lose! Scissors beats Paper!")
         computerScore += 1
    } else if (humanChoice == "scissors" && computerChoice == "rock"){ 
         console.log("You Lose! Rock beats Scissors!")
         computerScore += 1
    } else if (humanChoice == "rock" && computerChoice == "paper"){ 
         console.log("You Lose! Paper beats Rock!")
         computerScore += 1
    } else {
        console.log("Tie")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)