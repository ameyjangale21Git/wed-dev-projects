var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock","paper", "scissors"];

window.onload = function(){
    for(let i = 0; i<3; i++){
        //<img id = "rock">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click",selectChoice);
        document.getElementById("choices").append(choice);
    }
}
function selectChoice(){
    you = this.id;
    document.getElementById("your_choice").src = you + ".png";

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent_choice").src = opponent + ".png";

    //check for winner
    if (you == opponent){
        yourScore +=1;
        opponentScore +=1;

    }
    else{
        if(you == "rock"){
            if(opponent == "scissors"){
                yourScore += 1;

            }
            else if(opponent=="paper"){
                opponentScore += 1;
            }
        }
        else if(you == "paper"){
            if(opponent == "rock"){
                yourScore += 1;

            }
            else if(opponent=="scissors"){
                opponentScore += 1;
            }
        }
        if(you == "scissors"){
            if(opponent == "paper"){
                yourScore += 1;

            }
            else if(opponent=="rock"){
                opponentScore += 1;
            }
        }
    }
    document.getElementById("your_score").innerText = yourScore;
    document.getElementById("opponent_score").innerText = opponentScore;
    if(yourScore==30){
        document.write("You win");
    }
    else if(opponentScore==30)
        {
        document.write("opponent win");
    }
}
