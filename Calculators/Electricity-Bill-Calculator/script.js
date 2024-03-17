function calculateBill() {
    const unitsInput = document.getElementById('units');
    const rateInput = document.getElementById('rate');

    // Check if both units and rate inputs have values
    if (unitsInput.value.trim() === '' || rateInput.value.trim() === '') {
        alert('Please enter values for units and rate.');
        return;
    }

    const units = parseFloat(unitsInput.value);
    const rate = parseFloat(rateInput.value);
    const additionalCharges = parseFloat(document.getElementById('additionalCharges').value);

    // Check if units and rate are non-negative
    if (units >= 0 && rate >= 0) {
        let totalBill = units * rate;

        // Check if additionalCharges is a valid number
        if (!isNaN(additionalCharges)) {
            totalBill += additionalCharges;
        }

        document.getElementById('billAmount').innerText = `Electricity Bill Amount: ₹${totalBill.toFixed(2)}`;
    } else {
        alert('Please enter non-negative values for units and rate.');
    }
}