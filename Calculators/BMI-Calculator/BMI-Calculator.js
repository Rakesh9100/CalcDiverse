function calculateBMI() {
    var heightInput = document.getElementById('height');
    var weightInput = document.getElementById('weight');

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid positive values for both height and weight");
        heightInput.value = "";
        weightInput.value = "";
        return;
    }

    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    var resultElement = document.getElementById('result');
    resultElement.textContent = "Your BMI is: " + bmi;
}
