document.getElementById("yes-button").addEventListener("click", handleYes);
document.getElementById("no-button").addEventListener("click", handleNo);

function handleYes() {
    alert("Why don't you just look at your device?");
}

function handleNo() {
    document.getElementById("prompt-frame").classList.add("hidden");
    document.getElementById("main-frame").classList.remove("hidden");
    showPopup();
}

function showPopup() {
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `
        <p style="font-size: 24px; color: #dc3545; font-weight: bold; margin-bottom: 20px;">
            You should really check the time!
        </p>
        <button id="close-popup" class="btn success">OKKKKK!</button>
    `;
    document.body.appendChild(popup);

    document.getElementById("close-popup").addEventListener("click", () => {
        document.body.removeChild(popup);
        showClock();
    });
}

function showClock() {
    const clockLabel = document.getElementById("clock-label");
    clockLabel.classList.remove('hidden');
    setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        clockLabel.textContent = currentTime;

        // Fun animations
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