document.getElementById('calculateBtn').addEventListener('click', function() {
    const investedAmount = parseFloat(document.getElementById('Iamt').value);
    const sellingPrice = parseFloat(document.getElementById('Ramt').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(investedAmount) || isNaN(sellingPrice)) {
        resultDiv.textContent = 'Please enter valid numbers for both amounts.';
        return;
    }

    if (sellingPrice > investedAmount) {
        const profit = sellingPrice - investedAmount;
        resultDiv.textContent = `Profit: $${profit.toFixed(2)}`;
    } else if (sellingPrice < investedAmount) {
        const loss = investedAmount - sellingPrice;
        resultDiv.textContent = `Loss: $${loss.toFixed(2)}`;
    } else {
        resultDiv.textContent = 'No profit, no loss.';
    }
});