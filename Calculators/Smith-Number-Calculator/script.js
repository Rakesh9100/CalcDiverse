function checkSmithNumber() {
    // Get the input number
    var inputNumber = parseInt(document.getElementById("inputNumber").value);

    // Validate input
    if (isNaN(inputNumber) || inputNumber < 4) {
        alert("Please enter a valid number greater than or equal to 4.");
        return;
    }

    // Calculate the sum of digits for the original number
    var digitSumOriginal = getDigitSum(inputNumber);

    // Calculate the sum of digits for the prime factors
    var primeFactors = getPrimeFactors(inputNumber);
    var digitSumPrimeFactors = primeFactors.reduce((sum, factor) => sum + getDigitSum(factor), 0);

    // Display the result details
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <div class="result-details">
            <div><strong>Original Number:</strong> ${inputNumber}</div>
            <div><strong>Prime Factors:</strong> ${primeFactors.join(', ')}</div>
            <div><strong>Sum of Digits (Original):</strong> ${digitSumOriginal}</div>
            <div><strong>Sum of Digits (Prime Factors):</strong> ${digitSumPrimeFactors}</div>
            <div><strong>Result:</strong> ${digitSumOriginal === digitSumPrimeFactors ? 'Yes, it is a Smith Number.' : 'No, it is not a Smith Number.'}</div>
        </div>
    `;
}

function getPrimeFactors(number) {
    var factors = [];
    for (var i = 2; i <= number; i++) {
        while (number % i === 0) {
            factors.push(i);
            number /= i;
        }
    }
    return factors;
}

function getDigitSum(number) {
    return number
        .toString()
        .split('')
        .map(Number)
        .reduce((sum, digit) => sum + digit, 0);
}
