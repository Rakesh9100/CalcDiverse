function calculateFuelEfficiency() {
    var distance = parseFloat(document.getElementById("distance").value);
    var fuel = parseFloat(document.getElementById("fuel").value);

    var resultContainer = document.getElementById("result");
    if (isNaN(distance) || isNaN(fuel) || distance < 0 || fuel < 0) {
        resultContainer.innerHTML =
            "Invalid input. Please enter non-negative numbers.";
        return;
    }
    if (isNaN(distance) || isNaN(fuel)) {
        resultContainer.innerHTML = "Invalid input. Please enter valid numbers).";
        return;
    }

    var efficiency = distance / fuel;
    resultContainer.innerHTML =
        "Fuel Efficiency: " + efficiency.toFixed(2) + " " + "Kilometers per litre";
}

function clearForm() {
    document.getElementById("distance").value = "";
    document.getElementById("fuel").value = "";
    document.getElementById("result").innerHTML = "";
}
