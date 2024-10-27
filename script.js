document.getElementById("yes-button").addEventListener("click", handleYes);
document.getElementById("no-button").addEventListener("click", handleNo);

let clockInterval; // Variable to hold the clock interval

function handleYes() {
    document.getElementById("prompt-frame").classList.add("hidden");
    document.getElementById("main-frame").classList.remove("hidden");
    showClock();
}

function handleNo() {
    alert("Ok then, why are you here? GET LOST!");
    window.close(); // Attempt to close the window (works in some browsers)
}

function showClock() {
    const clockLabel = document.getElementById("clock-label");
    clockInterval = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        clockLabel.textContent = currentTime;

        // Fun animations
        clockLabel.classList.remove('hidden');
        clockLabel.style.opacity = 0; // Start hidden
        clockLabel.style.transform = 'scale(0)'; // Start small

        // Apply animations
        setTimeout(() => {
            clockLabel.style.opacity = 1; // Fade in
            clockLabel.style.transform = 'scale(1)'; // Scale up
            clockLabel.classList.add('explode'); // Explode effect

            // Remove the explode effect class after the animation
            setTimeout(() => {
                clockLabel.classList.remove('explode');
            }, 500);
        }, 0);
    }, 1000); // Update every second
}
