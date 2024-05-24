function calculateRoot() {
    // Fetching the input values: number and precision
    const number = parseFloat(document.getElementById('numberInput').value);
    const precision = parseInt(document.getElementById('precisionInput').value);
    const userRoot = parseInt(document.getElementById("root").value);

    // Checking if the inputs are valid numbers
    if (isNaN(number) || isNaN(precision) || isNaN(userRoot)) {
        alert("Please enter valid numbers.");
        return;
    }

    var result = Math.pow(parseFloat(number), 1 / parseFloat(userRoot));

    result = result.toFixed(parseInt(precision));

    // Displaying the result with the specified precision
    document.getElementById("result").innerHTML = "The " + userRoot + "th root of " + number + " is: " + result;
}
const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
        calculateRoot();
    }
};