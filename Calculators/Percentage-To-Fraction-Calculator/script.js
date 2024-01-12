window.convertPercentToFraction = function() {
    var percentInput = document.getElementById('percentInput').value;
  
    // Check if the input is empty or not a valid number
    if (percentInput.trim() === '' || isNaN(percentInput)) {
      alert('Please enter a valid number.');
      return;
    }
  
    // Convert percent to fraction
    var decimalValue = parseFloat(percentInput) / 100;
    var fraction = decimalToFraction(decimalValue);
  
    // Display the result
    document.getElementById('fractionResult').innerText = '= ' + fraction.numerator + '/' + fraction.denominator;
    document.getElementById('workSteps').innerText = percentInput + '% = ' + percentInput + '/100 = ' + decimalValue + ' = ' + fraction.numerator + '/' + fraction.denominator;
  };
  
  window.clearInputs = function() {
    document.getElementById('percentInput').value = '';
    document.getElementById('fractionResult').innerText = '=';
    document.getElementById('workSteps').innerText = '';
  };
  
  // Function to convert decimal to fraction
  function decimalToFraction(decimalValue) {
    const tolerance = 1.0e-9;
  
    for (var denominator = 1; ; ++denominator) {
      var numerator = Math.round(decimalValue * denominator);
  
      if (Math.abs(decimalValue - numerator / denominator) < tolerance) {
        return {
          numerator: numerator,
          denominator: denominator
        };
      }
    }
  }
  
