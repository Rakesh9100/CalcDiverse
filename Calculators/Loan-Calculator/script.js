function calculateLoan() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const term = parseFloat(document.getElementById('term').value) * 12;

    const monthlyPayment = (principal * interest) / (1 - Math.pow(1 + interest, -term));

    if (!isNaN(monthlyPayment) && (monthlyPayment !== Infinity)) {
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    } else {
        alert('Please enter valid input values.');
    }
}
