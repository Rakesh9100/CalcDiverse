function calculateLease() {
    const assetValue = parseFloat(document.getElementById('assetValue').value);
    const residualValue = parseFloat(document.getElementById('residualValue').value);
    const leaseTerm = parseFloat(document.getElementById('leaseTerm').value) * 12; 
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;

    const errorMessage = document.getElementById('errorMessage');
    const results = document.getElementById('results');

    if (isNaN(assetValue) || isNaN(residualValue) || isNaN(leaseTerm) || isNaN(interestRate)) {
        errorMessage.innerText = "Please fill in all fields correctly.";
        errorMessage.style.display = "block";
        results.style.display = "none";
        return;
    }

    const depreciation = (assetValue - residualValue) / leaseTerm;
    const interest = (assetValue + residualValue) * interestRate / 2;

    const monthlyPayment = depreciation + interest;
    const totalPayment = monthlyPayment * leaseTerm;
    const totalInterest = totalPayment - (assetValue - residualValue);

    document.getElementById('monthlyPayment').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').innerText = `Total Payment: $${totalPayment.toFixed(2)}`;
    document.getElementById('totalInterest').innerText = `Total Interest: $${totalInterest.toFixed(2)}`;

    errorMessage.style.display = "none";
    results.style.display = "block";
}

function resetResults() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('monthlyPayment').innerText = '';
    document.getElementById('totalPayment').innerText = '';
    document.getElementById('totalInterest').innerText = '';
}