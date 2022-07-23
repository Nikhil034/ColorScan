"use strict";

const audio=new Audio('game-over-38511.mp3');

//Declare used variable
let i=0;
let number;
let DisplayScore=0;
let RandomColor;
let AnswerColor;
let sec = 0;
let min=0;



//create color array to display
const colors=["red","green","purple","brown","white","blue"];


//select element from dom
const gameboard=document.querySelector('.game-board');
const DisplayText=document.querySelector('.sp');
const Score=document.querySelector('.sc');
const TimerSet=document.querySelector(".time");
const GameOverMessage=document.querySelector('.show-msg');
const PlayAgain=document.getElementById('playagain');
const YourScore=document.querySelector('#yourscore');
const YourTime=document.querySelector('#gettime');



//intialize score to 0
const setZero=function(){
    Score.innerHTML=`Score=0`;
}

//add none class to GameOverMessage
const setNone=function(){
    GameOverMessage.classList.add('none');
}
setZero();
setNone();




//Timer which continues run when game is start
function timer(){
     timer = setInterval(function(){
        TimerSet.innerHTML=`Time:-0${min}:${sec}`;
        sec++;
        if (sec > 60) {
            min+=1;
            sec=1;
        }
    }, 1000);
}
timer();



//Random Color from array and random color pick function
const GenerateRandomandStyle=function()
{
     number=Math.floor(Math.random()* 6);
     RandomColor=Math.floor(Math.random()*6);
     AnswerColor=colors[RandomColor];
     //console.log(AnswerColor);
     DisplayText.style.textTransform="uppercase";
     DisplayText.innerHTML=colors[number];
     DisplayText.style.color=colors[RandomColor];
}
GenerateRandomandStyle();



//Fire when user click any color box in dom
const UserClickBox=(elem) => {
    const ClickColor = elem.style.backgroundColor;

    if (AnswerColor === ClickColor) {
        DisplayScore++;
        Score.innerHTML = `Score=${DisplayScore}`;
        GenerateRandomandStyle();
    }
    else
    {
        YourScore.innerHTML=`Your Score:-${DisplayScore}`;
        YourTime.innerHTML=TimerSet.innerHTML;
        gameboard.classList.add('none');
        audio.play();
        DisplayScore=0;      
        setZero();
        GameOverMessage.classList.remove('none');

    }
}   

//When user need to play again
PlayAgain.addEventListener('click',function(){
    YourScore.innerHTML=0;
    YourTime.innerHTML=""; 
    gameboard.classList.remove('none');
    GameOverMessage.classList.add('none');
    sec=0;
    min=0;
});   
  