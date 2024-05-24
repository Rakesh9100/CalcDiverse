function convertToPolar() {
    var x = parseFloat(document.getElementById('xInput').value);
    var y = parseFloat(document.getElementById('yInput').value);

    if (isNaN(x) || isNaN(y)) {
        alert('Please enter valid numerical values for X and Y.');
        return;
    }


    var r = Math.sqrt(x * x + y * y);
    var theta = Math.atan2(y, x);

    var thetaDegrees = (theta * 180) / Math.PI;

    document.getElementById('result').innerHTML = "r = " + r.toFixed(2) + ", θ = " + thetaDegrees.toFixed(2) + " degrees";
}


function convert() {
    const angle = parseFloat(document.getElementById('angle').value);
    const radius = parseFloat(document.getElementById('radius').value);

    if (!isNaN(angle) && !isNaN(radius)) {
        const x = radius * Math.cos(degreesToRadians(angle));
        const y = radius * Math.sin(degreesToRadians(angle));

        document.getElementById('result').innerText = `Rectangular Coordinates: (${x.toFixed(2)}, ${y.toFixed(2)})`;
    } else {
        document.getElementById('result').innerText = 'Invalid input. Please enter valid numbers.';
    }
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
