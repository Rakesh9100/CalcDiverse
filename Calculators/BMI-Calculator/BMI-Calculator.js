function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (height === "" || weight === "") {
        alert("Please enter both height and weight");
        return;
    }

    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    var resultElement = document.getElementById('result');
    resultElement.textContent = "Your BMI is: " + bmi;
}
