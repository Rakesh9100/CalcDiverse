document.getElementById('dreamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('dreamTitle').value;
    const date = document.getElementById('dreamDate').value;
    const entry = document.getElementById('dreamEntry').value;
    const emotions = document.getElementById('dreamEmotions').value.split(',').map(e => e.trim());

    const words = extractKeywords(entry);
    displayWordCloud(words);
    displayAnalysis(words, emotions, entry);

    storeDream({ title, date, entry, emotions });
    displayPastDreams();
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('dreamForm').reset();
    document.getElementById('wordCloud').innerHTML = '';
    document.getElementById('analysis').innerHTML = '';
});

function extractKeywords(text) {
    const stopwords = ["I", "was", "and", "the", "a", "to", "in", "of", "that", "it"];
    const words = text.split(/\W+/).filter(word => !stopwords.includes(word.toLowerCase()));
    const wordCount = {};

    words.forEach(word => {
        word = word.toLowerCase();
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return Object.entries(wordCount).map(([word, size]) => ({ word, size }));
}

function displayWordCloud(words) {
    const wordCloudData = words.map(({ word, size }) => [word, size * 10]);
    WordCloud(document.getElementById('wordCloud'), { list: wordCloudData });
}

function displayAnalysis(words, emotions, entry) {
    const analysisDiv = document.getElementById('analysis');
    analysisDiv.innerHTML = '';

    const recurringWords = words.filter(({ size }) => size > 1).map(({ word }) => word);
    const emotionList = emotions.join(', ');

    const recurringWordsElement = document.createElement('p');
    recurringWordsElement.textContent = `Recurring words: ${recurringWords.join(', ')}`;
    analysisDiv.appendChild(recurringWordsElement);

    const emotionElement = document.createElement('p');
    emotionElement.textContent = `Emotions: ${emotionList}`;
    analysisDiv.appendChild(emotionElement);

    const sentiment = analyzeSentiment(entry);
    const sentimentElement = document.createElement('p');
    sentimentElement.textContent = `Sentiment: ${sentiment.text}`;
    analysisDiv.appendChild(sentimentElement);

    const category = categorizeDream(entry);
    const categoryElement = document.createElement('p');
    categoryElement.textContent = `Category: ${category}`;
    analysisDiv.appendChild(categoryElement);

    const sentimentBar = document.createElement('div');
    sentimentBar.className = 'sentiment-bar';
    sentimentBar.innerHTML = `<div class="sentiment-positive" style="width: ${sentiment.positivePercentage}%">
                                ${sentiment.positivePercentage.toFixed(1)}%
                              </div>
                              <div class="sentiment-negative" style="width: ${sentiment.negativePercentage}%">
                                ${sentiment.negativePercentage.toFixed(1)}%
                              </div>`;
    analysisDiv.appendChild(sentimentBar);
}

function analyzeSentiment(text) {
    const positiveWords = ["happy", "joy", "excited", "love"];
    const negativeWords = ["sad", "angry", "fear", "hate"];
    let score = 0;
    let positiveCount = 0;
    let negativeCount = 0;

    text.split(/\W+/).forEach(word => {
        if (positiveWords.includes(word.toLowerCase())) {
            score++;
            positiveCount++;
        }
        if (negativeWords.includes(word.toLowerCase())) {
            score--;
            negativeCount++;
        }
    });

    const total = positiveCount + negativeCount;
    const positivePercentage = total ? (positiveCount / total) * 100 : 0;
    const negativePercentage = total ? (negativeCount / total) * 100 : 0;

    return {
        text: score > 0 ? 'Positive' : score < 0 ? 'Negative' : 'Neutral',
        positivePercentage,
        negativePercentage
    };
}

function categorizeDream(text) {
    const keywords = {
        "Adventure": ["explore", "travel", "journey"],
        "Nightmare": ["chase", "fear", "dark"],
        "Fantasy": ["magic", "fly", "unicorn"],
    };

    for (const [category, words] of Object.entries(keywords)) {
        if (words.some(word => text.toLowerCase().includes(word))) {
            return category;
        }
    }

    return "Uncategorized";
}

function storeDream(dream) {
    const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
    dreams.push(dream);
    localStorage.setItem('dreams', JSON.stringify(dreams));
}

function displayPastDreams() {
    const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
    const pastDreamsDiv = document.getElementById('pastDreams');
    pastDreamsDiv.innerHTML = '';

    dreams.forEach(dream => {
        const dreamElement = document.createElement('div');
        dreamElement.classList.add('dream');

        const titleElement = document.createElement('h3');
        titleElement.textContent = dream.title;
        dreamElement.appendChild(titleElement);

        const dateElement = document.createElement('p');
        dateElement.textContent = `Date: ${dream.date}`;
        dreamElement.appendChild(dateElement);

        const entryElement = document.createElement('p');
        entryElement.textContent = dream.entry;
        dreamElement.appendChild(entryElement);

        const emotionsElement = document.createElement('p');
        emotionsElement.textContent = `Emotions: ${dream.emotions.join(', ')}`;
        dreamElement.appendChild(emotionsElement);

        pastDreamsDiv.appendChild(dreamElement);
    });
}

// Load past dreams on page load
document.addEventListener('DOMContentLoaded', displayPastDreams);
