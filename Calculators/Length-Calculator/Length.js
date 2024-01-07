function convertLength() {
    let inputLength = parseFloat(document.getElementById("lengthInput").value);
    let fromUnit = document.getElementById("unitFrom").value;
    let toUnit = document.getElementById("unitTo").value;
  
    let conversionFactors = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
    };
  
    let convertedLength =
      (inputLength * conversionFactors[fromUnit]) / conversionFactors[toUnit];
    let formattedConvertedLength = convertedLength.toLocaleString();
    document.getElementById(
      "lengthResult"
    ).innerHTML = `<div class="dob"><center>CONVERTED LENGTH </center></div>${formattedConvertedLength} ${toUnit}`;
  }
  
  document
    .getElementById("lengthInput")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        convertLength();
      }
    });
  