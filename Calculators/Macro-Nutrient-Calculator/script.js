document.getElementById("calculate").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activity = document.getElementById("activity").value;
    const goal = document.getElementById("goal").value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please enter valid numbers for weight, height, and age.");
        return;
    }

    // Basal Metabolic Rate (BMR) calculation using the Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Adjust BMR based on activity level
    let calories;
    switch (activity) {
        case "sedentary":
            calories = bmr * 1.2;
            break;
        case "light":
            calories = bmr * 1.375;
            break;
        case "moderate":
            calories = bmr * 1.55;
            break;
        case "active":
            calories = bmr * 1.725;
            break;
        case "very_active":
            calories = bmr * 1.9;
            break;
    }

    // Adjust calories based on fitness goal
    switch (goal) {
        case "maintenance":
            break;
        case "weight_loss":
            calories -= 500;
            break;
        case "muscle_gain":
            calories += 500;
            break;
    }

    // Calculate macronutrients
    const protein = weight * 2.2; // grams of protein per kg of body weight
    const fat = (calories * 0.25) / 9; // 25% of calories from fat
    const carbs = (calories - (protein * 4) - (fat * 9)) / 4; // remaining calories from carbs

    // Display results
    document.getElementById("calories").value = Math.round(calories);
    document.getElementById("protein").value = Math.round(protein);
    document.getElementById("carbs").value = Math.round(carbs);
    document.getElementById("fat").value = Math.round(fat);
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "male";
    document.getElementById("activity").value = "sedentary";
    document.getElementById("goal").value = "maintenance";
    document.getElementById("calories").value = "";
    document.getElementById("protein").value = "";
    document.getElementById("carbs").value = "";
    document.getElementById("fat").value = "";
});
