// console.log('Yooooooo!');

/* 
    Going to create a rock-paper scrissors project.
    - it is going to be tested on the browser console before setting up the UI.
    - Have set up the index.html and linked this external script.js file.
    - This was a challenging project but with the help of some videos and looking through some code, I managed
         to complete it.

    - The R-P-S rules are:
        i) rock > scissors
        ii) paper > rock
        iii) scissors > paper
*/

/*  Had to re-do my logic as it was tough to set up the UI with it.
    - After setting up the HTML, I declared the elements here to make them accessible to add the content to the web.
*/

const displayMsg = document.querySelector('#msg');
const displayCompScore = document.querySelector('#comp-score');
const displayUserScore = document.querySelector('#user-score');
const displayCompChoice = document.querySelector('#comp-choice');
const displayUserChoice= document.querySelector('#user-choice');
const displayRoundResult = document.querySelector('#round-res');
const gameChoices = document.querySelectorAll('button');
const gameReset = document.querySelector('#reset-game');

// variables that I have used in the functions declared and they'll be passed to the html elements.
let compSelection; 
let playerSelection;
let compScore = 0;
let playerScore = 0;
let roundRes;
let message;
let winner;

// the reset game button is hidden when playing the game.
gameReset.setAttribute('style', 'display: none');

// when the gameReset button is clicked, it will refresh the page and reset the game.
gameReset.addEventListener('click', (e) => window.location.reload());

// looping thru the buttons and adding an EventListener to each when clicked, the playGame func is called.
gameChoices.forEach(gameChoice => gameChoice.addEventListener('click', playGame));

// the main function for the project taking event(e) as a param and calling all other functions inside here
function playGame(e)
{
    playerSelection = e.target.className;
    displayUserChoice.innerHTML = ` ${playerSelection}`;

    getComputerChoice();

    playRound();

    getScore();

    getWinner();

   
}

// function to generate the computer's selction randomly then if needed, display it to the html element.
function getComputerChoice()
{
    compSelection = Math.floor(Math.random() * 3) + 1;

    if(compSelection === 1)
    {
        compSelection = 'rock';
    }
    else if(compSelection === 2)
    {
        compSelection = 'paper';
    }
    else
    {
        compSelection = 'scissors';
    }
    displayCompChoice.innerHTML = ` ${compSelection}`;
}

// function to play a single round of the game and tally the results for the player & computer
// it also displays the result message on who won the round or if it's a tie.
function playRound()
{
    if(compSelection === playerSelection)
    {
        roundRes = "It's a tie!";
    }
    else if(compSelection === 'rock' && playerSelection === 'paper')
    {
        roundRes = "You win! Paper beats Rock.";
        playerScore++;
    }
    else if(compSelection === 'rock' && playerSelection === 'scissors')
    {
        roundRes = "You lose! Rock beats Scissors.";
        compScore++;
    }
    else if(compSelection === 'paper' && playerSelection === 'rock')
    {
        roundRes = "You lose! Paper beats Rock.";
        compScore++;
    }
    else if(compSelection === 'paper' && playerSelection === 'scissors')
    {
        roundRes = "You win! Scissors beats Paper.";
        playerScore++;
    }
    else if(compSelection === 'scissors' && playerSelection === 'rock')
    {
        roundRes = "You win! Rock beats Scissors.";
        playerScore++;
    }
    else if(compSelection === 'scissors' && playerSelection === 'paper')
    {
        roundRes = "You lose! Scissors beats Paper.";
        compScore++;
    }

    displayRoundResult.innerHTML = ` ${roundRes}`;

}

// this function will display the score of the both players on the web page.
function getScore()
{
    displayCompScore.innerHTML = `${compScore}`;
    displayUserScore.innerHTML = `${playerScore}`;
}

// this checks if either of the winners have 5 points and declares a winner then disables the 'click' event for the
// game buttons and then displays the reset game button if player wishes to replay the game.
function getWinner()
{
    if(compScore === 5 || playerScore === 5)
    {
        winner = (compScore === 5) ? `Computer Beat You.` : `You Defeated Computer`;
        displayMsg.innerHTML = `${winner}`;

        gameChoices.forEach(gameChoice => gameChoice.removeEventListener('click', playGame));

        gameReset.setAttribute('style', 'display: block');
    }
}
