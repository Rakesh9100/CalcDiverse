function calculateCost() {
    const foodCost = parseFloat(document.getElementById('foodCost').value) || 0;
    const healthCost = parseFloat(document.getElementById('healthCost').value) || 0;
    const groomingCost = parseFloat(document.getElementById('groomingCost').value) || 0;
    const insuranceCost = parseFloat(document.getElementById('insuranceCost').value) || 0;
    const otherCost = parseFloat(document.getElementById('otherCost').value) || 0;
    const years = parseFloat(document.getElementById('years').value) || 0;

    const totalCost = (foodCost + healthCost + groomingCost + insuranceCost + otherCost) * years;

    document.getElementById('totalCost').innerText = totalCost.toFixed(2);
}
