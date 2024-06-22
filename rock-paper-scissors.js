let playerScore = 0;
let computerScore = 0;

const body = document.body

const startGame = document.querySelector('#start-game')

const sword = document.querySelector('#sword')
const axe = document.querySelector('#axe')
const lance = document.querySelector('#scissor')

const gameButtons = document.querySelector('#buttons')
const score = document.querySelector('#score')



startGame.addEventListener('click', () => {
    body.removeChild(startGame)
    let matchResults = document.createElement("p")
    matchResults.id = "results"
    body.append(matchResults)

    let pScore = document.createElement("div")
    pScore.id = "player-score"
    pScore.innerHTML = "Player score: "
    score.append(pScore)
    
    let cScore = document.createElement("div")
    cScore.id = "comp-score"
    cScore.innerHTML = "Computer score: "
    score.append(cScore)

    let swordButton = document.createElement("button")
    swordButton.id = "sword"
    swordButton.innerHTML = "Sword"
    gameButtons.append(swordButton)
    swordButton.addEventListener('click', () => {
        sword();
        
        function sword() {
            
            let result = playRound("sword", getComputerChoice())
            if (result === 0) {
                playerScore++;
                checkWinner()
            }
            else if (result === 1) {
                computerScore++;
                checkWinner()
            }

            pScore.innerHTML = "Player score: " + playerScore;
            cScore.innerHTML = "Computer score: " + computerScore;
        }
    })
    
    let axeButton = document.createElement("button")
    axeButton.id = "axe"
    axeButton.innerHTML = "Axe"
    gameButtons.append(axeButton)
    axeButton.addEventListener('click', () => {
        axe();

        function axe() {
            
            let result = playRound("axe", getComputerChoice())
            if (result === 0) {
                playerScore++;
                checkWinner()
            }
            else if (result === 1) {
                computerScore++;
                checkWinner()
            }
         
            pScore.innerHTML = "Player score: " + playerScore;
            cScore.innerHTML = "Computer score: " + computerScore;
        }
    })

    let lanceButton = document.createElement("button")
    lanceButton.id = "lance"
    lanceButton.innerHTML = "Lance"
    gameButtons.append(lanceButton)
    lanceButton.addEventListener('click', () => {
        lance();

        function lance() {
            
            let result = playRound("lance", getComputerChoice())
            if (result === 0) {
                playerScore++;
                checkWinner()
            }
            else if (result === 1) {
                computerScore++;
                checkWinner()
            }

            pScore.innerHTML = "Player score: " + playerScore;
            cScore.innerHTML = "Computer score: " + computerScore;
        }
    })

    
})

function checkWinner() {
    
    let gameResult = document.getElementById('results')
    let sword = document.getElementById('sword')
    let axe = document.getElementById('axe')
    let lance = document.getElementById('lance')
    let startButton = document.createElement('button')
    startButton.id = "start-game"
    startButton.innerHTML = "Start Game"
    
    
    if (playerScore === 5){
        gameResult.innerHTML = "Player wins with score of " + playerScore + " !"
        gameButtons.removeChild(sword)
        gameButtons.removeChild(axe)
        gameButtons.removeChild(lance)

        
        
    }
    else if (computerScore === 5) {
        gameResult.innerHTML = "Computer wins with a score of " + computerScore + " !"
        gameButtons.removeChild(sword)
        gameButtons.removeChild(axe)
        gameButtons.removeChild(lance)
n
        
        
    }
    else {
        return 
    }
}

/**
 * 
 */
function playRound(playerChoice, computerChoice) {

    let humanWin = 0
    let computerWin = 1
    let roundResult = document.getElementById('results')
    

    if (playerChoice == "sword"){
        switch (computerChoice) {
            case "sword":
                roundResult.innerHTML = "sword and sword is a tie"
                return;
            case "axe":
                roundResult.innerHTML = "Computer wins sword < axe"
                return computerWin
            case "lance":
                roundResult.innerHTML = "Human player wins sword > lance"
                return humanWin
        }
    }

    else if (playerChoice == "axe") {
        switch (computerChoice) {
            case "sword":
                roundResult.innerHTML = "Computer wins axe < sword"
                return computerWin
            case "axe":
                roundResult.innerHTML = "axe and axe is a tie"
                return
            case "lance":
                roundResult.innerHTML = "Human player wins axe > lance"
                return humanWin
        }
    }

    else if (playerChoice == "lance") {
        switch (computerChoice) {
            case "sword":
                roundResult.innerHTML = "Computer wins lance < sword"
                return computerWin
            case "axe":
                roundResult.innerHTML = "Human player wins lance > axe"
                return humanWin
            case "lance":
                roundResult.innerHTML = "lance and lance is a tie"
                return
        }
    }
}

/**
 * 
 */
function playGame() {

    /*
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
    */
}


/**
 * 
 */
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3)
    
    if (result == 0) {
        return "sword"
    }
    else if (result == 1) {
        return "axe"
    }
    else {
        return "lance"
    }
}

/**
 * 
 */
function getPlayerChoice() {
    
    let choice = prompt("Please enter your choice (sword, axe, lance): ")
    if (choice != null) {
        let temp = choice.toLowerCase()
        switch(temp) {
            case "sword":
                return "sword"
            case "axe":
                return "axe"
            case "lance":
                return "lance"
                
        }
    }
}