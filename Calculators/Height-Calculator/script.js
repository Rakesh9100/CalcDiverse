function updateInputs() {
    const conversionType = document.getElementById('conversionType').value;
    const inputLabel = document.getElementById('inputLabel');

    switch (conversionType) {
        case 'feet-to-meter':
            inputLabel.textContent = 'Enter Feet:';
            break;
        case 'meter-to-feet':
            inputLabel.textContent = 'Enter Meters:';
            break;
        case 'inch-to-feet':
            inputLabel.textContent = 'Enter Inches:';
            break;
        case 'feet-to-inch':
            inputLabel.textContent = 'Enter Feet:';
            break;
        case 'inch-to-meter':
            inputLabel.textContent = 'Enter Inches:';
            break;
        case 'meter-to-inch':
            inputLabel.textContent = 'Enter Meters:';
            break;
        case 'cm-to-inch':
            inputLabel.textContent = 'Enter Centimeters:';
            break;
        case 'inch-to-cm':
            inputLabel.textContent = 'Enter Inches:';
            break;
        case 'cm-to-feet':
            inputLabel.textContent = 'Enter Centimeters:';
            break;
        case 'feet-to-cm':
            inputLabel.textContent = 'Enter Feet:';
            break;
        case 'cm-to-meter':
            inputLabel.textContent = 'Enter Centimeters:';
            break;
        case 'meter-to-cm':
            inputLabel.textContent = 'Enter Meters:';
            break;
        default:
            inputLabel.textContent = 'Enter Value:';
    }
}

function convert() {
    const conversionType = document.getElementById('conversionType').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result = 0;

    if (isNaN(inputValue)) {
        document.getElementById('result').textContent = 'Please enter a valid number';
        return;
    }

    switch (conversionType) {
        case 'feet-to-meter':
            result = inputValue * 0.3048;
            break;
        case 'meter-to-feet':
            result = inputValue * 3.28084;
            break;
        case 'inch-to-feet':
            result = inputValue / 12;
            break;
        case 'feet-to-inch':
            result = inputValue * 12;
            break;
        case 'inch-to-meter':
            result = inputValue * 0.0254;
            break;
        case 'meter-to-inch':
            result = inputValue * 39.3701;
            break;
        case 'cm-to-inch':
            result = inputValue * 0.393701;
            break;
        case 'inch-to-cm':
            result = inputValue * 2.54;
            break;
        case 'cm-to-feet':
            result = inputValue * 0.0328084;
            break;
        case 'feet-to-cm':
            result = inputValue * 30.48;
            break;
        case 'cm-to-meter':
            result = inputValue / 100;
            break;
        case 'meter-to-cm':
            result = inputValue * 100;
            break;
        default:
            result = 'Invalid Conversion Type';
    }

    document.getElementById('result').textContent = 'Result: ' + result;
}
