function showAcToDcForm() {
    document.getElementById('ac-to-dc-form').style.display = 'block';
    document.getElementById('dc-to-ac-form').style.display = 'none';
    clearInputs();
}

function showDcToAcForm() {
    document.getElementById('dc-to-ac-form').style.display = 'block';
    document.getElementById('ac-to-dc-form').style.display = 'none';
    clearInputs();
}

function clearInputs() {
    document.getElementById('acVoltage').value = '';
    document.getElementById('transformerRatio').value = '1';
    document.getElementById('rectifierType').value = 'full';
    document.getElementById('dcResult').style.display = 'none';

    document.getElementById('dcVoltageInput').value = '';
    document.getElementById('frequency').value = '50';
    document.getElementById('acResult').style.display = 'none';

    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function convertACtoDC(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const acVoltage = parseFloat(document.getElementById('acVoltage').value);
    const transformerRatio = parseFloat(document.getElementById('transformerRatio').value);
    const rectifierType = document.getElementById('rectifierType').value;

    if (isNaN(acVoltage) || isNaN(transformerRatio)) {
        alert("Please enter valid numbers for AC Voltage and Transformer Ratio.");
        return;
    }

    const transformedAcVoltage = acVoltage * transformerRatio;
    const peakAcVoltage = transformedAcVoltage * Math.sqrt(2);

    let dcVoltage;
    if (rectifierType === 'half') {
        dcVoltage = peakAcVoltage / 2;
    } else if (rectifierType === 'full') {
        dcVoltage = peakAcVoltage - 1.4; // Subtracting diode drops for full-wave rectification
    }

    document.getElementById('dcVoltage').innerText = dcVoltage.toFixed(2);
    document.getElementById('dcResult').style.display = 'block';
    drawGraph(acVoltage, dcVoltage, 'AC', 'DC');
}

function convertDCtoAC(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const dcVoltage = parseFloat(document.getElementById('dcVoltageInput').value);
    const frequency = parseFloat(document.getElementById('frequency').value);

    if (isNaN(dcVoltage) || isNaN(frequency)) {
        alert("Please enter valid numbers for DC Voltage and Frequency.");
        return;
    }

    // Assuming the RMS value for output AC voltage calculation
    const acVoltageRMS = dcVoltage / Math.sqrt(2);

    document.getElementById('acVoltageOutput').innerText = acVoltageRMS.toFixed(2);
    document.getElementById('acResult').style.display = 'block';
    drawGraph(dcVoltage, acVoltageRMS, 'DC', 'AC');
}

function drawGraph(inputVoltage, outputVoltage, inputLabel, outputLabel) {
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;
    const scale = height / (Math.max(inputVoltage, outputVoltage) * 2);

    ctx.clearRect(0, 0, width, height);

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(width, midY); // X-axis
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height); // Y-axis
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Label axes
    ctx.font = '12px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('0', width / 2, midY + 15); // X-axis label
    ctx.fillText('Voltage', width / 2 - 40, 10); // Y-axis label, adjust as needed

    // Draw input waveform (AC or DC)
    ctx.beginPath();
    ctx.moveTo(0, midY);
    for (let x = 0; x < width; x++) {
        const angle = (x / width) * 2 * Math.PI;
        const y = midY - Math.sin(angle) * inputVoltage * scale;
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    // Label input waveform
    ctx.fillStyle = 'blue';
    ctx.fillText(inputLabel, width - 40, midY - inputVoltage * scale - 10);

    // Draw output waveform (DC or AC)
    ctx.beginPath();
    ctx.moveTo(0, midY);
    for (let x = 0; x < width; x++) {
        const angle = (x / width) * 2 * Math.PI;
        const y = midY - Math.sin(angle) * outputVoltage * scale;
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'red';
    ctx.stroke();

    // Label output waveform
    ctx.fillStyle = 'red';
    ctx.fillText(outputLabel, width - 40, midY - outputVoltage * scale + 20);
}
