function calculateQuotientAndRemainder() {
    var dividend = document.getElementById("dividend").value;
    var divisor = document.getElementById("divisor").value;

    var dividendNumber = parseFloat(dividend);
    var divisorNumber = parseFloat(divisor);

    if ((isNaN(dividendNumber) || isNaN(divisorNumber)) || divisorNumber === 0) {
        alert("Please enter valid numeric values");
        return;
    }

    var quotient = Math.floor(dividendNumber / divisorNumber);
    var remainder = dividendNumber % divisorNumber;

    document.getElementById("result").innerHTML = "Quotient: " + quotient + "<br> Remainder: " + remainder;
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("dividend").value = "";
    document.getElementById("divisor").value = "";
}

document.getElementById("calculate").onclick = calculateQuotientAndRemainder;
document.getElementById("clear").onclick = clearResult;