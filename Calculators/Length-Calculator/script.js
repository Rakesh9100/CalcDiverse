function convertLength() {

    let inputLength = document.getElementById("lengthInput").value;
    if (!inputLength || !inputLength.trim()) {
        alert("Please enter a valid Number !");
        return;
    }
    try {
        inputLength = parseFloat(inputLength);
    } catch (error) {
        alert("Please enter a valid Number !");
        return;
    }
    let fromUnit = document.getElementById("unitFrom").value;
    let toUnit = document.getElementById("unitTo").value;

    let conversionFactors = {
        km: 1000,
        hm: 100,
        dam: 10,
        m: 1,
        dm: 0.1,
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
