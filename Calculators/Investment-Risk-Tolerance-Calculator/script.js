function calculateRiskTolerance() {
    const age = parseInt(document.getElementById('age').value);
    const investmentHorizon = parseInt(document.getElementById('investmentHorizon').value);
    const financialKnowledge = parseInt(document.getElementById('financialKnowledge').value);
    const investmentExperience = parseInt(document.getElementById('investmentExperience').value);

    // Perform your risk tolerance calculation here
    // This is a simple example, you can replace it with a more complex algorithm
    const riskToleranceScore = (financialKnowledge + investmentExperience) / 2;

    displayResult(riskToleranceScore);
  }

  function displayResult(score) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your Risk Tolerance Score is: ${score.toFixed(2)}`;
  }