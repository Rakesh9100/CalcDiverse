function calculate() {
    // Get input values
    const firstTerm = parseFloat(document.getElementById('firstTerm').value);
    const commonRatio = parseFloat(document.getElementById('commonRatio').value);
    const termNumber = parseInt(document.getElementById('termNumber').value);
    const commonDifference = parseInt(document.getElementById('commonDifference').value);
    const calculationType = document.getElementById('calculationType').value;

    const n = termNumber;
    const a = firstTerm;
    const d = commonDifference;
    const r = commonRatio;
    if (isNaN(a) || isNaN(d) || isNaN(n) || isNaN(r)) {
        document.getElementById("result").innerText = "Please enter the valid numbers for all fields.";
        return;
    }
    // Perform the selected calculation
    let result;
    if (calculationType === 'nthTerm') {
        // Calculate the nth term
        result = calculateNthTerm(firstTerm, commonRatio, termNumber, commonDifference);
    } else if (calculationType === 'sumOfTerms') {
        // Calculate the sum of the first n terms
        result = calculateSumOfTerms(firstTerm, commonRatio, termNumber, commonDifference);
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

function calculateNthTerm(firstTerm, commonRatio, termNumber, commonDifference) {
    // Calculate the nth term
    const n = termNumber;
    const a = firstTerm;
    const d = commonDifference;
    const r = commonRatio;
    const m = (Math.pow(commonRatio, termNumber - 1));

    return `The ${termNumber}th term is: ${(a + (n - 1) * d) * m}`;
}

function calculateSumOfTerms(firstTerm, commonRatio, termNumber, commonDifference) {
    // Calculate the sum of the first n terms
    const n = termNumber;
    const a = firstTerm;
    const d = commonDifference;
    const r = commonRatio;
    const p = 1 - commonRatio;
    const l = (1 - Math.pow(commonRatio, termNumber - 1));
    const m = (Math.pow(commonRatio, termNumber));
    const w = Math.pow(p, 2);

    return `The sum of the first ${termNumber} terms is: ${(a / p) + ((d * r * l) / w) - (((a + (n - 1) * d) * m)) / p}`;
}
