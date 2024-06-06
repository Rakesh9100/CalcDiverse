document.getElementById('rateCalculator').addEventListener('submit', function(event) {
    event.preventDefault();

    const annualSalary = parseFloat(document.getElementById('annual-salary').value);
    const billableHours = parseFloat(document.getElementById('billable-hours').value);
    const vacationWeeks = parseFloat(document.getElementById('vacation-weeks').value);

    const weeksPerYear = 52;
    const workingWeeks = weeksPerYear - vacationWeeks;
    const totalBillableHours = workingWeeks * billableHours;

    const hourlyRate = annualSalary / totalBillableHours;
    document.getElementById('hourly-rate').textContent = hourlyRate.toFixed(2);
});
