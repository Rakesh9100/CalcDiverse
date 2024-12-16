function calculateRate() {
    // Retrieve and parse the input values for light intensity, CO2 concentration, and temperature
    const light = parseFloat(document.getElementById('light').value);
    const co2 = parseFloat(document.getElementById('co2').value);
    const temperature = parseFloat(document.getElementById('temperature').value);

    // Validate the input values to ensure they are numbers
    if (isNaN(light) || isNaN(co2) || isNaN(temperature)) {
        document.getElementById('result').textContent = 'Please enter valid inputs.';
        return;
    }

    // Simplified formula for calculating the photosynthesis rate
    // - Light contributes positively to the rate (scaled by 0.05)
    // - CO2 contributes positively to the rate (scaled by 0.02)
    // - Deviation from the optimal temperature of 25°C reduces the rate (scaled by 0.1)
    const rate = ((light * 0.05) + (co2 * 0.02) - Math.abs(temperature - 25) * 0.1).toFixed(2);

    // Display the calculated photosynthesis rate in the result section
    document.getElementById('result').textContent = `The photosynthesis rate is ${rate} units.`;
}