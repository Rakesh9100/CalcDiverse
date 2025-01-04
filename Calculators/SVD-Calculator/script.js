document.getElementById('calculate-btn').addEventListener('click', calculateSVD);

function calculateSVD() {
    const matrixInput = document.getElementById('matrix-input').value.trim();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    try {
        // Parse matrix input
        const rows = matrixInput.split(';').map(row => row.split(',').map(Number));
        if (!isSquareMatrix(rows)) {
            throw new Error('Input must be a square matrix.');
        }

        // Perform SVD using numeric.js
        const {
            svd
        } = numeric;
        const result = svd(rows);

        // Extract U, S, V
        let U = result.U.map(row => Array.isArray(row) ? row : [row]);
        const S = Array.isArray(result.S) ? result.S : [
            [result.S]
        ];
        let V = result.V.map(row => Array.isArray(row) ? row : [row]);

        // Correct sign ambiguity
        [U, V] = correctSignAmbiguity(U, V);

        // Display results
        resultsContainer.innerHTML = `
      <p><strong>U Matrix:</strong><br>${formatMatrix(U)}</p>
      <p><strong>S Matrix:</strong><br>${formatMatrix(diagonalize(S))}</p>
      <p><strong>V Matrix:</strong><br>${formatMatrix(V)}</p>
    `;
    } catch (error) {
        resultsContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

function isSquareMatrix(matrix) {
    return matrix.every(row => row.length === matrix.length);
}

function formatMatrix(matrix) {
    return matrix.map(row => `[${row.join(', ')}]`).join('<br>');
}

// Converts a 1D array into a diagonal matrix (2D array)
function diagonalize(array) {
    const size = array.length;
    const diagMatrix = Array.from({
            length: size
        }, (_, i) =>
        Array.from({
            length: size
        }, (_, j) => (i === j ? array[i] : 0))
    );
    return diagMatrix;
}

// Corrects the sign ambiguity in U and V matrices
function correctSignAmbiguity(U, V) {
    const correctedU = U.map((column, colIndex) => {
        if (column[0] < 0) {
            // Flip signs of column in U and row in V
            column = column.map(value => -value);
            V[colIndex] = V[colIndex].map(value => -value);
        }
        return column;
    });
    return [correctedU, V];
}