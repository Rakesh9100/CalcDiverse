function calculateBellNumber() {
    const n = parseInt(document.getElementById("numberInput").value);
    if (isNaN(n) || n < 0 || n >= 200) {
        alert("Please enter a valid whole number less than 200.");
        return;
    }

    const bell = bellNumber(n);
    document.getElementById("bellNumberResult").textContent = `nth Bell number for n = ${n} is ${bell}`;
}

function bellNumber(n) {
    // Base case
    if (n === 0) return 1;

    // Create a 2D array to store values of Bell numbers
    const bellTable = Array.from({
        length: n + 1
    }, () => Array(n + 1).fill(0));

    // Initialize the first Bell number
    bellTable[0][0] = 1;

    // Fill the table using dynamic programming
    for (let i = 1; i <= n; i++) {
        // Explicitly put the previous Bell number in the first column
        bellTable[i][0] = bellTable[i - 1][i - 1];

        // Fill the rest of the table
        for (let j = 1; j <= i; j++) {
            bellTable[i][j] = bellTable[i - 1][j - 1] + bellTable[i][j - 1];
        }
    }

    return bellTable[n][0];
}