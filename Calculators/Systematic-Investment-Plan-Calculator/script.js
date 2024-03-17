function calculateSIP() {
    var investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    var duration = parseInt(document.getElementById('duration').value);
    var growthRate = parseFloat(document.getElementById('growthRate').value);

    var n = duration * 12; // Total number of payments (considering monthly SIP)
    var r = growthRate / (12 * 100); // Monthly interest rate

    var totalInvested = investmentAmount * n; // Total amount invested
    var fv = investmentAmount * ((Math.pow((1 + r), n) - 1) / r) * (1 + r); // Future Value formula
    var gains = fv - totalInvested; // Gains

    document.getElementById('futureValue').innerHTML = 'Future Value: ₹' + fv.toFixed(2);
    document.getElementById('totalInvested').innerHTML = 'Total Invested: ₹' + totalInvested.toFixed(2);
    document.getElementById('gains').innerHTML = 'Gains: ₹' + gains.toFixed(2);
}