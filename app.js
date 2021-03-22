function computerPlay()
{
    let m;
    let randomVal = Math.floor(Math.random()*3);
    
    if(randomVal == 0)
    {
        m = 'rock';
    }
    else if(randomVal == 1)
    {
        m = 'paper';
    }
    else
    {
        m = 'scissors';
    }
    return m;
}

let msg;
let comResult = 0;
let playerResult = 0;
// let compChoice  = computerPlay();
// let userChoice  = String(prompt('Enter either rock or paper or scissors: ')).toLowerCase();
// console.log(compChoice);
function playGame(player, comp)
{
    
    switch(player)
    {
        case 'rock':
            switch(comp)
            {
                case 'rock':
                    msg ='it\'s a tie';
                    break
                case 'paper':
                    msg = `you loose. ${comp} beats ${player}.`;
                    comResult++;
                    break
                default:
                    msg = `you win. ${player} beats ${comp}`;
                    playerResult++;
                    break

            }
            break
            
        case 'paper':
            switch(comp)
            {
                case 'rock':
                    msg = `you win. ${player} beats ${comp}`;
                    playerResult++;
                    break
                case 'paper':
                    msg = 'it\'s a tie';
                    break
                default:
                    msg = `you loose. ${comp} cuts ${player}.`;
                    comResult++;
                    break

            }
            break

            case 'scissors':
                switch(comp)
                {
                    case 'rock':
                        msg = `you loose. ${comp} beats ${player}.`;
                        comResult++;
                        break
                    case 'paper':
                        msg = `you win. ${player} cuts ${comp}`;
                        playerResult++;
                        break
                    default:
                        msg = 'it\'s a tie';
                        break
    
                }
                break
            
            default:
                msg = `${player} is incorrect input`; 
                break
     
    }
    
    return `${msg}`;
}

function game()
{    
    for(count=1; count <= 5; count++)
    {
        let compChoice  = computerPlay();
        let userChoice  = String(prompt('Enter either rock or paper or scissors: ')).toLowerCase();
        // let sd = prompt('say something');
        console.log(playGame(userChoice, compChoice));
    }
    return `Player: ${playerResult} ------- Computer: ${comResult}`;
}

console.log(game());
// console.log(playGame(userChoice, compChoice));
