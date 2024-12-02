function calculateFutureValue() {
    const principal = document.getElementById("investment-principal").value;
    const annualRate = document.getElementById("investment-rate").value;
    const years = document.getElementById("investment-years").value;

    // Validate if any field is empty
    if (!principal || !annualRate || !years) {
        document.getElementById("investment-result").textContent = "Please fill in all fields.";
        return;
    }

    const principalValue = parseFloat(principal);
    const annualRateValue = parseFloat(annualRate) / 100;
    const yearsValue = parseInt(years);

    const futureValue = principalValue * Math.pow((1 + annualRateValue), yearsValue);
    document.getElementById("investment-result").textContent = `Future Value: $${futureValue.toFixed(2)}`;
}

function calculateMonthlyPayment() {
    const principal = document.getElementById("loan-principal").value;
    const annualRate = document.getElementById("loan-rate").value;
    const years = document.getElementById("loan-years").value;

    // Validate if any field is empty
    if (!principal || !annualRate || !years) {
        document.getElementById("loan-result").textContent = "Please fill in all fields.";
        return;
    }

    const principalValue = parseFloat(principal);
    const annualRateValue = parseFloat(annualRate) / 100;
    const yearsValue = parseInt(years);

    const monthlyRate = annualRateValue / 12;
    const numberOfPayments = yearsValue * 12;
    const monthlyPayment = (principalValue * monthlyRate * Math.pow((1 + monthlyRate), numberOfPayments)) /
        (Math.pow((1 + monthlyRate), numberOfPayments) - 1);

    document.getElementById("loan-result").textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}