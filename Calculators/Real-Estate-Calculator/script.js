function calculateMortgage() {
    // Get values from input fields
    var propertyValue = document.getElementById("propertyValue").value;
    var downPaymentPercentage = document.getElementById("downPayment").value;
    var loanTermInYears = document.getElementById("loanTerm").value;
    var annualInterestRate = document.getElementById("interestRate").value;

    // Validate input
    if (!propertyValue || !downPaymentPercentage || !loanTermInYears || !annualInterestRate) {
        alert("Please enter all required values.");
        return;
    }

    // Calculate mortgage details
    var loanAmount = propertyValue - (propertyValue * downPaymentPercentage / 100);
    var monthlyInterestRate = (annualInterestRate / 100) / 12;
    var numberOfPayments = loanTermInYears * 12;

    var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Display the result
    document.getElementById("result").innerHTML =
        "Loan Amount: $" + loanAmount.toFixed(2) + "<br>" +
        "Monthly Payment: $" + monthlyPayment.toFixed(2);
}
