function calculateRisk() {
  const age = parseInt(document.getElementById('age').value);
  const horizon = parseInt(document.getElementById('horizon').value);
  const knowledge = parseInt(document.getElementById('knowledge').value);
  const experience = parseInt(document.getElementById('experience').value);

  // Check if any field is empty or not a number
  if (isNaN(age) || isNaN(horizon) || isNaN(knowledge) || isNaN(experience)) {
      alert("Please enter valid values for all fields.");
      return;
  }

  let totalScore = age + horizon + knowledge + experience;

  let riskLevel = '';
  let riskScore = Math.min(10, Math.max(1, Math.ceil(totalScore / 4))); // Map total score to the range 1-10

  if (riskScore <= 3) {
      riskLevel = 'Low Risk Tolerance';
  } else if (riskScore <= 7) {
      riskLevel = 'Medium Risk Tolerance';
  } else {
      riskLevel = 'High Risk Tolerance';
  }

  document.getElementById('result').innerHTML = `<p>Your investment risk tolerance is: <strong>${riskLevel} (${riskScore}/10)</strong></p>`;
}