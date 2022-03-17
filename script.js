

function computerPlay() {
let play = ['rock', 'paper', 'scissors'];
let result= play[Math.floor(Math.random()*play.length)];
console.log(result); 
return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection=== 'paper') {
        return 'You lose! Paper beats Rock'; 
    }
    else if (playerSelection === 'paper' && computerSelection=== 'rock') {
        return 'You win! Paper beats Rock'; 
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'paper') {
        return 'You win! Scissors beats Paper'; 
    }
    else if (playerSelection === 'paper' && computerSelection=== 'scissors') {
        return 'You lose! Scissors beats Paper';
    }
    else if (playerSelection === 'scissors' && computerSelection=== 'rock') {
        return 'You lose! Rock beats Scissors';
    }
    else if (playerSelection === 'rock' && computerSelection=== 'scissors') {
        return 'You win! Rock beats Scissors';
    }
    else  {
        return 'Both players chose the same, it\'s a tie'; 
    }

   
  }
  
 
  const playerSelection ='rock';
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
