function calculatePendulum() {
    const length = parseFloat(document.getElementById('length').value);
    const gravity = parseFloat(document.getElementById('gravity').value);
    const amplitude = parseFloat(document.getElementById('amplitude').value);
    const mass = parseFloat(document.getElementById('mass').value);

    if (isNaN(length) || isNaN(gravity) || isNaN(amplitude) || isNaN(mass)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const T = 2 * Math.PI * Math.sqrt(length / gravity); 
    const f = 1 / T; 
    const w = 2 * Math.PI * f; 
    const v_max = amplitude * w;
    const a_max = amplitude * Math.pow(w, 2); 
    const KE = 0.5 * mass * Math.pow(v_max, 2); 
    const PE = mass * gravity * amplitude; 

    const results = document.getElementById('results');
    results.innerHTML = `
        <h2>Results:</h2>
        <p>Period of the Pendulum (T): ${T.toFixed(2)} s</p>
        <p>Frequency of the Pendulum (f): ${f.toFixed(2)} Hz</p>
        <p>Angular Frequency (ω): ${w.toFixed(2)} rad/s</p>
        <p>Maximum Speed (v_max): ${v_max.toFixed(2)} m/s</p>
        <p>Maximum Acceleration (a_max): ${a_max.toFixed(2)} m/s²</p>
        <p>Kinetic Energy at the Lowest Point (KE): ${KE.toFixed(2)} J</p>
        <p>Potential Energy at the Highest Point (PE): ${PE.toFixed(2)} J</p>
    `;
}
