function calculateForce() {
    const mass = document.getElementById('mass').value;
    const acceleration = document.getElementById('acceleration').value;
    const resultDiv = document.getElementById('result');

    if (mass && acceleration) {
        const force = mass * acceleration;
        resultDiv.textContent = `Force (F) = ${force} N`;
    } else {
        resultDiv.textContent = 'Please enter valid values for mass and acceleration.';
    }
}
