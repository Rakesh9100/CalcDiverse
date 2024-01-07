var order = 3;
function run(prop) {
    // getorder(prop);
    showDiv(prop);
}

function showDiv(prop) {
    var matrix = document.getElementsByClassName("matrix");
    var inputs = document.getElementsByTagName("input");
    var matrix3x3 = document.getElementById("MatrixRank3x3");
    var mulMat = document.getElementById("MatrixMul");
    var inverseMat = document.getElementById("matrixInverse");
    if (prop.value === "None") {
        document.getElementById("MatrixRank3x3").style.display = "none";
        document.getElementById("MatrixMul").style.display = "none";

    }
    if (prop.value === "MatrixRank" && order === 3) {
        matrix3x3.style.display = "block";
        mulMat.style.display = "none";
        inverseMat.style.display = "none";

    }
    if (prop.value === "MatrixMultiplication" && order === 3) {
        mulMat.style.display = "block";
        matrix3x3.style.display = "none";
        inverseMat.style.display = "none";

    }
    if (prop.value === "MatrixInverse" && order === 3) {
        matrix3x3.style.display = "none";
        mulMat.style.display = "none";
        inverseMat.style.display = "block";
    }
}

function calculateRank3x3() {
    let matrix = [];

    for (let i = 1; i <= 3; i++) {
        matrix.push([]);
        for (let j = 1; j <= 3; j++) {
            const inputValue = parseFloat(document.getElementById(`a${i}${j}`).value);
            if (isNaN(inputValue)) {
                document.getElementById("resultRank3x3").innerHTML = "Enter valid numeric elements.";
                return;
            }
            matrix[i - 1].push(inputValue);
        }
    }

    // Create a deep copy of the matrix
    let rowEchelonMatrix = matrix.map(row => [...row]);

    for (let i = 0; i < 3; i++) {
        let pivotRow = i;
        for (let j = i + 1; j < 3; j++) {
            if (Math.abs(rowEchelonMatrix[j][i]) > Math.abs(rowEchelonMatrix[pivotRow][i])) {
                pivotRow = j;
            }
        }

        if (pivotRow !== i) {
            [rowEchelonMatrix[i], rowEchelonMatrix[pivotRow]] = [rowEchelonMatrix[pivotRow], rowEchelonMatrix[i]];
        }

        for (let j = i + 1; j < 3; j++) {
            const factor = rowEchelonMatrix[j][i] / rowEchelonMatrix[i][i];
            for (let k = i; k < 3; k++) {
                rowEchelonMatrix[j][k] -= factor * rowEchelonMatrix[i][k];
            }
        }
    }

    let rank = 0;
    for (let i = 0; i < 3; i++) {
        let allZeros = true;
        for (let j = 0; j < 3; j++) {
            if (rowEchelonMatrix[i][j] !== 0) {
                allZeros = false;
                break;
            }
        }
        if (!allZeros) {
            rank++;
        }
    }

    document.getElementById("resultRank3x3").innerHTML = `Rank = ${rank}`;
}
function multiplyMatrices() {
    // Get values from input fields
    document.getElementById("resultMatrix").style.display = "block";
    let matrix1 = [
        [+document.getElementById('ma11').value, +document.getElementById('ma12').value, +document.getElementById('ma13').value],
        [+document.getElementById('ma21').value, +document.getElementById('ma22').value, +document.getElementById('ma23').value],
        [+document.getElementById('ma31').value, +document.getElementById('ma32').value, +document.getElementById('ma33').value]
    ];

    let matrix2 = [
        [+document.getElementById('Ma11').value, +document.getElementById('Ma12').value, +document.getElementById('Ma13').value],
        [+document.getElementById('Ma21').value, +document.getElementById('Ma22').value, +document.getElementById('Ma23').value],
        [+document.getElementById('Ma31').value, +document.getElementById('Ma32').value, +document.getElementById('Ma33').value]
    ];

    // Matrix multiplication logic
    let resultMatrix = [
        [],
        [],
        []
    ];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            resultMatrix[i][j] = 0;
            for (let k = 0; k < 3; k++) {
                resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    document.getElementById('result11').textContent = (`    ${resultMatrix[0][0]} `);
    document.getElementById('result12').textContent = (`    ${resultMatrix[0][1]} `);
    document.getElementById('result13').textContent = (`    ${resultMatrix[0][2]} `);

    document.getElementById('result21').textContent = (`    ${resultMatrix[1][0]} `);
    document.getElementById('result22').textContent = (`    ${resultMatrix[1][1]} `);
    document.getElementById('result23').textContent = (`    ${resultMatrix[1][2]} `);

    document.getElementById('result31').textContent = (`    ${resultMatrix[2][0]} `);
    document.getElementById('result32').textContent = (`    ${resultMatrix[2][1]} `);
    document.getElementById('result33').textContent = (`    ${resultMatrix[2][2]} `);

}

function calculateInverse() {
    // Get matrix elements from inputs
    document.getElementById("inverseMatrix").style.display = "block";
    const matrixElements = [
        [
            parseFloat(document.getElementById("Ia11").value),
            parseFloat(document.getElementById("Ia12").value),
            parseFloat(document.getElementById("Ia13").value)
        ],
        [
            parseFloat(document.getElementById("Ia21").value),
            parseFloat(document.getElementById("Ia22").value),
            parseFloat(document.getElementById("Ia23").value)
        ],
        [
            parseFloat(document.getElementById("Ia31").value),
            parseFloat(document.getElementById("Ia32").value),
            parseFloat(document.getElementById("Ia33").value)
        ]
    ];
    for (let i = 0; i < matrixElements.length; i++) {
        if (matrixElements[i] === NaN) {
            document.getElementById("Inresult").innerHTML = `Enter all elements correctly!`;
        }
    }
    // Calculate determinant
    const determinant = (matrixElements[0][0] * (matrixElements[1][1] * matrixElements[2][2] - matrixElements[1][2] * matrixElements[2][1])) -
        (matrixElements[0][1] * (matrixElements[1][0] * matrixElements[2][2] - matrixElements[1][2] * matrixElements[2][0])) +
        (matrixElements[0][2] * (matrixElements[1][0] * matrixElements[2][1] - matrixElements[1][1] * matrixElements[2][0]));

    // Check if determinant is 0 (non-invertible)
    if (determinant === 0) {
        // alert("Error: The matrix is not invertible.");
        document.getElementById("Inresult").innerHTML = `Matrix Is Invertible! `;
        // return;
    }

    // Calculate cofactor matrix
    const cofactorMatrix = [
        [
            (matrixElements[1][1] * matrixElements[2][2] - matrixElements[1][2] * matrixElements[2][1]) / determinant,
            -(matrixElements[0][1] * matrixElements[2][2] - matrixElements[0][2] * matrixElements[2][1]) / determinant,
            (matrixElements[0][1] * matrixElements[1][2] - matrixElements[0][2] * matrixElements[1][1]) / determinant
        ],
        [
            -(matrixElements[1][0] * matrixElements[2][2] - matrixElements[1][2] * matrixElements[2][0]) / determinant,
            (matrixElements[0][0] * matrixElements[2][2] - matrixElements[0][2] * matrixElements[2][0]) / determinant,
            -(matrixElements[0][0] * matrixElements[1][2] - matrixElements[0][2] * matrixElements[1][0]) / determinant
        ],
        [
            (matrixElements[1][0] * matrixElements[2][1] - matrixElements[1][1] * matrixElements[2][0]) / determinant,
            -(matrixElements[0][0] * matrixElements[2][1] - matrixElements[0][1] * matrixElements[2][0]) / determinant,
            (matrixElements[0][0] * matrixElements[1][1] - matrixElements[0][1] * matrixElements[1][0]) / determinant
        ]
    ];


    const inverseMatrix = cofactorMatrix;

    const resultSpans = [
        document.getElementById("resultI11"),
        document.getElementById("resultI12"),
        document.getElementById("resultI13"),
        document.getElementById("resultI21"),
        document.getElementById("resultI22"),
        document.getElementById("resultI23"),
        document.getElementById("resultI31"),
        document.getElementById("resultI32"),
        document.getElementById("resultI33")
    ];

    let i = 0;  // Index for accessing resultSpans
    inverseMatrix.forEach((row, rowIndex) => {
        row.forEach((element, colIndex) => {
            resultSpans[i++].textContent = Math.round(element); // Update existing span content
        });
    });
}
