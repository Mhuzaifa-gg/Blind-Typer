// Sentences for the game
const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "JavaScript is fun to learn",
    "Practice makes progress every day",
    "A journey of a thousand miles begins with a single step",
    "The only limit is your imagination",
    "Success is not final failure is not fatal",
    "Every expert was once a beginner",
    "Stay curious and keep learning every single day",
    "Small consistent actions lead to big results",
    "Mistakes are proof that you are trying your best",
    "The secret of getting ahead is getting started",
    "Believe you can and you are halfway there"
];

let currentSentence = "";
let score = 0;

// Get HTML elements
const sentenceBox = document.getElementById("sentenceBox");
const startBtn = document.getElementById("startBtn");
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const scoreDisplay = document.getElementById("scoreDisplay");


// Start button click
startBtn.addEventListener("click", function() {
    // Pick random sentence
    const randomIndex = Math.floor(Math.random() * sentences.length);
    currentSentence = sentences[randomIndex];
    
    // Show sentence
    sentenceBox.textContent = currentSentence;
    
    // Disable start button, enable nothing else yet
    startBtn.disabled = true;
    
    // Hide sentence after 5 seconds
    setTimeout(function() {
        sentenceBox.textContent = "??? Type what you saw!";
        userInput.disabled = false;
        checkBtn.disabled = false;
        userInput.focus();
    }, 5000);
});

// Check answer button
checkBtn.addEventListener("click", function() {
    const userAnswer = userInput.value.trim();
    
    if (userAnswer === currentSentence) {
        score++;
        alert("✅ Correct! +1 point");
    } else {
        alert("❌ Wrong! The sentence was: " + currentSentence);
            // After wrong answer, show correct sentence briefly
    sentenceBox.textContent = "Correct was: " + currentSentence;
    setTimeout(function() {
        sentenceBox.textContent = "Click Start to begin";
    }, 2000);
    }
    
    // Update score display
    scoreDisplay.textContent = "Score: " + score;
    
    // Reset for next round
    userInput.value = "";
    userInput.disabled = true;
    checkBtn.disabled = true;
    startBtn.disabled = false;
    sentenceBox.textContent = "Click Start to begin";
});

// Reset button
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function() {
    score = 0;
    scoreDisplay.textContent = "Score: 0";
    alert("Score has been reset to 0");
});
