document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('titrationForm');
    
    form.addEventListener('input', calculateAnalyteConcentration);

    function calculateAnalyteConcentration() {
        // Get the values from the form
        const C1 = parseFloat(document.getElementById('titrantConcentration').value);
        const V1 = parseFloat(document.getElementById('titrantVolume').value);
        const V2 = parseFloat(document.getElementById('analyteVolume').value);
        const stoichiometry = document.getElementById('stoichiometryRatio').value.split(':').map(Number);

        // Validate the input
        if (isNaN(C1) || isNaN(V1) || isNaN(V2) || stoichiometry.length !== 2 || stoichiometry.some(isNaN)) {
            displayResult('Please enter valid values.', true);
            return;
        }

        const n1 = stoichiometry[0];
        const n2 = stoichiometry[1];

        if (n1 <= 0 || n2 <= 0) {
            displayResult('Stoichiometry values must be positive.', true);
            return;
        }

        // Calculate the analyte concentration (C2)
        const C2 = (C1 * V1 * n2) / (V2 * n1);

        // Display the result
        displayResult(`Analyte Concentration (C₂): ${C2.toFixed(3)} M`);
    }

    function displayResult(message, isError = false) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = message;
        resultDiv.style.color = isError ? 'red' : 'black';
    }
});
