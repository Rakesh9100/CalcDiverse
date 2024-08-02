function calculateExpansion() {
    const initialLength = document.getElementById('initialLength').value;
    const expansionCoefficient = document.getElementById('expansionCoefficient').value;
    const temperatureChange = document.getElementById('temperatureChange').value;

    if (initialLength && expansionCoefficient && temperatureChange) {
        const deltaL = expansionCoefficient * initialLength * temperatureChange;
        document.getElementById('result').innerText = `The change in length (ΔL) is: ${deltaL}m.\n\nThe final length is: ${parseFloat(initialLength) + deltaL}m.`;
    } else {
        document.getElementById('result').innerText = 'Please fill in all fields.';
    }
}