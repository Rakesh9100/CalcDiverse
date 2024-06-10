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

    var currency = document.getElementById("currency").value;
    var currencySymbol = currency === "USD" ? "$" : "₹";

    // Display the result
    document.getElementById("result").innerHTML =
        "Loan Amount("+currencySymbol+"): " + loanAmount.toFixed(2) + "<br>" +
        "Monthly Payment("+currencySymbol+"): " + monthlyPayment.toFixed(2);
}

// Added an event listener to update results when currency is changed
document.getElementById("currency").addEventListener("change", calculateMortgage);
