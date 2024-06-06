function calculateBP() {
    const systolic = parseInt(document.getElementById('systolic').value);
    const diastolic = parseInt(document.getElementById('diastolic').value);
    let resultText = '';

    if (systolic && diastolic) {
        if (systolic < 120 && diastolic < 80) {
            resultText = 'Normal Blood Pressure';
        } else if (systolic < 130 && diastolic < 80) {
            resultText = 'Elevated Blood Pressure';
        } else if (systolic < 140 || diastolic < 90) {
            resultText = 'Hypertension Stage 1';
        } else if (systolic >= 140 || diastolic >= 90) {
            resultText = 'Hypertension Stage 2';
        } else if (systolic > 180 || diastolic > 120) {
            resultText = 'Hypertensive Crisis (Consult your doctor immediately)';
        } else {
            resultText = 'Invalid Input';
        }
    } else {
        resultText = 'Please enter both systolic and diastolic values.';
    }

    document.getElementById('result').innerText = resultText;
}
