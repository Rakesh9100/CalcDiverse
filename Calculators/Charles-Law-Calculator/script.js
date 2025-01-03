function calculateCharlesLaw() {
    const v1 = parseFloat(document.getElementById('v1').value);
    const t1 = parseFloat(document.getElementById('t1').value);
    const v2 = parseFloat(document.getElementById('v2').value);
    const t2 = parseFloat(document.getElementById('t2').value);

    let resultText = "";

    if (!isNaN(v1) && !isNaN(t1) && isNaN(v2) && !isNaN(t2)) {
        // Calculate Final Volume (V2)
        const v2Calculated = (v1 * t2) / t1;
        resultText = `V₂ = (${v1} x ${t2}) / ${t1} = ${v2Calculated.toFixed(2)} liters`;
    } else if (!isNaN(v1) && !isNaN(t1) && !isNaN(v2) && isNaN(t2)) {
        // Calculate Final Temperature (T2)
        const t2Calculated = (v2 * t1) / v1;
        resultText = `T₂ = (${v2} x ${t1}) / ${v1} = ${t2Calculated.toFixed(2)} K`;
    } else if (isNaN(v1) || isNaN(t1)) {
        resultText = "Please enter valid values for initial volume (V₁) and initial temperature (T₁).";
    } else if (isNaN(v2) && isNaN(t2)) {
        resultText = "Please provide either final volume (V₂) or final temperature (T₂) to calculate.";
    } else {
        resultText = "Invalid input combination. Please ensure only one value is missing for calculation.";
    }

    document.getElementById('result').innerText = resultText;
}