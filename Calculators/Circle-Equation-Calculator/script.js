function calculateCircle() {
    // Get the input values
    const d = parseFloat(document.getElementById('d').value);
    const e = parseFloat(document.getElementById('e').value);
    const f = parseFloat(document.getElementById('f').value);

    // Validate input
    if (isNaN(d) || isNaN(e) || isNaN(f)) {
        document.getElementById('result').innerHTML = `
            <p style="color: red;">Please enter valid numerical values for D, E, and F.</p>
        `;
        return;
    }

    // Calculate the center and radius
    const h = -d / 2;
    const k = -e / 2;
    const radiusSquared = h * h + k * k - f;

    // Display the result
    const resultDiv = document.getElementById('result');
    if (radiusSquared >= 0) {
        const radius = Math.sqrt(radiusSquared).toFixed(2);
        resultDiv.innerHTML = `
            <p><strong>Center:</strong> (${h.toFixed(2)}, ${k.toFixed(2)})</p>
            <p><strong>Radius:</strong> ${radius}</p>
        `;
    } else {
        resultDiv.innerHTML = `
            <p style="color: red;">Invalid equation. The radius squared is negative, which is not possible for a real circle.</p>
        `;
    }
}