let playerScore = 0;
let computerScore = 0;

const body = document.body
const score = document.querySelector('score')
const startGame = document.querySelector('#start-game')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissor')

startGame.addEventListener('click', () => {
    body.removeChild(startGame)
    document.createElement('p')
    document.createElement('p')
    score.append(playerBoard)
    score.append(computBoard)

    playerBoard.innerHTML = playerScore
    computBoard.innerHTML = computerScore
    
    playGame()
})

rock.addEventListener('click', () => {
    console.log('rock')
    let result = playRound("rock", getComputerChoice())
    if (result === 0) {
        playerScore++
    }
    else if (result === 1){
        computerScore++
    }
    console.log("Human score: " + playerScore)
    console.log("Computer score: " + computerScore)
    
})

paper.addEventListener('click', () => {
    console.log('paper')
    let result = playRound("paper", getComputerChoice())
    if (result === 0) {
        playerScore++
    }
    else if (result === 1){
        computerScore++
    }
    console.log("Human score: " + playerScore)
    console.log("Computer score: " + computerScore)
})

scissors.addEventListener('click', () => {
    console.log('scissors')
    let result = playRound("scissors", getComputerChoice())
    if (result === 0) {
        playerScore++
    }
    else if(result === 1) {
        computerScore++
    }
    console.log("Human score: " + playerScore)
    console.log("Computer score: " + computerScore)
})


/**
 * 
 */
function playRound(humanChoice, computerChoice) {

    let humanWin = 0
    let computerWin = 1
    

    if (humanChoice == "rock"){
        switch (computerChoice) {
            case "rock":
                console.log("Rock and rock is a tie")
                return;
            case "paper":
                console.log("Computer wins rock < paper")
                return computerWin
            case "scissors":
                console.log("Human player wins rock > scissors")
                return humanWin
        }
    }

    else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("Computer wins paper < rock")
                return computerWin
            case "paper":
                console.log("Paper and paper is a tie")
                return
            case "scissors":
                console.log("Human player wins paper > scissors")
                return humanWin
        }
    }

    else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("Computer wins scissors < rock")
                return computerWin
            case "paper":
                console.log("Human player wins scissors > paper")
                return humanWin
            case "scissors":
                console.log("Scissors and scissors is a tie")
                return
        }
    }
}

/**
 * 
 */
function playGame() {

    
    /*
    for (let i = 0; i < 6; ++i) {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
    }
    */
   // add new below this line 

    if (playerScore == computerScore) {
        console.log("Game ended in a tie")
    }
    else if (playerScore > computerScore) {
        console.log("Human player wins with a score of " + playerScore)
        console.log("Computer score " + computerScore)
    }
    else {
        console.log("Computer wins with a score of " + computerScore)
        console.log("Human player score " + playerScore)
    }

    console.log(playerScore)
    console.log(computerScore)
}


/**
 * 
 */
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3)
    
    if (result == 0) {
        return "rock"
    }
    else if (result == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

/**
 * 
 */
function getHumanChoice() {
    
    let choice = prompt("Please enter your choice (rock, paper, scissors): ")
    if (choice != null) {
        let temp = choice.toLowerCase()
        switch(temp) {
            case "rock":
                return "rock"
            case "paper":
                return "paper"
            case "scissors":
                return "scissors"
                
        }
    }
}