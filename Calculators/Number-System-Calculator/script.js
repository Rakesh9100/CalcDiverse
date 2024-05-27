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
    document.getElementById('number').value = ''; // clearing input field value
    document.getElementById('fromBase').value = ''; // setting option "Select an option" in as initial value 
    document.getElementById('toBase').value = '';  // setting option "Select an option" in as initial value 
    document.getElementById('result').innerHTML = ''; // Clearing the result
}
