function calculate() {
    const displacement = parseFloat(document.getElementById('displacement').value);
    const constant = parseFloat(document.getElementById('constant').value);
    const force = parseFloat(document.getElementById('force').value);

    let result = '';

    if (!isNaN(displacement) && !isNaN(constant) && !isNaN(force)) {
        result = 'Please enter only two values.';
    } else if (!isNaN(displacement) && !isNaN(constant)) {
        result = `Force (F) = ${-constant * displacement} N`;
    } else if (!isNaN(displacement) && !isNaN(force)) {
        result = `Spring Constant (k) = ${-force / displacement} N/m`;
    } else if (!isNaN(constant) && !isNaN(force)) {
        result = `Spring Displacement (Δx) = ${-force / constant} m`;
    } else {
        result = 'Please enter any two values.';
    }

    document.getElementById('result').innerText = result;
}
