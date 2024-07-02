document.getElementById('calculateButton').addEventListener('click', function() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const decayConstant = parseFloat(document.getElementById('decayConstant').value);
    const time = parseFloat(document.getElementById('time').value);
    const result = document.getElementById('result');

    if (isNaN(initialAmount) || isNaN(decayConstant) || isNaN(time)) {
        result.textContent = 'Please enter valid numbers in all fields.';
        return;
    }

    // Exponential Decay Formula: N(t) = N₀ * e^(-λt)
    const remainingAmount = initialAmount * Math.exp(-decayConstant * time);

    result.textContent = `Remaining Amount (N(t)): ${remainingAmount.toFixed(2)}`;
});
