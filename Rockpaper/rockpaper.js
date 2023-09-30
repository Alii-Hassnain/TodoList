const score ={
    win:0,
    loss:0,
    draw:0
};



function computerGenerated(){
    let maths =( (Math.random() * 3) + 1);
    maths = Math.floor(maths);
    console.log(maths);
    //computer picked
    let computerPick = "a";
    if(maths === 1){
        computerPick = "rock";
    }else if(maths === 2){
        computerPick = "paper";
    }else if(maths === 3){
        computerPick = "scissor";
    
    }
    return computerPick;

}




//user picked

let button = document.querySelectorAll(".button");
button.forEach((button)=>{
    button.addEventListener("click",()=>{
        let computerPick = computerGenerated();
        if(button.innerHTML === "rock"){
            if(computerPick === "rock"){
                console.log("draw")
                score.draw++;
            }else if(computerPick === "paper"){
                console.log("you loss")
                score.loss++;
            }else if(computerPick === "scissor"){
                console.log("you win")
                score.win++
            };
        }else if(button.innerHTML === "paper"){
            if(computerPick === "rock"){
                console.log("you loss")
                score.loss++
            }else if(computerPick === "paper"){
                console.log("draw")
                score.draw++
            }else if(computerPick === "scissor"){
                console.log("you win")
                score.win++
            };
        }else if(button.innerHTML === "scissor"){
            if(computerPick === "rock"){
                console.log("you loss")
                score.loss++;
            }else if(computerPick === "paper"){
                console.log("you win")
                score.win++;
            }else if(computerPick === "scissor"){
                console.log("draw")
                score.draw++;
            };
        };

        alert(`you slect ${button} computer select ${computerPick}
        win:${score.win},loss:${score.loss},draw:${score.draw}`)
        
    })
})

