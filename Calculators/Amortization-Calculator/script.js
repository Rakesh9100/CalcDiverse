document.getElementById('amortization-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;
    const startDate = new Date(document.getElementById('startDate').value);

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow((1 + interestRate), -loanTerm));
    document.getElementById('monthlyPayment').innerText = `₹${monthlyPayment.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const amortizationSchedule = document.getElementById('amortizationSchedule');
    amortizationSchedule.innerHTML = '';

    let balance = loanAmount;
    let totalInterest = 0;

    for (let i = 1; i <= loanTerm; i++) {
        const interestPayment = balance * interestRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;
        totalInterest += interestPayment;

        const paymentDate = new Date(startDate);
        paymentDate.setMonth(paymentDate.getMonth() + i);

        const row = `<tr>
            <td>${i}</td>
            <td>${paymentDate.toLocaleDateString()}</td>
            <td>₹${principalPayment.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>₹${interestPayment.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>₹${balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
        </tr>`;

        amortizationSchedule.insertAdjacentHTML('beforeend', row);
    }
});
