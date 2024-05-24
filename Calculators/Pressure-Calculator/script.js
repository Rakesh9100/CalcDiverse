// Function to convert pressure units
function convertPressure() {
    // Get input values from the HTML elements
    let inputPressure = parseFloat(document.getElementById("PressureInput").value);
    let fromUnit = document.getElementById("unitFrom").value;
    let toUnit = document.getElementById("unitTo").value;

    // Conversion factors for different pressure units
    let conversionFactors = {
        Pa: 1,
        atm: 0.00000987,
        bar: 0.00001,
        mmHg: 0.0075,
        kPa: 0.001,
    };

    // Perform the pressure conversion
    let convertedPressure =
        (inputPressure * conversionFactors[toUnit]) / conversionFactors[fromUnit];

    // Format the converted pressure for display
    let formattedConvertedPressure = convertedPressure.toLocaleString();

    // Display the result in the HTML element
    document.getElementById(
        "PressureResult"
    ).innerHTML = `<div class="dob"><center>CONVERTED PRESSURE </center></div>${formattedConvertedPressure} ${toUnit}`;
}

// Add event listener to the input field for Enter key press
document.getElementById("PressureInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        // Call the conversion function when Enter key is pressed
        convertPressure();
    }
});
