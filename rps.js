function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3) + 1
    if (computerChoice == 1){
        return "rock"
    } else if (computerChoice == 2){
        return "paper"
    } else {
        return "scissors"
    }

}

function getHumanChoice(){
    const humanChoice = prompt("Enter Rock, Paper, or Scissors: ")
    if (humanChoice == "Rock"){
        return "rock"
    } else if (humanChoice == "Paper"){
        return "paper"
    } else if (humanChoice == "Scissors"){
        return "scissors"
    }
}

console.log(getHumanChoice())