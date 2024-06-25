let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score")
const compscorePara=document.querySelector("#Comp-score")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
}
gameDraw=()=>{
    //draw condition
    console.log("Draw");
    msg.innerText="Draw";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        console.log("You Win");
        userscorePara.innerText=`${userscore}`;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        computerscore++;
        compscorePara.innerText=`${computerscore}`;
        console.log("You Lose");
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("User Choice :",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer Choice : ",compChoice)
    if(userChoice===compChoice){
        gameDraw();
    }
    else{
        let userWin=true;
        if(userChoice==="paper"){
            //avaliable comp choices : rock or scissors
            userWin=compChoice==="rock"?true:false;
        }
        else if(userChoice==="rock"){
            //avaliable comp choices : paper or scissors
            userWin=compChoice==="paper"?false:true;
        }
        else{
            //avaliable comp choices : paper or rock
            userWin=compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})