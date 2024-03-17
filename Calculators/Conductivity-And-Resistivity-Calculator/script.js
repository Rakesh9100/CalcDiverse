function calculate() {
    // Get values from input fields
    const resistance = parseFloat(document.getElementById("resistanceInput").value);
    const length = parseFloat(document.getElementById("lengthInput").value);
    const area = parseFloat(document.getElementById("areaInput").value);

    // Check if inputs are valid
    if (isNaN(resistance) || isNaN(length) || isNaN(area)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    // Calculate conductivity using the formula: conductivity = 1 / resistance
    const conductivity = 1 / resistance;

    // Calculate resistivity using the formula: resistivity = resistance * (area / length)
    const resistivity = resistance * (area / length);

    // Display the result
    document.getElementById("result").innerText = `Conductivity: ${conductivity} S/m\nResistivity: ${resistivity} ohm*m`;
}