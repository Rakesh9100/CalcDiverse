function calculateROI() {
    const amountInvested = parseFloat(document.getElementById('amountInvested').value);
    const amountReturned = parseFloat(document.getElementById('amountReturned').value);
    const investmentFrom = new Date(document.getElementById('investmentFrom').value);
    const investmentTo = new Date(document.getElementById('investmentTo').value);

    if (isNaN(amountInvested) || isNaN(amountReturned)) {
        alert('Please enter valid amounts');
        return;
    }

    if (investmentFrom >= investmentTo) {
        alert('Investment end date must be after the start date');
        return;
    }

    const investmentGain = amountReturned - amountInvested;
    const roi = (investmentGain / amountInvested) * 100;
    const timeDiff = investmentTo - investmentFrom;
    const daysInvested = timeDiff / (1000 * 60 * 60 * 24);
    const yearsInvested = daysInvested / 365;

    const annualizedROI = ((1 + roi / 100) ** (1 / yearsInvested) - 1) * 100;

    document.getElementById('result').innerHTML = `
        <p>Investment Gain: $${investmentGain.toFixed(2)}</p>
        <p>ROI: ${roi.toFixed(2)}%</p>
        <p>Annualized ROI: ${annualizedROI.toFixed(2)}%</p>
    `;
}
