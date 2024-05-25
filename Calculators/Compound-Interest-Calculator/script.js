function calculateCompoundInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid numbers for all fields");
        return;
    }
    var compoundInterest = principal * Math.pow(1 + rate / 100, time) - principal;
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = compoundInterest.toFixed(2);
}