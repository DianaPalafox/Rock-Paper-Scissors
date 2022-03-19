

let number=0; 
let score= 0; 

function computerPlay() {
let play = ['rock', 'paper', 'scissors'];
return play[Math.floor(Math.random()*play.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection=== 'paper') {
        alert('You lose! Paper beats Rock'); 
         
    }
    else if (playerSelection === 'paper' && computerSelection=== 'rock') {
        alert('You win! Paper beats Rock'); 
        addUserScore();
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'paper') {
        alert('You win! Scissors beats Paper'); 
        addUserScore();
    }
    else if (playerSelection === 'paper' && computerSelection=== 'scissors') {
        alert('You lose! Scissors beats Paper');
        
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'rock') {
        alert('You lose! Rock beats Scissors');
        
    }
    else if (playerSelection === 'rock' && computerSelection=== 'scissors') {
        alert('You win! Rock beats Scissors');
        addUserScore();
    }
    else if (playerSelection === 'rock' && computerSelection=== 'rock') {
        alert('It\'s a tie!'); 
        
    }
    else if (playerSelection === 'paper' && computerSelection=== 'paper') {
        alert('It\'s a tie!'); 
        
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'scissors') {
        alert('It\'s a tie!'); 
        
    }
    else {
        alert('Please chose between rock, paper and scissors'); 
    }
  }
  function numberRound() {
    alert("Game " + number); 
  }

  function addUserScore() {
      score++; 
    console.log(score); 
  }

   function finalScore() {
       if (score >= 3) {
           alert('Congratuletions! You win');
       }
       else if (score < 3){
           alert('Sorry, you lost'); 
       }
   }
  


  function game() {
    for (let i = 0; i < 5; i++) {
        number++; 
        numberRound();
        let playerSelection = prompt("Please chose between rock, paper and scissors: ")
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);    
     }
  }

game();
finalScore(); 
  

  