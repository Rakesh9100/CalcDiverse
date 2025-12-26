function calculatePolynomialRegression() {
    const degree = parseInt(document.getElementById("degree").value);
    const xValues = document.getElementById("xValues").value.split(",").map(Number);
    const yValues = document.getElementById("yValues").value.split(",").map(Number);

    if (!xValues.length || !yValues.length) {
        alert("Please enter X and Y values.");
        return;
    }

    if (xValues.length !== yValues.length) {
        alert("X and Y values must have the same length.");
        return;
    }

    if (xValues.some(isNaN) || yValues.some(isNaN)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (xValues.length <= degree) {
        alert("Number of data points must be greater than the polynomial degree.");
        return;
    }

    const coefficients = polynomialRegression(xValues, yValues, degree);

    let equation = "y = ";
    coefficients.forEach((coef, i) => {
        const power = degree - i;

        if (power > 1) {
            equation += `${coef.toFixed(2)}x<sup>${power}</sup>`;
        } else if (power === 1) {
            equation += `${coef.toFixed(2)}x`;
        } else {
            equation += `${coef.toFixed(2)}`;
        }

        if (i !== coefficients.length - 1) equation += " + ";
    });

    document.getElementById("equation").innerHTML = equation;

    drawGraph(xValues, yValues, coefficients);
}

// Least Squares Polynomial Regression
function polynomialRegression(x, y, degree) {
    const X = [];
    const Y = y;

    for (let i = 0; i < x.length; i++) {
        const row = [];
        for (let j = degree; j >= 0; j--) {
            row.push(Math.pow(x[i], j));
        }
        X.push(row);
    }

    const XT = transpose(X);
    const XTX = multiply(XT, X);
    const XTY = multiply(XT, Y);

    return gaussianElimination(XTX, XTY);
}

function drawGraph(xValues, yValues, coefficients) {
    const ctx = document.getElementById("regressionChart").getContext("2d");

    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const curveX = [];
    const curveY = [];

    for (let x = minX; x <= maxX; x += 0.1) {
        let y = 0;
        coefficients.forEach((coef, i) => {
            y += coef * Math.pow(x, coefficients.length - 1 - i);
        });
        curveX.push(x);
        curveY.push(y);
    }

    new Chart(ctx, {
        type: "scatter",
        data: {
            datasets: [{
                    label: "Data Points",
                    data: xValues.map((x, i) => ({
                        x,
                        y: yValues[i]
                    })),
                    backgroundColor: "rgba(255, 99, 132, 0.8)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    type: "scatter"
                },
                {
                    label: "Polynomial Curve",
                    data: curveX.map((x, i) => ({
                        x,
                        y: curveY[i]
                    })),
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 3,
                    type: "line",
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "linear",
                    title: {
                        display: true,
                        text: "X Values",
                        font: {
                            size: 22,
                            weight: "bold"
                        }
                    },
                    ticks: {
                        font: {
                            size: 20
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Y Values",
                        font: {
                            size: 20,
                            weight: "bold"
                        }
                    },
                    ticks: {
                        font: {
                            size: 22
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20,
                            weight: "bold"
                        }
                    }
                }
            }
        }
    });
}

// Matrix helpers
function transpose(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

function multiply(A, B) {
    if (Array.isArray(B[0])) {
        return A.map(row =>
            B[0].map((_, j) =>
                row.reduce((sum, val, i) => sum + val * B[i][j], 0)
            )
        );
    } else {
        return A.map(row =>
            row.reduce((sum, val, i) => sum + val * B[i], 0)
        );
    }
}

function gaussianElimination(A, b) {
    const n = b.length;

    for (let i = 0; i < n; i++) {
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(A[k][i]) > Math.abs(A[maxRow][i])) {
                maxRow = k;
            }
        }

        [A[i], A[maxRow]] = [A[maxRow], A[i]];
        [b[i], b[maxRow]] = [b[maxRow], b[i]];

        for (let k = i + 1; k < n; k++) {
            const factor = A[k][i] / A[i][i];
            for (let j = i; j < n; j++) {
                A[k][j] -= factor * A[i][j];
            }
            b[k] -= factor * b[i];
        }
    }

    const x = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        x[i] = b[i] / A[i][i];
        for (let k = i - 1; k >= 0; k--) {
            b[k] -= A[k][i] * x[i];
        }
    }

    return x;
}