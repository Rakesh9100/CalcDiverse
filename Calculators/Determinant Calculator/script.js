// Event listener for the "Generate Matrix" button
document.getElementById("generateMatrixButton").addEventListener("click", generateMatrixTable);

// Event listener for the "Calculate Determinant" button
document.getElementById("calculateDeterminantButton").addEventListener("click", calculateDeterminant);

// Function to generate the matrix table
function generateMatrixTable() {
    var size = parseInt(document.getElementById("sizeInput").value);
    var matrixTableDiv = document.getElementById("matrixTable");
    matrixTableDiv.innerHTML = "";

    var table = document.createElement("table");
    table.id = "matrixInputTable";

    for (var i = 0; i < size; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < size; j++) {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.type = "number";
            input.className = "matrixInput";
            input.id = "matrixInput_" + i + "_" + j;
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    matrixTableDiv.appendChild(table);
}

// Function to extract matrix from the table
function getMatrixFromTable(size) {
    var matrix = [];
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            var inputValue = parseFloat(document.getElementById("matrixInput_" + i + "_" + j).value);
            row.push(inputValue);
        }
        matrix.push(row);
    }
    return matrix;
}

// Function to calculate the determinant
function calculateDeterminant() {
    var size = parseInt(document.getElementById("sizeInput").value);
    var matrix = getMatrixFromTable(size);

    var determinant = getDeterminant(matrix);
    document.getElementById("result").innerHTML = "<p>Determinant: " + determinant + "</p>";
}

// Function to calculate the determinant of a matrix
function getDeterminant(matrix) {
    var n = matrix.length;
    if (n === 1) {
        return matrix[0][0];
    } else if (n === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    var det = 0;
    for (var j = 0; j < n; j++) {
        var minor = [];
        for (var k = 1; k < n; k++) {
            minor.push(matrix[k].slice(0, j).concat(matrix[k].slice(j + 1)));
        }
        det += matrix[0][j] * Math.pow(-1, j) * getDeterminant(minor);
    }

    return det;
}
