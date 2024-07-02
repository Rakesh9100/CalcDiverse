function calculatePartialDerivative() {
    const functionInput = document.getElementById('functionInput').value;
    const variableInput = document.getElementById('variableInput').value;
    const resultDiv = document.getElementById('result');

    try {
        // Check if function input is empty
        if (!functionInput) {
            throw new Error('Fields cannot be empty');
        }

        // Check if variable input is empty
        if (!variableInput) {
            throw new Error('Variable input is empty');
        }

        // Parse the function
        const f = math.parse(functionInput);

        // Define the variable
        const variable = math.parse(variableInput);

        // Check if the variable is valid
        if (!variable.isSymbolNode) {
            throw new Error('Invalid variable');
        }

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
