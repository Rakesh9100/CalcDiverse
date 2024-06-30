document.addEventListener("DOMContentLoaded", () => {
    createMatrixInputs();
});

function createMatrixInputs() {
    const rows = parseInt(document.getElementById("matrixRows").value, 10);
    const cols = parseInt(document.getElementById("matrixCols").value, 10);
    const matrixContainer = document.getElementById("matrixInputs");

    matrixContainer.innerHTML = generateMatrixInputs(rows, cols);
}

function generateMatrixInputs(rows, cols) {
    let matrixInputs = '<div class="matrixRow"><div class="matrixCell"></div>';
    for (let j = 1; j < cols; j++) {
        matrixInputs += `<div class="matrixCell">X${j}</div>`;
    }
    matrixInputs += '<div class="matrixCell">b</div></div>';

    for (let i = 0; i < rows; i++) {
        matrixInputs += '<div class="matrixRow"><div class="matrixCell">' + (i + 1) + '</div>';
        for (let j = 0; j < cols-1; j++) {
            matrixInputs += `<div class="matrixCell"><input type="number" id="matrix_${i}_${j}" /></div>`;
        }
        matrixInputs += '<div class="matrixCell"><input type="number" id="matrix_' + i + '_b" /></div></div>';
    }

    return matrixInputs;
}

function getMatrixValues() {
    const rows = parseInt(document.getElementById("matrixRows").value, 10);
    const cols = parseInt(document.getElementById("matrixCols").value, 10);
    const matrixValues = [];

    for (let i = 0; i < rows; i++) {
        matrixValues[i] = [];
        for (let j = 0; j < cols-1; j++) {
            const inputId = `matrix_${i}_${j}`;
            matrixValues[i][j] = parseFloat(document.getElementById(inputId).value) || 0;
        }
        matrixValues[i][cols] = parseFloat(document.getElementById(`matrix_${i}_b`).value) || 0;
    }

    return matrixValues;
}

function displayResult(matrix) {
    const resultContainer = document.getElementById("result");
    const rows = matrix.length;
    const cols = matrix[0].length;
    let solutionSet = "Solution set:<br>";

    for (let i = 0; i < rows; i++) {
        if (i < cols - 1) {
            solutionSet += `x${i + 1} = ${matrix[i][cols - 1]} <br>`;
        }
    }
    for(let i=rows+1 ; i<cols-1 ; i++){
        solutionSet+=`x${i} = free <br> `;
    }

    resultContainer.innerHTML = solutionSet;
}

function calculate() {
    const matrix = getMatrixValues();
    console.log(matrix);
    const result = gaussJordanElimination(matrix);
    displayResult(result);
}

function resetForm() {
    const matrixInputs = document.querySelectorAll('input[type="number"]');
    matrixInputs.forEach(input => (input.value = ''));

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = '';
    createMatrixInputs();
}

function solve() {
    const matrix = getMatrixValues();
    const result = gaussJordanElimination(matrix);
    displayResult(result);
}

function gaussJordanElimination(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        // Make the diagonal contain all 1's
        const diagElement = matrix[i][i];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] /= diagElement;
        }

        // Make the other elements in the current column 0
        for (let k = 0; k < rows; k++) {
            if (k !== i) {
                const factor = matrix[k][i];
                for (let j = 0; j < cols; j++) {
                    matrix[k][j] -= factor * matrix[i][j];
                }
            }
        }
    }

    return matrix;
}

// function displayResult(matrix) {
//     const resultContainer = document.getElementById("result");
//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     let solutionSet = "Solution set:<br>";

//     for (let i = 0; i < rows; i++) {
//         if (i < cols - 1) {
//             solutionSet += `x${i + 1} = ${matrix[i][cols - 1]}<br>`;
//         }
//     }

//     resultContainer.innerHTML = solutionSet;
// }

