function calculateZScore() {
    const X = parseFloat(document.getElementById('experimentalResult').value);
    const mu = parseFloat(document.getElementById('meanValue').value);
    const sigma = parseFloat(document.getElementById('standardDeviation').value);

    if (isNaN(X) || isNaN(mu) || isNaN(sigma)) {
        alert('Please enter valid numbers');
        return;
    }

    const z = (X - mu) / sigma;
    document.getElementById('zScore').value = z.toFixed(2);
}
