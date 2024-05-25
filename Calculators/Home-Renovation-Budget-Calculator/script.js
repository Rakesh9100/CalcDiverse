function calculateBudget() {
    const materialsCost = parseFloat(document.getElementById('materials').value);
    const laborCost = parseFloat(document.getElementById('labor').value);
    const finishesCost = parseFloat(document.getElementById('finishes').value);

    // Check for missing inputs or negative values
    if (isNaN(materialsCost) || isNaN(laborCost) || isNaN(finishesCost) ||
        materialsCost < 0 || laborCost < 0 || finishesCost < 0) {
        alert('Please enter valid positive values for all fields.');
        return;
    }

    const totalBudget = materialsCost + laborCost + finishesCost;

    document.getElementById('result').innerHTML = `<p>Total Budget: ₹${totalBudget.toFixed(2)}</p>`;
}