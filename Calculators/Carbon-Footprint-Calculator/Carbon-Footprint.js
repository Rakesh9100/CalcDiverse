function calculateCarbonFootprint() {
    const milesInput = document.getElementById('miles');
    const carbonResult = document.getElementById('carbonValue');

    const miles = parseFloat(milesInput.value);
    const carbonFootprint = miles * 0.5; // Replace with your carbon footprint calculation formula

    carbonResult.textContent = carbonFootprint.toFixed(2);
}
