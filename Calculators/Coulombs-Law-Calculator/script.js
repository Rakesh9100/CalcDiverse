function calculateForce() {
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const r = parseFloat(document.getElementById('r').value);

    if (isNaN(q1) || isNaN(q2) || isNaN(r) || r <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers for all fields, and ensure distance is greater than zero.";
        return;
    }

    const k = 8.9875517923e9; // Coulomb's constant in N·m²/C²
    const force = (k * q1 * q2) / (r ** 2);

    document.getElementById('result').innerText = `Force (F): ${force.toFixed(2)} N`;
}

function clearInputs() {
    document.getElementById('q1').value = '';
    document.getElementById('q2').value = '';
    document.getElementById('r').value = '';
    document.getElementById('result').innerText = '';
}