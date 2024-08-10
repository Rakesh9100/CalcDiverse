function calculate() {
    const g = 9.81; // Acceleration due to gravity (m/s^2)
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    const height = parseFloat(heightInput.value);

    if (isNaN(height) || height < 0) {
        resultDiv.innerHTML = 'Please enter a valid height.';
        resultDiv.style.color = '#dc3545'; // Change color to red for error
        return;
    }

    const time = Math.sqrt((2 * height) / g);
    const speed = g * time;

    resultDiv.style.color = '#28a745'; // Change color to green for valid result
    resultDiv.innerHTML = `
        <p>Time to fall: ${time.toFixed(2)} seconds</p>
        <p>Speed: ${speed.toFixed(2)} m/s</p>
    `;
}
