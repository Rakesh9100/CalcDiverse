function calculateInterest() {
    // Get values from input fields
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    // Calculate simple interest
    var simpleInterest = (principal * rate * time) / 100;

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Simple Interest: Rs" + simpleInterest.toFixed(2);
    resultElement.style.fontSize = "40px";
    resultElement.style.fontfamily = "arial";
}