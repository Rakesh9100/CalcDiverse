const form = document.querySelector('#tax-form');
const ansDiv = document.getElementById('ans');

function calculatorIncomeTax(income) {
    let tax = 0;
    if (income <= 300000) {
        tax = 0;
    } else if (income > 300000 && income <= 600000) {
        tax = (income - 300000) * 0.05;
    } else if (income > 600000 && income <= 900000) {
        tax = (300000) * 0.05 + (income - 600000) * 0.10;
    } else if (income > 900000 && income <= 1200000) {
        tax = (300000) * 0.05 + (300000) * 0.10 + (income - 900000) * 0.15;
    } else if (income > 1200000 && income <= 1500000) {
        tax = (300000) * 0.05 + (300000) * 0.10 + (300000) * 0.15 + (income - 1200000) * 0.20;
    } else {
        tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30;
    }
    return tax;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const income = Number(form.income.value);
    const tax = calculatorIncomeTax(income);
    const formattedTax = tax.toLocaleString('en-IN', { maximumFractionDigits: 2 });
    const income2 = income.toLocaleString('en-IN', { maximumFractionDigits: 2 });


    const taxWithRupee = `The income tax of an income of ${income2} is: ${formattedTax} &#x20B9;`; // Using HTML entity for the rupee symbol
    ansDiv.innerHTML = `<p>${taxWithRupee}</p>`;
});
