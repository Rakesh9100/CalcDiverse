document.addEventListener("DOMContentLoaded", () => {
    createMatrixInputs();
});

function createMatrixInputs() {
    const matrixSize = parseInt(document.getElementById("matrixSize").value, 10);
    const matrixAContainer = document.getElementById("matrixA");
    const matrixBContainer = document.getElementById("matrixB");

    matrixAContainer.innerHTML = generateMatrixInputs(matrixSize, "matrixA");
    matrixBContainer.innerHTML = generateMatrixInputs(matrixSize, "matrixB");

    const matrixSize2 = parseInt(document.getElementById("matrixSize").value, 10);
    const matrixBContainer2 = document.getElementById("matrixB");

    matrixBContainer.innerHTML = generateMatrixInputs(matrixSize, "matrixB");
}


function generateMatrixInputs(size, matrixId) {
    let matrixInputs = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrixInputs += `<input type="number" onKeyDown="handleKeyPress(event)" id="${matrixId}_${i}_${j}" />`;
        }
        matrixInputs += "<br>";
    }

    return matrixInputs;
}

function getMatrixValues(matrixId) {
    const matrixSize = parseInt(document.getElementById("matrixSize").value, 10);
    const matrixValues = [];

    for (let i = 0; i < matrixSize; i++) {
        matrixValues[i] = [];
        for (let j = 0; j < matrixSize; j++) {
            const inputId = `${matrixId}_${i}_${j}`;
            matrixValues[i][j] = parseFloat(document.getElementById(inputId).value) || 0;
        }
    }

    return matrixValues;
}

function setResult(resultMatrix) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = Array.isArray(resultMatrix)
        ? resultMatrix.map(row => row.join(" ")).join("<br>")
        : resultMatrix;
}

function calculate(operation) {
    const matrixSize = parseInt(document.getElementById("matrixSize").value, 10);
    const matrixA = getMatrixValues("matrixA");
    let matrixB;  // For determinant, inverse, and transpose operations
    let result;

    try {
        switch (operation) {
            case "add":
            case "subtract":
            case "multiply":
                matrixB = getMatrixValues("matrixB");
                break;
            case "determinant":
            case "inverse":
            case "transpose":
            case "rank":
            case "power":
                document.getElementById("matrixB").innerHTML = "";  // Disable Matrix B input
                break;
            default:
                throw new Error("Invalid operation");
        }

        switch (operation) {
            case "add":
                result = math.add(matrixA, matrixB);
                break;
            case "subtract":
                result = math.subtract(matrixA, matrixB);
                break;
            case "multiply":
                result = math.multiply(matrixA, matrixB);
                break;
            case "determinant":
                if (matrixSize !== 2 && matrixSize !== 3 && matrixSize !== 4) {
                    throw new Error("Determinant calculation is supported only for 2x2, 3x3, and 4x4 matrices.");
                }
                result = math.det(matrixA);
                break;
            case "inverse":
                result = math.inv(matrixA);
                break;
            case "transpose":
                result = math.transpose(matrixA);
                break;
            case "rank":
                result = calculateRank(matrixA);
                break;
            case "power":
                const power = parseInt(document.getElementById("matrixPower").value, 10);
                if (matrixSize !== matrixA[0].length) {
                    throw new Error("Matrix must be square to raise to a power.");
                }
                result = calculatePower(matrixA, power);
                break;
            default:
                throw new Error("Invalid operation");
        }

        setResult(result);
    } catch (error) {
        setResult("Error: " + error.message);
    }
}

function calculateRank(matrix) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    let rank = colCount;

    for (let row = 0; row < rank; row++) {
        if (matrix[row][row] !== 0) {
            for (let col = 0; col < rowCount; col++) {
                if (col !== row) {
                    const multiplier = matrix[col][row] / matrix[row][row];
                    for (let i = 0; i < rank; i++) {
                        matrix[col][i] -= multiplier * matrix[row][i];
                    }
                }
            }
        } else {
            let reduce = true;
            for (let i = row + 1; i < rowCount; i++) {
                if (matrix[i][row] !== 0) {
                    [matrix[row], matrix[i]] = [matrix[i], matrix[row]];
                    reduce = false;
                    break;
                }
            }
            if (reduce) {
                rank--;
                for (let i = 0; i < rowCount; i++) {
                    matrix[i][row] = matrix[i][rank];
                }
            }
            row--;
        }
    }
    return rank;
}

// Power calculation function

function calculatePower(matrix, power) {
    if (power < 1) throw new Error("Power must be a positive integer.");
    let result = matrix;

    for (let i = 1; i < power; i++) {
        result = math.multiply(result, matrix);
    }
    return result;
}

function resetForm() {
    const matrixInputs = document.querySelectorAll('input[type="number"]');
    matrixInputs.forEach(input => (input.value = ''));

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = '';
    createMatrixInputs();
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        const currentInput = event.target;
        const inputs = document.querySelectorAll('input');
        const currentIndex = Array.from(inputs).indexOf(currentInput);

        const nextIndex = (currentIndex + 1) % inputs.length;
        inputs[nextIndex].focus();

        event.preventDefault();
    }
}

function setResult(resultMatrix) {
    const resultContainer = document.getElementById("result");

    if (Array.isArray(resultMatrix)) {
        // Check for NaN values in the result matrix
        const hasNaN = resultMatrix.some(row => row.some(value => isNaN(value)));

        if (hasNaN) {
            resultContainer.innerHTML = "Error: Result contains NaN values.";
        } else {
            resultContainer.innerHTML = resultMatrix.map(row => row.join(" ")).join("<br>");
        }
    } else if (isNaN(resultMatrix)) {
        resultContainer.innerHTML = "Error: Result is NaN.";
    } else {
        resultContainer.innerHTML = resultMatrix;
    }
}
