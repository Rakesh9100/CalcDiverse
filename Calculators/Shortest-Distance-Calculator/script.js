function calculate() {
    const output = document.getElementById("output");

    // Parse inputs safely
    const a = parseFloat(document.getElementById("a").value.trim());
    const b = parseFloat(document.getElementById("b").value.trim());
    const c = parseFloat(document.getElementById("c").value.trim());
    const d = parseFloat(document.getElementById("d").value.trim());
    const p = parseFloat(document.getElementById("p").value.trim());
    const q = parseFloat(document.getElementById("q").value.trim());
    const r = parseFloat(document.getElementById("r").value.trim());

    // Check if any input is NaN
    if ([a, b, c, d, p, q, r].some(val => isNaN(val))) {
        output.innerText = "⚠️ Please enter valid numeric values in all fields.";
        output.style.color = "red";
        return;
    }

    // Prevent division by zero (invalid plane)
    const denominator = Math.sqrt(a * a + b * b + c * c);
    if (denominator === 0) {
        output.innerText = "❌ Invalid plane: a, b, and c cannot all be zero.";
        output.style.color = "red";
        return;
    }

    // Calculate shortest distance
    const numerator = Math.abs((a * p + b * q + c * r + d)); // Use +d because standard form is ax + by + cz + d = 0
    const result = numerator / denominator;

    output.innerText = `✅ Shortest Distance is ${result.toFixed(3)}`;
    output.style.color = "green";
}

function clearFields() {
    // Clear only input fields
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("d").value = "";
    document.getElementById("p").value = "";
    document.getElementById("q").value = "";
    document.getElementById("r").value = "";
    document.getElementById("output").innerText = "";
}

function resetAll() {
    // Reloads the entire page
    location.reload();
}