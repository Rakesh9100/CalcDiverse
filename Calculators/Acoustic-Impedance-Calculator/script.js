function calculateImpedance() {
    const density = parseFloat(document.getElementById("density").value);
    const speed = parseFloat(document.getElementById("speed").value);
    const result = document.getElementById("result");

    if (isNaN(density) || isNaN(speed) || density <= 0 || speed <= 0) {
        result.innerHTML = "please enter valid & positive input";
        return;
    }

    let accousticImpedance = speed * density;
    result.innerHTML = `Acoustic Impedance: <span>${accousticImpedance.toFixed(2)} kg/(m²·s)</span>`;

}
