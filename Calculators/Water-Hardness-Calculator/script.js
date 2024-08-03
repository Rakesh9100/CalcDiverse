function calculateHardness() {
    // Get input values
    const calciumInput = document.getElementById('calcium');
    const magnesiumInput = document.getElementById('magnesium');
    const calcium = parseFloat(calciumInput.value);
    const magnesium = parseFloat(magnesiumInput.value);
    const unit = document.getElementById('unit').value;

    // Validate input fields
    let isValid = true;
    let errorMessage = '';

    if (isNaN(calcium) || calcium < 0) {
        isValid = false;
        errorMessage += 'Please enter a valid number for Calcium.\n';
        calciumInput.classList.add('error');
    } else {
        calciumInput.classList.remove('error');
    }

    if (isNaN(magnesium) || magnesium < 0) {
        isValid = false;
        errorMessage += 'Please enter a valid number for Magnesium.\n';
        magnesiumInput.classList.add('error');
    } else {
        magnesiumInput.classList.remove('error');
    }

    // Display error message if inputs are invalid
    if (!isValid) {
        alert(errorMessage);
        return;
    }

    // Calculate hardness in ppm
    const hardnessPPM = calcium * 2.5 + magnesium * 4.1;

    // Convert ppm to gpg if necessary
    let hardness = hardnessPPM;
    if (unit === 'gpg') {
        hardness = hardnessPPM / 17.1;
    }

    // Determine hardness category
    let category = '';
    let safety = '';
    if (hardnessPPM < 60) {
        category = 'Soft';
        safety = 'Safe for all household uses.';
    } else if (hardnessPPM < 120) {
        category = 'Moderately Hard';
        safety = 'Generally safe but may require water softening for some uses.';
    } else if (hardnessPPM < 180) {
        category = 'Hard';
        safety = 'Can cause scale buildup; softening recommended for household use.';
    } else {
        category = 'Very Hard';
        safety = 'Not suitable for household use without softening; can cause significant scale buildup.';
    }

    // Display results
    document.getElementById('hardness').textContent = `Water Hardness: ${hardness.toFixed(2)} ${unit}`;
    document.getElementById('category').textContent = `Category: ${category}`;
    document.getElementById('safety').textContent = `Safety: ${safety}`;
}
