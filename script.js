let screenTime = 0;
let screenTimeLimit = 0;
const timeDisplay = document.getElementById('time');
const limitInput = document.getElementById('limit');
const setLimitButton = document.getElementById('set-limit');
const notification = document.getElementById('notification');

// Function to update screen time
function updateScreenTime() {
    screenTime++;
    timeDisplay.textContent = screenTime;

    if (screenTimeLimit && screenTime > screenTimeLimit) {
        notification.style.display = 'block';
    } else {
        notification.style.display = 'none';
    }
}

// Function to set screen time limit
setLimitButton.addEventListener('click', () => {
    screenTimeLimit = parseInt(limitInput.value, 10);
    alert(`Screen time limit set to ${screenTimeLimit} minutes.`);
});

// Update screen time every minute
setInterval(updateScreenTime, 60000);
