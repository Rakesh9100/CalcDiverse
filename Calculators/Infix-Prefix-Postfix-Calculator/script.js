function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function getPrecedence(operator) {
    if (operator === '+' || operator === '-') {
        return 1;
    } else if (operator === '*' || operator === '/') {
        return 2;
    }
    return 0;
}

function infixToPostfix(infixExpression) {
    let result = '';
    let stack = [];

    // Define a function to get precedence of operators
    function getPrecedence(operator) {
        if (operator === '+' || operator === '-') {
            return 1;
        } else if (operator === '*' || operator === '/') {
            return 2;
        }
        return 0;
    }

    for (let i = 0; i < infixExpression.length; i++) {
        let char = infixExpression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            result += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop(); // Pop '('
        } else if (['+', '-', '*', '/'].includes(char)) {
            while (
                stack.length > 0 &&
                getPrecedence(stack[stack.length - 1]) >= getPrecedence(char)
            ) {
                result += stack.pop();
            }
            stack.push(char);
        }
    }

    while (stack.length > 0) {
        result += stack.pop();
    }

    return result;
}

function postfixToInfix(postfixExpression) {
    let stack = [];

    for (let i = 0; i < postfixExpression.length; i++) {
        let char = postfixExpression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else if (['+', '-', '*', '/'].includes(char)) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            stack.push(`(${operand1}${char}${operand2})`);
        }
    }

    return stack.pop();
}

function prefixToPostfix(prefixExpression) {
    let stack = [];
    let result = '';

    for (let i = prefixExpression.length - 1; i >= 0; i--) {
        let char = prefixExpression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else if (['+', '-', '*', '/'].includes(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            stack.push(operand1 + operand2 + char);
        }
    }

    return stack.pop();
}

function postfixToPrefix(postfixExpression) {
    let stack = [];

    for (let i = 0; i < postfixExpression.length; i++) {
        let char = postfixExpression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else if (['+', '-', '*', '/'].includes(char)) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            stack.push(char + operand1 + operand2);
        }
    }

    return stack.pop();
}

function infixToPrefix(infixExpression) {
    let reversedInfix = infixExpression.split('').reverse().join('');
    let reversedPostfix = infixToPostfix(reversedInfix);
    let prefixExpression = reversedPostfix.split('').reverse().join('');
    return prefixExpression;
}

function prefixToInfix(prefixExpression) {
    let stack = [];

    for (let i = prefixExpression.length - 1; i >= 0; i--) {
        let char = prefixExpression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else if (['+', '-', '*', '/'].includes(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            stack.push(`(${operand1}${char}${operand2})`);
        }
    }

    return stack.pop();
}


function convertExpression() {
    let expression = document.getElementById('expression').value;
    let conversionType = document.getElementById('conversionType').value;

    if (!expression.trim()) {
        alert('Please enter a valid expression.');
        return;
    }

    let result = '';

    switch (conversionType) {
        case 'infixToPostfix':
            result = infixToPostfix(expression);
            break;
        case 'postfixToInfix':
            result = postfixToInfix(expression);
            break;
        case 'prefixToPostfix':
            result = prefixToPostfix(expression);
            break;
        case 'postfixToPrefix':
            result = postfixToPrefix(expression);
            break;
        case 'infixToPrefix':
            result = infixToPrefix(expression);
            break;
        case 'prefixToInfix':
            result = prefixToInfix(expression);
            break;
        default:
            alert('Invalid conversion type selected.');
            return;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

function clearInput() {
    document.getElementById('expression').value = '';
    document.getElementById('result').innerText = '';
}
