function calculateIntake() {
    var weight = document.getElementById('weight').value;
    var activity = document.getElementById('activity').value;
    var climate = document.getElementById('climate').value;

    var waterIntake = weight * 0.033; // base water intake

    if (activity === 'medium') {
        waterIntake += 0.5;
    } else if (activity === 'high') {
        waterIntake += 1;
    }

    if (climate === 'cold') {
        waterIntake += 0.5;
    } else if (climate === 'hot') {
        waterIntake += 1;
    }

    waterIntake = Math.round(waterIntake); // round to the nearest integer

    document.getElementById('result').textContent = 'Your daily water intake should be ' + waterIntake + ' liters.';
}
