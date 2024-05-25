function calculate() {

    const forceInput = document.getElementById('force');
    const areaInput = document.getElementById('area');
    const originalLengthInput = document.getElementById('originalLength');
    const deformedLengthInput = document.getElementById('deformedLength');

    if (!forceInput.value || !areaInput.value || !originalLengthInput.value || !deformedLengthInput.value) {
        alert('Please enter all inputs to calculate.');
        return;
    }

    const force = parseFloat(forceInput.value);
    const area = parseFloat(areaInput.value);
    const originalLength = parseFloat(originalLengthInput.value);
    const deformedLength = parseFloat(deformedLengthInput.value);

    if (isNaN(force) || isNaN(area) || isNaN(originalLength) || isNaN(deformedLength)) {
        alert('Please enter valid numeric inputs.');
        return;
    }

    const stress = force / area;
    const strain = (deformedLength - originalLength) / originalLength;

    document.getElementById('stressResult').textContent = `Stress: ${stress.toFixed(2)} N/m^2 (Pa)`;
    document.getElementById('strainResult').textContent = `Strain: ${strain.toFixed(2)}`;

    const resultsContainer = document.getElementById('results');
    resultsContainer.classList.remove('hidden');
    resultsContainer.classList.add('show');
}