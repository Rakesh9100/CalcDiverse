function calculate() {
    var hexInput1 = document.getElementById('hexInput1').value;
    var hexInput2 = document.getElementById('hexInput2').value;
    var operation = document.getElementById('operation').value;

    // Validate hexadecimal inputs
    if (!hexInput1.match(/^[0-9A-Fa-f]+$/) || !hexInput2.match(/^[0-9A-Fa-f]+$/)) {
        alert('Invalid hexadecimal input!');
        return;
    }

    var decimal1 = parseInt(hexInput1, 16);
    var decimal2 = parseInt(hexInput2, 16);
    var result;

    switch (operation) {
        case 'add':
            result = decimal1 + decimal2;
            break;
        case 'subtract':
            result = decimal1 - decimal2;
            break;
        case 'multiply':
            result = decimal1 * decimal2;
            break;
        case 'divide':
            if (decimal2 === 0) {
                alert('Division by zero is not allowed!');
                return;
            }
            result = decimal1 / decimal2;
            break;
        default:
            alert('Invalid operation!');
            return;
    }

    document.getElementById('result').value = result.toString(16).toUpperCase(); // Convert decimal result to hexadecimal
}

function clearInput() {
    document.getElementById('hexInput1').value = '';
    document.getElementById('hexInput2').value = '';
    document.getElementById('result').value = '';
}
