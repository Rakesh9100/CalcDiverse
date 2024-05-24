function calculateTravelCost() {

    const distance = parseFloat(document.getElementById('distance').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuel-efficiency').value);
    const fuelCost = parseFloat(document.getElementById('fuel-cost').value);

    if (isNaN(distance) || isNaN(fuelEfficiency) || isNaN(fuelCost)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    const gallonsNeeded = distance / fuelEfficiency;
    const totalCost = gallonsNeeded * fuelCost;

    document.getElementById('result').textContent = `Total fuel cost: ₹${totalCost.toFixed(2)}`;
}
