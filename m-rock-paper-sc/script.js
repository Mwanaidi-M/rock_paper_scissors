// console.log('Yooooooo!');

/* 
    Going to create a rock-paper scrissors project.
    - it is going to be tested on the browser console before setting up the GUI.
    - Have set up the index.html and linked this external script.js file.
*/

/*  Creating a function called computerPlay that will randomly return 'rock', 'paper' or scissors.
    - first I'm declaring a variable 'compSelection' that will generate a random value between 1-3
        then assign each of these values to 'rock', 'paper', 'scissors'.

    Created variables to hold the Computer and Player Scores.

    Created a variable to hold the message if its a tie, win or loss.

    Created a winner variable that will show a message on who the winner is.
*/

let compSelection; 
let playerSelection;
let compScore = 0;
let playerScore = 0;
let message;
let winner;

function computerPlay()
{
    compSelection = Math.floor(Math.random() * 3) + 1;

    if(compSelection === 1)
    {
        return 'rock';
    }
    else if(compSelection === 2)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }
}

/* 
    Testing if the function works as expected:
    console.log(computerPlay());

*/

/* 
    - writing a function that plays a single round of R-P-S taking 2 parameters i.e. compselect, playerselect 
        and declares a winner.
    - The R-P-S rules are:
        i) rock > scissors
        ii) paper > rock
        iii) scissors > paper
    - Logic I used is:
        - check the computer input then check each input the user enters and then compare if they are greater than,
        strictly equal or less than the computer input then tell user if they have won or lost or tied.
        - checking the computer and player input using console.log() to check logic is okay.
    - To ensure that the player's input is case-insensitive, I used the toUpperCase() method to check if both the comp
        & player's input are strictly equal when in uppercase.

    - I tally up the computer and player's score in each round and award a point to whoever wins.

    - Each outcome displays a message to the player.
*/



function play(compS, playS)
{
    if (compS === 'rock')
    {
        if(playS.toUpperCase() === 'rock'.toUpperCase() )
        {
            // added the console message to check the outcome displayed for testing
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = "It's a tie!";
        }
        else if(playS.toUpperCase()  === 'paper'.toUpperCase() )
        {
            playerScore++;
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = "You win! Paper beats Rock.";
        }
        else if(playS.toUpperCase()  === 'scissors'.toUpperCase() )
        {
            compScore++;
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = "You lose! Rock beats Scissors.";
        }
        else
        {
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = "Wrong Input";
        }
        
    }
    else if (compS === 'paper')
    {
        if(playS.toUpperCase()  === 'rock'.toUpperCase() )
        {
            compScore++;
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = 'You lose! Paper beats Rock.';
        }
        else if(playS.toUpperCase()  === 'paper'.toUpperCase() )
        {
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = "It's a tie!";
        }
        else if(playS.toUpperCase()  === 'scissors'.toUpperCase() )
        {
            playerScore++;
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = "You win! Scissors beats Paper.";
        }
        else
        {
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = "Wrong Input";
        }
 
    }
    else if (compS === 'scissors')
    {
        if(playS.toUpperCase()  === 'rock'.toUpperCase() )
        {
            playerScore++;
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = 'You win! Rock beats Scissors.';
        }
        else if(playS.toUpperCase()  === 'paper'.toUpperCase() )
        {
            compScore++;
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = 'You lose! Scissors beats Paper.';
        }
        else if(playS.toUpperCase()  === 'scissors'.toUpperCase() )
        {
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = "It's a tie";
        }
        else
        {
            console.log(`Computer Input: ${compS} \nUser Input: ${playS}`);
            message = 'Wrong Input!';
        }

       
    }
    
    return `${message} \nComputer Score: ${compScore} \nPlayer Score: ${playerScore}`;

}

// console.log(play(computerPlay(), playerSelection));
// console.log(play(computerPlay(), 'ROCK'));

function game()
{
    for(count=1; count<=5; count++)
    {
        playerSelection = prompt('What is your weapon of choice?\n rock or paper or scissors?')
        // console.log(play(computerPlay(), 'ROCK'));
        console.log(play(computerPlay(), playerSelection));
        // play(computerPlay(), 'ROCK');
    }
    if(playerScore > compScore)
    {
        winner = 'Player Wins!';
    }
    else if(playerScore < compScore)
    {
        winner = 'Computer Wins';
    }
    else
    {
        winner = 'Computer and Player tied';
    }
    return winner;
}

console.log(game());