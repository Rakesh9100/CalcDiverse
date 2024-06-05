function calculateDTI() {
    const salary = parseFloat(document.getElementById('salary').value);
    const pension = parseFloat(document.getElementById('pension').value);
    const investment = parseFloat(document.getElementById('investment').value);
    const otherIncome = parseFloat(document.getElementById('other-income').value);

    const totalIncome = salary + pension + investment + otherIncome;

    const rental = parseFloat(document.getElementById('rental').value) * 12;
    const mortgage = parseFloat(document.getElementById('mortgage').value) * 12;
    const creditCards = parseFloat(document.getElementById('credit-cards').value) * 12;
    const otherLoans = parseFloat(document.getElementById('other-loans').value) * 12;

    const totalDebt = rental + mortgage + creditCards + otherLoans;

    const dtiRatio = (totalDebt / totalIncome) * 100;

    document.getElementById('result').innerHTML = `Your Debt to Income Ratio is ${dtiRatio.toFixed(2)}%.`;
}
