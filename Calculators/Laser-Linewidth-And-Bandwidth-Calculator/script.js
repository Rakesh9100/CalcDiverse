document.getElementById("calculate-btn").addEventListener("click", () => {
    const frequency = parseFloat(document.getElementById("frequency").value);
    const qualityFactor = parseFloat(document.getElementById("quality-factor").value);
    const gainBandwidth = parseFloat(document.getElementById("gain-bandwidth").value);
    const dampingFactor = parseFloat(document.getElementById("damping-factor").value);
    const resultDiv = document.getElementById("result");

    // Validate inputs
    if (
        isNaN(frequency) || isNaN(qualityFactor) ||
        isNaN(gainBandwidth) || isNaN(dampingFactor) ||
        frequency <= 0 || qualityFactor <= 0 || gainBandwidth <= 0
    ) {
        resultDiv.innerHTML = `<p style="color: red;">Please enter valid positive numbers for all fields.</p>`;
        return;
    }

    // Validate damping factor range
    if (dampingFactor < 0 || dampingFactor >= 1) {
        resultDiv.innerHTML = `<p style="color: red;">Damping Factor must be between 0 and 1 (exclusive).</p>`;
        return;
    }

    // Linewidth calculation
    const linewidth = frequency / qualityFactor;

    // Bandwidth calculation
    const bandwidth = gainBandwidth * (1 - dampingFactor);

    resultDiv.innerHTML = `
    <p>Linewidth: <strong>${linewidth.toFixed(2)} Hz</strong></p>
    <p>Bandwidth: <strong>${bandwidth.toFixed(2)} Hz</strong></p>
  `;
});