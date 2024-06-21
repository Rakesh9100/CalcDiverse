function calculateRent() {
    const income = parseFloat(document.getElementById('income').value);
    const incomePeriod = document.getElementById('incomePeriod').value;
    const debt = parseFloat(document.getElementById('debt').value);

    if (isNaN(income) || isNaN(debt) || income <= 0) {
        alert('Please enter valid numbers for income and debt.');
        return;
    }

    // Convert yearly income to monthly income if necessary
    const monthlyIncome = incomePeriod === 'year' ? income / 12 : income;

    const maximumRent = (monthlyIncome - debt) * 0.3;
    const recommendedRent = maximumRent * 0.5;

    const resultMessage = document.getElementById('resultMessage');
    if (maximumRent <= 0) {
        resultMessage.innerHTML = `
            <p>At that income and debt level, it will be hard to meet rent payments.</p>
        `;
    } else {
        resultMessage.innerHTML = `
            <p>You can afford up to <span id="maximum">$${maximumRent.toFixed(0)}</span> per month on a rental payment.</p>
            <p>It is recommended to keep your rental payment below <span id="recommended">$${recommendedRent.toFixed(0)}</span> per month.</p>
        `;
    }
}