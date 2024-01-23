function calculateCalories() {
    var activity = parseFloat(document.getElementById('activity').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var duration = parseFloat(document.getElementById('duration').value);

    var caloriesBurned = activity * weight * duration;

    document.getElementById('result').innerHTML = 'Calories Burned: ' + caloriesBurned.toFixed(2) + ' calories';
}