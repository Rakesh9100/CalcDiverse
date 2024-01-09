function calculateLCM() {
    var inputNumbers = document.getElementById('numbers').value;
    var numbersArray = inputNumbers.split(',').map(num => parseInt(num.trim()));
  
    if (numbersArray.every(num => !isNaN(num))) {
      var lcm = calculateLCMFromArray(numbersArray);
      document.getElementById('result').innerHTML = 'LCM: ' + lcm;
    } else {
      document.getElementById('result').innerHTML = 'Please enter valid numbers.';
    }
  }
  
  function calculateLCMFromArray(numbersArray) {
    if (numbersArray.length === 0) return 0;
  
    var lcm = numbersArray[0];
  
    for (var i = 1; i < numbersArray.length; i++) {
      lcm = calculateLCMHelper(lcm, numbersArray[i]);
    }
  
    return lcm;
  }
  
  function calculateLCMHelper(a, b) {
    return (a * b) / calculateGCD(a, b);
  }
  
  function calculateGCD(a, b) {
    while (b !== 0) {
      var temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  