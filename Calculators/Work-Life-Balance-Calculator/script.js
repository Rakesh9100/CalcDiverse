document.getElementById('balanceForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const workHours = parseInt(document.getElementById('work').value);
    const commuteHours = parseInt(document.getElementById('commute').value);
    const sleepHours = parseInt(document.getElementById('sleep').value);
    const stressLevel = parseInt(document.getElementById('stress').value);
    const personalCareHours = parseInt(document.getElementById('personal').value);
    const jobSatisfaction = parseInt(document.getElementById('job').value);
    const leisureHours = parseInt(document.getElementById('leisure').value);

    if (isNaN(workHours) || isNaN(commuteHours) || isNaN(sleepHours) || isNaN(stressLevel) ||
        isNaN(personalCareHours) || isNaN(jobSatisfaction) || isNaN(leisureHours)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const totalWeeklyHours = 168; // 24 hours * 7 days
    const totalUsedHours = workHours + commuteHours + (sleepHours * 7) + personalCareHours + leisureHours;
    const balanceRatio = totalUsedHours / totalWeeklyHours;

    let balanceMessage = '';
    let progressWidth = 0;

    if (balanceRatio > 1) {
        balanceMessage = 'You are spending more than the available hours in a week. Consider adjusting your schedule.';
        progressWidth = 100;
    } else if (balanceRatio > 0.7) {
        balanceMessage = 'You are doing okay, but could use more personal time.';
        progressWidth = balanceRatio * 100;
    } else if (balanceRatio > 0.5) {
        balanceMessage = 'You are maintaining a good balance.';
        progressWidth = balanceRatio * 100;
    } else {
        balanceMessage = 'Excellent work-life balance! You have plenty of personal time.';
        progressWidth = balanceRatio * 100;
    }

    // Show the result and progress bar
    const resultDiv = document.getElementById('result');
    const progress = document.getElementById('progress');
    resultDiv.style.display = 'block';
    document.getElementById('balanceMessage').textContent = balanceMessage;
    progress.style.width = progressWidth + '%';
});