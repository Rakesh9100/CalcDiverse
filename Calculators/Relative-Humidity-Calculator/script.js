function calculateHumidity() {
    // Get the temperature and dew point from the input fields
    const temperature = parseFloat(document.getElementById('temperature').value);
    const dewPoint = parseFloat(document.getElementById('dewPoint').value);

    // Calculate the relative humidity using the formula
    const relativeHumidity = 100 * (Math.exp((17.625 * dewPoint) / (243.04 + dewPoint)) / Math.exp((17.625 * temperature) / (243.04 + temperature)));

    // Display the result
    document.getElementById('result').innerText = `Relative Humidity: ${relativeHumidity.toFixed(2)}%`;
}