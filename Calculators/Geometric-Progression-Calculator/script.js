function calculate() {
    // Get input values
    const firstTerm = parseFloat(document.getElementById('firstTerm').value);
    const commonRatio = parseFloat(document.getElementById('commonRatio').value);
    const termNumber = parseInt(document.getElementById('termNumber').value);
    const calculationType = document.getElementById('calculationType').value;

    // Input validations
    if (isNaN(firstTerm) || isNaN(commonRatio) || isNaN(termNumber)) {
        document.getElementById("result").innerText = "Please enter the valid numbers for all fields.";
        return;
    }
    // Perform the selected calculation
    let result;
    if (calculationType === 'nthTerm') {
        // Calculate the nth term
        result = calculateNthTerm(firstTerm, commonRatio, termNumber);
    } else if (calculationType === 'sumOfTerms') {
        // Calculate the sum of the first n terms
        result = calculateSumOfTerms(firstTerm, commonRatio, termNumber);
    } else if (calculationType === 'geoMean') {
        // Calculate the geometric mean
        result = calculateGeoMean(firstTerm, commonRatio, termNumber);
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

function calculateNthTerm(firstTerm, commonRatio, termNumber) {
    // Calculate the nth term
    return `The ${termNumber}th term is: ${firstTerm * Math.pow(commonRatio, termNumber - 1)}`;
}

function calculateSumOfTerms(firstTerm, commonRatio, termNumber) {
    // Calculate the sum of the first n terms
    return `The sum of the first ${termNumber} terms is: ${firstTerm * (1 - Math.pow(commonRatio, termNumber)) / (1 - commonRatio)}`;
}

function calculateGeoMean(firstTerm, commonRatio, termNumber) {
    // Calculate the sum of the first n terms
    return `The sum of the first ${termNumber} terms is: ${firstTerm * (Math.pow(commonRatio, (termNumber-1)/2))}`;
}