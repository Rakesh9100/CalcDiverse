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

    // Check if it's a Smith number
    var isSmithNumber = digitSumOriginal === digitSumPrimeFactors;

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = isSmithNumber
        ? `${inputNumber} is a Smith Number.`
        : `${inputNumber} is not a Smith Number.`;
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
