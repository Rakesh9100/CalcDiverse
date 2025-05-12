function resetAll() {
    // Reloads the entire page
    location.reload();
}

function clearFields() {
    // Clear only input fields
    document.getElementById("c").value = "";
    document.getElementById("r").value = "";
    document.getElementById("output").innerText = "";
}

function calculate() {
    const output = document.getElementById("output");

    // Parse inputs safely
    let r = parseInt(document.getElementById("r").value);
    let c = parseInt(document.getElementById("c").value);

    // Check if any input is NaN
    if ([c, r].some(val => isNaN(val))) {
        output.innerText = "⚠️ Please enter valid numeric values in all fields.";
        output.style.color = "red";
        return;
    }

    // Calculate number of squares
    let result = 0;
    for (let i = 1; i <= Math.min(r, c); i++) {
        result += (r - i + 1) * (c - i + 1);
    }

    output.innerText = `✅ Number of squares are ${result}`;
    output.style.color = "green";
}