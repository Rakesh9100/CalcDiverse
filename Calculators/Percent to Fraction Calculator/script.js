function convertPercentToFraction() {
    var percentInput = document.getElementById('percentInput').value;
  
    // Check if the input is a valid number
    if (isNaN(percentInput)) {
      alert('Please enter a valid number.');
      return;
    }
  
    // Convert percent to fraction
    var decimalValue = parseFloat(percentInput) / 100;
    var fraction = decimalToFraction(decimalValue);
  
    // Display the result
    document.getElementById('result').innerText = 'Answer: ' + fraction.numerator + '\nShowing Work:\n' +
      percentInput + '% = ' + percentInput + '/100\n= ' + decimalValue + '\n= ' +
      fraction.numerator + '/' + fraction.denominator;
  }
  
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
  