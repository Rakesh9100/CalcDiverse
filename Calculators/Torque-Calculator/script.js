function calculateTorque() {
    const distance = parseFloat(document.getElementById('distance').value);
    const force = parseFloat(document.getElementById('force').value);
    const thetaDegrees = parseFloat(document.getElementById('theta').value);

    if (isNaN(distance) || isNaN(force) || isNaN(thetaDegrees)) {
        document.getElementById('result').textContent = 'Please enter valid numbers in all fields.';
        return;
    }

    const thetaRadians = (Math.PI / 180) * thetaDegrees;

    const torque = distance * force * Math.sin(thetaRadians);

    document.getElementById('result').textContent = `Torque: ${torque.toFixed(2)} N·m`;
}