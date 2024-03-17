function calculateEquivalentResistance() {
    // Get selected resistance type
    const resistanceType = document.getElementById('resistance-type').value;

    // Get input value and split into an array of resistances
    const input = document.getElementById('resistances').value;
    const resistancesArray = input.split(',').map(Number);

    // Calculate equivalent resistance based on selected type
    const equivalentResistance = (resistanceType === 'series') ?
        calculateEquivalentSeries(resistancesArray) :
        calculateEquivalentParallel(resistancesArray);

    // Display the result
    const resultElement = document.getElementById('equivalentResistance');
    resultElement.textContent = isNaN(equivalentResistance) ? 'Invalid Input' : equivalentResistance;
}

function calculateEquivalentSeries(resistances) {
    // Check if resistances array is empty or contains non-numeric values
    if (resistances.length === 0 || resistances.some(isNaN)) {
        return NaN;
    }

    // Calculate equivalent resistance for resistors in series
    const equivalentResistance = resistances.reduce((sum, resistance) => sum + resistance, 0);

    return equivalentResistance;
}

function calculateEquivalentParallel(resistances) {
    // Check if resistances array is empty or contains non-numeric values
    if (resistances.length === 0 || resistances.some(isNaN)) {
        return NaN;
    }

    // Calculate equivalent resistance for resistors in parallel
    const reciprocalSum = resistances.reduce((sum, resistance) => sum + 1 / resistance, 0);
    const equivalentResistance = 1 / reciprocalSum;

    return equivalentResistance;
}