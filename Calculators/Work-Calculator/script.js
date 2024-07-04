document.getElementById('workForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const force = parseFloat(document.getElementById('force').value);
    const distance = parseFloat(document.getElementById('distance').value);

    let errorMessage = '';

    if (isNaN(force) || isNaN(distance)) {
        errorMessage = 'Please enter valid numbers for both force and distance.';
    } else if (force <= 0) {
        errorMessage = 'Force must be a positive number.';
    } else if (distance <= 0) {
        errorMessage = 'Distance must be a positive number.';
    }

    if (errorMessage) {
        document.getElementById('result').innerText = errorMessage;
        document.getElementById('result').style.color = 'red';
    } else {
        const work = force * distance;
        document.getElementById('result').innerText = `Work Done: ${work.toFixed(2)} J`;
        document.getElementById('result').style.color = 'green';
    }
});
