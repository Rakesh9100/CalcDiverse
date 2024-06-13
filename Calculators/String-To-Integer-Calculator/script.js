document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate-button');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        const expression = document.getElementById('expression').value;

        try {
            // Evaluate the expression
            const result = eval(expression);
            // Display the result
            resultDiv.textContent = `Result: ${Math.floor(result)}`;
        } catch (error) {
            // Display an error message if the expression is invalid
            resultDiv.textContent = 'Result: Error';
        }
    });
});
