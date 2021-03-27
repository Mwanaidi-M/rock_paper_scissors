let compSelection;
let playerSelection;

let msg;
let playerScore = 0;
let compScore = 0;
let winner;

function computerPlay()
{
    let randomChoice    = Math.floor(Math.random()*3) + 1;
    if(randomChoice === 1)
    {
        return 'rock';
    }
    else if( randomChoice === 2)
    {
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function playRound(playerSelection, compSelection)
{
    if(playerSelection === 'rock')
    {
        if(compSelection === 'rock')
        {
            msg = `It\'s a tie.`;
        }
        else if(compSelection === 'paper')
        {
            compScore++;
            msg = `You lose! ${compSelection} beats ${playerSelection}`;
        }
        else if(compSelection === 'scissors')
        {
            playerScore++
            msg = `You Win! ${playerSelection} beats ${compSelection}`;
        }
    }
    else if(playerSelection === 'paper')
    {
        if(compSelection === 'rock')
        {
            playerScore++;
            msg = `You Win! ${playerSelection} beats ${compSelection}`;
        }
        else if(compSelection === 'paper')
        {
            msg = `It\'s a tie.`;
        }
        else if(compSelection === 'scissors')
        {
            compScore++;
            msg = `You lose! ${compSelection} cut ${playerSelection}`;
        }
    }
    else if(playerSelection === 'scissors')
    {
        if(compSelection === 'rock')
        {
            compScore++;
            msg = `You lose! ${compSelection} beats ${playerSelection}`;
        }
        else if(compSelection === 'paper')
        {
            playerScore++;
            msg = `You Win! ${compSelection} cut ${playerSelection}`;
        }
        else if(compSelection === 'scissors')
        {
            msg = `It\'s a tie.`;
        }
    }
    else
    {
        msg = 'Wrong Input! Sorry';
    }

    return msg;
    
}

function game()
{
    for(let count =1; count <=5; count++)
    {
        compSelection = computerPlay();
        playerSelection = prompt('Please Enter your weapon: rock / paper / scissors').toLowerCase();

        console.log(playRound(playerSelection, compSelection));
    }
    winner = playerScore > compScore;
    return `Winner: ${winner ? 'Player' : 'Computer'}` ;
}
console.log(game());
