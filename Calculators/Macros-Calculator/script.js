function calculateMacros() {
    // Get user inputs
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = parseFloat(document.getElementById('activity').value);
    
    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(height) || !gender || isNaN(activityLevel)) {
        alert('Please fill out all fields correctly.');
        return;
    }
    
    // Calculate BMR (Basal Metabolic Rate)
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Calculate Total Daily Energy Expenditure (TDEE)
    const tdee = bmr * activityLevel;
    
    // Macros distribution
    const protein = weight * 2; // Example: 2g per kg body weight
    const fats = tdee * 0.25 / 9; // 25% of calories from fats
    const carbs = (tdee - (protein * 4 + fats * 9)) / 4; // Remaining calories from carbs
    
    // Update results
    document.getElementById('calories').textContent = `Calories: ${Math.round(tdee)}`;
    document.getElementById('protein').textContent = `Protein: ${Math.round(protein)} g`;
    document.getElementById('carbs').textContent = `Carbohydrates: ${Math.round(carbs)} g`;
    document.getElementById('fats').textContent = `Fats: ${Math.round(fats)} g`;

    // Show results
    document.getElementById('results').classList.remove('hidden');
}
