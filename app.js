let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetGame");
let newGame=document.querySelector(".newGame");
let result=document.querySelector(".result");
let msg=document.querySelector("#msg");
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
turnO=true;
let count=0;
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        count++;
        console.log(count);
        box.disabled=true;
        checkWinner();
        if(!checkWinner() && count===9){
           ShowDraw();
        }
    });
});
const ShowDraw=()=>{
    msg.innerText="Draw ! Play again ";
    result.classList.remove("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const ShowWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}` ;
    result.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
    let pattern1=boxes[pattern[0]].innerText;
    let pattern2=boxes[pattern[1]].innerText;
    let pattern3=boxes[pattern[2]].innerText;
    if(pattern1!="" && pattern2!="" && pattern3!=""){
        if(pattern1===pattern2 && pattern2===pattern3){
            console.log("winner");
            ShowWinner(pattern1);
            return true;
        }
    }
}
return false;
}

const reset=()=>{
    turnO=true;
    enableBoxes();
    result.classList.add("hide");
}
resetBtn.addEventListener("click",reset);
newGame.addEventListener("click",reset);