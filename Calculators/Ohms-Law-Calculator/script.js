function calculate() {
    const volt = parseFloat(document.getElementById('volt').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const power = parseFloat(document.getElementById('power').value);

    let result = '';

    if (!isNaN(volt) && !isNaN(current)) {
        document.getElementById('resistance').value = `${volt / current}`;
        console.log("1 2");
        document.getElementById('power').value = `${volt * current}`;
    } else if (!isNaN(volt) && !isNaN(resistance)) {
        document.getElementById('current').value = `${volt / resistance}`;
        document.getElementById('power').value = `${(volt * volt) / resistance}`;
    } else if (!isNaN(current) && !isNaN(resistance)) {
        document.getElementById('volt').value = `${current * resistance}`;
        document.getElementById('power').value = `${(current * current) * resistance}`;
    } else if (!isNaN(voltage) && !isNaN(power)) {
        document.getElementById('current').value = `${power / volt}`;
        document.getElementById('resistance').value = `${(volt * volt) / power} `;
    } else if (!isNaN(current) && !isNaN(power)) {
        document.getElementById('volt').value = `${power / current}`;
        document.getElementById('resistance').value = `${power / (current * current)}`;
    } else if (!isNaN(resistance) && !isNaN(power)) {
        document.getElementById('volt').value = `${Math.sqrt(power * resistance)}`;
        document.getElementById('current').value = `${Math.sqrt(power / resistance)}`;
    } else {
        result = 'Please enter at least two values to calculate.';
    }

    // document.getElementById('result').innerHTML = result;
    console.log(result);
}
