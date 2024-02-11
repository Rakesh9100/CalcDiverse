window.convertPercentToFraction = function () {
    var percentInput = document.getElementById('percentInput').value;

    // Check if the input is empty or not a valid number
    if (percentInput.trim() === '' || isNaN(percentInput)) {
        alert('Please enter a valid number.');
        return;
    }

    // Convert percent to fraction
    var decimalValue = parseFloat(percentInput) / 100;
    var fraction = decimalToFraction(decimalValue);

    // Display the result
    document.getElementById('resultValue').innerText = '= ' + fraction.numerator + '/' + fraction.denominator;
    document.getElementById('showingWork').innerText =
        percentInput + '% = ' + percentInput + '/100 = ' + decimalValue + ' = ' + fraction.numerator + '/' + fraction.denominator;
};

window.convertFractionToPercent = function () {
    var fractionInput = document.getElementById('fractionInput').value;

    // Check if the input is empty or not a valid fraction
    if (fractionInput.trim() === '' || !isValidFraction(fractionInput)) {
        alert('Please enter a valid fraction.');
        return;
    }

    // Split fraction into numerator and denominator
    var parts = fractionInput.split('/');
    var numerator = parseInt(parts[0]);
    var denominator = parseInt(parts[1]);

    // Check if denominator is zero
    if (denominator === 0) {
        alert('Denominator cannot be zero. Please enter a valid fraction.');
        return;
    }

    // Calculate percentage
    var percent = (numerator / denominator) * 100;

    // Simplify fraction
    var gcd = findGCD(numerator, denominator);
    var simplifiedNumerator = numerator / gcd;
    var simplifiedDenominator = denominator / gcd;

    // Display the result
    document.getElementById('resultValue').innerText = '= ' + percent.toFixed(2) + '%';

    // Showing work steps
    var workSteps = fractionInput + ' = (' + numerator + '/' + denominator + ') * 100';
    workSteps += ' = ' + percent.toFixed(2) + '%';

    // Display the work steps
    document.getElementById('showingWork').innerText = workSteps;
};

// Function to find the greatest common divisor (GCD) of two numbers
function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
}


window.clearInputs = function () {
    document.getElementById('percentInput').value = '';
    document.getElementById('fractionInput').value = '';
    document.getElementById('resultValue').innerText = '';
    document.getElementById('showingWork').innerText = '';
};

// Function to convert decimal to fraction
function decimalToFraction(decimalValue) {
    const tolerance = 1.0e-9;

    for (var denominator = 1; ; ++denominator) {
        var numerator = Math.round(decimalValue * denominator);

        if (Math.abs(decimalValue - numerator / denominator) < tolerance) {
            return {
                numerator: numerator,
                denominator: denominator,
            };
        }
    }
}

// Function to check if the input is a valid fraction
function isValidFraction(input) {
    return /^-?\d+\/\d+$/.test(input);
}

// Function to convert fraction to percent
function fractionToPercent(fraction) {
    var parts = fraction.split('/');
    var numerator = parseInt(parts[0]);
    var denominator = parseInt(parts[1]);

    // Check if denominator is zero
    if (denominator === 0) {
        return NaN; // Return NaN to indicate invalid input
    }

    return (numerator / denominator) * 100;
}
