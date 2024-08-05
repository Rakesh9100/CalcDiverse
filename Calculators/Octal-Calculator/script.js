function calculate() {
    var octalInput1 = document.getElementById('octalInput1').value;
    var octalInput2 = document.getElementById('octalInput2').value;
    var operation = document.getElementById('operation').value;

    // Validate octal inputs
    if (!octalInput1.match(/^[0-7]+$/) || !octalInput2.match(/^[0-7]+$/)) {
        alert('Invalid octal input!');
        return;
    }

    var decimal1 = parseInt(octalInput1, 8);
    var decimal2 = parseInt(octalInput2, 8);
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

    document.getElementById('result').value = result.toString(8); // Convert decimal result to octal
}

function clearInput() {
    document.getElementById('octalInput1').value = '';
    document.getElementById('octalInput2').value = '';
    document.getElementById('result').value = '';
}
