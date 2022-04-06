
let number=0; 
let userScore= 0; 
let computerScore= 0; 
let limit= 5; 
let gameOver = false; 
const computerSelection = computerPlay();


const buttons = document.querySelectorAll('button');
const rock = document.querySelector('#btnr'); 
const paper = document.querySelector('#btnp');
const scissors = document.querySelector('#btns');

let userDisplay = document.querySelector('#userScore');
let computerDisplay = document.querySelector('#computerScore');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (e.target.id == 'btnr') {
            playRound('rock', computerSelection);
            
        }
        else if (e.target.id == 'btnp') {
            playRound('paper', computerSelection);
            
        }
        else if (e.target.id == 'btns') {
            playRound('scissors', computerSelection);
        }
    });
});


function addUserScore() {
        userScore ++; 
        userDisplay.textContent = userScore; 
        if (userScore === limit) {
            let winner = document.createElement('p');
            winner.textContent = 'Congratulations! You win the game';
            document.body.appendChild(winner); 

        }
    }  


function addComputerScore() {
        computerScore ++; 
        computerDisplay.textContent = computerScore; 
        if (computerScore === limit) {
            let loser = document.createElement('p');
            loser.textContent = 'Sorry! You lost the game';
            document.body.appendChild(loser); 
        }
    }   


function computerPlay() {
let play = ['rock', 'paper', 'scissors'];
return play[Math.floor(Math.random()*play.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection=== 'paper') {
        addComputerScore();
        let p = document.createElement('p');
        p.textContent = 'You lose! Paper beats Rock';
        document.body.appendChild(p); 
        
    }
    else if (playerSelection === 'paper' && computerSelection=== 'rock') {
        addUserScore();
        let p = document.createElement('p');
        p.textContent = 'You win! Paper beats Rock';
        document.body.appendChild(p); 
        
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'paper') {
        addUserScore();
        let p = document.createElement('p');
        p.textContent = 'You win! Scissors beats Paper';
        document.body.appendChild(p); 
        
    }
    else if (playerSelection === 'paper' && computerSelection=== 'scissors') {
        addComputerScore();
        let p = document.createElement('p');
        p.textContent = 'You lose! Scissors beats Paper';
        document.body.appendChild(p); 
        
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'rock') {
        addComputerScore();
        let p = document.createElement('p');
        p.textContent = 'You lose! Rock beats Scissors';
        document.body.appendChild(p); 
        
    }
    else if (playerSelection === 'rock' && computerSelection=== 'scissors') {
        addUserScore();
        let p = document.createElement('p');
        p.textContent = 'You win! Rock beats Scissors';
        document.body.appendChild(p); 
        
    }
    else if (playerSelection === 'rock' && computerSelection=== 'rock') {
        let p = document.createElement('p');
        p.textContent = 'It\'s a draw! Rock can\'t beat Rock';
        document.body.appendChild(p); 
    }
    else if (playerSelection === 'paper' && computerSelection=== 'paper') {
        let p = document.createElement('p');
        p.textContent = 'It\'s a draw! Paper can\'t beat Paper';
        document.body.appendChild(p); 
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'scissors') {
        let p = document.createElement('p');
        p.textContent = 'It\'s a draw! Scissors can\'t beat Scissors';
        document.body.appendChild(p); 
    }
  }

  /*function numberRound() {
    alert("Game " + number); 
  }*/


  
  
    /*function finalScore() {
       if (userScore >= 5) {
        let p = document.createElement('p');
        p.textContent = 'Congratulations! You win the game';
        document.body.appendChild(p); 
       }
       else if (computerScore >= 5){
        let p = document.createElement('p');
        p.textContent = 'Sorry, you lost the game';
        document.body.appendChild(p); 
       }
       else if (userScore === computerScore){
        let p = document.createElement('p');
        p.textContent = 'It\'s a tie';
        document.body.appendChild(p); 
       }
   }
   
   function game() {
    for (let i = 0; i < 5; i++) {
        
           
    }
} */


    
  

   
