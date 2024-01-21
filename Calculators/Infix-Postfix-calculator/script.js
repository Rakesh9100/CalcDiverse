function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function getPrecedence(operator) {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}

function infixToPostfix(infix) {
    let result = '';
    const stack = [];
    const steps = [];

    for (let i = 0; i < infix.length; i++) {
        const char = infix[i];

        if (isOperator(char)) {
            while (stack.length && getPrecedence(stack[stack.length - 1]) >= getPrecedence(char)) {
                result += stack.pop();
            }
            stack.push(char);
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop(); // Pop '('
        } else {
            result += char;
        }

        steps.push({
            step: i + 1,
            infix: infix.substring(i + 1),
            stack: stack.slice().reverse().join(' '),
            postfix: result
        });
    }

    while (stack.length) {
        result += stack.pop();
    }

    return { postfix: result, steps };
}

function convertToPostfix() {
    const infixExpression = document.getElementById('infixExpression').value;
    const { postfix, steps } = infixToPostfix(infixExpression);
    document.getElementById('result').innerText = `Postfix Expression: ${postfix}`;

    const tableBody = document.querySelector('#conversionTable tbody');
    tableBody.innerHTML = '';

    steps.forEach(step => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = step.step;
        row.insertCell(1).innerText = step.infix;
        row.insertCell(2).innerText = step.stack;
        row.insertCell(3).innerText = step.postfix;
    });
}