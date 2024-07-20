const positiveWords = {
    'thank you': 1,
    'well done': 2,
    'great job': 1,
    'good': 2,
    'excellent': 2,
    'awesome': 2,
    'fantastic': 2,
    'brilliant': 2,
    'amazing': 2,
    'outstanding': 2,
    'superb': 2,
    'marvelous': 2,
    'terrific': 2,
    'wonderful': 2,
    'impressive': 2,
    'nice': 1,
    'perfect': 2,
    'lovely': 1,
    'splendid': 2,
    'cool': 1,
    'positive': 1,
    'happy': 1,
    'grateful': 1
};

const negativeWords = [
    'bad', 'terrible', 'awful', 'horrible', 'poor', 'negative', 'sad', 'angry', 
    'disappointed', 'hate', 'unhappy', 'miserable', 'unfortunate', 'dreadful', 
    'atrocious', 'abysmal', 'appalling', 'deplorable', 'disgusting', 'horrid', 
    'nasty', 'vile', 'revolting', 'abhorrent', 'detestable', 'loathsome', 'repugnant', 
    'repulsive', 'offensive', 'gross', 'nauseating', 'sickening', 'distressing', 
    'disturbing', 'pathetic', 'wretched', 'grim', 'dire', 'crummy', 'lousy', 'rotten'
];

document.getElementById('add-btn').addEventListener('click', () => {
    const input = document.getElementById('gratitude-input');
    const value = input.value.trim().toLowerCase();
    const errorMessage = document.getElementById('error-message');

    if (value) {
        const containsNegativeWord = negativeWords.some(negativeWord => value.includes(negativeWord));

        if (containsNegativeWord) {
            errorMessage.textContent = 'Negative words are not allowed.';
            errorMessage.classList.remove('hidden');
            setTimeout(() => {
                errorMessage.classList.add('hidden');
            }, 5000);
        } else if (Object.keys(positiveWords).includes(value)) {
            const listItem = document.createElement('li');
            listItem.textContent = value;
            document.getElementById('gratitude-list').appendChild(listItem);
            errorMessage.classList.add('hidden');
        } else {
            errorMessage.textContent = 'Please enter a valid gratitude word.';
            errorMessage.classList.remove('hidden');
            setTimeout(() => {
                errorMessage.classList.add('hidden');
            }, 5000);
        }

        input.value = '';
    } else {
        errorMessage.textContent = 'Input cannot be empty.';
        errorMessage.classList.remove('hidden');
        setTimeout(() => {
            errorMessage.classList.add('hidden');
        }, 5000);
    }
});

document.getElementById('calculate-btn').addEventListener('click', () => {
    const gratitudeList = document.querySelectorAll('#gratitude-list li');
    const gratitudeArray = Array.from(gratitudeList).map(item => item.textContent);
    const errorMessage = document.getElementById('error-message');

    if (gratitudeArray.length === 0) {
        errorMessage.textContent = 'No gratitude statements to calculate.';
        errorMessage.classList.remove('hidden');
        setTimeout(() => {
            errorMessage.classList.add('hidden');
        }, 5000);
        return;
    }

    let totalPoints = 0;
    let positivePoints = 0;

    gratitudeArray.forEach(point => {
        if (positiveWords[point]) {
            totalPoints += positiveWords[point];
            positivePoints += positiveWords[point];
        } else {
            totalPoints += 1;  // default point if no positive word is found
            positivePoints += 1;
        }
    });

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
