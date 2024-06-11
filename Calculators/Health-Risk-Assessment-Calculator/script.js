function assessRisk() {
    const age = document.getElementById('age').value;
    const smoking = document.getElementById('smoking').value;
    const exercise = document.getElementById('exercise').value;
    const diet = document.getElementById('diet').value;
    const familyHeartDisease = document.getElementById('familyHeartDisease').value;
    const familyDiabetes = document.getElementById('familyDiabetes').value;

    let riskScore = 0;

    // Age factor
    if (age > 45) riskScore += 1;

    // Smoking factor
    if (smoking === 'yes') riskScore += 2;

    // Exercise factor
    if (exercise === '0') riskScore += 2;
    else if (exercise === '1-2') riskScore += 1;

    // Diet factor
    if (diet === 'unhealthy') riskScore += 2;
    else if (diet === 'average') riskScore += 1;

    // Family history factors
    if (familyHeartDisease === 'yes') riskScore += 2;
    if (familyDiabetes === 'yes') riskScore += 2;

    let riskLevel = 'Low';
    if (riskScore >= 6) {
        riskLevel = 'High';
    } else if (riskScore >= 3) {
        riskLevel = 'Moderate';
    }

    document.getElementById('result').innerText = `Your estimated risk level is: ${riskLevel}`;
}