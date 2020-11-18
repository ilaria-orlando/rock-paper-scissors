
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
    console.log(user);

    //conditions to win
    if (user === computerchoice){
        document.getElementById("result").innerHTML = "It's a tie!";
    }
    else if (user === "paper" && computerchoice === "rock"){
        document.getElementById("result").innerHTML = "You win! paper beats rock"
    }
    else if (user === "rock" && computerchoice === "scissors"){
        document.getElementById("result").innerHTML = "You win! Rock beats scissors"
    }
    else if (user === "scissors" && computerchoice === "paper"){
        document.getElementById("result").innerHTML = "You win! Scissors beats paper"
    }
    else if (user === "paper" && computerchoice === "scissors"){
        document.getElementById("result").innerHTML = "You lose :(! Scissors beats paper"
    }
    else if (user === "scissors" && computerchoice === "rock"){
        document.getElementById("result").innerHTML = "You lose :(! Rock beats scissors"
    }
    else if (user === "rock" && computerchoice === "paper"){
        document.getElementById("result").innerHTML = "You lose :(! paper beats rock"
    }
    else {
        document.getElementById("result").innerHTML = "Please pick your weapon";
    }

    console.log(`img/computer${computerchoice}.png`)

    //image change based on user input and computerchoice
    document.getElementById("imgplayer").src = `img/player${user}.png`;
    document.getElementById("imgcomputer").src = `img/computer${computerchoice}.png`;

});