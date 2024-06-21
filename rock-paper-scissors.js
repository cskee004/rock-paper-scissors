let humanScore = 0;
let computerScore = 0;

const ul = document.querySelector('ul')
const container = document.querySelector('div')
const startGame = document.querySelector('#start-game')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissor')
const scoreBoard = document.querySelector(".score-board")
const body = document.body

startGame.addEventListener('click', () => {
    body.removeChild(startGame)
    const humScore = document.createElement('li')
    const compScore = document.createElement('li')
    humScore.innerHTML = "Human score: " 
    compScore.innerHTML = "Computer score: " 
    ul.append(humScore)
    ul.append(compScore)
    playGame()
})

rock.addEventListener('click', () => {
    console.log('rock')
    playRound("rock", getComputerChoice())
    
})

paper.addEventListener('click', () => {
    console.log('paper')
    playRound("paper", getComputerChoice())
})

scissors.addEventListener('click', () => {
    console.log('scissors')
    playRound("scissors", getComputerChoice())
})

function updateScoreBoard(result) {
    
    switch (result) {
        case 0:
            humanScore++
        case 1:
            computerScore++
        case -1:
            humanScore++
            computerScore++
    }
}


/**
 * 
 */
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    
    if (result == 0) {
        return "rock";
    }
    else if (result == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

/**
 * 
 */
function getHumanChoice() {
    
    let choice = prompt("Please enter your choice (rock, paper, scissors): ");
    if (choice != null) {
        let temp = choice.toLowerCase();
        switch(temp) {
            case "rock":
                return "rock";
            case "paper":
                return "paper";
            case "scissors":
                return "scissors";
                
        }
    }
}



/**
 * 
 */
function playRound(humanChoice, computerChoice) {

    let humanWin = 0
    let computerWin = 1
    let tie = -1 

    if (humanChoice == "rock"){
        switch (computerChoice) {
            case "rock":
                console.log("Rock and rock is a tie");
                updateScoreBoard(tie)
                return;
            case "paper":
                console.log("Computer wins rock < paper");
                // computerScore++;
                updateScoreBoard(computerWin)
                return;
            case "scissors":
                console.log("Human player wins rock > scissors");
                // humanScore++;
                updateScoreBoard(humanWin)
                return;
        }
    }

    else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("Computer wins paper < rock");
                // computerScore++;
                updateScoreBoard(computerWin)
                return;
            case "paper":
                console.log("Paper and paper is a tie");
                updateScoreBoard(tie)
                return;
            case "scissors":
                console.log("Human player wins paper > scissors");
                // humanScore++;
                updateScoreBoard(humanWin)
                return;
        }
    }

    else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("Computer wins scissors < rock");
                // computerScore++;
                updateScoreBoard(computerWin)
                return;
            case "paper":
                console.log("Human player wins scissors > paper");
                // humanScore++;
                updateScoreBoard(humanWin)
                return;
            case "scissors":
                console.log("Scissors and scissors is a tie");
                updateScoreBoard(tie)
                return;
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

    if (humanScore == computerScore) {
        console.log("Game ended in a tie");
    }
    else if (humanScore > computerScore) {
        console.log("Human player wins with a score of " + humanScore);
        console.log("Computer score " + computerScore);
    }
    else {
        console.log("Computer wins with a score of " + computerScore);
        console.log("Human player score " + humanScore);
    }

    console.log(humanScore);
    console.log(computerScore);
}


function getHumanScore() {
    return humanScore
}

function getComputerScore() {
    return computerScore
}