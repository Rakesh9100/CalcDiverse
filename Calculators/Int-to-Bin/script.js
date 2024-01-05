function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResult = document.getElementById('binaryResult');
  
    if (decimalInput.trim() === '' || isNaN(decimalInput)) {
      binaryResult.innerText = 'Please enter a valid decimal number.';
      return;
    }
  
    const binaryValue = parseInt(decimalInput).toString(2);
    binaryResult.innerText = `Binary: ${binaryValue}`;
  }
  
  function convertToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalResult = document.getElementById('decimalResult');
  
    if (binaryInput.trim() === '' || !/^[01]+$/.test(binaryInput)) {
      decimalResult.innerText = 'Please enter a valid binary number.';
      return;
    }
  
    const decimalValue = parseInt(binaryInput, 2);
    decimalResult.innerText = `Decimal: ${decimalValue}`;
  }
  