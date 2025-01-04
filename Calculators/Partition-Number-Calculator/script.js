// DOM Elements
const form = document.getElementById("partitionForm");
const numberInput = document.getElementById("numberInput");
const resultDiv = document.getElementById("result");
const errorMessage = document.getElementById("errorMessage");
const spinner = document.getElementById("spinner");
const calculateButton = document.getElementById("calculateButton");

// Partition Calculation Function
function calculatePartition(num) {
    const partitions = Array(num + 1).fill(0);
    partitions[0] = 1;

    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= num; j++) {
            partitions[j] += partitions[j - i];
        }
    }
    return partitions[num];
}

// Form Submission Event
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = numberInput.value.trim();
    const num = parseInt(input, 10);

    // Validation
    if (isNaN(num) || num < 0) {
        errorMessage.textContent = "⚠️ Please enter a valid non-negative number.";
        resultDiv.textContent = "";
        return;
    }

    errorMessage.textContent = "";
    resultDiv.textContent = "";
    spinner.classList.remove("hidden");
    calculateButton.disabled = true;

    // Simulate Computation
    setTimeout(() => {
        const result = calculatePartition(num);
        resultDiv.innerHTML = `🎉 Partition number for <strong>${num}</strong> is: <strong>${result}</strong>`;
        spinner.classList.add("hidden");
        calculateButton.disabled = false;
    }, Math.min(500 + num * 5, 2000));
});