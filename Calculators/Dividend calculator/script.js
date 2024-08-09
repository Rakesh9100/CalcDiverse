document.getElementById('dividendForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const annualDividend = parseFloat(document.getElementById('annualDividend').value);
    const marketPrice = parseFloat(document.getElementById('marketPrice').value);

    if (isNaN(annualDividend) || isNaN(marketPrice)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    const dividendYield = ((annualDividend / marketPrice) * 100).toFixed(2);

    document.getElementById('result').innerHTML = `
        Dividend Yield: ${dividendYield}%
    `;
});
