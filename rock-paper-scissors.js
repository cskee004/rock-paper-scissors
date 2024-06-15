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

let humanScore = 0;
let computerScore = 0;

/**
 * 
 */
function playRound(humanChoice, computerChoice) {
   
    
    if (humanChoice == "rock"){
        switch (computerChoice) {
            case "rock":
                console.log("Rock and rock is a tie");
                return;
            case "paper":
                console.log("Computer wins rock < paper");
                computerScore++;
                return;
            case "scissors":
                console.log("Human player wins rock > scissors");
                humanScore++;
                return;
        }
    }

    else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("Computer wins paper < rock");
                computerScore++;
                return;
            case "paper":
                console.log("Paper and paper is a tie");
                return;
            case "scissors":
                console.log("Human player wins paper > scissors");
                humanScore++;
                return;
        }
    }

    else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("Computer wins scissors < rock");
                computerScore++;
                return;
            case "paper":
                console.log("Human player wins scissors > paper");
                humanScore++;
                return;
            case "scissors":
                console.log("Scissors and scissors is a tie");
                return;
        }
    }
}



/**
 * 
 */
function playGame() {

    
    
    for (let i = 0; i < 6; ++i) {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
    }

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