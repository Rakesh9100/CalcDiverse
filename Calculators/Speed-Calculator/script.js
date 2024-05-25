function convertSpeed() {
    let inputSpeed = document.getElementById("speedInput").value;
    if (!inputSpeed || !inputSpeed.trim()) {
        alert("Please enter a valid Number!");
        return;
    }
    try {
        inputSpeed = parseFloat(inputSpeed);
    } catch (error) {
        alert("Please enter a valid Number!");
        return;
    }
    let fromUnit = document.getElementById("unitFrom").value;
    let toUnit = document.getElementById("unitTo").value;

    let conversionFactors = {
        'km/s': 1,
        'mph': 0.621371, // 1 kilometer/second = 0.621371 miles/hour
        'in/s': 39370.079, // 1 inch/second = 39370.079 kilometers/second
        'm/s': 1000, // 1 meter/second = 1000 kilometers/second
        'km/h': 3600, // 1 kilometer/second = 3600 kilometers/hour
    };

    let convertedSpeed =
        (inputSpeed * conversionFactors[toUnit]) / conversionFactors[fromUnit];
    let formattedConvertedSpeed = parseFloat(convertedSpeed.toFixed(10));
    document.getElementById(
        "speedResult"
    ).innerHTML = `<div class="dob"><center>CONVERTED SPEED </center></div>${formattedConvertedSpeed} ${toUnit}`;
}

document
    .getElementById("speedInput")
    .addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            convertSpeed();
        }
    });
