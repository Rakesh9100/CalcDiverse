function calculateBMR() {
    var gender = document.getElementById("gender").value;
    var age = parseInt(document.getElementById("age").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    var bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    document.getElementById("result").innerHTML = "Your Basal Metabolic Rate (BMR) is " + bmr.toFixed(2) + " calories per day.";
}
