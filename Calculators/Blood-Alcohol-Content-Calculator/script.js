function calculateBAC() {
    const alcoholConsumed = parseFloat(document.getElementById('alcoholConsumed').value);
    const bodyWeight = parseFloat(document.getElementById('bodyWeight').value);
    const gender = document.getElementById('gender').value;
    const hours = parseFloat(document.getElementById('hours').value);

    if (isNaN(alcoholConsumed) || isNaN(bodyWeight) || isNaN(hours)) {
        alert('Please enter valid numbers');
        return;
    }

    let r;
    if (gender === 'male') {
        r = 0.73;
    } else if (gender === 'female') {
        r = 0.66;
    } else {
        alert('Please select a valid gender');
        return;
    }

    const bac = (alcoholConsumed * 5.14 / bodyWeight * r) - (0.015 * hours);

    document.getElementById('result').textContent = `Your BAC is ${bac.toFixed(4)}`;
}
