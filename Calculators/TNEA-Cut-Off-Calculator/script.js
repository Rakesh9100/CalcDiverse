function calculateCutoff() {
    const maths = document.getElementById('maths').value;
    const physics = document.getElementById('physics').value;
    const chemistry = document.getElementById('chemistry').value;

    if (maths === '' || physics === '' || chemistry === '') {
        alert('Please fill in all fields.');
        return;
    }

    const mathsValue = parseFloat(maths) || 0;
    const physicsValue = parseFloat(physics) || 0;
    const chemistryValue = parseFloat(chemistry) || 0;

    if (mathsValue < 0 || mathsValue > 100 || physicsValue < 0 || physicsValue > 100 || chemistryValue < 0 || chemistryValue > 100) {
        alert('Please enter valid marks between 0 and 100.');
        return;
    }

    const cutoff = mathsValue + (physicsValue + chemistryValue) / 2;

    document.getElementById('result-label').textContent = `Your Engineering Cut-off: ${cutoff.toFixed(2)}`;
    document.getElementById('result-div').style.display = 'block';
}
