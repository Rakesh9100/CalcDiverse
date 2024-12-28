function calculateBallisticDetails() {
    const mass = parseFloat(document.getElementById('mass').value);
    const diameter = parseFloat(document.getElementById('diameter').value);
    const dragCoefficient = parseFloat(document.getElementById('drag-coefficient').value);
    const velocity = parseFloat(document.getElementById('velocity').value);
    const windSpeed = parseFloat(document.getElementById('wind-speed').value);
    const angle = parseFloat(document.getElementById('angle').value);

    if (isNaN(mass) || isNaN(diameter) || isNaN(dragCoefficient) || isNaN(velocity) || isNaN(windSpeed) || isNaN(angle)) {
        alert('Please enter valid numeric values.');
        return;
    }

    // Convert mass to kilograms and diameter to meters
    const massKg = mass / 1000;
    const diameterM = diameter / 1000;

    // Calculate the cross-sectional area
    const area = Math.PI * Math.pow(diameterM / 2, 2);

    // Calculate the ballistic coefficient
    const ballisticCoefficient = massKg / (dragCoefficient * area);

    // Calculate trajectory details
    const gravity = 9.81; // Acceleration due to gravity (m/s^2)
    const angleRad = (Math.PI / 180) * angle; // Convert angle to radians
    const timeOfFlight = (2 * velocity * Math.sin(angleRad)) / gravity;
    const maxHeight = Math.pow(velocity * Math.sin(angleRad), 2) / (2 * gravity);
    const range = (Math.pow(velocity, 2) * Math.sin(2 * angleRad)) / gravity;
    const windDrift = windSpeed * timeOfFlight;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.innerHTML = `
        <p>Ballistic Coefficient: ${ballisticCoefficient.toFixed(4)} kg/m²</p>
        <p>Time of Flight: ${timeOfFlight.toFixed(2)} s</p>
        <p>Maximum Height: ${maxHeight.toFixed(2)} m</p>
        <p>Range: ${range.toFixed(2)} m</p>
        <p>Wind Drift: ${windDrift.toFixed(2)} m</p>
    `;
}

function moveToNextField(event, nextFieldId) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission on Enter
        const nextField = document.getElementById(nextFieldId);
        if (nextField) {
            nextField.focus(); // Focus the next input field
        }
    }
}