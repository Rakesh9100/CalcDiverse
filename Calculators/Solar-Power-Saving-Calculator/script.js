const stateData = {
    maharashtra: {
        avgSunHours: 5.5,
        electricityRate: 8,
        co2Reduction: 0.85,
        installationCost: 100000,
        incentives: 20000
    },
    karnataka: {
        avgSunHours: 5.8,
        electricityRate: 7.5,
        co2Reduction: 0.82,
        installationCost: 95000,
        incentives: 15000
    },
    rajasthan: {
        avgSunHours: 6.0,
        electricityRate: 7,
        co2Reduction: 0.88,
        installationCost: 90000,
        incentives: 18000
    },
    tamilnadu: {
        avgSunHours: 5.6,
        electricityRate: 8.2,
        co2Reduction: 0.83,
        installationCost: 110000,
        incentives: 22000
    },
    gujarat: {
        avgSunHours: 5.9,
        electricityRate: 7.8,
        co2Reduction: 0.86,
        installationCost: 105000,
        incentives: 21000
    },
    // Add more states as needed
};

function updateStateData() {
    const state = document.getElementById('state').value;
    if (stateData[state]) {
        document.getElementById('installationCost').value = stateData[state].installationCost;
        document.getElementById('incentives').value = stateData[state].incentives;
    } else {
        document.getElementById('installationCost').value = '';
        document.getElementById('incentives').value = '';
    }
}

function calculateSavings() {
    const state = document.getElementById('state').value;
    const roofArea = parseFloat(document.getElementById('roofArea').value);
    const roofOrientation = document.getElementById('roofOrientation').value;
    const electricityConsumption = parseFloat(document.getElementById('electricityConsumption').value);
    const systemSize = parseFloat(document.getElementById('systemSize').value);
    const installationCost = parseFloat(document.getElementById('installationCost').value);
    const incentives = parseFloat(document.getElementById('incentives').value);
    const financingOptions = document.getElementById('financingOptions').value;

    const avgSunHoursPerDay = stateData[state].avgSunHours;
    const electricityRate = stateData[state].electricityRate;
    const co2ReductionPerKWh = stateData[state].co2Reduction;

    const systemEfficiency = 0.75; // Efficiency of the solar system

    // Annual energy production calculation
    const annualEnergyProduction = systemSize * avgSunHoursPerDay * 365 * systemEfficiency;

    // Annual savings calculation
    const annualSavings = annualEnergyProduction * electricityRate;

    // Payback period calculation
    const netInstallationCost = installationCost - incentives;
    const paybackPeriod = netInstallationCost / annualSavings;

    // Lifetime savings calculation
    const lifetimeSavings = annualSavings * 25; // Assuming a 25-year lifespan

    // Environmental impact calculation
    const annualCo2Reduction = annualEnergyProduction * co2ReductionPerKWh;

    // Display results
    document.getElementById('annualEnergyProduction').innerText = `Annual Energy Production: ${annualEnergyProduction.toFixed(2)} kWh`;
    document.getElementById('annualSavings').innerText = `Annual Savings: ₹${annualSavings.toFixed(2)}`;
    document.getElementById('paybackPeriod').innerText = `Payback Period: ${paybackPeriod.toFixed(2)} years`;
    document.getElementById('lifetimeSavings').innerText = `Total Lifetime Savings: ₹${lifetimeSavings.toFixed(2)}`;
    document.getElementById('environmentalImpact').innerText = `Environmental Impact: ${annualCo2Reduction.toFixed(2)} kg CO2 avoided annually`;
}
