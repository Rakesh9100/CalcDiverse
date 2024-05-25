function calculatePercentage() {
    var number = parseFloat(document.getElementById("number").value);
    var percentage = parseFloat(document.getElementById("percentage").value);
    var roundPlaces = parseInt(document.getElementById("round").value);

    if (isNaN(number) || isNaN(percentage)) {
        alert("Please enter valid numbers");
        return;
    }

    var result = (number * percentage) / 100;

    if (!isNaN(roundPlaces)) {
        result = result.toFixed(roundPlaces);
    }

    document.getElementById(
        "result"
    ).innerText = `Result: ${percentage}% of ${number} is ${result}`;
}

// Add a reset function to clear input fields and result
function resetCalculator() {
    document.getElementById("number").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("round").value = "0";
    document.getElementById("result").innerText = "";
}

// Add an event listener to the reset button
document.getElementById("reset").addEventListener("click", resetCalculator);
