document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("inputText").addEventListener("input", countWords);
});

function countWords() {
    var text = document.getElementById("inputText").value;
    
    // Regex to split the Words
    var wordsArray = text.split(/\s+/).filter(function (word) {
        return word.length > 0;
    });

    // Calculate total words
    var totalWords = wordsArray.length;

    // Calculate unique words
    var uniqueWords = countUniqueWords(wordsArray);

    // Calculate average word length 
    var averageWordLength = calculateAverageWordLength(wordsArray);

    document.getElementById("result").innerHTML = 
        "<span class='total-words'>Total words: " + totalWords + "</span> | " +
        "<span class='unique-words'>Unique words: " + uniqueWords + "</span> | " +
        "<span class='average-length'>Average Word Length: " + averageWordLength.toFixed(2) + " characters</span>";
}

function countUniqueWords(wordsArray) {

    var uniqueWordsSet = new Set(wordsArray);
    
    return uniqueWordsSet.size;
}

function calculateAverageWordLength(wordsArray) {
    var totalLength = wordsArray.reduce(function (total, word) {
        return total + word.length;
    }, 0);

    var averageLength = wordsArray.length > 0 ? totalLength / wordsArray.length : 0;

    return averageLength;
}

function exportData() {
    var text = document.getElementById("inputText").value;
    var wordsArray = text.split(/\s+/).filter(function (word) {
        return word.length > 0;
    });

    var data = {
        totalWords: wordsArray.length,
        uniqueWords: countUniqueWords(wordsArray),
        averageWordLength: calculateAverageWordLength(wordsArray).toFixed(2)
    };

    // data to JSON format
    var jsonData = JSON.stringify(data, null, 2);

    var blob = new Blob([jsonData], { type: "application/json" });

    var a = document.createElement("a");
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = "word_count_data.json";

    document.body.appendChild(a);
    a.click();

    // Clean up the object url
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
