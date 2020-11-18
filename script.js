
let user = 0;
let computerchoice = 0;

function playerschoice (){
    document.getElementById("rock").addEventListener("click", function(){
        user = "rock";
    });
    document.getElementById("paper").addEventListener("click", function(){
        user = "paper";
    });
    document.getElementById("scissors").addEventListener("click", function(){
        user = "scissors";
    });
}

playerschoice ();


document.getElementById("computer").addEventListener("click", function(){
    let computer = Math.floor ( Math.random() *3);
    if (computer === 0){
        computerchoice = "rock";
    }
    else if (computer === 1){
        computerchoice = "paper";
    }
    else{
        computerchoice = "scissors";
    }
    console.log(computerchoice);
    if (user === 0){
        document.getElementById("result").innerHTML = "Please pick your weapon";
    }
    else if (user === computerchoice){
        document.getElementById("result").innerHTML = "It's a tie!";
    }
    else if (user === "rock" && computerchoice === "scissors"){
        document.getElementById("result").innerHTML = "You win! Rock beats scissors"
    }

});