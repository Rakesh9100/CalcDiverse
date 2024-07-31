function calculateElectrostaticForce() {
    const charge1 = parseFloat(document.getElementById('charge1Input').value);
    const charge2 = parseFloat(document.getElementById('charge2Input').value);
    const distance = parseFloat(document.getElementById('distanceInput').value);
    const k = 8.9875517873681764e9; // Coulomb's constant in N m²/C²

    if (isNaN(charge1) || isNaN(charge2) || isNaN(distance) || distance <= 0) {
        document.getElementById('result').textContent = 'Please enter valid values.';
        return;
    }

    const force = k * (charge1 * charge2) / (distance * distance);
    document.getElementById('result').textContent = `Electrostatic Force: ${force.toFixed(2)} N`;
}

function clearInputs() {
    document.getElementById('charge1Input').value = '';
    document.getElementById('charge2Input').value = '';
    document.getElementById('distanceInput').value = '';
    document.getElementById('result').textContent = '';
}

