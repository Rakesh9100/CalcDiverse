function calculateTax() {
    const grossSalary = parseFloat(document.getElementById('gross-salary').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const taxRebate = parseFloat(document.getElementById('tax-rebate').value);

    // Input validation
    if (isNaN(grossSalary) || isNaN(deductions) || isNaN(taxRebate)) {
        document.getElementById('result').innerText = 'Please enter valid numbers in all fields.';
        return;
    }

    // Validate gross salary
    if (grossSalary <= 0) {
        document.getElementById('result').innerText = 'Gross Salary must be greater than 0.';
        return;
    }

    // Validate deductions
    if (deductions < 0) {
        document.getElementById('result').innerText = 'Deductions cannot be negative.';
        return;
    }

    // Validate tax rebate
    if (taxRebate < 0) {
        document.getElementById('result').innerText = 'Tax Rebate cannot be negative.';
        return;
    }

    // Calculate taxable income
    let taxableIncome = grossSalary - deductions;
    if (taxableIncome < 0) {
        taxableIncome = 0; // Ensure taxable income does not go negative
    }

    // Calculate tax based on slabs
    let tax;
    if (taxableIncome <= 250000) {
        tax = 0;
    } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.2;
    } else {
        tax = 112500 + (taxableIncome - 1000000) * 0.3;
    }

    // Calculate total tax after applying rebate
    let totalTax = tax - taxRebate;
    if (totalTax < 0) {
        totalTax = 0; // Ensure total tax does not go negative
    }

    // Display the result
    document.getElementById('result').innerText = `Total Tax: ₹${totalTax.toFixed(2)}`;
}
