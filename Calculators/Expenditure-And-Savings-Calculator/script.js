function calculateSavings() {
    const income = parseFloat(document.getElementById('income').value);
    const expenditure = parseFloat(document.getElementById('expenditure').value);

    if (isNaN(income) || isNaN(expenditure)) {
        alert('Please enter valid numbers for income and expenditure.');
        return;
    }

    const savings = income - expenditure;
    document.getElementById('savingsAmount').textContent = savings.toFixed(2);
}