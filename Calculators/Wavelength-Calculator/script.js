function calculateWavelength() {
    const velocity = parseFloat(document.getElementById('velocity').value);
    const frequency = parseFloat(document.getElementById('frequency').value);

    if (isNaN(velocity) || isNaN(frequency) || frequency === 0) {
        alert('Please enter valid numbers for both velocity and frequency.');
        return;
    }

    const wavelength = velocity / frequency;
    document.getElementById('wavelength-result').textContent = `Wavelength (λ): ${wavelength.toFixed(2)} meters`;
}
