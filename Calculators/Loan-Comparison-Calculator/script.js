function calculateMonthlyPayment(amount, annualRate, years) {
    let monthlyRate = annualRate / 100 / 12;
    let numberOfPayments = years * 12;
    return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
}

function compareLoans() {
    let loan1Amount = parseFloat(document.getElementById('loan1-amount').value);
    let loan1Interest = parseFloat(document.getElementById('loan1-interest').value);
    let loan1Term = parseFloat(document.getElementById('loan1-term').value);

    let loan2Amount = parseFloat(document.getElementById('loan2-amount').value);
    let loan2Interest = parseFloat(document.getElementById('loan2-interest').value);
    let loan2Term = parseFloat(document.getElementById('loan2-term').value);

    if (isNaN(loan1Amount) || isNaN(loan1Interest) || isNaN(loan1Term)) {
        alert("Please enter valid numbers for Loan 1.");
        return;
    }

    if (isNaN(loan2Amount) || isNaN(loan2Interest) || isNaN(loan2Term)) {
        alert("Please enter valid numbers for Loan 2.");
        return;
    }

    let loan1MonthlyPayment = calculateMonthlyPayment(loan1Amount, loan1Interest, loan1Term).toFixed(2);
    let loan2MonthlyPayment = calculateMonthlyPayment(loan2Amount, loan2Interest, loan2Term).toFixed(2);

    document.getElementById('loan1-result').innerHTML = `
        <strong>Loan 1:</strong><br>
        Amount: ₹${loan1Amount}<br>
        Interest Rate: ${loan1Interest}%<br>
        Term: ${loan1Term} years<br>
        Monthly Payment: ₹${loan1MonthlyPayment}
    `;

    document.getElementById('loan2-result').innerHTML = `
        <strong>Loan 2:</strong><br>
        Amount: ₹${loan2Amount}<br>
        Interest Rate: ${loan2Interest}%<br>
        Term: ${loan2Term} years<br>
        Monthly Payment: ₹${loan2MonthlyPayment}
    `;
}