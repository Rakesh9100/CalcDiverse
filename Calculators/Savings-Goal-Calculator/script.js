function calculateSavings() {
    // Get form input values
    var startingBalance = parseFloat(document.getElementById('startingBalance').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var regularSavings = parseFloat(document.getElementById('regularSavings').value);
    var savingsFrequency = document.getElementById('savingsFrequency').value;
    var years = parseInt(document.getElementById('years').value);

    // Calculate total savings
    var totalSavings = startingBalance;

    // Convert interest rate to monthly if necessary
    if (savingsFrequency !== 'monthly') {
        interestRate /= 12;
    }

    var numberOfDeposits = 0;

    // Calculate total savings based on the frequency
    switch (savingsFrequency) {
        case 'monthly':
            numberOfDeposits = years * 12;
            for (var i = 0; i < numberOfDeposits; i++) {
                totalSavings += regularSavings;
                totalSavings *= (1 + interestRate / 100);
            }
            break;
        case 'daily':
            numberOfDeposits = years * 365;
            for (var i = 0; i < numberOfDeposits; i++) {
                totalSavings += regularSavings;
                totalSavings *= (1 + interestRate / 100 / 365);
            }
            break;
        case 'yearly':
            numberOfDeposits = years;
            for (var i = 0; i < numberOfDeposits; i++) {
                totalSavings += regularSavings;
                totalSavings *= (1 + interestRate / 100);
            }
            break;
        default:
            break;
    }

    // Display result
    let resultDiv = document.querySelector('.result');
    let formDiv = document.getElementById('calculatorForm');
    formDiv.style.display = 'none'; 
    resultDiv.style.display = '';
    document.getElementById('result').innerHTML = `Your total savings in ${years} years is $${totalSavings.toFixed(2)}`;
}