function calculatePE() {
    const mass = parseFloat(document.getElementById('mass').value);
    const height = parseFloat(document.getElementById('height').value);
    const gravity = 9.8; // m/s^2

    if (isNaN(mass) || isNaN(height)) {
        document.getElementById('peResult').textContent = 'Please enter both mass and height.';
    } else if (mass > 0) {
        const pe = mass * height * gravity;
        document.getElementById('peResult').textContent = `Potential Energy (PE): ${pe.toFixed(2)} Joules`;
    } else {
        document.getElementById('peResult').textContent = 'Mass must be a positive number.';
    }
}

function calculateKE() {
    const mass = parseFloat(document.getElementById('mass').value);
    const velocity = parseFloat(document.getElementById('velocity').value);

    if (isNaN(mass) || isNaN(velocity)) {
        document.getElementById('keResult').textContent = 'Please enter both mass and velocity.';
    } else if (mass > 0 && velocity >= 0) {
        const ke = 0.5 * mass * velocity * velocity;
        document.getElementById('keResult').textContent = `Kinetic Energy (KE): ${ke.toFixed(2)} Joules`;
    } else if (mass <= 0) {
        document.getElementById('keResult').textContent = 'Mass must be a positive number.';
    } else {
        document.getElementById('keResult').textContent = 'Velocity must be a non-negative number.';
    }
}
