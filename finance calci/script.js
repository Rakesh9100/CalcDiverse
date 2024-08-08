function calculateFutureValue() {
    const principal = parseFloat(document.getElementById("investment-principal").value);
    const annualRate = parseFloat(document.getElementById("investment-rate").value) / 100;
    const years = parseInt(document.getElementById("investment-years").value);

    const futureValue = principal * Math.pow((1 + annualRate), years);
    document.getElementById("investment-result").textContent = `Future Value: $${futureValue.toFixed(2)}`;
}

function calculateMonthlyPayment() {
    const principal = parseFloat(document.getElementById("loan-principal").value);
    const annualRate = parseFloat(document.getElementById("loan-rate").value) / 100;
    const years = parseInt(document.getElementById("loan-years").value);

    const monthlyRate = annualRate / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = (principal * monthlyRate * Math.pow((1 + monthlyRate), numberOfPayments)) / 
                           (Math.pow((1 + monthlyRate), numberOfPayments) - 1);

    document.getElementById("loan-result").textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}
