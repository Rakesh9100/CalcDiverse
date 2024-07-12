function calculateEnergy() {
    const initialTemp = parseFloat(document.getElementById("initialTemp").value);
    const finalTemp = parseFloat(document.getElementById("finalTemp").value);
    const mass = parseFloat(document.getElementById("mass").value);
    const specificHeat = parseFloat(
        document.getElementById("specificHeat").value
    );

    if (
        isNaN(initialTemp) ||
        isNaN(finalTemp) ||
        isNaN(mass) ||
        isNaN(specificHeat)
    ) {
        alert("Please enter valid numbers.");
        return;
    }

    const deltaTemp = finalTemp - initialTemp;
    const energy = mass * specificHeat * deltaTemp;

    document.getElementById(
        "result"
    ).innerText = `Energy absorbed: ${energy.toFixed(2)} J`;
}
