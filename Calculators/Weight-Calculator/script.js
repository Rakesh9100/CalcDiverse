function updateInputs() {
    var conversionType = document.getElementById('conversionType').value;
    var kgInput = document.getElementById('kgInput');
    var lbInput = document.getElementById('lbInput');

    // Disable both inputs and clear their values
    kgInput.disabled = true;
    kgInput.value = "";
    lbInput.disabled = true;
    lbInput.value = "";

    // Enable the input relevant to the selected conversion type
    if (conversionType === 'kgToLb') {
        kgInput.disabled = false;
    } else if (conversionType === 'lbToKg') {
        lbInput.disabled = false;
    }
}

function convert() {
    var conversionType = document.getElementById('conversionType').value;
    var kgInput = document.getElementById('kgInput');
    var lbInput = document.getElementById('lbInput');

    if (conversionType === 'kgToLb' && kgInput.value !== "") {
        var kgToLb = kgInput.value * 2.20462;
        document.getElementById('result').innerHTML = kgInput.value + " kilograms is equal to " + kgToLb.toFixed(2) + " pounds.";
    } else if (conversionType === 'lbToKg' && lbInput.value !== "") {
        var lbToKg = lbInput.value / 2.20462;
        document.getElementById('result').innerHTML = lbInput.value + " pounds is equal to " + lbToKg.toFixed(2) + " kilograms.";
    } else {
        document.getElementById('result').innerHTML = "Please enter a value.";
    }
}
