
let rollDice = document.querySelector(".roll");
let holdButton = document.querySelector(".hold");
let newGameButton = document.querySelector(".newGame");
let diceImage = document.querySelector("img");
let scores = document.querySelectorAll(".total-score");
let currentScores = document.querySelectorAll(".current-number");
let winnerMessage = document.getElementById("winnerMessage");
let activePlayer = 0; 


let playerScores = [0, 0];
let tempScores = [0, 0]; 
function switchPlayer() {
    tempScores[activePlayer] = 0;
    currentScores[activePlayer].textContent = tempScores[activePlayer];
    
    activePlayer = activePlayer === 0 ? 1 : 0;

    updatePlayerStyles();
}

function updatePlayerStyles() {
    if (activePlayer === 0) {
        document.querySelector(".player1").style.backgroundColor = "#FFAD60";
        document.querySelector(".player2").style.backgroundColor = "rgba(255, 173, 96, 0.3)";
    } else {
        document.querySelector(".player1").style.backgroundColor = "rgba(255, 173, 96, 0.3)";
        document.querySelector(".player2").style.backgroundColor = "#FFAD60";
    }
}

rollDice.addEventListener("click", function() {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.src = `./dice${randomNumber}.png`;

    if (randomNumber !== 1) {
        tempScores[activePlayer] += randomNumber;
        currentScores[activePlayer].textContent = tempScores[activePlayer];
    } else {
        playerScores[activePlayer] = 0;
        scores[activePlayer].textContent = playerScores[activePlayer];

        tempScores[activePlayer] = 0;
        currentScores[activePlayer].textContent = tempScores[activePlayer];
        
        switchPlayer();
    }
});

holdButton.addEventListener("click", function() {
    playerScores[activePlayer] += tempScores[activePlayer];
    scores[activePlayer].textContent = playerScores[activePlayer];
    
    if (playerScores[activePlayer] >= 50) {
        winnerMessage.textContent = `Player ${activePlayer + 1} wins with a score of ${playerScores[activePlayer]}!`;
        return; 
    }
    
    tempScores[activePlayer] = 0;
    currentScores[activePlayer].textContent = tempScores[activePlayer];
    
    switchPlayer();
});

newGameButton.addEventListener("click", function() {
    playerScores = [0, 0];
    tempScores = [0, 0];
    currentScores[0].textContent = 0;
    currentScores[1].textContent = 0;
    scores[0].textContent = 0;
    scores[1].textContent = 0;

    winnerMessage.textContent = "";

    activePlayer = 0;
    updatePlayerStyles();
});

updatePlayerStyles();
