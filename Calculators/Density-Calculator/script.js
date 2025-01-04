function calculateDensity() {
    const mass = parseFloat(document.getElementById('mass').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const massUnit = parseFloat(document.getElementById('massUnit').value);
    const volumeUnit = parseFloat(document.getElementById('volumeUnit').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(mass) || isNaN(volume) || mass <= 0 || volume <= 0) {
        resultDiv.textContent = 'Please enter valid positive numbers for mass and volume.';
        resultDiv.style.color = 'red';
        return;
    }

    const adjustedMass = mass * massUnit; // Convert to kg
    const adjustedVolume = volume * volumeUnit; // Convert to m³

    const density = (adjustedMass / adjustedVolume).toFixed(2);
    resultDiv.textContent = `The density is ${density} kg/m³.`;
    resultDiv.style.color = 'green';
}