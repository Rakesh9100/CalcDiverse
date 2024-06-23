function calculateDetox() {
    const hoursSpent = parseFloat(document.getElementById('hoursSpent').value);
    const daysPerWeek = parseFloat(document.getElementById('daysPerWeek').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(hoursSpent) || isNaN(daysPerWeek) || hoursSpent <= 0 || daysPerWeek <= 0) {
        resultDiv.innerHTML = "<p>Please enter valid inputs.</p>";
        return;
    }

    const weeklyUsage = hoursSpent * daysPerWeek;
    const monthlyUsage = weeklyUsage * 4;
    const yearlyUsage = weeklyUsage * 52;

    const detoxRecommendation = hoursSpent > 5 ? "Consider reducing your daily screen time gradually." :
                                hoursSpent > 3 ? "Your screen time is moderate, but it's good to take regular breaks." :
                                "Your screen time is within healthy limits.";

    resultDiv.innerHTML = `
        <p><strong>Weekly Device Usage:</strong> ${weeklyUsage.toFixed(2)} hours</p>
        <p><strong>Monthly Device Usage:</strong> ${monthlyUsage.toFixed(2)} hours</p>
        <p><strong>Yearly Device Usage:</strong> ${yearlyUsage.toFixed(2)} hours</p>
        <p>${detoxRecommendation}</p>
    `;
}
