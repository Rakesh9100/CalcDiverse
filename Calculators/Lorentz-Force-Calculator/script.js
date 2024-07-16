function calculateForce() {
    const B =
        parseFloat(document.getElementById("magneticField").value) *
        parseFloat(document.getElementById("magneticFieldUnit").value);
    const q =
        parseFloat(document.getElementById("charge").value) *
        parseFloat(document.getElementById("chargeUnit").value);
    const v =
        parseFloat(document.getElementById("velocity").value) *
        parseFloat(document.getElementById("velocityUnit").value);
    const angle = parseFloat(document.getElementById("angle").value);
    const angleUnit = document.getElementById("angleUnit").value;

    const angleRad = angleUnit === "deg" ? angle * (Math.PI / 180) : angle;

    if (isNaN(B) || isNaN(q) || isNaN(v) || isNaN(angle)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    const force = B * q * v * Math.sin(angleRad);
    document.getElementById("result").textContent = `Force: ${force.toFixed(5)} N`;
}
