function calculateHP() {
    const a = parseFloat(document.getElementById('firstTerm').value);
    const d = parseFloat(document.getElementById('commonDifference').value);
    const n = parseFloat(document.getElementById('numOfTerms').value);

    if (isNaN(a) || isNaN(d) || isNaN(n) || d === 0) {
        showError("Please enter valid numbers for all fields, and ensure the common difference is not zero.");
        return;
    }

    const nthTerm = 1 / ((1 / a) + (n - 1) * (1 / d));

    showResult(`The ${n}th term of the harmonic progression is: ${nthTerm.toFixed(4)}`);
}

function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="error">${message}</div>`;
}

function showResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="success">${message}</div>`;
}
