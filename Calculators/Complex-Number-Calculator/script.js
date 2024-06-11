function add() {
    if (validateInput()) {
        var real1 = parseFloat(document.getElementById('real1').value);
        var imaginary1 = parseFloat(document.getElementById('imaginary1').value);
        var real2 = parseFloat(document.getElementById('real2').value);
        var imaginary2 = parseFloat(document.getElementById('imaginary2').value);
        var resultReal = real1 + real2;
        var resultImaginary = imaginary1 + imaginary2;
        displayResult(resultReal, resultImaginary);
    }
}

function subtract() {
    if (validateInput()) {
        var real1 = parseFloat(document.getElementById('real1').value);
        var imaginary1 = parseFloat(document.getElementById('imaginary1').value);
        var real2 = parseFloat(document.getElementById('real2').value);
        var imaginary2 = parseFloat(document.getElementById('imaginary2').value);
        var resultReal = real1 - real2;
        var resultImaginary = imaginary1 - imaginary2;
        displayResult(resultReal, resultImaginary);
    }
}

function multiply() {
    if (validateInput()) {
        var real1 = parseFloat(document.getElementById('real1').value);
        var imaginary1 = parseFloat(document.getElementById('imaginary1').value);
        var real2 = parseFloat(document.getElementById('real2').value);
        var imaginary2 = parseFloat(document.getElementById('imaginary2').value);
        var resultReal = real1 * real2 - imaginary1 * imaginary2;
        var resultImaginary = real1 * imaginary2 + real2 * imaginary1;
        displayResult(resultReal, resultImaginary);
    }
}

function divide() {
    if (validateInput()) {
        var real1 = parseFloat(document.getElementById('real1').value);
        var imaginary1 = parseFloat(document.getElementById('imaginary1').value);
        var real2 = parseFloat(document.getElementById('real2').value);
        var imaginary2 = parseFloat(document.getElementById('imaginary2').value);
        if (real2 === 0 && imaginary2 === 0) {
            document.getElementById('result').innerHTML = 'Cannot divide by zero';
            return;
        }
        var denominator = real2 * real2 + imaginary2 * imaginary2;
        var resultReal = (real1 * real2 + imaginary1 * imaginary2) / denominator;
        var resultImaginary = (imaginary1 * real2 - real1 * imaginary2) / denominator;
        displayResult(resultReal, resultImaginary);
    }
}

function reset() {
    document.getElementById('real1').value = '';
    document.getElementById('imaginary1').value = '';
    document.getElementById('real2').value = '';
    document.getElementById('imaginary2').value = '';
    document.getElementById('result').style.display = 'None';
}

function validateInput() {
    var real1 = document.getElementById('real1').value;
    var imaginary1 = document.getElementById('imaginary1').value;
    var real2 = document.getElementById('real2').value;
    var result = document.getElementById('result');

    var imaginary2 = document.getElementById('imaginary2').value;
    if (real1 === '' || imaginary1 === '' || real2 === '' || imaginary2 === '') {
        document.getElementById('result').innerText = 'Enter a valid value';
        result.style.display = 'block';
        return false;
    }
    return true;
}

function displayResult(real, imaginary) {
    var result = document.getElementById('result');
    var rectForm = 'Rectangular Form: ' + real + ' + ' + imaginary + 'i<br>';
    var magnitude = Math.sqrt(real * real + imaginary * imaginary);
    var angle = Math.atan2(imaginary, real);
    var polarForm = 'Polar Form: ' + magnitude.toFixed(2) + ' * (cos(' + angle.toFixed(2) + ') + i * sin(' + angle.toFixed(2) + '))';
    result.innerHTML = rectForm + polarForm;
    result.style.display = 'block';

}


