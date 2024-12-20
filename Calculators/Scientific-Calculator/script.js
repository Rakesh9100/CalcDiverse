function appendToDisplay(value) {
    document.getElementById('output').value += value;
}

function clearDisplay() {
    document.getElementById('output').value = '';
}

function deleteLast() {
    let output = document.getElementById('output');
    output.value = output.value.slice(0, -1);
}

function calculateTrig(func) {
    let value = parseFloat(document.getElementById('output').value);
    if (isNaN(value)) {
        alert("Please enter a valid number.");
        return;
    }
    if (func === 'sin') {
        let result = Math.sin(toRadians(value));
        document.getElementById('output').value = result.toFixed(6);
    } else if (func === 'cos') {
        let result = Math.cos(toRadians(value));
        document.getElementById('output').value = result.toFixed(6);
    } else if (func === 'tan') {
        let result = Math.tan(toRadians(value));
        document.getElementById('output').value = result.toFixed(6);
    }
}

function calculateInverse(func) {
    let value = parseFloat(document.getElementById('output').value);
    if (isNaN(value)) {
        alert("Please enter a valid number.");
        return;
    }
    if (func === 'asin' && (value < -1 || value > 1)) {
        alert("asin(x) is only valid for x between -1 and 1.");
        return;
    }
    if (func === 'acos' && (value < -1 || value > 1)) {
        alert("acos(x) is only valid for x between -1 and 1.");
        return;
    }
    let result;
    if (func === 'asin') {
        result = Math.asin(value);
    } else if (func === 'acos') {
        result = Math.acos(value);
    } else if (func === 'atan') {
        result = Math.atan(value);
    }
    document.getElementById('output').value = result.toFixed(6);
}

function calculateLog() {
    let value = parseFloat(document.getElementById('output').value);
    if (value <= 0) {
        alert("Logarithm only works for values greater than 0.");
        return;
    }
    let result = Math.log10(value);
    document.getElementById('output').value = result.toFixed(6);
}

function calculateLn() {
    let value = parseFloat(document.getElementById('output').value);
    if (value <= 0) {
        alert("Natural Logarithm only works for values greater than 0.");
        return;
    }
    let result = Math.log(value);
    document.getElementById('output').value = result.toFixed(6);
}

function calculateSqrt() {
    let value = parseFloat(document.getElementById('output').value);
    if (value < 0) {
        alert("Square root is not defined for negative numbers.");
        return;
    }
    let result = Math.sqrt(value);
    document.getElementById('output').value = result.toFixed(6);
}

function calculateCbrt() {
    let value = parseFloat(document.getElementById('output').value);
    let result = Math.cbrt(value);
    document.getElementById('output').value = result.toFixed(6);
}

function calculatePower() {
    let value = parseFloat(document.getElementById('output').value);
    let result = Math.pow(value, 2);
    document.getElementById('output').value = result.toFixed(6);
}

function calculateExponential() {
    let value = parseFloat(document.getElementById('output').value);
    let result = Math.exp(value);
    document.getElementById('output').value = result.toFixed(6);
}

function calculateResult() {
    let output = document.getElementById('output').value;
    try {
        let result = eval(output);
        document.getElementById('output').value = result.toFixed(6);
    } catch (e) {
        alert("Error in calculation!");
    }
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}