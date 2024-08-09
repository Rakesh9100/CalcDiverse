document.getElementById('pendulumForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const L = parseFloat(document.getElementById('length').value);
    const g = parseFloat(document.getElementById('gravity').value);
    const A = parseFloat(document.getElementById('amplitude').value) || 0;
    const m = parseFloat(document.getElementById('mass').value) || 0; 

    // Calculate properties
    const T = 2 * Math.PI * Math.sqrt(L / g); // Period
    const f = 1 / T; // Frequency
    const omega = Math.sqrt(g / L); // Angular Frequency

    let v_max, a_max, KE, PE;

    if (A > 0) {
        v_max = omega * A; // Maximum Speed
        a_max = omega * omega * A; // Maximum Acceleration
        KE = m > 0 ? 0.5 * m * v_max * v_max : "N/A"; // Kinetic Energy
        PE = m > 0 ? m * g * L * (1 - Math.cos(Math.atan(A / L))) : "N/A"; // Potential Energy
    } else {
        v_max = "N/A";
        a_max = "N/A";
        KE = "N/A";
        PE = "N/A";
    }

    // Display results
    document.getElementById('period').textContent = T.toFixed(2);
    document.getElementById('frequency').textContent = f.toFixed(2);
    document.getElementById('angularFrequency').textContent = omega.toFixed(2);
    document.getElementById('maxSpeed').textContent = v_max !== "N/A" ? v_max.toFixed(2) : v_max;
    document.getElementById('maxAcceleration').textContent = a_max !== "N/A" ? a_max.toFixed(2) : a_max;
    document.getElementById('kineticEnergy').textContent = KE !== "N/A" ? KE.toFixed(2) : KE;
    document.getElementById('potentialEnergy').textContent = PE !== "N/A" ? PE.toFixed(2) : PE;
});
