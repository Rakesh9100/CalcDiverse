function calculateDilution() {
    const c1 = parseFloat(document.getElementById('c1').value);
    const v1 = parseFloat(document.getElementById('v1').value);
    const c2 = parseFloat(document.getElementById('c2').value);
    const v2 = parseFloat(document.getElementById('v2').value);

    let resultText = "";

    if (!isNaN(c1) && !isNaN(v1) && isNaN(c2) && !isNaN(v2)) {
        // Calculate Final Concentration (C2)
        const c2Calculated = (c1 * v1) / v2;
        resultText = `C₂ = (${c1} x ${v1}) / ${v2} = ${c2Calculated.toFixed(2)} mol/L`;
    } else if (!isNaN(c1) && !isNaN(v1) && !isNaN(c2) && isNaN(v2)) {
        // Calculate Final Volume (V2)
        const v2Calculated = (c1 * v1) / c2;
        resultText = `V₂ = (${c1} x ${v1}) / ${c2} = ${v2Calculated.toFixed(2)} mL`;
    } else if (!isNaN(c2) && !isNaN(v2) && isNaN(c1) && !isNaN(v1)) {
        // Calculate Initial Concentration (C1)
        const c1Calculated = (c2 * v2) / v1;
        resultText = `C₁ = (${c2} x ${v2}) / ${v1} = ${c1Calculated.toFixed(2)} mol/L`;
    } else if (!isNaN(c2) && !isNaN(v2) && !isNaN(c1) && isNaN(v1)) {
        // Calculate Initial Volume (V1)
        const v1Calculated = (c2 * v2) / c1;
        resultText = `V₁ = (${c2} x ${v2}) / ${c1} = ${v1Calculated.toFixed(2)} mL`;
    } else {
        resultText = "Please provide valid inputs for at least three fields to calculate the missing value.";
    }

    document.getElementById('result').innerText = resultText;
}