function convertString() {
    // Get the input string from the textarea
    var inputString = document.getElementById('inputString').value;
    
    // Convert each character to its ASCII value and join with spaces
    var asciiValues = Array.from(inputString).map(char => char.charCodeAt(0)).join(' ');

    // Display the result in the result div
    document.getElementById('result').textContent = asciiValues;
}
