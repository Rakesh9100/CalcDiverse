function calculateWeight() {
    const weightEarth = parseFloat(document.getElementById('weight').value);
    const planet = document.getElementById('planet').value;
    if (isNaN(weightEarth)) {
        document.getElementById('resultText').innerText = "Please enter a value!!";
        return;
    }

    // Gravitational accelerations relative to Earth (m/s^2)
    const gravitationalAcc = {
        mercury: 3.7,
        venus: 8.9,
        earth: 9.8, // Standard gravity on Earth
        mars: 3.7,
        jupiter: 24.79,
        saturn: 10.44,
        uranus: 8.87,
        neptune: 11.15
    };

    const weightPlanet = weightEarth * gravitationalAcc[planet];
    const weightFormatted = weightPlanet.toFixed(2);

    document.getElementById('resultText').textContent = `Weight on ${planet.charAt(0).toUpperCase() + planet.slice(1)}: ${weightFormatted} N`;
}

function clearForm() {
    document.getElementById('weight').value = '';
    document.getElementById('planet').value = 'earth';
    document.getElementById('resultText').textContent = '';
}
