function calculateBodyFat() {
    const gender = document.getElementById('gender').value;
    const neck = parseFloat(document.getElementById('neck').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const height = parseFloat(document.getElementById('height').value);

    let bodyFatPercentage = 0;

    if (gender === 'male') {
        bodyFatPercentage = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else if (gender === 'female') {
        const hips = parseFloat(document.getElementById('hips').value);
        bodyFatPercentage = 163.205 * Math.log10(waist + hips - neck) - 97.684 * Math.log10(height) - 78.387;
    }

    document.getElementById('result').innerText = `Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%`;
}

// Show or hide the hips input based on gender
document.getElementById('gender').addEventListener('change', function () {
    const hipsGroup = document.getElementById('hipsGroup');
    if (this.value === 'female') {
        hipsGroup.style.display = 'block';
    } else {
        hipsGroup.style.display = 'none';
    }
});

// Initialize hips input visibility on page load
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('gender').dispatchEvent(new Event('change'));
});
