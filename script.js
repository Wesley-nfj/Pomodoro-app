let timer;
let studyTime = 1 * 60;    // You can change this to 25*60 for 25 minutes
let breakTime = 5 * 60;    // You can change this to 5*60 for 5 minutes
let timeLeft = studyTime;
let isRunning = false;
let onBreak = false;
let sound = document.getElementById("soundAlert");

// Update the timer display
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
        document.getElementById("Status").innerText = onBreak ? "✅ Break Time" : "⏳ STUDY TIME";

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                // Countdown finished
                clearInterval(timer);
                isRunning = false;

                // Play sound
                sound.muted = false;
                sound.volume = 0.8;
                sound.play();

                // Switch between study and break
                if (!onBreak) {
                    onBreak = true;
                    timeLeft = breakTime;
                    document.getElementById("Status").innerText = "☕ BREAK TIME";
                } else {
                    onBreak = false;
                    timeLeft = studyTime;
                    document.getElementById("Status").innerText = "🎉 BREAK OVER! Back to study";
                }

                updateDisplay();

                // Automatically start next session
                startTimer();
            }
        }, 1000);
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
    timeLeft = studyTime; // reset to studyTime
    isRunning = false;
    onBreak = false;
    updateDisplay();
    document.getElementById("Status").innerText = "⏳ STUDY TIME";
}
