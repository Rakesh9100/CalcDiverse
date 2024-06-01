document.getElementById("calculate-btn").addEventListener("click", function () {
    const number = document.getElementById("number-input").value;
    const base = parseInt(document.getElementById("base-input").value);

    if (number === "" || isNaN(base)) {
        return;
    }

    const binaryNumber = parseInt(number, base).toString(2);
    let nthComplementBinary = "";

    for (let i = 0; i < binaryNumber.length; i++) {
        if (binaryNumber[i] === "0") {
            nthComplementBinary += "1"; // If digit is 0, complement it to 1
        } else {
            nthComplementBinary += "0"; // If digit is 1, complement it to 0
        }
    }

    const nthComplementDecimal = parseInt(nthComplementBinary, 2);
    const nthComplementInBase = nthComplementDecimal.toString(base);
    document.getElementById("nth-complement").textContent = nthComplementInBase;
});
