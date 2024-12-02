function calculateSWP() {
    const totalInvestment = parseFloat(document.getElementById('totalInvestment').value);
    const withdrawalPerMonth = parseFloat(document.getElementById('withdrawalPerMonth').value);
    const expectedReturnRate = parseFloat(document.getElementById('expectedReturnRate').value);
    const totalPeriod = parseFloat(document.getElementById('totalPeriod').value);


    if (isNaN(totalInvestment) || isNaN(withdrawalPerMonth) || isNaN(expectedReturnRate) || isNaN(totalPeriod)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }
    
    const monthlyInterestRate = (expectedReturnRate / 100) /12;

    const totalMonths = totalPeriod * 12;

    const totalWithdrawal = withdrawalPerMonth * totalMonths;

    let finalValue = totalInvestment;
    for (let i=0; i < totalMonths; i++) {
        finalValue = finalValue * (1+ monthlyInterestRate) - withdrawalPerMonth;
    }

    const resultText = `Total Investment: ${totalInvestment.toFixed(2)}\n` +
                       `Total Withdrawal: ${totalWithdrawal.toFixed(2)}\n` +
                       `Final Value: ${finalValue.toFixed(2)}`;

    const resultElement = document.getElementById('result');
    resultElement.textContent = resultText;
    resultElement.classList.add('has-contnet');
}