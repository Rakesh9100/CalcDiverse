let mode = 'moles-to-grams'; // Default mode

function calculate() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers for both fields.';
        return;
    }

    let result;
    if (mode === 'moles-to-grams') {
        result = input1 * input2; // Moles to grams
        document.getElementById('result').innerText = `${input1} moles x ${input2} g/mol = ${result.toFixed(2)} grams`;
    } else {
        result = input1 / input2; // Grams to moles
        document.getElementById('result').innerText = `${input1} grams ÷ ${input2} g/mol = ${result.toFixed(2)} moles`;
    }
}

function toggleMode() {
    mode = mode === 'moles-to-grams' ? 'grams-to-moles' : 'moles-to-grams';

    // Update UI based on mode
    if (mode === 'moles-to-grams') {
        document.getElementById('calc-title').innerText = 'Moles to Grams Calculator';
        document.getElementById('label1').innerText = 'Enter Moles:';
        document.getElementById('label2').innerText = 'Enter Molar Mass (g/mol):';
        document.querySelector('.switch-btn').innerText = 'Switch to Grams to Moles';
    } else {
        document.getElementById('calc-title').innerText = 'Grams to Moles Calculator';
        document.getElementById('label1').innerText = 'Enter Grams:';
        document.getElementById('label2').innerText = 'Enter Molar Mass (g/mol):';
        document.querySelector('.switch-btn').innerText = 'Switch to Moles to Grams';
    }

    // Clear result and inputs
    document.getElementById('result').innerText = '';
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
}