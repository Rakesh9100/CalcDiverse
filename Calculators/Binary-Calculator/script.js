function calculate() {
    // Get the input values
    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;
    const operation = document.getElementById('operation').value;

    // Validate binary input
    if (!/^[01]+$/.test(binary1) || !/^[01]+$/.test(binary2)) {
        alert("Please enter valid binary numbers.");
        return;
    }

    // Convert binary to decimal
    const num1 = parseInt(binary1, 2);
    const num2 = parseInt(binary2, 2);
    let result;
    let decimal;
    // Perform the selected operation
    switch (operation) {
        case "add":
            result = (num1 + num2).toString(2);
            decimal = (num1 + num2);
            break;
        case "subtract":
            result = (num1 - num2).toString(2);
            decimal = (num1 - num2);
            break;
        case "multiply":
            result = (num1 * num2).toString(2);
            decimal = (num1 * num2);
            break;
        case "leftShift":
            result = (num1 << num2).toString(2);
            decimal = (num1 << num2);
            break;
        case "rightShift":
            result = (num1 >> num2).toString(2);
            decimal = (num1 >> num2);
            break;
        case "division":
            result = (num1 / num2).toString(2);
            decimal = (num1 / num2);
            break;
        case "and":
            result = (num1 && num2).toString(2);
            decimal = (num1 && num2);
            break;
        case "or":
            result = (num1 || num2).toString(2);
            decimal = (num1 || num2);
            break;
        case "xor":
            result = (num1 ^ num2).toString(2);
            decimal = (num1 ^ num2);
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
    document.getElementById('decimal').innerText = `Decimal Value: ${decimal}`;
}
