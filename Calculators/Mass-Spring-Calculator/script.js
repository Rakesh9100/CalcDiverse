function calculateProperties() {
    const mass = parseFloat(document.getElementById('mass').value);
    const springConstant = parseFloat(document.getElementById('spring-constant').value);
    const amplitude = parseFloat(document.getElementById('amplitude').value);

    if (isNaN(mass) || isNaN(springConstant) || isNaN(amplitude)) {
        alert("Please enter valid numbers for mass, spring constant, and amplitude.");
        return;
    }

    // Period of Oscillation (T)
    const period = 2 * Math.PI * Math.sqrt(mass / springConstant);

    // Frequency of Oscillation (f)
    const frequency = 1 / period;

    // Angular Frequency (ω)
    const angularFrequency = 2 * Math.PI * frequency;

    // Maximum Speed (v_max)
    const maxSpeed = angularFrequency * amplitude;

    // Maximum Acceleration (a_max)
    const maxAcceleration = angularFrequency * angularFrequency * amplitude;

    // Kinetic Energy at Maximum Speed (KE)
    const kineticEnergy = 0.5 * mass * maxSpeed * maxSpeed;

    // Potential Energy at Maximum Displacement (PE)
    const potentialEnergy = 0.5 * springConstant * amplitude * amplitude;

    // Display results
    document.getElementById('period').textContent = `Period of Oscillation (T): ${period.toFixed(2)} s`;
    document.getElementById('frequency').textContent = `Frequency of Oscillation (f): ${frequency.toFixed(2)} Hz`;
    document.getElementById('angular-frequency').textContent = `Angular Frequency (ω): ${angularFrequency.toFixed(2)} rad/s`;
    document.getElementById('max-speed').textContent = `Maximum Speed (v_max): ${maxSpeed.toFixed(2)} m/s`;
    document.getElementById('max-acceleration').textContent = `Maximum Acceleration (a_max): ${maxAcceleration.toFixed(2)} m/s²`;
    document.getElementById('kinetic-energy').textContent = `Kinetic Energy (KE): ${kineticEnergy.toFixed(2)} J`;
    document.getElementById('potential-energy').textContent = `Potential Energy (PE): ${potentialEnergy.toFixed(2)} J`;
}
