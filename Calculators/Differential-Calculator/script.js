// script.js
function calculateDerivative() {
    const inputFunction = document.getElementById('functionInput').value;
    if (!inputFunction || !inputFunction.trim()) {
        alert('Please enter a mathematical function.');
        return;
    }
    const resultElement = document.getElementById('result');

    try {
        const derivative = math.derivative(inputFunction, 'x').toString();
        displayResult(resultElement, `The derivative is: ${derivative}`, false);
    } catch (error) {
        displayResult(resultElement, 'Invalid input. Please enter a valid mathematical function.', true);
    }
}

function displayResult(element, message, isError) {
    const resultClass = isError ? 'error' : 'success';
    element.innerHTML = `<p class="${resultClass}">${message}</p>`;
}
