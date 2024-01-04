function convertPressure() {
    let inputPressure = parseFloat(document.getElementById("PressureInput").value);
    let fromUnit = document.getElementById("unitFrom").value;
    let toUnit = document.getElementById("unitTo").value;
  
    let conversionFactors = {
      Pa: 1,
      atm: 0.00000987,
      bar: 0.00001,
      mmHg: 0.0075,
      kPa: 0.001,
    };
  
    let convertedPressure =
      (inputPressure * conversionFactors[toUnit]) / conversionFactors[fromUnit];
    let formattedConvertedPressure = convertedPressure.toLocaleString();
    document.getElementById(
      "PressureResult"
    ).innerHTML = `<div class="dob"><center>CONVERTED PRESSURE </center></div>${formattedConvertedPressure} ${toUnit}`;
  }
  
  document
    .getElementById("PressureInput")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        convertPressure();
      }
    });
  