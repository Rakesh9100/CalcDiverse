function calculateCost() {
    const petType = document.getElementById('petType').value;
    const foodCost = document.getElementById('foodCost').value;
    const healthCost = document.getElementById('healthCost').value;
    const groomingCost = document.getElementById('groomingCost').value;
    const insuranceCost = document.getElementById('insuranceCost').value;
    const otherCost = document.getElementById('otherCost').value;
    const years = document.getElementById('years').value;

    if (!foodCost || !healthCost || !groomingCost || !insuranceCost || !otherCost || !years) {
        alert('Please fill out all fields.');
        return;
    }

    const totalCost = (parseFloat(foodCost) + parseFloat(healthCost) + parseFloat(groomingCost) + parseFloat(insuranceCost) + parseFloat(otherCost)) * parseFloat(years);

    document.getElementById('totalCost').innerText = totalCost.toFixed(2);
}
