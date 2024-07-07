function showCalculator(type) {
    document.getElementById('wave-calculator').style.display = 'none';
    document.getElementById('optics-calculator').style.display = 'none';
    if (type === 'wave') {
        document.getElementById('wave-calculator').style.display = 'block';
    } else if (type === 'optics') {
        document.getElementById('optics-calculator').style.display = 'block';
    }
}

function calculateWave() {
    // Get the values from the input fields
    const frequency = parseFloat(document.getElementById('frequency').value);
    const wavelength = parseFloat(document.getElementById('wavelength').value);

    // Validate inputs
    if (isNaN(frequency) || isNaN(wavelength) || frequency <= 0 || wavelength <= 0) {
        alert("Please enter valid positive numbers for frequency and wavelength.");
        return;
    }

    // Calculate the wave speed
    const speed = frequency * wavelength;

    // Display the result
    document.getElementById('wave-speed').innerText = `Wave Speed: ${speed} m/s`;

    // Draw the wave graph
    drawWaveGraph(frequency, wavelength);
}

function drawWaveGraph(frequency, wavelength) {
    const canvas = document.getElementById('waveGraph');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(550, 200); // X-axis
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 350); // Y-axis
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw the wave
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;

    // Number of cycles to draw
    const cycles = 5;
    // Calculate the wave properties
    const amplitude = 50;
    const period = wavelength * (canvas.width - 100) / (wavelength * cycles);

    for (let x = 0; x <= canvas.width - 100; x++) {
        const y = 200 + amplitude * Math.sin((2 * Math.PI * x) / period);
        ctx.lineTo(x + 50, y);
    }

    ctx.stroke();

    // Draw measurements
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("0", 45, 215);
    ctx.fillText("X", 545, 215);
    ctx.fillText("Y", 35, 55);

    // Draw scale markings on X-axis
    for (let i = 0; i <= 5; i++) {
        ctx.moveTo(50 + i * 100, 195);
        ctx.lineTo(50 + i * 100, 205);
        ctx.fillText(i, 45 + i * 100, 215);
    }

    // Draw scale markings on Y-axis
    for (let i = -2; i <= 2; i++) {
        ctx.moveTo(45, 200 + i * 50);
        ctx.lineTo(55, 200 + i * 50);
        ctx.fillText(i * amplitude, 15, 205 + i * 50);
    }

    ctx.stroke();
}

function calculateOptics() {
    // Get the values from the input fields
    const objectDistance = parseFloat(document.getElementById('object-distance').value);
    const focalLength = parseFloat(document.getElementById('focal-length').value);

    // Validate inputs
    if (isNaN(objectDistance) || isNaN(focalLength) || objectDistance <= 0 || focalLength <= 0) {
        alert("Please enter valid positive numbers for object distance and focal length.");
        return;
    }

    // Calculate the image distance using lens formula: 1/f = 1/v + 1/u
    const imageDistance = 1 / ((1 / focalLength) - (1 / objectDistance));

    // Display the result
    document.getElementById('image-distance').innerText = `Image Distance: ${imageDistance.toFixed(2)} cm`;

    // Draw the optics graph
    drawOpticsGraph(objectDistance, focalLength, imageDistance);
}

function drawOpticsGraph(objectDistance, focalLength, imageDistance) {
    const canvas = document.getElementById('opticsGraph');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw optical axis
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(550, 200); // Optical axis
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw lens
    ctx.beginPath();
    ctx.moveTo(300, 100);
    ctx.lineTo(300, 300);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Draw object
    ctx.beginPath();
    ctx.moveTo(300 - objectDistance, 200);
    ctx.lineTo(300 - objectDistance, 100);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillText('Object', 300 - objectDistance - 20, 90);

    // Draw image
    ctx.beginPath();
    ctx.moveTo(300 + imageDistance, 200);
    ctx.lineTo(300 + imageDistance, 300);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillText('Image', 300 + imageDistance - 10, 320);

    // Draw focal points
    ctx.beginPath();
    ctx.arc(300 + focalLength, 200, 5, 0, 2 * Math.PI);
    ctx.arc(300 - focalLength, 200, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.fillText('F', 300 + focalLength - 10, 220);
    ctx.fillText('F', 300 - focalLength - 10, 220);
}
