function calculateHalfLife() {
    // Get user input values from the form fields
    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const remainingAmount = parseFloat(document.getElementById('remaining-amount').value);
    const time = parseFloat(document.getElementById('time').value);

    // Check if all inputs are valid numbers
    if (isNaN(initialAmount) || isNaN(remainingAmount) || isNaN(time) || initialAmount <= 0 || remainingAmount <= 0 || time <= 0) {
        document.getElementById('result').textContent = "Please enter valid positive numbers.";
        return;
    }

    // Calculate the half-life using the formula:
    // T(1/2) = (t * ln(2)) / ln(N0 / N)
    const halfLife = (time * Math.log(2)) / Math.log(initialAmount / remainingAmount);

    // Display the calculated half-life with two decimal places
    document.getElementById('result').textContent = `The half-life is approximately ${halfLife.toFixed(2)} units of time.`;
}