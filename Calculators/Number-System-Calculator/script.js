function convert() {
    const numberInput = document.getElementById('number').value;
    const fromBase = parseInt(document.getElementById('fromBase').value, 10);
    const toBase = parseInt(document.getElementById('toBase').value, 10);

    const decimalValue = parseInt(numberInput, fromBase);
    const convertedValue = decimalValue.toString(toBase);

    document.getElementById('result').innerHTML = `Converted Value: ${convertedValue}`;
}

// claer function 
function clear_fun() {
    document.getElementById('number').value = '';
    document.getElementById('fromBase').value = '';
    document.getElementById('toBase').value = '';
    document.getElementById('result').innerHTML = '';
}