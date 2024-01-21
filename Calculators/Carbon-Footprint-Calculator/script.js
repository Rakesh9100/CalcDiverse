function calculateCarbonFootprint() {
    // Get the input values
    var milesDrivenYear = parseFloat(document.getElementById("milesDrivenYear").value);
    var milesDrivenMonth = parseFloat(document.getElementById("milesDrivenMonth").value);
    var milesDrivenWeek = parseFloat(document.getElementById("milesDrivenWeek").value);

    // Validate inputs
    if (isNaN(milesDrivenYear) || isNaN(milesDrivenMonth) || isNaN(milesDrivenWeek)) {
        alert("Please enter valid numbers for miles driven.");
        return;
    }

    // Calculate carbon footprints
    var carbonFootprintYear = calculateCO2Emissions(milesDrivenYear);
    var carbonFootprintMonth = calculateCO2Emissions(milesDrivenMonth);
    var carbonFootprintWeek = calculateCO2Emissions(milesDrivenWeek);

    // Display the results
    displayResults(carbonFootprintYear, carbonFootprintMonth, carbonFootprintWeek);
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
