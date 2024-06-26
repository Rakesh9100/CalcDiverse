function calculate() {
    // Get values from input fields
    const resistance = parseFloat(document.getElementById("resistanceInput").value);
    const length = parseFloat(document.getElementById("lengthInput").value);
    const area = parseFloat(document.getElementById("areaInput").value);

    // Check if inputs are valid
    if (isNaN(resistance) || isNaN(length) || isNaN(area)) {
        document.getElementById("conductivityresult").value = `Invalid Input`;
        document.getElementById("resistivityresult").value = `Invalid Input`;
        return;
    }

    // Calculate conductivity using the formula: conductivity = 1 / resistance
    const number1 = 1 / resistance
    const conductivity = number1.toFixed(12);

    // Calculate resistivity using the formula: resistivity = resistance * (area / length)
    const number2=resistance * (area / length);
    const resistivity = number2.toFixed(12);

    // Display the result
    document.getElementById("conductivityresult").value = `Conductivity: ${conductivity} S/m`;
    document.getElementById("resistivityresult").value = `Resistivity: ${resistivity} ohm-m`;
}