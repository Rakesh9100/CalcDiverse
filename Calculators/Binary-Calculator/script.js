function calculate() {
    // Get the input values
    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;
    const operation = document.getElementById('operation').value;

    // Validate the binary inputs based on selected operation
    if (operation !== "not" && operation !== "binaryToGray") {
        if (!/^[01]+$/.test(binary1) || !/^[01]+$/.test(binary2)) {
            alert("Please enter valid binary numbers.");
            return;
        }
    } else {
        // Validate binary input for operations that require only one input (e.g., NOT, Binary to Gray)
        if (!/^[01]+$/.test(binary1)) {
            alert("Please enter a valid binary number.");
            return;
        }
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
            result = (num1 & num2).toString(2);
            decimal = (num1 & num2);
            break;
        case "or":
            result = (num1 | num2).toString(2);
            decimal = (num1 | num2);
            break;
        case "xor":
            result = (num1 ^ num2).toString(2);
            decimal = (num1 ^ num2);
            break;
        case "xnor":
            let xorResult = num1 ^ num2;
            let xnorResult = (~xorResult & ((1 << Math.max(num1.toString(2).length, num2.toString(2).length)) - 1));
            result = xnorResult.toString(2);
            decimal = xnorResult;
            break;
        case "nand":
            let andResult = num1 & num2;
            let nandResult = (~andResult & ((1 << Math.max(num1.toString(2).length, num2.toString(2).length)) - 1));
            result = nandResult.toString(2);
            decimal = nandResult;
            break;
        case "not":
            let notResult = (~num1 & ((1 << num1.toString(2).length) - 1));
            result = notResult.toString(2);
            decimal = notResult;
            break;
        case "binaryToGray":
            let grayCode = (num1 ^ (num1 >> 1)); // Binary to Gray Code conversion formula
            result = grayCode.toString(2);
            decimal = grayCode;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
    document.getElementById('decimal').innerText = `Decimal Value: ${decimal}`;
}

// Function to toggle input fields based on operation selection
function toggleInputFields() {
    const operation = document.getElementById('operation').value;
    const binary2Group = document.querySelector('.group2');
    const binary2Input = document.getElementById('binary2');

    if (operation === "binaryToGray" || operation === "not") {
        // Hide second input field for Binary to Gray and NOT operation
        binary2Group.style.display = 'none';
    } else {
        // Show second input field for other operations
        binary2Group.style.display = 'block';
    }
}

// Event listener to handle changes in the operation selection
document.getElementById('operation').addEventListener('change', toggleInputFields);

// Call toggleInputFields initially to ensure proper state
toggleInputFields();