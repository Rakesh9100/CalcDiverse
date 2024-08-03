function convertString() {
    // Get the input string from the textarea
    var inputString = document.getElementById('inputString').value;
    
    // Convert each character to its ASCII value and join with spaces
    var asciiValues = Array.from(inputString).map(char => char.charCodeAt(0)).join(' ');

    // Display the result in the result div
    document.getElementById('result1').textContent = asciiValues;
}

function convertAsciiToString() {
    // Get the input value
    let input = document.getElementById('asciiInput').value;
    
    // Split the input string into an array of ASCII values
    let asciiValues = input.split(',').map(value => parseInt(value.trim()));
    
    // Convert ASCII values to characters and join them into a string
    let result = asciiValues.map(value => String.fromCharCode(value)).join('');
    
    // Display the result
    document.getElementById('result2').textContent = result;
}