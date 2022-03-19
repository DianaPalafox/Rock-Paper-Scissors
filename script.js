
let number=0; 
let userScore= 0; 
let computerScore= 0; 

function computerPlay() {
let play = ['rock', 'paper', 'scissors'];
return play[Math.floor(Math.random()*play.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection=== 'paper') {
        alert('You lose! Paper beats Rock'); 
        addComputerScore();
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
        addComputerScore();
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'rock') {
        alert('You lose! Rock beats Scissors');
        addComputerScore();
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
        alert('Please choose between rock, paper and scissors'); 
    }
  }
  function numberRound() {
    alert("Game " + number); 
  }

  function addUserScore() {
      userScore++; 
    console.log(userScore); 
  }

  function addComputerScore () {
      computerScore++; 
      console.log(computerScore); 

  }

   function finalScore() {
       if (userScore > computerScore) {
           alert('Congratulations! You win');
       }
       else if (userScore < computerScore){
           alert('Sorry, you lost'); 
       }
       else if (userScore == computerScore){
           alert('It\'s a tie')
       }
   }

  function game() {
    for (let i = 0; i < 5; i++) {
        number++; 
        numberRound(); 
        let playerSelection = prompt("Please choose between rock, paper and scissors: ").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);    
     }
  }

game();
finalScore(); 
  

  