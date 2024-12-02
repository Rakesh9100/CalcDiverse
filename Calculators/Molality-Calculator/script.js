function calculateMass() {
    const formulaWeight = parseFloat(
        document.getElementById("formulaWeight").value
    );
    let solventWeight = parseFloat(document.getElementById("solventWeight").value);
    const solventUnit = document.getElementById("solventUnit").value;
    let molality = parseFloat(
        document.getElementById("molality").value
    );
    const molalityUnit = document.getElementById("molalityUnit").value;

    if (isNaN(formulaWeight) || isNaN(solventWeight) || isNaN(molality)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Convert solvent weight to kilograms
    switch (solventUnit) {
        case "g":
            solventWeight = solventWeight / 1000;
            break;
    }

    // Convert molality to mol/kg
    switch (molalityUnit) {
        case "mmol/kg":
            molality = molality / 1000;
            break;
    }

    const mass = formulaWeight * molality * solventWeight;
    document.getElementById("mass").value = mass.toFixed(3);
    document.getElementById("result").style.animation =
        "resultFadeIn 1s ease-in-out";
}