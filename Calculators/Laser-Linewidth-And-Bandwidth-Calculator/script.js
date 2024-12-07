document.getElementById("calculate-btn").addEventListener("click", () => {
    const frequency = parseFloat(document.getElementById("frequency").value);
    const qualityFactor = parseFloat(document.getElementById("quality-factor").value);
    const resultDiv = document.getElementById("result");
  
    // Validate input
    if (isNaN(frequency) || isNaN(qualityFactor) || frequency <= 0 || qualityFactor <= 0) {
      resultDiv.innerHTML = `<p style="color: red;">Please enter valid positive numbers for frequency and quality factor.</p>`;
      return;
    }
  
    // Linewidth formula: Linewidth = Frequency / Quality Factor
    const linewidth = frequency / qualityFactor;
  
    // Bandwidth is equivalent to linewidth in this context
    const bandwidth = linewidth;
  
    resultDiv.innerHTML = `
      <p>Linewidth: <strong>${linewidth.toFixed(2)} Hz</strong></p>
      <p>Bandwidth: <strong>${bandwidth.toFixed(2)} Hz</strong></p>
    `;
  });
  