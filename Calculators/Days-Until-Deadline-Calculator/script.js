function calculateDays() {
    const deadlineInput = document.getElementById('deadline').value;
    if (deadlineInput) {
        const deadlineDate = new Date(deadlineInput);
        const currentDate = new Date();

        const timeDifference = deadlineDate - currentDate;
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        document.getElementById('result').innerText = 
            daysRemaining >= 0 ? `${daysRemaining} days remaining` : `The date has passed.`;
    } else {
        document.getElementById('result').innerText = 'Please select a date.';
    }
}
