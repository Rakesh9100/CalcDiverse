function calculateSquareRoot() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const precision = parseInt(document.getElementById('precisionInput').value);
    
    if (isNaN(number) || isNaN(precision)) {
      document.getElementById('result').innerHTML = 'Please enter a valid number and precision.';
      return;
    }
  
    const squareRoot = Math.sqrt(number).toFixed(precision);
    document.getElementById('result').innerHTML = `The square root of ${number} up to ${precision} decimal places is: ${squareRoot}`;
  }
  