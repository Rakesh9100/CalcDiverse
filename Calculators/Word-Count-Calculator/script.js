document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("inputText").addEventListener("input", countWords);
});

function countWords() {
    var text = document.getElementById("inputText").value;

    // calculate total characters including space
    var totalCharacterIncludingSpace = text.length;

    // calculate total character not including space
    var totalCharacterNotIncludingSpace = text.replace(/\s/g, '').length;

    // calculate total Alphabets
    var totalAlphabets = text.replace(/[^a-zA-Z]/g, '').length;

    // calculate total Integers
    var totalIntegers = text.replace(/[^0-9]/g, '').length;

    // calculate total special characters
    var totalSpecialCharacters = text.replace(/[a-zA-Z0-9\s]/g, '').length;

    // Regex to split the Words
    var wordsArray = text.split(/\s+/).filter(function (word) {
        return word.length > 0;
    });

    // Calculate total words
    var totalWords = wordsArray.length;

    // Calculate unique words
    var uniqueWords = countUniqueWords(wordsArray);

    // Calculate maximum and minimum words count
    var shortest_count = shortestWord(wordsArray).length;
    var longest_count = longestWord(wordsArray).length;

    // Calculate average word length 
    var averageWordLength = calculateAverageWordLength(wordsArray);

    document.getElementById("result").innerHTML =
        "<span class='total-characters-with-space'>Total Characters (including space): " + totalCharacterIncludingSpace + "</span> |" +
        "<span class='total-characters-without-space'>Total Characters (not including space): " + totalCharacterNotIncludingSpace + "</span> |" +
        "<span class='total-alphabets'>Total Alphabets: " + totalAlphabets + "</span> |" +
        "<span class='total-integers'>Total Integers: " + totalIntegers + "</span> |" +
        "<span class='total-specialCharacter'>Total Special Characters: " + totalSpecialCharacters + "</span> |" +
        "<br>" +
        "<span class='total-words'>Total words: " + totalWords + "</span> | " +
        "<span class='unique-words'>Unique words: " + uniqueWords + "</span> | " +
        "<span class='shortest-words'>Shortest words: " + shortest_count + "</span> | " +
        "<span class='longest-words'>Longest words: " + longest_count + "</span> | " +
        "<span class='average-length'>Average Word Length: " + averageWordLength.toFixed(2) + " characters</span>";
}

function shortestWord(wordsArray) {
    let minimum = wordsArray[0]
    for (let i = 0; i < wordsArray.length; i++) {
        if (minimum.length > wordsArray[i].length)
            minimum = wordsArray[i];
    }
    return minimum;
}

function longestWord(wordsArray) {
    let maximum = wordsArray[0]
    for (let i = 0; i < wordsArray.length; i++) {
        if (maximum.length < wordsArray[i].length)
            maximum = wordsArray[i];
    }
    return maximum;
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

    if (text.trim() === '') {
        alert("Please enter some text before exporting data.");
        return;
    }

    var wordsArray = text.split(/\s+/).filter(function (word) {
        return word.length > 0;
    });

    var totalCharacterIncludingSpace = text.length;

    var totalCharacterNotIncludingSpace = text.replace(/\s/g, '').length;

    var totalAlphabets = text.replace(/[^a-zA-Z]/g, '').length;

    var totalIntegers = text.replace(/[^0-9]/g, '').length;

    var totalSpecialCharacters = text.replace(/[a-zA-Z0-9\s]/g, '').length;

    var data = {
        text: text,
        totalCharactersIncludingSpace: totalCharacterIncludingSpace,
        totalCharactersNotIncludingSpace: totalCharacterNotIncludingSpace,
        totalAlphabets: totalAlphabets,
        totalIntegers: totalIntegers,
        totalSpecialCharacters: totalSpecialCharacters,
        totalWords: wordsArray.length,
        shortestWord: shortestWord(wordsArray).length,
        longestWord: longestWord(wordsArray).length,
        uniqueWords: countUniqueWords(wordsArray),
        averageWordLength: calculateAverageWordLength(wordsArray).toFixed(2)
    };

    // data to JSON format
    var jsonData = JSON.stringify(data, null, 2);

    var blob = new Blob([jsonData], {
        type: "application/json"
    });

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
