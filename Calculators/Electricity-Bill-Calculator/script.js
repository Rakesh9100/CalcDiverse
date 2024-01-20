function calculateBill() {
    const units = document.getElementById('units').value;
    const rate = document.getElementById('rate').value;
    const additionalCharges = document.getElementById('additionalCharges').value;

    if (units && rate) {
        let totalBill = units * rate;
        if (additionalCharges) {
            totalBill += parseFloat(additionalCharges);
        }

        document.getElementById('billAmount').innerText = `Electricity Bill Amount: ₹${totalBill.toFixed(2)}`;
    } else {
        alert('Please enter values for units and rate.');
    }
}
