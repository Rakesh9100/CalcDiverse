function calculate() {
    var balance = parseFloat(document.getElementById('balance').value);
    var apr = parseFloat(document.getElementById('apr').value);
    var monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

    var monthlyInterestRate = (apr / 100) / 12;
    var months = Math.log(monthlyPayment / (monthlyPayment - balance * monthlyInterestRate)) / Math.log(1 + monthlyInterestRate);

    if (isFinite(months)) {
        var years = Math.floor(months / 12);
        var remainingMonths = Math.ceil(months % 12);
        var result = `It will take ${years} years and ${remainingMonths} months to pay off the credit card.`;
    } else {
        var result = 'Invalid input. Please check your numbers.';
    }

    document.getElementById('result').innerHTML = result;
}

function reset() {
    document.getElementById('balance').value = '';
    document.getElementById('apr').value = '';
    document.getElementById('monthly-payment').value = '';
    document.getElementById('result').innerHTML = '';
}