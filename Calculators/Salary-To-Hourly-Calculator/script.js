document.addEventListener("DOMContentLoaded", function () {
    var annualSalaryInput = document.getElementById("annualSalary");
    var monthlySalaryInput = document.getElementById("monthlySalary");
    var weeklySalaryInput = document.getElementById("weeklySalary");
    var dailySalaryInput = document.getElementById("dailySalary");
    var hourlySalaryInput = document.getElementById("hourlySalary");
    var workingHourInput = document.getElementById("workingHour");
    var workingDaysInput = document.getElementById("workingDays");
    annualSalaryInput.addEventListener("input", calcSalary);
    monthlySalaryInput.addEventListener("input", calcSalary);
    weeklySalaryInput.addEventListener("input", calcSalary);
    dailySalaryInput.addEventListener("input", calcSalary);
    hourlySalaryInput.addEventListener("input", calcSalary);
    workingHourInput.addEventListener("input", calcSalary);
    workingDaysInput.addEventListener("input", calcSalary);

    function calcSalary() {
        var annualSalary = parseFloat(annualSalaryInput.value);
        var monthlySalary = parseFloat(monthlySalaryInput.value);
        var weeklySalary = parseFloat(weeklySalaryInput.value);
        var dailySalary = parseFloat(dailySalaryInput.value);
        var hourlySalary = parseFloat(hourlySalaryInput.value);
        var workingHour = parseFloat(workingHourInput.value);
        var workingDays = parseFloat(workingDaysInput.value);
        if (workingHour > 24) {
            alert("Please enter valid number of hours in a day(1-24hr)");
            workingHourInput.value = "";
            return;
        }
        if (workingDays > 7) {
            alert("Please enter valid number of days in a week(1-7)");
            workingDaysInput.value = "";
            return;
        }

        var triggeredInput = document.activeElement.id;

        if (triggeredInput === "annualSalary") {
            hourlySalary = annualSalary / (workingHour * 52 * workingDays);
            monthlySalary = hourlySalary * workingHour * workingDays * 4.33;
            weeklySalary = hourlySalary * workingHour * workingDays;
            dailySalary = hourlySalary * workingHour;
        } else if (triggeredInput === "monthlySalary") {
            hourlySalary = monthlySalary / (workingHour * workingDays * 4.33);
            annualSalary = hourlySalary * workingHour * 52 * workingDays;
            weeklySalary = hourlySalary * workingHour * workingDays;
            dailySalary = hourlySalary * workingHour;
        } else if (triggeredInput === "weeklySalary") {
            annualSalary = weeklySalary * 52;
            monthlySalary = annualSalary / 12;
            dailySalary = weeklySalary / workingDays;
            hourlySalary = dailySalary / workingHour;
        } else if (triggeredInput === "dailySalary") {
            annualSalary = dailySalary * 365;
            monthlySalary = annualSalary / 12;
            weeklySalary = annualSalary / 52;
            hourlySalary = dailySalary / workingHour;
        } else if (triggeredInput === "hourlySalary") {
            annualSalary = hourlySalary * workingHour * 52 * workingDays;
            monthlySalary = annualSalary / 12;
            weeklySalary = annualSalary / 52;
            dailySalary = hourlySalary * workingHour;
        }

        document.getElementById("annualSalary").value = annualSalary.toFixed();
        document.getElementById("monthlySalary").value = monthlySalary.toFixed();
        document.getElementById("weeklySalary").value = weeklySalary.toFixed();
        document.getElementById("dailySalary").value = dailySalary.toFixed();
        document.getElementById("hourlySalary").value = hourlySalary.toFixed();
    }

    calcSalary();
});
