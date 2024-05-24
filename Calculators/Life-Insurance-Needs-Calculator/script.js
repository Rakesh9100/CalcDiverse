function calculateInsurance() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const yearsSupport = parseFloat(document.getElementById('yearsSupport').value);
    const outstandingDebts = parseFloat(document.getElementById('outstandingDebts').value);
    const funeralCosts = parseFloat(document.getElementById('funeralCosts').value);
    const savings = parseFloat(document.getElementById('savings').value);

    if (isNaN(annualIncome) || isNaN(yearsSupport) || isNaN(outstandingDebts) || isNaN(funeralCosts) || isNaN(savings)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    const incomeNeeds = annualIncome * yearsSupport;
    const totalNeeds = incomeNeeds + outstandingDebts + funeralCosts;
    const insuranceNeeds = totalNeeds - savings;

    document.getElementById('result').textContent = 
        `You need approximately $${insuranceNeeds.toFixed(2)} in life insurance.`;
}