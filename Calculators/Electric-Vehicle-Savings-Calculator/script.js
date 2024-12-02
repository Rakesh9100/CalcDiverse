function calculateCosts() {
    const petrolAvg = parseFloat(document.getElementById("petrol-avg").value);
    const batteryCap = parseFloat(document.getElementById("battery-cap").value);
    const evRange = parseFloat(document.getElementById("ev-range").value);
    const elecCost = parseFloat(document.getElementById("elec-cost").value);

    if (
        isNaN(petrolAvg) ||
        isNaN(batteryCap) ||
        isNaN(evRange) ||
        isNaN(elecCost)
    ) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Petrol cost per km considering average petrol price in India
    const petrolCostPerKm = ((1 / petrolAvg) * 100).toFixed(2); // Assuming an average fuel price of ₹100 per liter
    const evCostPerKm = ((elecCost * batteryCap) / evRange).toFixed(2);

    document.getElementById(
        "petrol-cost"
    ).innerText = `Petrol Vehicle Cost per km: ₹${petrolCostPerKm}`;
    document.getElementById(
        "ev-cost"
    ).innerText = `Electric Vehicle Cost per km: ₹${evCostPerKm}`;
}