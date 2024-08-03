function calculateCapacitance() {
    const epsilon0 = 8.85e-12; // Permittivity of free space
    let k = document.getElementById('dielectric').value;
    let A = document.getElementById('area').value;
    let d = document.getElementById('distance').value;

    if (k && A && d) {
        let capacitance = (k * epsilon0 * A) / d;
        document.getElementById('result').innerHTML = `Capacitance is ${capacitance.toFixed(12)} Farads`;
    } else {
        document.getElementById('result').innerHTML = "Please fill all fields correctly!";
    }
}
