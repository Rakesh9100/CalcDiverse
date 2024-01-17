function calculateTaylorSeries() {
    const mathFunction = document.getElementById('mathFunction').value;
    const c = parseFloat(document.getElementById('centerPoint').value);
    const n = parseInt(document.getElementById('numOfTerms').value);
  
    if (!mathFunction || isNaN(c) || isNaN(n) || n <= 0) {
      showError("Please enter valid values for all fields.");
      return;
    }
  
    const result = computeTaylorSeries(mathFunction, c, n);
  
    showResult(`The Taylor Series expansion of ${mathFunction} around ${c} with ${n} terms is: ${result}`);
  }
  
  function computeTaylorSeries(mathFunction, c, n) {
    let series = `${mathFunction} = `;
    let derivative = mathFunction;
  
    for (let i = 1; i <= n; i++) {
      const coefficient = derivativeAtPoint(derivative, c) / factorial(i);
      const term = `${coefficient.toFixed(4)} * (x - ${c})^${i}`;
  
      series += (i === 1) ? term : ` + ${term}`;
  
      derivative = computeDerivative(derivative);
    }
  
    return series;
  }
  
  function derivativeAtPoint(mathFunction, point) {
    const epsilon = 1e-5;
    const expression = mathFunction.replace(/x/g, `(${point} + epsilon)`);
    const valueAtPoint = eval(expression);
    const valueAtPointMinusEpsilon = eval(expression.replace(/epsilon/g, `(${point} - epsilon)`));
  
    return (valueAtPoint - valueAtPointMinusEpsilon) / (2 * epsilon);
  }
  
  function computeDerivative(mathFunction) {
    const expression = mathFunction.replace(/ /g, '');
    const regex = /([-+]?\d*\.?\d*)\*?x(?:\^([-+]?\d+))?/g;
  
    const derivativeTerms = [];
    let match;
  
    while ((match = regex.exec(expression)) !== null) {
      const coefficient = parseFloat(match[1]);
      const exponent = match[2] ? parseInt(match[2]) : 1;
  
      derivativeTerms.push(`${coefficient * exponent} * x^${exponent - 1}`);
    }
  
    return derivativeTerms.join(' + ');
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="error">${message}</div>`;
  }
  
  function showResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="success">${message}</div>`;
  }
  