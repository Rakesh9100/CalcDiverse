function calculate() {
    // Get input values
    const firstSide = parseFloat(document.getElementById('firstSide').value);
    const secondSide = parseFloat(document.getElementById('secondSide').value);
    const thirdSide = parseFloat(document.getElementById('thirdSide').value);
    const calculationType = document.getElementById('calculationType').value;

    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerText = "Please enter valid numbers for all fields.";
        return;
    }

    // Perform the selected calculation
    let result;
    if (calculationType === 'TanA') {
        // Calculate the tangent of angle A
        result = calculateTanA(firstSide, secondSide, thirdSide);
    } else if (calculationType === 'TanB') {
        // Calculate the tangent of angle B
        result = calculateTanB(firstSide, secondSide, thirdSide);
    } else if (calculationType === 'TanC') {
        // Calculate the tangent of angle C
        result = calculateTanC(firstSide, secondSide, thirdSide);
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

function calculateTanA(firstSide, secondSide, thirdSide) {
    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    const cosA = (((b * b) + (c * c) - (a * a)) / (2 * b * c));
    const sinA = Math.sqrt(1 - cosA * cosA);
    return `The value of TanA is: ${sinA / cosA}`;
}

function calculateTanB(firstSide, secondSide, thirdSide) {
    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    const cosB = (((a * a) + (c * c) - (b * b)) / (2 * a * c));
    const sinB = Math.sqrt(1 - cosB * cosB);
    return `The value of TanB is: ${sinB / cosB}`;
}

function calculateTanC(firstSide, secondSide, thirdSide) {
    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    const cosC = (((a * a) + (b * b) - (c * c)) / (2 * a * b));
    const sinC = Math.sqrt(1 - cosC * cosC);
    return `The value of TanC is: ${sinC / cosC}`;
}
