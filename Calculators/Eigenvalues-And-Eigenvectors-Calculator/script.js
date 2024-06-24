function initializeMatrix() {
    const size = parseInt(document.getElementById('matrix-size').value);
    createMatrix(size, size);
}

function createMatrix(rows, cols) {
    const matrixContainer = document.getElementById('matrix-container');
    matrixContainer.innerHTML = '';
    matrixContainer.style.display = 'grid';
    matrixContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    matrixContainer.style.gridGap = '10px';
    matrixContainer.style.border = '1px solid #ccc';
    matrixContainer.style.padding = '10px';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'matrix-cell';
            input.id = `cell-${i}-${j}`;
            matrixContainer.appendChild(input);
        }
    }
}

function getMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const value = parseFloat(document.getElementById(`cell-${i}-${j}`).value);
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

function multiplyMatrix(A, B) {
    const rowsA = A.length, colsA = A[0].length, colsB = B[0].length;
    const result = Array(rowsA).fill(0).map(() => Array(colsB).fill(0));
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

function subtractMatrix(A, B) {
    return A.map((row, i) => row.map((val, j) => val - B[i][j]));
}

function identityMatrix(size) {
    const I = Array(size).fill(0).map(() => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
        I[i][i] = 1;
    }
    return I;
}

function calculateDeterminant(matrix) {
    const n = matrix.length;
    if (n === 1) return matrix[0][0];
    if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

    let determinant = 0;
    for (let i = 0; i < n; i++) {
        determinant += ((i % 2 === 0 ? 1 : -1) * matrix[0][i] * calculateDeterminant(minor(matrix, 0, i)));
    }
    return determinant;
}

function minor(matrix, row, col) {
    return matrix
        .filter((_, i) => i !== row)
        .map(row => row.filter((_, j) => j !== col));
}

function powerIteration(A, numIterations = 1000, tolerance = 1e-6) {
    const n = A.length;
    let b_k = Array(n).fill(1);
    for (let i = 0; i < numIterations; i++) {
        let b_k1 = multiplyMatrix([b_k], A)[0];
        const b_k1_norm = Math.sqrt(b_k1.reduce((sum, val) => sum + val * val, 0));
        b_k1 = b_k1.map(x => x / b_k1_norm);

        if (Math.abs(b_k1.reduce((sum, val, idx) => sum + Math.abs(val - b_k[idx]), 0)) < tolerance) {
            break;
        }
        b_k = b_k1;
    }
    const eigenvalue = multiplyMatrix([b_k], A)[0].reduce((sum, val, idx) => sum + val * b_k[idx], 0);
    return { eigenvalue, eigenvector: b_k };
}

function calculate() {
    const size = parseInt(document.getElementById('matrix-size').value);
    const matrix = getMatrix(size, size);
    const result = powerIteration(matrix);
    const outputElement = document.getElementById('output');
    outputElement.innerText = `Eigenvalue: ${result.eigenvalue}\nEigenvector: [${result.eigenvector.join(', ')}]`;

    if (outputElement.innerText.trim() !== "") {
        outputElement.classList.add('has-content');
    } else {
        outputElement.classList.remove('has-content');
    }
}

// Initialize with a default 2x2 matrix
document.addEventListener('DOMContentLoaded', () => {
    initializeMatrix();
});
