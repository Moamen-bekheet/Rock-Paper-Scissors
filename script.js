const itemsArr = ['rock', 'paper','scissors'];
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('.result');
const liveScore = document.querySelector('.live-score');
function getComputerChoice(){
    return itemsArr[(Math.random().toFixed(1)*10)%itemsArr.length];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection===computerSelection){
        return `No one wins! you both chose ${playerSelection}`;
    }
    let playerWins = (((playerSelection==='rock')&&(computerSelection==='scissors'))||((playerSelection==='scissors')&&(computerSelection==='paper'))||((playerSelection==='paper')&&(computerSelection==='rock')))
    if (playerWins){
        playerScore +=1;
        return `You win this one! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        computerScore +=1;
        return `You lose this time! ${computerSelection} beats ${playerSelection}`
    }
}

function getWinner(){
    if((playerScore>=5)||(computerScore>=5)){
        const finalResult = document.querySelector('.final-result')
        if (playerScore>computerScore){
            finalResult.textContent = 'You win'
            computerScore = 0;
            playerScore = 0;
            liveScore.textContent = `You: ${playerScore} \n
                            Computer: ${computerScore}`;
            
        }
        else{
            finalResult.textContent = 'Computer wins';
            computerScore = 0;
            playerScore = 0;
            liveScore.textContent = `You: ${playerScore} \n
                            Computer: ${computerScore}`;
        }
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click',function(){
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    result.textContent = playRound(playerSelection,computerSelection);
    liveScore.textContent = `You: ${playerScore} \n
                            Computer: ${computerScore}`;
    getWinner();
})

const paper = document.querySelector('.paper');
paper.addEventListener('click',function(){
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    result.textContent = playRound(playerSelection,computerSelection);
    liveScore.textContent = `You: ${playerScore} \n
                            Computer: ${computerScore}`;
    getWinner();
})

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click',function(){
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    result.textContent = playRound(playerSelection,computerSelection);
    liveScore.textContent = `You: ${playerScore} \n
                            Computer: ${computerScore}`;
    getWinner();
})
