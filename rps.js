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

function playGame(){
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i <5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

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
    function determineWinner(){
        if (humanScore > computerScore){
            console.log("Human Wins!")
        } else if (computerScore > humanScore){
            console.log("Computer Wins!")
        } else{
            console.log("Its a Tie!")
        }
    }
    determineWinner()
}
playGame()