function calculateSquareRoot() {
    // Fetching the input values: number and precision
    const number = parseFloat(document.getElementById('numberInput').value);
    const precision = parseInt(document.getElementById('precisionInput').value);

    // Checking if the inputs are valid numbers
    if (isNaN(number) || isNaN(precision)) {
        document.getElementById('result').innerHTML = 'Please enter a valid number and precision.';
        return;
    }

    // Calculating square root and limiting decimal places using toFixed()
    const squareRoot = Math.sqrt(number).toFixed(precision);

    // Displaying the result with the specified precision
    document.getElementById('result').innerHTML = `The square root of ${number} up to ${precision} decimal places is: ${squareRoot}`;
}