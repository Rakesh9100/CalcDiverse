function generateMatrix() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const matrixContainer = document.getElementById('matrixContainer');
    matrixContainer.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < columns; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `matrix_${i}_${j}`;
            input.required = true;
            row.appendChild(input);
        }
        matrixContainer.appendChild(row);
    }

    document.getElementById('solveButton').style.display = 'block';
}

function resetMatrix() {
    document.getElementById('matrixForm').reset();
    document.getElementById('matrixContainer').innerHTML = '';
    document.getElementById('resultContainer').innerHTML = '';
    document.getElementById('solveButton').style.display = 'none';
}

function solveMatrix() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = parseFloat(document.getElementById(`matrix_${i}_${j}`).value);
        }
    }

    const result = gaussJordan(matrix);
    displayResult(result);
}

function gaussJordan(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        let maxEl = Math.abs(matrix[i][i]);
        let maxRow = i;
        for (let k = i + 1; k < rows; k++) {
            if (Math.abs(matrix[k][i]) > maxEl) {
                maxEl = Math.abs(matrix[k][i]);
                maxRow = k;
            }
        }

        for (let k = i; k < columns; k++) {
            let tmp = matrix[maxRow][k];
            matrix[maxRow][k] = matrix[i][k];
            matrix[i][k] = tmp;
        }

        for (let k = i + 1; k < rows; k++) {
            let c = -matrix[k][i] / matrix[i][i];
            for (let j = i; j < columns; j++) {
                if (i === j) {
                    matrix[k][j] = 0;
                } else {
                    matrix[k][j] += c * matrix[i][j];
                }
            }
        }
    }

    for (let i = rows - 1; i >= 0; i--) {
        for (let k = i - 1; k >= 0; k--) {
            let c = -matrix[k][i] / matrix[i][i];
            for (let j = 0; j < columns; j++) {
                if (i === j) {
                    matrix[k][j] = 0;
                } else {
                    matrix[k][j] += c * matrix[i][j];
                }
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        let c = matrix[i][i];
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = matrix[i][j] / c;
        }
    }

    return matrix;
}

function displayResult(matrix) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '<h2>Result:</h2>';
    matrix.forEach(row => {
        const rowDiv = document.createElement('div');
        row.forEach(value => {
            const span = document.createElement('span');
            span.textContent = `${value.toFixed(2)} `;
            rowDiv.appendChild(span);
        });
        resultContainer.appendChild(rowDiv);
    });

    displaySolutions(matrix);
}

function displaySolutions(matrix) {
    const resultContainer = document.getElementById('resultContainer');
    const rows = matrix.length;
    const columns = matrix[0].length;
    let solutions = [];

    for (let i = 0; i < rows; i++) {
        let isZeroRow = true;
        for (let j = 0; j < columns - 1; j++) {
            if (matrix[i][j] !== 0) {
                isZeroRow = false;
                break;
            }
        }
        if (isZeroRow && matrix[i][columns - 1] !== 0) {
            resultContainer.innerHTML += '<p>No solution exists.</p>';
            return;
        }
    }

    for (let i = 0; i < columns - 1; i++) {
        solutions[i] = 'Free variable';
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns - 1; j++) {
            if (matrix[i][j] === 1) {
                solutions[j] = matrix[i][columns - 1].toFixed(3);
                break;
            }
        }
    }

    resultContainer.innerHTML += '<h2>Solutions:</h2>';
    solutions.forEach((solution, index) => {
        const solutionDiv = document.createElement('div');
        solutionDiv.textContent = `x${index + 1} = ${solution}`;
        resultContainer.appendChild(solutionDiv);
    });
}

function fraction(num) {
    let str = num.toString();
    if (str.includes('.')) {
        let len = str.split('.')[1].length;
        let denominator = Math.pow(10, len);
        let numerator = num * denominator;
        let gcd = getGCD(numerator, denominator);
        return `${numerator / gcd}/${denominator / gcd}`;
    }
    return num.toString();
}

function getGCD(a, b) {
    if (!b) {
        return a;
    }
    return getGCD(b, a % b);
}
