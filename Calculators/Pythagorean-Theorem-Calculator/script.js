function calculate() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);

    if (isNaN(sideA) || isNaN(sideB) || sideA <= 0 || sideB <= 0) {
        alert("It looks like one or both of your inputs are missing or not positive. Please enter positive values for both sides.");
        return;
    }

    var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

    document.getElementById('result').innerHTML = "The length of side C is: " + sideC.toFixed(2);
}
