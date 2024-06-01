function calculateRetirement() {
    const currentAge = parseFloat(document.getElementById('currentAge').value);
    const retirementAge = parseFloat(document.getElementById('retirementAge').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings').value);
    const annualContribution = parseFloat(document.getElementById('annualContribution').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100;

    const yearsToRetirement = retirementAge - currentAge;
    let futureValue = currentSavings;

    for (let i = 0; i < yearsToRetirement; i++) {
        futureValue += annualContribution;
        futureValue *= (1 + annualReturn);
    }

    const retirementAmount = futureValue.toFixed(2);
    const resultElement = document.getElementById('result');
    const retirementAmountElement = document.getElementById('retirementAmount');

    retirementAmountElement.textContent = `₹${retirementAmount}`;
    resultElement.style.display = 'block';
}
