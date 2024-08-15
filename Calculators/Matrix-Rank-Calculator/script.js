function generateMatrixInputs() {
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);
    const matrixContainer = document.getElementById('matrix-container');
    
    matrixContainer.innerHTML = ''; // Clear previous inputs

    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        for (let j = 0; j < columns; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.dataset.row = i;
            input.dataset.column = j;
            rowDiv.appendChild(input);
        }
        matrixContainer.appendChild(rowDiv);
    }
}

function calculateRank() {
    const inputs = document.querySelectorAll('#matrix-container input');
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);
    const matrix = Array.from({ length: rows }, () => Array(columns).fill(0));

    inputs.forEach(input => {
        const row = parseInt(input.dataset.row);
        const column = parseInt(input.dataset.column);
        matrix[row][column] = parseFloat(input.value);
    });

    const rank = getMatrixRank(matrix);
    document.getElementById('result').textContent = `The rank of the matrix is: ${rank}`;
}

function getMatrixRank(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let rank = 0;

    const mat = matrix.map(row => [...row]); // Create a copy of the matrix

    for (let i = 0; i < m; i++) {
        let maxRow = i;
        for (let k = i + 1; k < m; k++) {
            if (Math.abs(mat[k][i]) > Math.abs(mat[maxRow][i])) {
                maxRow = k;
            }
        }

        if (mat[maxRow][i] === 0) {
            continue;
        }

        [mat[i], mat[maxRow]] = [mat[maxRow], mat[i]];

        for (let k = i + 1; k < m; k++) {
            const factor = mat[k][i] / mat[i][i];
            for (let j = i; j < n; j++) {
                mat[k][j] -= factor * mat[i][j];
            }
        }

        rank++;
    }

    return rank;
}
