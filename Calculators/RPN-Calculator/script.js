function evaluateRPN(expression) {
    const stack = [];
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => {
            if (b === 0) {
                throw new Error("Division by zero");
            }
            return a / b;
        }
    };

    expression.split(' ').forEach(token => {
        if (operators[token]) {
            const b = stack.pop();
            const a = stack.pop();
            if (a === undefined || b === undefined) {
                throw new Error("Invalid expression: insufficient operands");
            }
            stack.push(operators[token](a, b));
        } else {
            const number = parseFloat(token);
            if (isNaN(number)) {
                throw new Error(`Invalid token: ${token}`);
            }
            stack.push(number);
        }
    });

    if (stack.length !== 1) {
        throw new Error("Invalid expression: too many operands");
    }

    return stack.pop();
}

function calculateRPN() {
    const expression = document.getElementById('expression').value;
    const resultDisplay = document.getElementById('result');

    try {
        const result = evaluateRPN(expression);
        resultDisplay.textContent = `Result: ${result}`;
    } catch (e) {
        resultDisplay.textContent = `Error: ${e.message}`;
    }
}
