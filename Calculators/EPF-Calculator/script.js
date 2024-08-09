function calculateEPF() {
    const salaryInput = document.getElementById('salary').value.trim();
    const ageInput = document.getElementById('age').value.trim();
    const contributionInput = document.getElementById('contribution').value.trim();
    const increaseInput = document.getElementById('increase').value.trim();
    const rateInput = document.getElementById('rate').value.trim();


    let salary = parseFloat(salaryInput);
    let age = parseFloat(ageInput);
    let contribution = parseFloat(contributionInput);
    let increase = parseFloat(increaseInput);
    let rate = parseFloat(rateInput);

    if (isNaN(salary) || isNaN(age) || isNaN(contribution) || isNaN(increase) || isNaN(rate) ||
        salary <= 0 || age <= 0 || contribution <= 0 || increase <= 0 || rate <= 0) {
        alert('Please enter valid positive numbers');
        return;
    }

    let totalContribution = 0;
    let currentSalary = salary;
    let yearToRetirement = 60 - age;

    for (let year = 1; year <= yearToRetirement; year++) {
        let annualContribution = currentSalary * (contribution / 100) * 12;
        totalContribution += annualContribution;
        totalContribution += totalContribution * (rate / 100);
        currentSalary += currentSalary * (increase / 100);
    }

    const resultElement = document.getElementById('result')
    resultElement.textContent = 'Total EPF at retirement: ₹' + totalContribution.toFixed(2);
    resultElement.classList.add('has-content');
}
