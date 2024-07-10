function convert() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputValue = document.getElementById('outputValue');

    if (inputUnit === 'oz') {
        const pounds = (inputValue / 16).toFixed(2);
        outputValue.textContent = `${inputValue} oz is equal to ${pounds} lb`;
    } else if (inputUnit === 'lb') {
        const ounces = (inputValue * 16).toFixed(2);
        outputValue.textContent = `${inputValue} lb is equal to ${ounces} oz`;
    } else {
        outputValue.textContent = 'Invalid unit';
    }
}
