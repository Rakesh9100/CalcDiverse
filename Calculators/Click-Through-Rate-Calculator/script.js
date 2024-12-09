document.getElementById("calculate-btn").addEventListener("click", () => {
    const clicks = parseFloat(document.getElementById("clicks").value);
    const impressions = parseFloat(document.getElementById("impressions").value);
    const resultDiv = document.getElementById("result");

    // Validate input
    if (isNaN(clicks) || isNaN(impressions) || clicks < 0 || impressions <= 0) {
        resultDiv.innerHTML = `<p style="color: red;">Please enter valid positive numbers for clicks and impressions.</p>`;
        return;
    }

    // CTR formula: CTR = (Clicks / Impressions) * 100
    const ctr = (clicks / impressions) * 100;

    resultDiv.innerHTML = `
      <p>Your Click-Through Rate (CTR) is: <strong>${ctr.toFixed(2)}%</strong></p>
    `;
});