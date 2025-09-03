let timer; 
let timeLeft = 25 * 60; 
let isRunning = false; 


function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start the timer
function startTimer() {
    if (!isRunning) { 
        isRunning = true;
        document.getElementById("Status").innerText = "⏳ STUDY TIME";
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                document.getElementById("Status").innerText = "✅ BREAK TIME!";
                isRunning = false;
            }
        }, 1000); // run every 1 second
    }
}

// Pause the timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("Status").innerText = "⏸️ PAUSED";
}

// Reset the timer
function ResetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60; // reset to 25 mins
    isRunning = false;
    updateDisplay();
    document.getElementById("Status").innerText = "⏳ STUDY TIME";
}



