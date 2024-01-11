function calculate() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);

    if (isNaN(sideA) || isNaN(sideB)) {
        alert("Please enter valid numerical values for side A and side B.");
        return;
    }

    var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

    document.getElementById('result').innerHTML = "The length of side C is: " + sideC.toFixed(2);
}