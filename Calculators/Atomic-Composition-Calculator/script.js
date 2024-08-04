document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const atomicNumber = parseInt(document.getElementById('atomicNumber').value);
    const atomicMass = parseFloat(document.getElementById('atomicMass').value);
    const charge = parseInt(document.getElementById('charge').value) || 0;
    
    if ( atomicNumber < 1 || atomicNumber > 118) {
        alert('Please enter valid a Atomic Number');
        return;
    }

    if ( atomicMass < atomicNumber ) {
        alert(`Atomic Mass cannot be less than Atomic Number`);
        return;
    }
    
    if ( charge > atomicNumber ) {
        alert(`Charge cannot be greater than Atomic Number`);
        return;
    }
    
    const protons = atomicNumber;
    const electrons = atomicNumber - charge;
    const neutrons = Math.round(atomicMass) - atomicNumber;

    document.getElementById('protonsResult').innerText = `Number of Protons: ${protons}`;
    document.getElementById('electronsResult').innerText = `Number of Electrons: ${electrons}`;
    document.getElementById('neutronsResult').innerText = `Number of Neutrons: ${neutrons}`;

    document.getElementById('results').style.display = 'block';
});
