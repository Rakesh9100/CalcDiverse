function calculateResistor() {
    const inputVoltage = parseFloat(
        document.getElementById("input-voltage").value
    );
    const zenerVoltage = parseFloat(
        document.getElementById("zener-voltage").value
    );
    const loadCurrent =
        parseFloat(document.getElementById("load-current").value) / 1000; // Convert mA to A

    if (inputVoltage && zenerVoltage && loadCurrent) {
        const resistorValue = (inputVoltage - zenerVoltage) / loadCurrent;
        document.getElementById(
            "result"
        ).innerHTML = `Required Resistor Value: ${resistorValue.toFixed(2)} Ω`;
    } else {
        document.getElementById("result").innerHTML = "Please fill out all fields";
    }
}