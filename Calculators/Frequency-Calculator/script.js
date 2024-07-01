function calculateFrequencyByPeriod() {
    const period = document.getElementById('period').value;
    if (period > 0) {
        const frequency = 1 / period;
        document.getElementById('frequencyOutput').textContent = frequency.toFixed(2);
    } else {
        alert("Please enter a valid period.");
    }
}

function calculateFrequencyByWavelength() {
    const wavelength = document.getElementById('wavelength').value;
    const waveSpeed = document.getElementById('waveSpeed').value;
    if (wavelength > 0 && waveSpeed > 0) {
        const frequency = waveSpeed / wavelength;
        document.getElementById('frequencyOutput').textContent = frequency.toFixed(2);
    } else {
        alert("Please enter valid values for wavelength and wave speed.");
    }
}

function calculateFrequencyByAngularFrequency() {
    const angularFrequency = document.getElementById('angularFrequency').value;
    if (angularFrequency > 0) {
        const frequency = angularFrequency / (2 * Math.PI);
        document.getElementById('frequencyOutput').textContent = frequency.toFixed(2);
    } else {
        alert("Please enter a valid angular frequency.");
    }
}
