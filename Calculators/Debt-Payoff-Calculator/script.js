document.getElementById('calculate').addEventListener('click', function() {
    let debt = parseFloat(document.getElementById('debt').value);
    let months = parseInt(document.getElementById('months').value);
    let interestRate = parseFloat(document.getElementById('interest').value) / 100;

    if (isNaN(debt) || isNaN(months) || isNaN(interestRate)) {
        alert("Please fill out all fields with valid numbers.");
        return;
    }

    // Calculate monthly interest rate
    let monthlyInterestRate = interestRate / 12;
    
    // Calculate the monthly payment using the formula for an amortizing loan
    let monthlyPayment = (debt * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
    
    // Calculate total interest paid
    let totalPayment = monthlyPayment * months;
    let totalInterest = totalPayment - debt;

    // Display the result
    document.getElementById('output').innerHTML = `
        You have a debt of ₹${debt.toFixed(2)} with an interest rate of ${(interestRate * 100).toFixed(2)}%.<br>
        To pay it off in ${months} months, you will have to pay:<br>
        <strong>₹${monthlyPayment.toFixed(2)} / month</strong><br>
        You will pay a total of ₹${totalInterest.toFixed(2)} in interest.
    `;
});
