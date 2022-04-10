
let userScore= 0; 
let computerScore= 0; 
let limit= 5; 
let gameOver = false; 
const results = document.createElement('div');
results.classList.add('results'); 

const winner = document.createElement('div');
winner.classList.add('winner');

const buttons = document.querySelectorAll('button');
const restart = document.querySelector('#restart');

document.querySelector('#restart').disabled = true; 
document.querySelector('#btnr').disabled = false; 
document.querySelector('#btnp').disabled = false; 
document.querySelector('#btns').disabled = false; 

let userDisplay = document.querySelector('#userScore');
let computerDisplay = document.querySelector('#computerScore');


restart.addEventListener('click', function() {
   restartGame(); 
});

function restartGame (){
    gameOver = false; 
    userScore= 0; 
    computerScore= 0; 
    userDisplay.textContent = userScore; 
    computerDisplay.textContent = computerScore; 
    document.body.removeChild(results);
    document.body.removeChild(winner); 
    document.querySelector('#btnr').disabled = false; 
    document.querySelector('#btnp').disabled = false; 
    document.querySelector('#btns').disabled = false; 
    document.querySelector('#restart').disabled = true; 
    
}

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

function reset() {
        document.querySelector('#btnr').disabled = true; 
        document.querySelector('#btnp').disabled = true; 
        document.querySelector('#btns').disabled = true; 
        document.querySelector('#restart').disabled = false; 
}


function addUserScore() {
    if (!gameOver){
        userScore ++; 
        userDisplay.textContent = userScore; 
        if (userScore === limit) {
            userDisplay.textContent = 5; 
            winner.textContent = 'Congratulations! You win the game';
            document.body.appendChild(winner); 
            gameOver = true;
            reset();
        }
    }  
 }  


function addComputerScore() {
    if (!gameOver) {
        computerScore ++; 
        computerDisplay.textContent = computerScore; 
        if (computerScore == limit) {
            winner.textContent = 'Sorry! You lost the game';
            document.body.appendChild(winner); 
            gameOver = true; 
            reset();
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
    
  

   
