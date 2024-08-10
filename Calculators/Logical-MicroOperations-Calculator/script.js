function validateInputs() {             // Function to check if the input is valid or not
    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;
    const errorElement = document.getElementById('error');
    errorElement.innerText = '';

    const binaryPattern = /^[01]+$/;    // regex to verify binary number

    if (!binary1 || !binary2) {
        errorElement.innerText = 'Both fields must be filled in.';
        return false;
    }

    if (!binaryPattern.test(binary1) || !binaryPattern.test(binary2)) {
        document.getElementById('result').innerText = '';
        errorElement.innerText = 'Please enter valid binary numbers (0 or 1).';
        return false;
    }

    return true;
}

function selectiveSet() {       // selective set operation logic
    if (!validateInputs()) return;

    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;
    const result = (parseInt(binary1, 2) | parseInt(binary2, 2)).toString(2).padStart(binary1.length, '0');
    document.getElementById('result').innerText = result;
}

function selectiveComplement() {        // selective complement operation logic
    if (!validateInputs()) return;

    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;
    const result = (parseInt(binary1, 2) ^ parseInt(binary2, 2)).toString(2).padStart(binary1.length, '0');
    document.getElementById('result').innerText = result;
}

function selectiveClear() {         // selective clear operation logic
    if (!validateInputs()) return;

    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;
    const result = (parseInt(binary1, 2) & ~parseInt(binary2, 2)).toString(2).padStart(binary1.length, '0');
    document.getElementById('result').innerText = result;
}

function maskDelete() {         // mask operation logic
    if (!validateInputs()) return;

    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;

    let result = '';
    for (let i = 0; i < binary1.length; i++) {
        if (binary2[i] === '0') {
            result += '0';
        } else {
            result += binary1[i];
        }
    }

    document.getElementById('result').innerText = result;
}

function clearBits() {      // Clear bits operation logic
    if (!validateInputs()) return;

    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;

    let result = '';
    for (let i = 0; i < binary1.length; i++) {
        if (binary1[i] === binary2[i]) {
            result += '0';
        } else {
            result += '1';
        }
    }

    document.getElementById('result').innerText = result;
}

function insert() {     // insert operations logic
    if (!validateInputs()) return;

    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;

    // Create a mask to clear the desired bit positions in binary1
    const mask = parseInt('1'.repeat(binary1.length - binary2.length) + '0'.repeat(binary2.length), 2);
    const maskedBinary1 = (parseInt(binary1, 2) & mask).toString(2).padStart(binary1.length, '0');

    // Perform an OR operation to introduce the new bits from binary2
    const result = (parseInt(maskedBinary1, 2) | parseInt(binary2, 2)).toString(2).padStart(binary1.length, '0');

    document.getElementById('result').innerText = result;
}


function compare() {        // compare operations logic
    if (!validateInputs()) return;

    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;
    const result = binary1 === binary2 ? 'Equal' : 'Not Equal';
    document.getElementById('result').innerText = result;
}

function clearInputs() {        // clearing all input fields
    document.getElementById('binary1').value = '';
    document.getElementById('binary2').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('error').innerText = '';
}