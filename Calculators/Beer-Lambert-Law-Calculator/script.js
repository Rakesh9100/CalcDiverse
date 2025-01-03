function calculateAbsorbance() {
    const epsilon = parseFloat(document.getElementById('epsilon').value);
    const concentration = parseFloat(document.getElementById('concentration').value);
    const length = parseFloat(document.getElementById('length').value);

    if (isNaN(epsilon) || isNaN(concentration) || isNaN(length)) {
        document.getElementById('result').innerText = "Please enter valid numbers for all fields.";
        return;
    }

    const absorbance = epsilon * concentration * length;

    document.getElementById('result').innerText = `Absorbance (A): ${absorbance.toFixed(2)}`;
}

function clearInputs() {
    document.getElementById('epsilon').value = '';
    document.getElementById('concentration').value = '';
    document.getElementById('length').value = '';
    document.getElementById('result').innerText = '';
}