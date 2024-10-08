function calculateMass() {
    const formulaWeight = parseFloat(document.getElementById("formulaWeight").value);
    let volume = parseFloat(document.getElementById("finalVolume").value);
    const volumeUnit = document.getElementById("volumeUnit").value;
    const equivalentWeight = parseFloat(document.getElementById("equivalentWeight").value);
    let concentration = parseFloat(document.getElementById("concentration").value);
    const concentrationUnit = document.getElementById("concentrationUnit").value;

    if (isNaN(formulaWeight) || isNaN(volume) || isNaN(equivalentWeight) || isNaN(concentration)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Convert volume to liters
    switch (volumeUnit) {
        case "mL":
            volume = volume / 1000;
            break;
        case "uL":
            volume = volume / 1e6;
            break;
    }

    // Convert concentration to normal
    switch (concentrationUnit) {
        case "mN":
            concentration = concentration / 1000;
            break;
        case "uN":
            concentration = concentration / 1e6;
            break;
    }

    // Calculate mass
    const mass = equivalentWeight * concentration * volume;
    document.getElementById("mass").value = mass.toFixed(3);
    document.getElementById("result").style.animation = "resultFadeIn 1s ease-in-out";
}
