function calculate() {
    // Get input values
    const firstSide = parseFloat(document.getElementById('firstSide').value);
    const secondSide = parseFloat(document.getElementById('secondSide').value);
    const thirdSide = parseInt(document.getElementById('thirdSide').value);
    const calculationType = document.getElementById('calculationType').value;


    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerText = "Please enter the valid numbers for all fields.";
        return;

    }
    // Perform the selected calculation
    let result;
    if (calculationType === 'CosA') {
        // Calculate the angle A
        result = calculateCosA(firstSide, secondSide, thirdSide);
    } else if (calculationType === 'CosB') {
        // Calculate the angle B
        result = calculateCosB(firstSide, secondSide, thirdSide);
    } else if (calculationType === 'CosC') {
        // Calculate the angle C
        result = calculateCosC(firstSide, secondSide, thirdSide);
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

function calculateCosA(firstSide, secondSide, thirdSide) {
    // Calculate the angle A
    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    return `The value of CosA is: ${(((b * b) + (c * c) - (a * a)) / (2 * b * c))}`;
}

function calculateCosB(firstSide, secondSide, thirdSide) {
    // Calculate the angle B
    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    return `The value of CosB is: ${(((a * a) + (c * c) - (b * b)) / (2 * a * c))}`;
}


function calculateCosC(firstSide, secondSide, thirdSide) {
    // Calculate the angle C
    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    return `The value of CosC is: ${(((b * b) + (a * a) - (c * c)) / (2 * b * a))}`;
}