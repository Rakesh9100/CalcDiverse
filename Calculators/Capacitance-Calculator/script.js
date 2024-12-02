function computeCapacitance() {
    const epsilon0 = 8.854187817e-12; // Vacuum permittivity in F/m
    const area = document.getElementById("area").value;
    const distance = document.getElementById("distance").value;
    const dielectric = document.getElementById("dielectric").value;

    if (area && distance && dielectric) {
        const areaMeters = area * 1e-6; // convert mm² to m²
        const distanceMeters = distance * 1e-3; // convert mm to m
        const capacitanceFarads =
            (dielectric * epsilon0 * areaMeters) / distanceMeters;

        const capacitanceMicroFarads = capacitanceFarads * 1e6;
        const capacitancePicoFarads = capacitanceFarads * 1e12;

        document.getElementById("capacitanceUF").value =
            capacitanceMicroFarads.toFixed(6);
        document.getElementById("capacitancePF").value =
            capacitancePicoFarads.toFixed(6);
    } else {
        alert("Please fill in all fields.");
    }
}
