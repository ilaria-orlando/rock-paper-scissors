
let user = 0;
let computerchoice = 0;

// create variable based upon click of the player
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
    //randomize computers choice, if else statement for converting the numbers into strings
    let computer = Math.floor ( Math.random() *10);
    if (computer < 3){
        computerchoice = "rock";
    }
    else if (computer < 7){
        computerchoice = "paper";
    }
    else{
        computerchoice = "scissors";
    }
    console.log(computerchoice);
    console.log(user);

    //conditions to win
    if (user === computerchoice){
        document.getElementById("result").innerHTML = "It's a tie!";
    }
    else if (user === "paper" && computerchoice === "rock" || user === "rock" && computerchoice === "scissors" || user === "scissors" && computerchoice === "paper"){
        document.getElementById("result").innerHTML = `You win! ${user} beats ${computerchoice}`
    }
    else if (user === "paper" && computerchoice === "scissors" || user === "scissors" && computerchoice === "rock" || user === "rock" && computerchoice === "paper"){
        document.getElementById("result").innerHTML = `You lose :(! ${computerchoice} beats ${user}`
    }
    else {
        document.getElementById("result").innerHTML = "Please pick your weapon";
    }

    //image change based on user input and computerchoice
    document.getElementById("imgplayer").src = `img/player${user}.png`;
    document.getElementById("imgcomputer").src = `img/computer${computerchoice}.png`;

});