function calculateSpecificHeatCapacity() {
    const heatEnergy = parseFloat(document.getElementById('heatEnergy').value);
    const mass = parseFloat(document.getElementById('mass').value);
    const temperatureChange = parseFloat(document.getElementById('temperatureChange').value);
    const specificHeatCapacity = heatEnergy / (mass * temperatureChange);

    const resultElement = document.getElementById('result');
    if (isNaN(specificHeatCapacity)) {
        resultElement.innerText = 'Please enter valid values.';
    } else {
        resultElement.innerText = `Specific Heat Capacity: ${specificHeatCapacity.toFixed(2)} J/kg°C`;
    }
}