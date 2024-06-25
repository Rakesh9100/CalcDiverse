function calculateHealthMetrics() {
    var weight = parseFloat(document.getElementById('weight').value);
    var activity = document.getElementById('activity').value;
    var climate = document.getElementById('climate').value;
    var activityDuration = parseFloat(document.getElementById('activityDuration').value);
    var temperature = parseFloat(document.getElementById('temperature').value);

    if (isNaN(weight) || isNaN(activityDuration) || isNaN(temperature)) {
        document.getElementById('result').textContent = 'Please enter valid inputs.';
        return;
    }

    // Calculate water intake
    var waterIntake = weight * 0.033; // Base water intake in liters

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

    waterIntake = Math.round(waterIntake); // Round water intake to the nearest integer

    // Calculate dehydration risk
    const hourlyWaterRequirement = weight * 0.03; // 30 ml/kg/hour
    const hourlyWaterLoss = activityDuration * 0.5; // Assuming average sweat rate of 0.5 liters/hour
    const hourlyWaterRequirementAdjusted = hourlyWaterRequirement + hourlyWaterLoss;

    let riskLevel = "Low";
    const totalWaterRequired = hourlyWaterRequirementAdjusted * activityDuration;

    if (temperature >= 35 && activityDuration >= 3) {
        riskLevel = "Moderate";
    }
    if (temperature >= 40 && activityDuration >= 5) {
        riskLevel = "High";
    }
    if (temperature >= 45 && activityDuration >= 7) {
        riskLevel = "Very High";
    }

    // Display the result
    document.getElementById('result').innerHTML = `
        <p>Your daily water intake should be <span style="color: yellow;">${waterIntake}</span> liters.</p>
        <p>Dehydration Risk Level: <span style="color: yellow;">${riskLevel}</span></p>
    `;
}
