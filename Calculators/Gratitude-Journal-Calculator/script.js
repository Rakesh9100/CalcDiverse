const negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'poor', 'negative']; // List of negative words

document.getElementById('add-btn').addEventListener('click', () => {
    const input = document.getElementById('gratitude-input');
    const value = input.value.trim();
    const errorMessage = document.getElementById('error-message');

    if (value) {
        const containsNegativeWord = negativeWords.some(negativeWord => value.toLowerCase().includes(negativeWord));

        if (containsNegativeWord) {
            errorMessage.textContent = 'Negative words are not allowed.';
            errorMessage.classList.remove('hidden');
            setTimeout(() => {
                errorMessage.classList.add('hidden');
            }, 2000);
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = value;
            document.getElementById('gratitude-list').appendChild(listItem);
            errorMessage.classList.add('hidden');
        }

        input.value = '';
    }
});

document.getElementById('calculate-btn').addEventListener('click', () => {
    const gratitudeList = document.querySelectorAll('#gratitude-list li');
    const gratitudeArray = Array.from(gratitudeList).map(item => item.textContent);

    const totalPoints = gratitudeArray.length;
    const positivePoints = gratitudeArray.filter(point => 
        point.toLowerCase().includes('thank') || 
        point.toLowerCase().includes('well done') || 
        point.toLowerCase().includes('great job')
    ).length;

    const positivePercentage = totalPoints > 0 ? ((positivePoints / totalPoints) * 100).toFixed(2) : 0;
    const formattedGratitude = gratitudeArray.join(', ');

    document.getElementById('gratitude-output').textContent = formattedGratitude;
    document.getElementById('total-points').textContent = totalPoints;
    document.getElementById('positive-percentage').textContent = positivePercentage;

    document.getElementById('results').classList.remove('hidden');
});

document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('gratitude-input').value = '';
    document.getElementById('gratitude-list').innerHTML = '';
    document.getElementById('gratitude-output').textContent = '';
    document.getElementById('total-points').textContent = '';
    document.getElementById('positive-percentage').textContent = '';
    document.getElementById('error-message').classList.add('hidden');
    document.getElementById('results').classList.add('hidden');
});
