function generateFields() {
    const numPoints = parseInt(document.getElementById('numPoints').value);
    const coordinateFields = document.getElementById('coordinateFields');
    coordinateFields.innerHTML = '';

    for (let i = 0; i < numPoints; i++) {
        const fieldset = document.createElement('div');
        fieldset.classList.add('coordinate-set');
        fieldset.innerHTML = `
            <label for="x${i}">X${i + 1}:</label>
            <input type="number" id="x${i}" class="x-coord">
            <label for="y${i}">Y${i + 1}:</label>
            <input type="number" id="y${i}" class="y-coord">
        `;
        coordinateFields.appendChild(fieldset);
    }
}

function calculateCurveFitting() {
    const xCoords = document.querySelectorAll('.x-coord');
    const yCoords = document.querySelectorAll('.y-coord');

    const points = [];
    for (let i = 0; i < xCoords.length; i++) {
        const x = parseFloat(xCoords[i].value);
        const y = parseFloat(yCoords[i].value);
        if (!isNaN(x) && !isNaN(y)) {
            points.push({ x, y });
        }
    }

    if (points.length < 2) {
        alert("Please enter at least two points.");
        return;
    }

    const curveType = document.getElementById('curveType').value;
    const result = getBestFitCurve(points, curveType);
    
    displayResults(result);
    plotCurve(points, result.equation, curveType);
}

function gaussianElimination(A, B) {
    const n = B.length;
    
    for (let i = 0; i < n; i++) {
        // Search for maximum in this column
        let maxEl = Math.abs(A[i][i]);
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(A[k][i]) > maxEl) {
                maxEl = Math.abs(A[k][i]);
                maxRow = k;
            }
        }

        // Swap maximum row with current row (column by column)
        for (let k = i; k < n; k++) {
            const tmp = A[maxRow][k];
            A[maxRow][k] = A[i][k];
            A[i][k] = tmp;
        }
        const tmp = B[maxRow];
        B[maxRow] = B[i];
        B[i] = tmp;

        // Make all rows below this one 0 in current column
        for (let k = i + 1; k < n; k++) {
            const c = -A[k][i] / A[i][i];
            for (let j = i; j < n; j++) {
                if (i === j) {
                    A[k][j] = 0;
                } else {
                    A[k][j] += c * A[i][j];
                }
            }
            B[k] += c * B[i];
        }
    }

    // Solve equation Ax = B for an upper triangular matrix A
    const x = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        x[i] = B[i] / A[i][i];
        for (let k = i - 1; k >= 0; k--) {
            B[k] -= A[k][i] * x[i];
        }
    }
    return x;
}

function getBestFitCurve(points, curveType) {
    let equation = '';
    switch (curveType) {
        case 'linear':
            equation = fitLinear(points);
            break;
        case 'quadratic':
            equation = fitQuadratic(points);
            break;
        case 'cubic':
            equation = fitCubic(points);
            break;
        case 'exponential':
            equation = fitExponential(points);
            break;
    }
    return { equation };
}

function fitLinear(points) {
    const n = points.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    points.forEach(point => {
        sumX += point.x;
        sumY += point.y;
        sumXY += point.x * point.y;
        sumX2 += point.x * point.x;
    });

    const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const b = (sumY - m * sumX) / n;

    return `y = ${m.toFixed(2)}x + ${b.toFixed(2)}`;
}

function fitQuadratic(points) {
    const n = points.length;
    let sumX = 0, sumY = 0, sumX2 = 0, sumX3 = 0, sumX4 = 0, sumXY = 0, sumX2Y = 0;

    points.forEach(point => {
        sumX += point.x;
        sumY += point.y;
        sumX2 += point.x * point.x;
        sumX3 += point.x * point.x * point.x;
        sumX4 += point.x * point.x * point.x * point.x;
        sumXY += point.x * point.y;
        sumX2Y += point.x * point.x * point.y;
    });

    const A = [
        [n, sumX, sumX2],
        [sumX, sumX2, sumX3],
        [sumX2, sumX3, sumX4]
    ];
    const B = [sumY, sumXY, sumX2Y];

    const coeffs = gaussianElimination(A, B);
    const [c, b, a] = coeffs;  // Adjusted order for quadratic equation

    return `y = ${a.toFixed(2)}x^2 + ${b.toFixed(2)}x + ${c.toFixed(2)}`;
}

function fitCubic(points) {
    const n = points.length;
    let sumX = 0, sumY = 0, sumX2 = 0, sumX3 = 0, sumX4 = 0, sumX5 = 0, sumX6 = 0, sumXY = 0, sumX2Y = 0, sumX3Y = 0;

    points.forEach(point => {
        const x = point.x;
        const y = point.y;
        const x2 = x * x;
        const x3 = x * x2;
        const x4 = x * x3;
        const x5 = x * x4;
        const x6 = x * x5;

        sumX += x;
        sumY += y;
        sumX2 += x2;
        sumX3 += x3;
        sumX4 += x4;
        sumX5 += x5;
        sumX6 += x6;
        sumXY += x * y;
        sumX2Y += x2 * y;
        sumX3Y += x3 * y;
    });

    const A = [
        [n, sumX, sumX2, sumX3],
        [sumX, sumX2, sumX3, sumX4],
        [sumX2, sumX3, sumX4, sumX5],
        [sumX3, sumX4, sumX5, sumX6]
    ];
    const B = [sumY, sumXY, sumX2Y, sumX3Y];

    const coeffs = gaussianElimination(A, B);
    const [d, c, b, a] = coeffs;  // Adjusted order for cubic equation

    return `y = ${a.toFixed(2)}x^3 + ${b.toFixed(2)}x^2 + ${c.toFixed(2)}x + ${d.toFixed(2)}`;
}

function fitExponential(points) {
    const n = points.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumLogY = 0, sumXLogY = 0;

    points.forEach(point => {
        const x = point.x;
        const y = point.y;
        const logY = Math.log(y);

        sumX += x;
        sumLogY += logY;
        sumXLogY += x * logY;
        sumX2 += x * x;
    });

    const b = (n * sumXLogY - sumX * sumLogY) / (n * sumX2 - sumX * sumX);
    const a = Math.exp((sumLogY - b * sumX) / n);

    return `y = ${a.toFixed(2)}e^(${b.toFixed(2)}x)`;
}

function displayResults(result) {
    const results = document.getElementById('results');
    results.innerHTML = `Best Fit Curve: ${result.equation}`;
}

function plotCurve(points, equation, curveType) {
    const ctx = document.getElementById('curveChart').getContext('2d');
    const labels = points.map(point => point.x);
    const data = points.map(point => point.y);

    const curveData = calculateCurveData(points, equation, curveType);

    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Data Points',
                data: points,
                borderColor: 'blue',
                backgroundColor: 'blue',
                showLine: false,
                pointRadius: 5,
            },
            {
                label: 'Best Fit Curve',
                data: curveData,
                borderColor: 'red',
                fill: false,
                showLine: true,
                pointRadius: 0,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { type: 'linear', position: 'bottom' },
                y: { type: 'linear', position: 'left' }
            }
        }
    });
}

function calculateCurveData(points, equation, curveType) {
    const curveData = [];
    const minX = Math.min(...points.map(point => point.x));
    const maxX = Math.max(...points.map(point => point.x));
    const step = (maxX - minX) / 100;

    for (let x = minX; x <= maxX; x += step) {
        let y;
        switch (curveType) {
            case 'linear':
                const [mLinear, bLinear] = equation.match(/-?\d+(\.\d+)?/g).map(Number);
                y = mLinear * x + bLinear;
                break;
            case 'quadratic':
                const [aQuadratic, bQuadratic, cQuadratic] = equation.match(/-?\d+(\.\d+)?/g).map(Number);
                y = aQuadratic * x * x + bQuadratic * x + cQuadratic;
                break;
            case 'cubic':
                const [aCubic, bCubic, cCubic, dCubic] = equation.match(/-?\d+(\.\d+)?/g).map(Number);
                y = aCubic * x * x * x + bCubic * x * x + cCubic * x + dCubic;
                break;
            case 'exponential':
                const [aExponential, bExponential] = equation.match(/-?\d+(\.\d+)?/g).map(Number);
                y = aExponential * Math.exp(bExponential * x);
                break;
        }
        curveData.push({ x, y });
    }

    return curveData;
}
