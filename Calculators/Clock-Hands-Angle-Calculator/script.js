function calculateAngle() {
    const timeInput = document.getElementById('timeInput').value;
    const [hours, minutes] = timeInput.split(':').map(Number);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        showError("Please enter a valid time in 24-hour format.");
        return;
    }

    const angle = calculateClockAngle(hours, minutes);
    showResult(`The angle between the clock hands at ${timeInput} is approximately: ${angle.toFixed(2)} degrees`);
}

function calculateClockAngle(hours, minutes) {
    // Calculate the angles formed by the hour and minute hands with respect to 12 o'clock
    const hourAngle = 0.5 * (60 * hours + minutes);
    const minuteAngle = 6 * minutes;

    // Calculate the absolute angle between the hour and minute hands
    let angle = Math.abs(hourAngle - minuteAngle);

    // Ensure the angle is not greater than 180 degrees
    if (angle > 180) {
        angle = 360 - angle;
    }

    return angle;
}

function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="error">${message}</div>`;
}

function showResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="success">${message}</div>`;
}

