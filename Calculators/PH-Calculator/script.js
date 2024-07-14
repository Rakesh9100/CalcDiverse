document.getElementById('phForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const acidType = document.getElementById('acidType').value;
    let concentration = parseFloat(document.getElementById('concentration').value);
    
    let pH;
    let hIonConcentration;

    const acidDissociationConstants = {
        'HCl': Infinity,       // Strong acid
        'HCN': 4.9e-10,        // Weak acid
        'H₂CO₃': 4.3e-7,      // Weak acid
        'CH₃COOH': 1.8e-5,     // Weak acid
        'H₂SO₄': Infinity      // Strong acid (consider first dissociation step)
    };

    const ka = acidDissociationConstants[acidType];

    if (ka === Infinity) {
        hIonConcentration = concentration;
    } else {
        hIonConcentration = Math.sqrt(ka * concentration);
    }
    pH = -Math.log10(hIonConcentration);
    
    document.getElementById('phValue').value = pH.toFixed(5);
    document.getElementById('hIonConcentration').value = hIonConcentration.toFixed(5);
});
