document.getElementById('rateCalculator').addEventListener('submit', function(event) {
    event.preventDefault();

    const annualSalary = parseFloat(document.getElementById('annual-salary').value);
    const billableHours = parseFloat(document.getElementById('billable-hours').value);
    const vacationWeeks = parseFloat(document.getElementById('vacation-weeks').value);

    if (isNaN(annualSalary) || isNaN(billableHours) || isNaN(vacationWeeks)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    const weeksPerYear = 52;
    const workingWeeks = weeksPerYear - vacationWeeks;
    const totalBillableHours = workingWeeks * billableHours;

    if (totalBillableHours <= 0) {
        alert('Total billable hours must be greater than zero.');
        return;
    }

    const hourlyRate = annualSalary / totalBillableHours;
    document.getElementById('hourly-rate').textContent = hourlyRate.toFixed(2);
});
