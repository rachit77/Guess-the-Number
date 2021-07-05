'use strict';

let score=50;
let highscore=0;
let secretNumber= Math.trunc(Math.random()*50)+1;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
document.querySelector('.check').addEventListener('click',function()
{
    const guess= Number(document.querySelector('.guess').value);

    // case 1: no input
    if(!guess){
        displayMessage('No Number!');
    }
    else if( guess===secretNumber)
    {

        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent= secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

       if(score > highscore){
           highscore= score;
           document.querySelector('.highscore').textContent= highscore;

       }
    }
    
    else if(guess!==secretNumber) {
        if(score>1) {
           score--;
           document.querySelector('.score').textContent=score;
           displayMessage(guess>secretNumber ?'📈 Too high!' : '📉 Too low!');
        }
        else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent=0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score=50;
    secretNumber= Math.trunc(Math.random()*50)+1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent= score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=' ';
    
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});

