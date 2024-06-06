function updateInputs() {
    const conversionType = document.getElementById('conversionType').value;

    // Disable all inputs
    document.getElementById('kgInput').disabled = true;
    document.getElementById('lbInput').disabled = true;
    document.getElementById('gInput').disabled = true;
    document.getElementById('ozInput').disabled = true;

    // Enable the relevant input based on the selected conversion
    if (conversionType === 'kgToLb' || conversionType === 'kgToG' || conversionType === 'kgToOz') {
        document.getElementById('kgInput').disabled = false;
    } else if (conversionType === 'lbToKg' || conversionType === 'lbToOz' || conversionType === 'lbToG') {
        document.getElementById('lbInput').disabled = false;
    } else if (conversionType === 'gToOz' || conversionType === 'gToLb') {
        document.getElementById('gInput').disabled = false;
    } else if (conversionType === 'ozToG' || conversionType === 'ozToKg') {
        document.getElementById('ozInput').disabled = false;
    }
}

function convert() {
    const conversionType = document.getElementById('conversionType').value;
    let result;

    if (conversionType === 'kgToLb') {
        const kg = parseFloat(document.getElementById('kgInput').value);
        result = kg * 2.20462 + ' pounds';
    } else if (conversionType === 'lbToKg') {
        const lb = parseFloat(document.getElementById('lbInput').value);
        result = lb / 2.20462 + ' kilograms';
    } else if (conversionType === 'gToOz') {
        const g = parseFloat(document.getElementById('gInput').value);
        result = g / 28.3495 + ' ounces';
    } else if (conversionType === 'ozToG') {
        const oz = parseFloat(document.getElementById('ozInput').value);
        result = oz * 28.3495 + ' grams';
    } else if (conversionType === 'kgToG') {
        const kg = parseFloat(document.getElementById('kgInput').value);
        result = kg * 1000 + ' grams';
    } else if (conversionType === 'lbToOz') {
        const lb = parseFloat(document.getElementById('lbInput').value);
        result = lb * 16 + ' ounces';
    } else if (conversionType === 'gToLb') {
        const g = parseFloat(document.getElementById('gInput').value);
        result = g / 453.592 + ' pounds';
    } else if (conversionType === 'lbToG') {
        const lb = parseFloat(document.getElementById('lbInput').value);
        result = lb * 453.592 + ' grams';
    } else if (conversionType === 'ozToKg') {
        const oz = parseFloat(document.getElementById('ozInput').value);
        result = oz / 35.274 + ' kilograms';
    } else if (conversionType === 'kgToOz') {
        const kg = parseFloat(document.getElementById('kgInput').value);
        result = kg * 35.274 + ' ounces';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}
