function calculateYield() {
    var crop = document.getElementById('crop').value;
    var area = parseFloat(document.getElementById('area').value);
    var yieldPerAcre = parseFloat(document.getElementById('yield').value);
    var weather = parseFloat(document.getElementById('weather').value);
    var soil = parseFloat(document.getElementById('soil').value);
    var cropRotation = parseFloat(document.getElementById('crop-rotation').value);

    if (crop === "") {
        document.getElementById('result').innerText = "Please enter a crop type.";
        return;
    }

    if (isNaN(area) || isNaN(yieldPerAcre) || isNaN(weather) || isNaN(soil) || isNaN(cropRotation)) {
        document.getElementById('result').innerText = "Please enter valid numbers for all inputs.";
        return;
    }

    var totalYield = area * yieldPerAcre * weather * soil * cropRotation;
    if (totalYield > 100) {
        document.getElementById('result').innerText = "Expected yield is above average.";
    } else if (totalYield < 50) {
        document.getElementById('result').innerText = "Expected yield is below average.";
    } else {
        document.getElementById('result').innerText = "Expected yield is average.";
    }

    document.getElementById('result').innerText += " " + totalYield.toFixed(2) + " units.";
}
