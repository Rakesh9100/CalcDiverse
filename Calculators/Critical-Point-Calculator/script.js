function calculateCriticalPoint() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b)) {
        alert('Please enter valid numbers for a and b.');
        return;
    }

    if (a === 0 && b === 0) {
        alert('a and b cannot both be zero. Please enter valid non-zero values.');
        return;
    }

    // Calculate critical point
    const criticalTemperature = (8 * a) / (27 * b);
    const criticalPressure = (a / (27 * b * b));
    const criticalVolume = (3 * b);

    // Display results
    document.getElementById('criticalTemperature').textContent = criticalTemperature.toFixed(2);
    document.getElementById('criticalPressure').textContent = criticalPressure.toFixed(2);
    document.getElementById('criticalVolume').textContent = criticalVolume.toFixed(2);
}
