function calculateCost() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);

    if (isNaN(distance) || isNaN(fuelEfficiency) || isNaN(fuelPrice)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
    } else {
        var cost = (distance / fuelEfficiency) * fuelPrice;
        document.getElementById('result').innerText = "Total Cost: Rs" + cost.toFixed(2);
    }
}
