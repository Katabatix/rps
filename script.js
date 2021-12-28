const scoreToWin = 3;
let playerScore = 0;
let compScore = 0;

function play(playerSelection){    
    // computer selection
    let computerSelection = Math.floor(Math.random()*3);
    switch(computerSelection){
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
    
    // parse player selection
    playerSelection = playerSelection.toLowerCase();
    
    console.log("Computer: " + computerSelection + " Player: " + playerSelection);

    // game decision
    if(playerSelection == computerSelection){
        return "Tie! Redo";
    }else if((playerSelection == "rock" || computerSelection == "rock") && (playerSelection == "scissors" || computerSelection == "scissors")){
        if(playerSelection == "rock"){
            playerScore++;
            return "Player wins!";
        }
        else{
            compScore++;
            return "Computer wins!";
        } 
    }else if((playerSelection == "scissors" || computerSelection == "scissors") && (playerSelection == "paper" || computerSelection == "paper")){
        if(playerSelection == "scissors"){
            playerScore++;
            return "Player wins!";
        } 
        else{
            compScore++;
            return "Computer wins!";
        }
    }else if((playerSelection == "paper" || computerSelection == "paper") && (playerSelection == "rock" || computerSelection == "rock")){
        if(playerSelection == "paper"){
            playerScore++;
            return "Player wins!";
        } 
        else{
            compScore++;
            return "Computer wins!";
        } 
    }
}

function updateScore(){
    document.getElementById("compScore").textContent = "Computer: " + compScore;
    document.getElementById("playerScore").textContent = "Player: " + playerScore;
}

function printout(string){
    console.log(string);
    updateScore();
     //win condition
     if(playerScore >= scoreToWin){
        document.getElementById("h1").textContent = "Player Wins!";
        document.querySelectorAll(".gameButtons").forEach(button => button.style.display = "none");
        console.log("Game over!");
    }
    if(compScore >= scoreToWin){
        document.getElementById("h1").textContent = "Computer Wins!";
        document.querySelectorAll(".gameButtons").forEach(button => button.style.display = "none");
        console.log("Game over!");
    }
}

function resetGame(){
    compScore = 0;
    playerScore = 0;
    updateScore();
    document.querySelectorAll(".gameButtons").forEach(button => button.style.display = "block");
    document.getElementById("h1").textContent = "Score:";
    console.log("Resetting")
}


// set up buttons
const buttons = document.querySelectorAll(".gameButtons");
buttons.forEach(button => button.addEventListener('click', function(){printout(play(`${button.textContent}`))}));
document.querySelectorAll(".gameButtons").forEach(button => button.style.display = "block");

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', resetGame);
