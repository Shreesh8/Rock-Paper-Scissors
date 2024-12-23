let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");

const getBotChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was a Draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin){
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        botScore++;
        botScorePara.innerText = botScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const botChoice = getBotChoice();
    console.log("bot choice =", botChoice);

    if (userChoice === botChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = botChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
        userWin = botChoice === "scissors" ? false : true;
        } else {
            userWin = botChoice === "rock" ? false : true;
        }
        
        showWinner(userWin);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});

