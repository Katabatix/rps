function play(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper") return "Invalid selection";

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
    console.log("Computer: " + computerSelection);

    if(playerSelection == computerSelection){
        return "Tie! Redo";
    }else if((playerSelection == "rock" || computerSelection == "rock") && (playerSelection == "scissors" || computerSelection == "scissors")){
        if(playerSelection == "rock") return "You win!";
        else return "Computer Wins!";
    }else if((playerSelection == "scissors" || computerSelection == "scissors") && (playerSelection == "paper" || computerSelection == "paper")){
        if(playerSelection == "scissors") return "You win!";
        else return "Computer Wins!";
    }else if((playerSelection == "paper" || computerSelection == "paper") && (playerSelection == "rock" || computerSelection == "rock")){
        if(playerSelection == "paper") return "You win!";
        else return "Computer Wins!";
    }
}

<<<<<<< HEAD
function printout(string){
    console.log(string);
}

// let input = prompt("Enter Rock, Paper, or Scissors");
// console.log("Player: " + input);
// console.log(play(input));

const buttons = document.querySelectorAll("button");
buttons.forEach(button => console.log(button.textContent));
buttons.forEach(button => button.addEventListener('click', function(){printout(play(`${button.textContent}`))}));

=======
let input = prompt("Enter Rock, Paper, or Scissors");
console.log("Player: " + input);
console.log(play(input));

//hi
>>>>>>> rps-ui
