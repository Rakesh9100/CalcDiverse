function calculateInductance() {
    const turns = document.getElementById('turns').value;
    const area = document.getElementById('area').value;
    const length = document.getElementById('length').value;

    if (turns && area && length) {
        const inductance = (Math.pow(turns, 2) * area) / length;
        document.getElementById('result').innerText = `Inductance: ${inductance.toFixed(4)} H (Henries)`;
    } else {
        document.getElementById('result').innerText = 'Please fill out all fields.';
    }
}