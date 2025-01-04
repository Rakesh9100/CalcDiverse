function calculate(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();
    
    // Get the input values from the form
    let pedalEffort = parseFloat(document.getElementById('pedal-effort').value);
    let gearRatio = parseFloat(document.getElementById('gear-ratio').value);
    let terrain = document.getElementById('terrain').value;
    let windSpeed = parseFloat(document.getElementById('wind-speed').value) || 0;
    
    // Validate the inputs
    if (isNaN(pedalEffort) || pedalEffort <= 0) {
        alert("Please enter a valid pedal effort.");
        return;
    }
    if (isNaN(gearRatio) || gearRatio <= 0) {
        alert("Please enter a valid gear ratio.");
        return;
    }
    
    // Calculate the base speed based on pedal effort, gear ratio, and terrain type
    let baseSpeed = pedalEffort * gearRatio * (terrain === 'uphill' ? 0.8 : (terrain === 'downhill' ? 1.2 : 1));
    
    // Adjust speed based on wind speed (positive for headwind, negative for tailwind)
    let adjustedSpeed = baseSpeed - windSpeed;
    
    // Display the result
    document.getElementById('result').innerText = `Your speed is approximately: ${adjustedSpeed.toFixed(2)} km/h`;
}