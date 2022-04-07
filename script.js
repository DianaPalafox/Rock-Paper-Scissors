
let number=0; 
let userScore= 0; 
let computerScore= 0; 
let limit= 5; 
let gameOver = false; 
const results = document.createElement('div');
const buttons = document.querySelectorAll('button');

let userDisplay = document.querySelector('#userScore');
let computerDisplay = document.querySelector('#computerScore');


function playGame () {
    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            if (e.target.id == 'btnr') {
                const computerSelection = computerPlay(); 
                playRound('rock', computerSelection);  

            }
            else if (e.target.id == 'btnp') {
                const computerSelection = computerPlay(); 
                playRound('paper', computerSelection);
                
            }
            else if (e.target.id == 'btns') {
                const computerSelection = computerPlay(); 
                playRound('scissors', computerSelection);
                
            }
        }); 
    });   
}

function reset (){
    
}


function addUserScore() {
    if (!gameOver){
        userScore ++; 
        userDisplay.textContent = userScore; 
        if (userScore === limit) {
            let winner = document.createElement('p');
            winner.textContent = 'Congratulations! You win the game';
            document.body.appendChild(winner); 
            gameOver = true; 
        }
    }  
 }  


function addComputerScore() {
    if (!gameOver) {
        computerScore ++; 
        computerDisplay.textContent = computerScore; 
        if (computerScore === limit) {
            let loser = document.createElement('p');
            loser.textContent = 'Sorry! You lost the game';
            document.body.appendChild(loser); 
            gameOver = true; 
        }
    }
}   


function computerPlay() {
let play = ['rock', 'paper', 'scissors'];
return play[Math.floor(Math.random()*play.length)]; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection=== 'paper') {
        results.textContent = 'You lose! Paper beats Rock';
        document.body.appendChild(results);
        addComputerScore();
        
    }
    else if (playerSelection === 'paper' && computerSelection=== 'rock') {
        results.textContent = 'You win! Paper beats Rock';
        document.body.appendChild(results);
        addUserScore();
        
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'paper') {
        results.textContent = 'You win! Scissors beats Paper';
        addUserScore();
    }
    else if (playerSelection === 'paper' && computerSelection=== 'scissors') {
        results.textContent = 'You lose! Scissors beats Paper';
        document.body.appendChild(results); 
        addComputerScore();
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'rock') {
        results.textContent = 'You lose! Rock beats Scissors';
        document.body.appendChild(results);
        addComputerScore();
    }
    else if (playerSelection === 'rock' && computerSelection=== 'scissors') {
        results.textContent = 'You win! Rock beats Scissors';
        document.body.appendChild(results); 
        addUserScore();
    }
    else if (playerSelection === 'rock' && computerSelection=== 'rock') {
        results.textContent = 'It\'s a draw! Rock can\'t beat Rock';
        document.body.appendChild(results); 
    }
    else if (playerSelection === 'paper' && computerSelection=== 'paper') {
        results.textContent = 'It\'s a draw! Paper can\'t beat Paper';
        document.body.appendChild(results); 
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'scissors') {
        results.textContent = 'It\'s a draw! Scissors can\'t beat Scissors';
        document.body.appendChild(results); 
    }
    
  }




  playGame(); 
    
  

   
