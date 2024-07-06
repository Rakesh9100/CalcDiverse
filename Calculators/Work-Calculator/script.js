document.getElementById('workForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const force = parseFloat(document.getElementById('force').value);
    const displacement = parseFloat(document.getElementById('displacement').value);
    const angle = parseFloat(document.getElementById('angle').value);

    let errorMessage = '';

    if (isNaN(force) || isNaN(displacement) || isNaN(angle)) {
        errorMessage = 'Please enter valid numbers for force, displacement, and angle.';
    } else if (force <= 0) {
        errorMessage = 'Force must be a positive number.';
    } else if (displacement <= 0) {
        errorMessage = 'Displacement must be a positive number.';
    } else if (angle < 0 || angle > 360) {
        errorMessage = 'Angle must be between 0 and 360 degrees.';
    }

    if (errorMessage) {
        document.getElementById('result').innerText = errorMessage;
        document.getElementById('result').style.color = 'red';
    } else {
        const radians = angle * (Math.PI / 180);
        const work = force * displacement * Math.cos(radians);
        document.getElementById('result').innerText = `Work Done: ${work.toFixed(2)} J`;
        document.getElementById('result').style.color = 'green';
    }
});

