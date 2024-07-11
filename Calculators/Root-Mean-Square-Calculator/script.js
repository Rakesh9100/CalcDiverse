function calculateRMS() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    try {
        // Split the input string into an array of numbers
        const numbers = numberInput.split(',').map(Number);

        // Validate the input
        if (numbers.some(isNaN)) {
            throw new Error("Please enter valid numbers separated by commas.");
        }

        // Calculate the RMS value
        const squaredSum = numbers.reduce((sum, num) => sum + num ** 2, 0);
        const rmsValue = Math.sqrt(squaredSum / numbers.length);

        // Display the result
        resultDiv.innerHTML = `RMS Value: ${rmsValue.toFixed(4)}`;
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
}
