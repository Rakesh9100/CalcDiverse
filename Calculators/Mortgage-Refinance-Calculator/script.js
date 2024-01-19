function calculateRefinance() {
    // Get values from input fields
    var currentLoanAmount = parseFloat(document.getElementById("currentLoanAmount").value);
    var currentInterestRate = parseFloat(document.getElementById("currentInterestRate").value);
    var newLoanAmount = parseFloat(document.getElementById("newLoanAmount").value);
    var newInterestRate = parseFloat(document.getElementById("newInterestRate").value);

    // Validate input
    if (
        isNaN(currentLoanAmount) || isNaN(currentInterestRate) ||
        isNaN(newLoanAmount) || isNaN(newInterestRate) ||
        currentLoanAmount <= 0 || currentInterestRate <= 0 ||
        newLoanAmount <= 0 || newInterestRate <= 0
    ) {
        alert("Please enter valid and positive values for loan amounts and interest rates.");
        return;
    }

    // Calculate monthly payments for current and new loans
    var currentMonthlyPayment = calculateMonthlyPayment(currentLoanAmount, currentInterestRate);
    var newMonthlyPayment = calculateMonthlyPayment(newLoanAmount, newInterestRate);

    // Determine if refinancing is financially beneficial
    var resultMessage = "";
    if (newMonthlyPayment < currentMonthlyPayment) {
        resultMessage = "Refinancing may be financially beneficial. You could save money each month.";
    } else {
        resultMessage = "Refinancing may not be financially beneficial. Consider other options.";
    }

    // Display the result
    document.getElementById("result").innerHTML = resultMessage;
}

function calculateMonthlyPayment(loanAmount, interestRate) {
    // Monthly payment calculation formula (simplified)
    var monthlyInterestRate = interestRate / 1200; // Convert annual rate to monthly
    var numberOfPayments = 30 * 12; // 30 years loan term
    var monthlyPayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return monthlyPayment;
}
