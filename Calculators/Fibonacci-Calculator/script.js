// Initialising variables
const input = document.querySelector("input");
const output = document.getElementById("show-output");

// Take input from the user
input.addEventListener("input", () => {
    if (input.value !== "") {
        let num = parseInt(input.value);
        if (num > 100) {
            output.style.color = "red";
            output.textContent = "Please Enter Number less than 100.";
        } else {
            output.style.color = "blue";
            let ans = fibonacci(num);
            output.textContent = `The ${num}-th Fibonacci Number is: ${ans}`;
        }
    } else {
        output.textContent = "";
    }
});

function matrixMultiply(a, b) {
    const result = [
        [0, 0],
        [0, 0],
    ];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

function matrixPower(matrix, n) {
    if (n === 1) {
        return matrix;
    }

    if (n % 2 === 0) {
        const halfPower = matrixPower(matrix, n / 2);
        return matrixMultiply(halfPower, halfPower);
    } else {
        const halfPower = matrixPower(matrix, (n - 1) / 2);
        const squaredHalfPower = matrixMultiply(halfPower, halfPower);
        return matrixMultiply(matrix, squaredHalfPower);
    }
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    const baseMatrix = [
        [1, 1],
        [1, 0],
    ];
    const resultMatrix = matrixPower(baseMatrix, n - 1);

    return resultMatrix[0][0];
}
