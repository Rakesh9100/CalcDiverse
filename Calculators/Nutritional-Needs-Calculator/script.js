document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('caloricForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        calculateNeeds(event);
    });
});

function calculateNeeds() {   

    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = document.getElementById('activityLevel').value;
    const fitnessGoals = document.getElementById('fitnessGoals').value;

    const bmr = calculateBMR(age, sex, weight, height);
    const tdee = calculateTDEE(bmr, activityLevel);
    const macronutrients = calculateMacronutrients(tdee, fitnessGoals);

    displayResults(tdee, macronutrients);
}

function calculateBMR(age, sex, weight, height) {
    let bmr = 0;
    if (sex === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (sex === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    return bmr;
}

function calculateTDEE(bmr, activityLevel) {
    let tdee = 0;
    switch (activityLevel) {
        case 'sedentary':
            tdee = bmr * 1.2;
            break;
        case 'lightlyActive':
            tdee = bmr * 1.375;
            break;
        case 'moderatelyActive':
            tdee = bmr * 1.55;
            break;
        case 'veryActive':
            tdee = bmr * 1.725;
            break;
        default:
            break;
    }
    return tdee;
}

function calculateMacronutrients(tdee, fitnessGoals) {
    let carbohydrates, proteins, fats;

    switch (fitnessGoals) {
        case 'loseWeight':
            carbohydrates = Math.round(0.4 * tdee / 4);
            proteins = Math.round(1.2 * tdee / 4);
            fats = Math.round(0.4 * tdee / 9);
            break;
        case 'maintainWeight':
            carbohydrates = Math.round(0.5 * tdee / 4);
            proteins = Math.round(1.2 * tdee / 4);
            fats = Math.round(0.3 * tdee / 9);
            break;
        case 'gainWeight':
            carbohydrates = Math.round(0.6 * tdee / 4);
            proteins = Math.round(1.2 * tdee / 4);
            fats = Math.round(0.3 * tdee / 9);
            break;
        default:
            break;
    }

    return { carbohydrates, proteins, fats };
}

function displayResults(tdee, macronutrients) {
    document.getElementById('caloricNeeds').textContent = `Daily Caloric Needs: ${Math.round(tdee)} calories`;
    document.getElementById('carbohydrates').textContent = `Recommended Carbohydrates: ${macronutrients.carbohydrates} grams`;
    document.getElementById('proteins').textContent = `Recommended Proteins: ${macronutrients.proteins} grams`;
    document.getElementById('fats').textContent = `Recommended Fats: ${macronutrients.fats} grams`;

    document.getElementById('results').style.display = 'block';
}
