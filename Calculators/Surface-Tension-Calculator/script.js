function updateForm() {
    const type = document.getElementById('type').value;
    const flatInputs = document.getElementById('flatInputs');
    const dropletBubbleInputs = document.getElementById('dropletBubbleInputs');

    if (type === 'flat') {
        flatInputs.style.display = 'block';
        dropletBubbleInputs.style.display = 'none';
    } else {
        flatInputs.style.display = 'none';
        dropletBubbleInputs.style.display = 'block';
    }
}

function calculateSurfaceTension() {
    const type = document.getElementById('type').value;
    let surfaceTension;

    if (type === 'flat') {
        const force = parseFloat(document.getElementById('force').value);
        const length = parseFloat(document.getElementById('length').value);

        if (isNaN(force) || isNaN(length) || length === 0) {
            alert("Please enter valid numbers and ensure length is not zero.");
            return;
        }

        surfaceTension = 0.5 * force / length;
    } else {
        const pressure = parseFloat(document.getElementById('pressure').value);
        const diameter = parseFloat(document.getElementById('diameter').value);

        if (isNaN(pressure) || isNaN(diameter)) {
            alert("Please enter valid numbers.");
            return;
        }

        if (type === 'droplet') {
            surfaceTension = pressure * diameter / 4;
        } else if (type === 'bubble') {
            surfaceTension = pressure * diameter / 8;
        }
    }

    document.getElementById('result').innerText = `Surface Tension: ${surfaceTension.toFixed(2)} N/m`;
}
