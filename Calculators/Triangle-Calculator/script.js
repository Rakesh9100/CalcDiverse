function calculate() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    const providedValues = [sideA, sideB, sideC];
    const numberOfValidValues = providedValues.filter(value => !isNaN(value)).length;

    const angleType = document.getElementById('angleType').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<div class="h-2"><h2>Triangle Properties:</h2></div>`;

    if (numberOfValidValues !== 3 || providedValues.every(value => value <= 0)) {
        alert('Please enter exactly three valid positive values for sides.');
        return;
    }

    const angleA = calculateAngle(sideB, sideC, sideA);
    const angleB = calculateAngle(sideC, sideA, sideB);
    const angleC = 180 - angleA - angleB;

    if (isValidTriangle(sideA, sideB, sideC, angleA, angleB, angleC)) {
        const perimeter = calculatePerimeter(sideA, sideB, sideC);
        const semiperimeter = perimeter / 2;
        const area = calculateArea(sideA, sideB, sideC, angleA, angleB, angleC, angleType);
        const inradius = calculateInradius(area, semiperimeter);
        const circumradius = calculateCircumradius(sideA, sideB, sideC, area);
        const heights = calculateHeights(sideA, sideB, sideC, area);
        const triangleType = determineTriangleType(sideA, sideB, sideC, angleA, angleB, angleC);

        outputDiv.innerHTML += `
        <div class="final-div">
        <img class="image" src="https://upload.wikimedia.org/wikipedia/commons/2/24/Triangle_ABC_with_Sides_a_b_c_2.png">
        <h3>Type: ${triangleType}</h3>
        <h3>Perimeter: ${perimeter}</h3>
        <h3>Area: ${area}</h3>
        <h3>Semiperimeter: ${semiperimeter}</h3>
        <h3>Inradius: ${inradius}</h3>
        <h3>Circumradius: ${circumradius}</h3>
        <h3>Height from side A: ${heights.heightA}</h3>
        <h3>Height from side B: ${heights.heightB}</h3>
        <h3>Height from side C: ${heights.heightC}</h3>
        </div>`;
    } else {
        outputDiv.innerHTML += `<p>Invalid triangle. Please provide valid values.</p>`;
    }
}

function calculateAngle(a, b, c) {
    // Law of Cosines
    return Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)) * (180 / Math.PI);
}

function isValidTriangle(sideA, sideB, sideC, angleA, angleB, angleC) {
    const positiveSides = sideA > 0 && sideB > 0 && sideC > 0;
    const validAngles = angleA + angleB + angleC === 180;
    return positiveSides && validAngles;
}

function calculatePerimeter(sideA, sideB, sideC) {
    return sideA + sideB + sideC;
}

function calculateArea(sideA, sideB, sideC, angleA, angleB, angleC, angleType) {
    if (sideA && sideB && sideC) {
        const s = (sideA + sideB + sideC) / 2;
        return Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    } else {
        return 'N/A';
    }
}

function calculateInradius(area, semiperimeter) {
    return area !== 'N/A' && semiperimeter ? area / semiperimeter : 'N/A';
}

function calculateCircumradius(sideA, sideB, sideC, area) {
    return area !== 'N/A' && sideA && sideB && sideC ? (sideA * sideB * sideC) / (4 * area) : 'N/A';
}

function calculateHeights(sideA, sideB, sideC, area) {
    return area !== 'N/A' && sideA && sideB && sideC ? {
        heightA: (2 * area) / sideA,
        heightB: (2 * area) / sideB,
        heightC: (2 * area) / sideC
    } : { heightA: 'N/A', heightB: 'N/A', heightC: 'N/A' };
}

function determineTriangleType(sideA, sideB, sideC, angleA, angleB, angleC) {
    return sideA && sideB && sideC ? (sideA === sideB && sideB === sideC ? 'Equilateral' : sideA === sideB || sideB === sideC || sideA === sideC ? 'Isosceles' : 'Scalene') :
        angleA && angleB && angleC ? (angleA === angleB && angleB === angleC ? 'Equiangular' : angleA === 90 || angleB === 90 || angleC === 90 ? 'Right-angled' : 'Scalene') :
            'N/A';
}
