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
    if (calculationType === 'SinA') {
        // Calculate the angle A
        result = calculateSinA(firstSide, secondSide, thirdSide);
    } else if (calculationType === 'SinB') {
        // Calculate the angle B
        result = calculateSinB(firstSide, secondSide, thirdSide);
    } else if (calculationType === 'SinC') {
        // Calculate the angle C
        result = calculateSinC(firstSide, secondSide, thirdSide);
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

function calculateSinA(firstSide, secondSide, thirdSide) {
    // Calculate the angle A
    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    const cosA=(((b * b) + (c * c) - (a * a)) / (2 * b * c));
    return `The value of sinA is: ${Math.sqrt(1 - cosA * cosA)}`;
}

function calculateSinB(firstSide, secondSide, thirdSide) {
    // Calculate the angle B
    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    const cosB=(((a * a) + (c * c) - (b * b)) / (2 * a * c))
    return `The value of SinB is: ${Math.sqrt(1 - cosB * cosB)}`;
}


function calculateSinC(firstSide, secondSide, thirdSide) {
    // Calculate the angle C
    const a = firstSide;
    const b = secondSide;
    const c = thirdSide;
    const cosC=(((b * b) + (a * a) - (c * c)) / (2 * b * a))
    return `The value of SinC is: ${Math.sqrt(1 - cosC * cosC)}`;
}