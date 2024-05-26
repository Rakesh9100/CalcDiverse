function calculateNetWorth() {
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const investments = parseFloat(document.getElementById('investments').value) || 0;
    const realEstate = parseFloat(document.getElementById('realEstate').value) || 0;
    const otherAssets = parseFloat(document.getElementById('otherAssets').value) || 0;
    const mortgage = parseFloat(document.getElementById('mortgage').value) || 0;
    const loans = parseFloat(document.getElementById('loans').value) || 0;
    const creditCardDebt = parseFloat(document.getElementById('creditCardDebt').value) || 0;
    const otherLiabilities = parseFloat(document.getElementById('otherLiabilities').value) || 0;

    // Calculate total assets and total liabilities
    const totalAssets = cash + investments + realEstate + otherAssets;
    const totalLiabilities = mortgage + loans + creditCardDebt + otherLiabilities;

    // Calculate net worth
    const netWorth = totalAssets - totalLiabilities;

    // Display the result
    document.getElementById('netWorthResult').textContent = `$${netWorth.toFixed(2)}`;
}
