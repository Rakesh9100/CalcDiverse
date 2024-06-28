function calculatePartialDerivative() {
    const functionInput = document.getElementById('functionInput').value;
    const variableInput = document.getElementById('variableInput').value;
    const resultDiv = document.getElementById('result');

    try {
        // Parse the function
        const f = math.parse(functionInput);

        // Define the variable
        const variable = math.parse(variableInput);

        // Calculate the partial derivative
        const partialDerivative = math.derivative(f, variable);

        // Simplify the result
        const simplifiedResult = partialDerivative.toString();

        // Display the result
        resultDiv.innerHTML = `Partial derivative with respect to ${variableInput}: ${simplifiedResult}`;
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
}
