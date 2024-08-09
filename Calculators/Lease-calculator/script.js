function calculateLease() {
    const assetValue = parseFloat(document.getElementById('assetValue').value);
    const residualValue = parseFloat(document.getElementById('residualValue').value);
    const leaseTerm = parseFloat(document.getElementById('leaseTerm').value) * 12; // Convert years to months
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly interest rate

    const depreciation = (assetValue - residualValue) / leaseTerm;
    const interest = (assetValue + residualValue) * interestRate / 2;

    const monthlyPayment = depreciation + interest;
    const totalPayment = monthlyPayment * leaseTerm;
    const totalInterest = totalPayment - (assetValue - residualValue);

    document.getElementById('monthlyPayment').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').innerText = `Total Payment: $${totalPayment.toFixed(2)}`;
    document.getElementById('totalInterest').innerText = `Total Interest: $${totalInterest.toFixed(2)}`;

    document.getElementById('results').style.display = 'block';
}
