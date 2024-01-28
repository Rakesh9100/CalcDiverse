function convertPower() {
    let inputPower = document.getElementById("powerInput").value;
    if (!inputPower || !inputPower.trim()) {
        alert("Please enter a valid Number!");
        return;
    }
    try {
        inputPower = parseFloat(inputPower);
    } catch (error) {
        alert("Please enter a valid Number!");
        return;
    }
    let fromUnit = document.getElementById("unitFrom").value;
    let toUnit = document.getElementById("unitTo").value;

    let conversionFactors = {
        'kW': 1,
        'W': 1000, // 1 kilowatt = 1000 watts
        'jps': 1000, // 1 joule/second = 1000 watts
        'hp': 1.3410221, // 1 imperial horsepower = 1.3410221 kilowatts
        'Nm_s': 1000, // 1 newton-meter/second = 1 watt
    };

    let convertedPower =
        (inputPower * conversionFactors[toUnit]) / conversionFactors[fromUnit];
    let formattedConvertedPower = parseFloat(convertedPower.toFixed(10));
    document.getElementById(
        "powerResult"
    ).innerHTML = `<div class="dob"><center>CONVERTED POWER </center></div>${formattedConvertedPower} ${toUnit}`;
}

document
    .getElementById("powerInput")
    .addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            convertPower();
        }
    });
