function calculateHorsepower() {
    const force = parseFloat(document.getElementById("force").value);
    const velocity = parseFloat(document.getElementById("velocity").value);
    
    // Horsepower formula: horsepower = force (N) * velocity (m/s) / 746
    const horsepower = (force * velocity) / 746;
    
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Horsepower: ${horsepower.toFixed(2)}`;
  }