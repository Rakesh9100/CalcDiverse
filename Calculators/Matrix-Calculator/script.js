document.addEventListener("DOMContentLoaded", () => {
    createMatrixInputs();
});

function createMatrixInputs() {
    const matrixARows = parseInt(document.getElementById("matrixARows").value, 10);
    const matrixACols = parseInt(document.getElementById("matrixACols").value, 10);
    const matrixBRows = parseInt(document.getElementById("matrixBRows").value, 10);
    const matrixBCols = parseInt(document.getElementById("matrixBCols").value, 10);

    const matrixAContainer = document.getElementById("matrixA");
    const matrixBContainer = document.getElementById("matrixB");

    matrixAContainer.innerHTML = generateMatrixInputs(matrixARows, matrixACols, "matrixA");
    matrixBContainer.innerHTML = generateMatrixInputs(matrixBRows, matrixBCols, "matrixB");
}

function generateMatrixInputs(rows, cols, matrixId) {
    let matrixInputs = "";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrixInputs += `<input type="number" onKeyDown="handleKeyPress(event)" id="${matrixId}_${i}_${j}" />`;
        }
        matrixInputs += "<br>";
    }

    return matrixInputs;
}

function getMatrixValues(matrixId, rows, cols) {
    const matrixValues = [];

    for (let i = 0; i < rows; i++) {
        matrixValues[i] = [];
        for (let j = 0; j < cols; j++) {
            const inputId = `${matrixId}_${i}_${j}`;
            matrixValues[i][j] = parseFloat(document.getElementById(inputId).value) || 0;
        }
    }

    return matrixValues;
}

function setResult(resultMatrix) {
    const resultContainer = document.getElementById("result");

    if (Array.isArray(resultMatrix)) {
        const hasNaN = resultMatrix.some(row => row.some(value => isNaN(value)));

        if (hasNaN) {
            resultContainer.innerHTML = "Error: Result contains NaN values.";
        } else {
            resultContainer.innerHTML = resultMatrix.map(row => row.join(" ")).join("<br>");
        }
    } else {
        resultContainer.innerHTML = resultMatrix;
    }
}

function calculate(operation) {
    const matrixARows = parseInt(document.getElementById("matrixARows").value, 10);
    const matrixACols = parseInt(document.getElementById("matrixACols").value, 10);
    const matrixBRows = parseInt(document.getElementById("matrixBRows").value, 10);
    const matrixBCols = parseInt(document.getElementById("matrixBCols").value, 10);

    const matrixA = getMatrixValues("matrixA", matrixARows, matrixACols);
    let matrixB;
    let result;

    try {
        switch (operation) {
            case "add":
                if (matrixARows !== matrixBRows || matrixACols !== matrixBCols) {
                    throw new Error("Matrices must have the same dimensions for addition.");
                }
                matrixB = getMatrixValues("matrixB", matrixBRows, matrixBCols);
                result = math.add(matrixA, matrixB);
                break;
            case "subtract":
                if (matrixARows !== matrixBRows || matrixACols !== matrixBCols) {
                    throw new Error("Matrices must have the same dimensions for subtraction.");
                }
                matrixB = getMatrixValues("matrixB", matrixBRows, matrixBCols);
                result = math.subtract(matrixA, matrixB);
                break;
            case "multiply":
                if (matrixACols !== matrixBRows) {
                    throw new Error("Number of columns in Matrix A must equal number of rows in Matrix B for multiplication.");
                }
                matrixB = getMatrixValues("matrixB", matrixBRows, matrixBCols);
                result = math.multiply(matrixA, matrixB);
                break;
            case "determinant":
                if (matrixARows !== matrixACols) {
                    throw new Error("Matrix must be square to calculate determinant.");
                }
                result = math.det(matrixA);
                break;
            case "inverse":
                if (matrixARows !== matrixACols) {
                    throw new Error("Matrix must be square to calculate inverse.");
                }
                result = math.inv(matrixA);
                break;
            case "transpose":
                result = math.transpose(matrixA);
                break;
            case "rank":
                result = calculateRank(matrixA);
                break;
            case "power":
                if (matrixARows !== matrixACols) {
                    throw new Error("Matrix must be square to raise to a power.");
                }
                const power = parseInt(document.getElementById("matrixPower").value, 10);
                result = math.pow(matrixA, power);
                break;
            default:
                throw new Error("Invalid operation.");
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

    const matrixClone = matrix.map(row => [...row]); // Clone the matrix to avoid modifying the original

    for (let row = 0; row < rank; row++) {
        if (matrixClone[row][row] !== 0) {
            for (let col = 0; col < rowCount; col++) {
                if (col !== row) {
                    const multiplier = matrixClone[col][row] / matrixClone[row][row];
                    for (let i = 0; i < rank; i++) {
                        matrixClone[col][i] -= multiplier * matrixClone[row][i];
                    }
                }
            }
        } else {
            let reduce = true;
            for (let i = row + 1; i < rowCount; i++) {
                if (matrixClone[i][row] !== 0) {
                    [matrixClone[row], matrixClone[i]] = [matrixClone[i], matrixClone[row]];
                    reduce = false;
                    break;
                }
            }
            if (reduce) {
                rank--;
                for (let i = 0; i < rowCount; i++) {
                    matrixClone[i][row] = matrixClone[i][rank];
                }
            }
            row--;
        }
    }
    return rank;
}

function resetForm() {
    const matrixInputs = document.querySelectorAll('input[type="number"]');
    matrixInputs.forEach(input => (input.value = ''));

    document.getElementById("matrixARows").value = "1";
    document.getElementById("matrixACols").value = "1";
    document.getElementById("matrixBRows").value = "1";
    document.getElementById("matrixBCols").value = "1";

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
