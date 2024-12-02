document.getElementById("latticeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const charge1 = parseFloat(document.getElementById("charge1").value);
    const charge2 = parseFloat(document.getElementById("charge2").value);
    const distance = parseFloat(document.getElementById("distance").value);

    // Constant (k) in the Lattice Energy formula (k = 8.99 x 10^9 Nm^2/C^2)
    const k = 8.99e9;
    // Convert distance from picometers (pm) to meters (m)
    const distanceInMeters = distance * 1e-12;

    // Calculate lattice energy using the formula: E = k * (z1 * z2) / r0
    const latticeEnergy = (k * (charge1 * charge2)) / distanceInMeters;

    // Display the result
    document.getElementById(
        "result"
    ).textContent = `Lattice Energy: ${latticeEnergy.toFixed(2)} J/mol`;
});