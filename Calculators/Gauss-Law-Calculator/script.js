function calculateFlux() {
    const chargeInput = document.getElementById('charge').value;
    const chargeUnit = document.getElementById('charge-unit').value;
    const charge = parseFloat(chargeInput) * parseFloat(chargeUnit);
    const permittivity = 8.854e-12; // Vacuum permittivity in F/m
    
    if (isNaN(charge)) {
        alert('Please enter a valid charge.');
        return;
    }
    
    const flux = charge / permittivity;
    document.getElementById('flux').value = flux.toFixed(3) + ' V·m';
}
