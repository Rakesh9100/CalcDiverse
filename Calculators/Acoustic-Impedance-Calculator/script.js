function calculateImpedance() {
    const density = parseFloat(document.getElementById("density").value);
    const speed = parseFloat(document.getElementById("speed").value);
    const result = document.getElementById("result");

    if (isNaN(density) || isNaN(speed) || density <= 0 || speed <= 0) {
        result.innerHTML = "Please enter valid & positive inputs";
        return;
    }

    let accousticImpedance = speed * density;
    result.innerHTML = `Acoustic Impedance: <span>${accousticImpedance.toFixed(2)} kg/(m²·s)</span>`;

}
