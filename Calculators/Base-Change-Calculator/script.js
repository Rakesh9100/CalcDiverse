document.getElementById("convert-btn").addEventListener("click", function () {
    const inputNumber = document.getElementById("input-number").value;
    const inputBase = parseInt(document.getElementById("input-base").value);
    const outputBase = parseInt(document.getElementById("output-base").value);

    if (!inputNumber || isNaN(inputBase) || isNaN(outputBase)) {
        return;
    }

    const parsedInputNumber = parseInt(inputNumber, inputBase);
    if (isNaN(parsedInputNumber)) {
        document.getElementById("output-number").textContent = "Invalid Input";
        return;
    }

    const convertedNumber = parsedInputNumber.toString(outputBase);
    document.getElementById("output-number").textContent = convertedNumber;
});
