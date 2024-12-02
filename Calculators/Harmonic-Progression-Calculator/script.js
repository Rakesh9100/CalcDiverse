function calculateHP() {
    const a = parseFloat(document.getElementById('firstTerm').value);
    const d = parseFloat(document.getElementById('commonDifference').value);
    const n = parseFloat(document.getElementById('numOfTerms').value);
    const calc = document.getElementById('calculationType').value;

    if (isNaN(a) || isNaN(d) || isNaN(n) || d === 0) {
        showError("Please enter valid numbers for all fields, and ensure the common difference is not zero.");
        return;
    }
    let result;
    if (calc === 'nthTerm') {
        result = CalcNthTerm(a, d, n)[1];
    } else if (calc === 'sumOfTerms') {
        result = sumOfTerms(a, d, n)[1];
    } else if (calc === 'harmonicMean') {
        result = harmMean(a, d, n);
    }

    showResult(result);
}

function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="error">${message}</div>`;
}

function CalcNthTerm(a, d, n) {
    const nth = 1 / ((1 / a) + (n - 1) * (1 / d));
    return [nth, `The ${n}th term of the harmonic progression is: ${nth.toFixed(4)}`]
}

function sumOfTerms(a, d, n) {
    var sumTerms = 0;
    for (i = 1; i <= n; i++) {
        ith = CalcNthTerm(a, d, i)[0];
        sumTerms += ith;
    }
    return [sumTerms, `The sum of first ${n} terms of the harmonic progression is: ${sumTerms.toFixed(4)}`];
}

function harmMean(a, d, n) {
    mean = n / (sumOfTerms(a, d, n)[0]);
    return `The harmonic mean of first ${n} terms of the harmonic progression is: ${mean.toFixed(4)}`
}

function showResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="success">${message}</div>`;
}
