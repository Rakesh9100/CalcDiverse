function calculateBuoyantForce() {
    const density = parseFloat(document.getElementById('density').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const gravity = parseFloat(document.getElementById('gravity').value) || 9.81;
    
    if (isNaN(density) || isNaN(volume) || isNaN(gravity)) {
        document.getElementById('result').innerText = "Please enter valid numbers for all fields.";
        return;
    }
    
    const buoyantForce = density * volume * gravity;
    
    document.getElementById('result').innerText = `Buoyant Force: ${buoyantForce.toFixed(2)} N`;
}
