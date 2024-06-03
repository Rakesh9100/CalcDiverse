function updateInputs() {
    const conversionType = document.getElementById('conversionType').value;
    const inputLabel = document.getElementById('inputLabel');

    switch (conversionType) {
        case 'feet-to-meter':
            inputLabel.textContent = 'Enter Feet';
            break;
        case 'meter-to-feet':
            inputLabel.textContent = 'Enter Meters';
            break;
        case 'inch-to-feet':
            inputLabel.textContent = 'Enter Inches';
            break;
        case 'feet-to-inch':
            inputLabel.textContent = 'Enter Feet';
            break;
        case 'inch-to-meter':
            inputLabel.textContent = 'Enter Inches';
            break;
        case 'meter-to-inch':
            inputLabel.textContent = 'Enter Meters';
            break;
        default:
            inputLabel.textContent = 'Enter Value';
    }
}

function convert() {
    const conversionType = document.getElementById('conversionType').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    if (isNaN(inputValue) || inputValue < 0) {
        result = 'Please enter a valid non-negative number';
    } else {
        switch (conversionType) {
            case 'feet-to-meter':
                result = `${inputValue} Feet is ${(inputValue * 0.3048).toFixed(2)} Meters`;
                break;
            case 'meter-to-feet':
                result = `${inputValue} Meters is ${(inputValue / 0.3048).toFixed(2)} Feet`;
                break;
            case 'inch-to-feet':
                result = `${inputValue} Inches is ${(inputValue / 12).toFixed(2)} Feet`;
                break;
            case 'feet-to-inch':
                result = `${inputValue} Feet is ${(inputValue * 12).toFixed(2)} Inches`;
                break;
            case 'inch-to-meter':
                result = `${inputValue} Inches is ${(inputValue * 0.0254).toFixed(2)} Meters`;
                break;
            case 'meter-to-inch':
                result = `${inputValue} Meters is ${(inputValue / 0.0254).toFixed(2)} Inches`;
                break;
            default:
                result = 'Please select a conversion type';
        }
    }

    document.getElementById('result').textContent = result;
}
