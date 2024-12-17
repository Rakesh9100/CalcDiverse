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

let steps = document.getElementById('steps');

function infixToPostfix(infixExpression) {
    let result = '';
    let stack = [];

    function getPrecedence(operator) {
        if (operator === '+' || operator === '-') {
            return 1;
        } else if (operator === '*' || operator === '/') {
            return 2;
        }
        return 0;
    }

    //  Table structure 
    steps.innerHTML = `
        <table border="1" style="width: 100%; text-align: center; border-collapse: collapse;">
            <thead>
                <tr>
                    <th>Character</th>
                    <th>Stack</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody id="table-body">
            </tbody>
        </table>
    `;

    let tableBody = document.getElementById('table-body');

    for (let i = 0; i < infixExpression.length; i++) {
        let char = infixExpression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            result += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                result += stack.pop();
                appendRow(char, stack, result);
            }
            stack.pop();
        } else if (['+', '-', '*', '/'].includes(char)) {
            while (
                stack.length > 0 &&
                getPrecedence(stack[stack.length - 1]) >= getPrecedence(char)
            ) {
                result += stack.pop();
                appendRow(char, stack, result);
            }
            stack.push(char);
        }

        // Append a row to the table for each step
        appendRow(char, stack, result);
    }

    // Pop remaining operators in the stack and append rows
    while (stack.length > 0) {
        result += stack.pop();
        appendRow('-', stack, result);
    }
    document.getElementById('result').innerText = `Result: ${result}`;

    return result;

    // Helper function to append rows
    function appendRow(character, stack, result) {
        tableBody.innerHTML += `
            <tr>
                <td>${character}</td>
                <td>${stack.join(', ')}</td>
                <td>${result}</td>
            </tr>
        `;
    }
}

function postfixToInfix(postfixExpression) {
    let stack = [];
    let result = '';

    steps.innerHTML += `
    <table border="1" style="width: 100%; text-align: center; border-collapse: collapse;">
        <thead>
            <tr>
                <th>Character</th>
                <th>Stack</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>
`;
    for (let i = 0; i < postfixExpression.length; i++) {
        let char = postfixExpression[i];
        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
            result = char;
        } else if (['+', '-', '*', '/'].includes(char)) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let expression = (`(${operand1}${char}${operand2})`);
            stack.push(expression);
            result = expression;
        }
        let tableBody = document.getElementById('table-body');

        tableBody.innerHTML += `
            <tr>
                <td>${char}</td>
                <td>${stack.join(', ')}</td>
                <td>${result}</td>
            </tr>
        `;
    }
    document.getElementById('result').innerText = `Result: ${result}`;

    return stack.pop();
}

function prefixToPostfix(prefixExpression) {
    let stack = [];
    let result = '';

    steps.innerHTML += `
    <table border="1" style="width: 100%; text-align: center; border-collapse: collapse;">
        <thead>
            <tr>
                <th>Character</th>
                <th>Stack</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>
`;
    for (let i = prefixExpression.length - 1; i >= 0; i--) {
        let char = prefixExpression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
            result = char;
        } else if (['+', '-', '*', '/'].includes(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let exp = (operand1 + operand2 + char);
            result = exp;
        }
        let tableBody = document.getElementById('table-body');

        tableBody.innerHTML += `
        <tr>
            <td>${char}</td>
            <td>${stack.join(', ')}</td>
            <td>${result}</td>
        </tr>
    `;
    }
    document.getElementById('result').innerText = `Result: ${result}`;

    return stack.pop();
}


function postfixToPrefix(postfixExpression) {
    let stack = [];
    let result = '';

    steps.innerHTML += `
    <table border="1" style="width: 100%; text-align: center; border-collapse: collapse;">
        <thead>
            <tr>
                <th>Character</th>
                <th>Stack</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>
`;

    for (let i = 0; i < postfixExpression.length; i++) {
        let char = postfixExpression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
            result = char;
        } else if (['+', '-', '*', '/'].includes(char)) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let exp = (char + operand1 + operand2);
            result = exp;
        }
        let tableBody = document.getElementById('table-body');

        tableBody.innerHTML += `
        <tr>
            <td>${char}</td>
            <td>${stack.join(', ')}</td>
            <td>${result}</td>
        </tr>
    `;
    }
    document.getElementById('result').innerText = `Result: ${result}`;

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
    let result = '';

    steps.innerHTML += `
    <table border="1" style="width: 100%; text-align: center; border-collapse: collapse;">
        <thead>
            <tr>
                <th>Character</th>
                <th>Stack</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>
`;

    for (let i = prefixExpression.length - 1; i >= 0; i--) {
        let char = prefixExpression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
            result = char;
        } else if (['+', '-', '*', '/'].includes(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let exp = (`(${operand1}${char}${operand2})`);
            result = exp;
        }
        let tableBody = document.getElementById('table-body');

        tableBody.innerHTML += `
        <tr>
            <td>${char}</td>
            <td>${stack.join(', ')}</td>
            <td>${result}</td>
        </tr>
    `;
    }
    document.getElementById('result').innerText = `Result: ${result}`;
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
}

function clearInput() {
    document.getElementById('expression').value = '';
    document.getElementById('result').innerText = '';
}