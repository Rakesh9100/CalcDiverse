function calculateDC() {
    const vac = parseFloat(document.getElementById('vac').value);

    if (isNaN(vac)) {
        document.getElementById('result').innerText = "Please enter a valid AC voltage.";
        return;
    }

    const vdc = vac / Math.sqrt(2);
    document.getElementById('result').innerText = `DC Voltage (Vₙ): ${vdc.toFixed(2)} V`;
}

function clearInputs() {
    document.getElementById('vac').value = '';
    document.getElementById('result').innerText = '';
}
