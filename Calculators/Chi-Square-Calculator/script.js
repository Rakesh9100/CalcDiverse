document.getElementById('chiSquareForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const observedValues = document.getElementById('observedValues').value.split(',').map(Number);
    const expectedValues = document.getElementById('expectedValues').value.split(',').map(Number);
    const significanceLevel = parseFloat(document.getElementById('significanceLevel').value);

    if (observedValues.length !== expectedValues.length) {
        alert('Observed and expected values must have the same number of elements');
        return;
    }

    if (isNaN(significanceLevel) || significanceLevel <= 0 || significanceLevel >= 1) {
        alert('Please enter a valid significance level between 0 and 1');
        return;
    }

    let chiSquare = 0;

    for (let i = 0; i < observedValues.length; i++) {
        const observed = observedValues[i];
        const expected = expectedValues[i];
        chiSquare += Math.pow(observed - expected, 2) / expected;
    }

    const degreesOfFreedom = observedValues.length - 1;

    const criticalValue = getChiSquareCriticalValue(degreesOfFreedom, significanceLevel);

    const resultText = `Chi-Square Value: ${chiSquare.toFixed(2)}\nCritical Value (at α=${significanceLevel}): ${criticalValue.toFixed(2)}\nResult: ${chiSquare > criticalValue ? 'Significant' : 'Not Significant'}`;
    document.getElementById('result').innerText = resultText;
});

function getChiSquareCriticalValue(df, alpha) {
    // Chi-square critical values for common significance levels and degrees of freedom
    const chiSquareTable = {
        1: { '0.10': 2.71, '0.05': 3.84, '0.01': 6.63 },
        2: { '0.10': 4.61, '0.05': 5.99, '0.01': 9.21 },
        3: { '0.10': 6.25, '0.05': 7.81, '0.01': 11.34 },
        4: { '0.10': 7.78, '0.05': 9.49, '0.01': 13.28 },
        5: { '0.10': 9.24, '0.05': 11.07, '0.01': 15.09 },
        6: { '0.10': 10.64, '0.05': 12.59, '0.01': 16.81 },
        // Add more degrees of freedom as needed
    };

    if (!chiSquareTable[df] || !chiSquareTable[df][alpha]) {
        alert('The significance level and degrees of freedom combination is not available in the table.');
        return NaN;
    }

    return chiSquareTable[df][alpha];
}
