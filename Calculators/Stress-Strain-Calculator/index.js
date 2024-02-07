function calculate() {
    // Get user input
    const force = parseFloat(document.getElementById('force').value);
    const area = parseFloat(document.getElementById('area').value);
    const originalLength = parseFloat(document.getElementById('originalLength').value);
    const deformedLength = parseFloat(document.getElementById('deformedLength').value);

    // Calculate stress and strain
    const stress = force / area;
    const strain = (deformedLength - originalLength) / originalLength;

    // Display results
    document.getElementById('stressResult').textContent = `Stress: ${stress.toFixed(2)} N/m^2 (Pa)`;
    document.getElementById('strainResult').textContent = `Strain: ${strain.toFixed(2)}`;

    // Show results container
    document.getElementById('results').classList.remove('hidden');
}
