// Game variables
let playerName = "";
let totalScore = 0;
let roundScore = 0;
let roundsPlayed = 0;
let gameOver = false;

// Start the game when player enters name
function startGame() {
    // Get player name from input
    playerName = document.getElementById("playerNameInput").value.trim();
    
    // Validate player name
    if (playerName === "") {
        alert("Please enter your name to start the game!");
        return;
    }
    
    // Display player name and show game area
    document.getElementById("playerName").innerText = playerName;
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    
    // Reset game state
    resetGameState();
    updateDisplay();
}

// Roll the dice
function rollDice() {
    // Don't allow rolling if game is over
    if (gameOver) return;
    
    // Generate random number between 1 and 6
    const roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("lastRoll").innerText = roll;
    
    // Check if roll is 1
    if (roll === 1) {
        // Player rolled a 1, lose round points
        roundScore = 0;
        roundsPlayed++;
        document.getElementById("gameMessage").innerText = "Oh no! You rolled a 1 and lost your round points!";
        updateDisplay();
    } else {
        // Add roll to round score
        roundScore += roll;
        document.getElementById("gameMessage").innerText = `You rolled a ${roll}!`;
        updateDisplay();
    }
}

// Freeze score
function freezeScore() {
    // Don't allow freezing if game is over
    if (gameOver) return;
    
    // Don't allow freezing if no points in current round
    if (roundScore === 0) {
        document.getElementById("gameMessage").innerText = "You need to roll at least once and score points before freezing!";
        return;
    }
    
    // Add round score to total score
    totalScore += roundScore;
    document.getElementById("gameMessage").innerText = `You froze ${roundScore} points!`;
    roundScore = 0;
    roundsPlayed++;
    
    // Check if player has won
    if (totalScore >= 100) {
        gameOver = true;
        document.getElementById("gameMessage").innerText = 
            `🎉 Congratulations ${playerName}! You won with ${totalScore} points in ${roundsPlayed} rounds!`;
        document.getElementById("newGameButton").style.display = "block";
        document.getElementById("rollButton").disabled = true;
        document.getElementById("freezeButton").disabled = true;
    }
    
    updateDisplay();
}

// Update display with current game state
function updateDisplay() {
    document.getElementById("totalScore").innerText = totalScore;
    document.getElementById("roundScore").innerText = roundScore;
    document.getElementById("roundsPlayed").innerText = roundsPlayed;
}

// Reset game state for a new game
function resetGame() {
    resetGameState();
    document.getElementById("gameMessage").innerText = "";
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("rollButton").disabled = false;
    document.getElementById("freezeButton").disabled = false;
    document.getElementById("lastRoll").innerText = "-";
    updateDisplay();
}

// Reset game state variables
function resetGameState() {
    totalScore = 0;
    roundScore = 0;
    roundsPlayed = 0;
    gameOver = false;
}

// Add event listener for Enter key in name input
document.getElementById("playerNameInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        startGame();
    }
});
