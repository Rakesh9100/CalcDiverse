function calculateBayesTheorem() {
    const probA = parseFloat(document.getElementById('probA').value);
    const probBA = parseFloat(document.getElementById('probBA').value);
    const probNotA = parseFloat(document.getElementById('probNotA').value);
  
    if (isNaN(probA) || isNaN(probBA) || isNaN(probNotA) || probA < 0 || probBA < 0 || probNotA < 0 || probA > 1 || probBA > 1 || probNotA > 1) {
      showError("Please enter valid probabilities between 0 and 1.");
      return;
    }
  
    const probAB = (probA * probBA) / ((probA * probBA) + ((1 - probA) * probNotA));
  
    showResult(`The probability of A given B (P(A|B)) is: ${probAB.toFixed(4)}`);
  }
  
  function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="error">${message}</div>`;
  }
  
  function showResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="success">${message}</div>`;
  }
  