function calculateEnergyConsumption() {
    const kWhInput = document.getElementById('kWh');
    const energyResult = document.getElementById('energyValue');

    const kWh = parseFloat(kWhInput.value);
    const energyConsumption = kWh * 12; // Assume 12 months in a year

    energyResult.textContent = energyConsumption.toFixed(2);
}

function calculateWaterUsage() {
    const gallonsInput = document.getElementById('gallons');
    const waterResult = document.getElementById('waterValue');

    const gallons = parseFloat(gallonsInput.value);
    const waterUsage = gallons * 365; // Assume 365 days in a year

    waterResult.textContent = waterUsage.toFixed(2);
}
