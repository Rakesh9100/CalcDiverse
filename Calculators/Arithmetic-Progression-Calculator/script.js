function calculate() {
    // Get input values
    const firstTerm = parseFloat(document.getElementById('firstTerm').value);
    const commonDifference = parseFloat(document.getElementById('commonDifference').value);
    const termNumber = parseInt(document.getElementById('termNumber').value);
    const calculationType = document.getElementById('calculationType').value;

    // For checking empty values    
    if (isNaN(firstTerm) || isNaN(commonDifference) || isNaN(termNumber)) {
        document.getElementById("result").innerText = "Please enter the valid numbers for all fields.";
        return;
    }
    // Perform the selected calculation
    let result;
    if (calculationType === 'nthTerm') {
        // Calculate the nth term
        result = calculateNthTerm(firstTerm, commonDifference, termNumber);
    } else if (calculationType === 'sumOfTerms') {
        // Calculate the sum of the first n terms
        result = calculateSumOfTerms(firstTerm, commonDifference, termNumber);
    } else if (calculationType === 'arithMean') {
        // Calculate the arithmetic mean of terms
        result = calculateArithMean(firstTerm, commonDifference, termNumber);
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

function calculateNthTerm(firstTerm, commonDifference, termNumber) {
    // Calculate the nth term
    return `The ${termNumber}th term is: ${firstTerm + (termNumber - 1) * commonDifference}`;
}

function calculateSumOfTerms(firstTerm, commonDifference, termNumber) {
    // Calculate the sum of the first n terms
    return `The sum of the first ${termNumber} terms is: ${(termNumber / 2) * (2 * firstTerm + (termNumber - 1) * commonDifference)}`;
}

function calculateArithMean(firstTerm, commonDifference, termNumber) {
    // Calculate the arithmetic mean of terms
    return `The arithmetic mean of ${termNumber} terms is: ${(1 / 2) * (2 * firstTerm + (termNumber - 1) * commonDifference)}`;
}