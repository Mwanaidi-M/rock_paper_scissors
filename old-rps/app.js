/**
 * ASSIGNMENT: Make a Rock-Paper-Scissors game that is between the computer and a player. The game is 5 rounds.
 * This is my take on it. It needed a couple of tries and finally it works on the console end.
 * Below I'm going to try write some comments that will help me remember what I did.
 * CODE TELLS YOU HOW; COMMENTS TELL YOU WHY
 */

let compSelection;
let playerSelection;

let resultMessage;
let playerScore = 0;
let compScore = 0;
let winner;

// function for the computer playing the game by making random choices.
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

// function for how one full round of the game should be played taking in the playerSelection & compSelection as params.
function playRound(playerSelection, compSelection)
{
    if(playerSelection === 'rock')
    {
        if(compSelection === 'rock')
        {
            compScore = playerScore = 0;
            resultMessage = `It\'s a tie.\nPlayer = ${playerScore} \t Computer = ${compScore}`;
        }
        else if(compSelection === 'paper')
        {
            compScore++;
            resultMessage = `You lose! ${compSelection} beats ${playerSelection}.\nPlayer = ${playerScore} \t Computer = ${compScore}`;
        }
        else if(compSelection === 'scissors')
        {
            playerScore++
            resultMessage = `You Win! ${playerSelection} beats ${compSelection}.\nPlayer = ${playerScore} \t Computer = ${compScore}`;
        }
    }
    else if(playerSelection === 'paper')
    {
        if(compSelection === 'rock')
        {
            playerScore++;
            resultMessage = `You Win! ${playerSelection} beats ${compSelection}.\nPlayer = ${playerScore} \t Computer = ${compScore}`;
        }
        else if(compSelection === 'paper')
        {
            compScore = playerScore = 0;
            resultMessage = `It\'s a tie.\nPlayer = ${playerScore} \t Computer = ${compScore}`;
        }
        else if(compSelection === 'scissors')
        {
            compScore++;
            resultMessage = `You lose! ${compSelection} cut ${playerSelection}.\nPlayer = ${playerScore} \t Computer = ${compScore}`;
        }
    }
    else if(playerSelection === 'scissors')
    {
        if(compSelection === 'rock')
        {
            compScore++;
            resultMessage = `You lose! ${compSelection} beats ${playerSelection}.\nPlayer = ${playerScore} \t Computer = ${compScore}`;
        }
        else if(compSelection === 'paper')
        {
            playerScore++;
            resultMessage = `You Win! ${compSelection} cut ${playerSelection}.\nPlayer = ${playerScore} \t Computer = ${compScore}`;
        }
        else if(compSelection === 'scissors')
        {
            compScore = playerScore = 0;
            resultMessage = `It\'s a tie.\nPlayer = ${playerScore} \t Computer = ${compScore}`;
        }
    }
    else
    {
        resultMessage = 'Wrong Input! Sorry';
    }

    return resultMessage;
    
}

// function to determine the overall winner and thus display a message with respect to that.
function overallResults()
{
    if(playerScore > compScore)
    {
        winner = 'Winner: Player' ;
    }
    else if(playerScore < compScore)
    {
        winner = 'Winner: Computer';
    }
    else if(playerScore == compScore)
    {
        winner = 'It\'s a Tie!!';
    }

    return winner;
}


function game()
{
    for(let count =1; count <=5; count++)
    {
        compSelection = computerPlay();
        playerSelection = prompt('Please Enter your weapon: rock / paper / scissors').toLowerCase();

        console.log(playRound(playerSelection, compSelection));
    }
    console.log(overallResults());
}

console.log(game());
