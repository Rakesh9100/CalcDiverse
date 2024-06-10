function calculateCarbonFootprint() {
    let electricity = document.getElementById('electricity').value || 0;
    let gas = document.getElementById('gas').value || 0;
    let kilometers = document.getElementById('kilometers').value || 0;
    let flights = document.getElementById('flights').value || 0;

    let electricityEmissionFactor = 0.233; // kg CO2 per kWh
    let gasEmissionFactor = 2.204; // kg CO2 per kg
    let carEmissionFactor = 0.12; // kg CO2 per km
    let flightEmissionFactor = 250; // kg CO2 per flight

    let totalEmissions = (electricity * electricityEmissionFactor) +
        (gas * gasEmissionFactor) +
        (kilometers * carEmissionFactor) +
        (flights * flightEmissionFactor / 12);

    document.getElementById('result').value = totalEmissions.toFixed(2) + ' kg CO2 per month';
}

function resetForm() {
    document.getElementById('electricity').value = '';
    document.getElementById('gas').value = '';
    document.getElementById('kilometers').value = '';
    document.getElementById('flights').value = '';
    document.getElementById('result').value = '';
}

// Function to calculate CO2 emissions based on miles driven
function calculateCO2Emissions(milesDriven) {
    // Average emission factor: 0.404 kg of CO2 per mile
    var emissionFactor = 0.404;
    return milesDriven * emissionFactor;
}

// Function to display the results
function displayResults(carbonFootprintYear, carbonFootprintMonth, carbonFootprintWeek) {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <div class="result-details">
            <div><strong>Yearly Carbon Footprint:</strong> ${carbonFootprintYear.toFixed(2)} kg of CO2 per year.</div>
            <br/><div><strong>Monthly Carbon Footprint:</strong> ${carbonFootprintMonth.toFixed(2)} kg of CO2 per month.</div>
            <br/><div><strong>Weekly Carbon Footprint:</strong> ${carbonFootprintWeek.toFixed(2)} kg of CO2 per week.</div>
        </div>
    `;
}
