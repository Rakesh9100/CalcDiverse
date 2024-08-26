function calculateMortgage(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  // Get the values from the input fields
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

  // Calculate the monthly payment
  const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

  // Display the result
  document.getElementById('result').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

// Clear the input fields and result when the page is loaded or refreshed
window.onload = function () {
  document.getElementById('loanAmount').value = '';
  document.getElementById('interestRate').value = '';
  document.getElementById('loanTerm').value = '';
  document.getElementById('result').textContent = '';
}
