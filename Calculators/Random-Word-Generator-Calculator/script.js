function generateWords() {
    var startLetter = document.getElementById("start-letter").value.toLowerCase();
    var wordCount = document.getElementById("word-count").value;

    var apiUrl = "https://random-word-api.vercel.app/api?words=" + wordCount + "&letter=" + startLetter;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        var resultContainer = document.getElementById("result-container");
        resultContainer.innerHTML = "";
        data.forEach((word, index) => {
            var wordBox = document.createElement("div");
            wordBox.className = "word-box";
            wordBox.textContent = word;
            resultContainer.appendChild(wordBox);
        });

        // Clear the input fields
        document.getElementById("start-letter").value = "";
        document.getElementById("word-count").value = "1";
    })
    .catch(error => {
        console.error("Error fetching random words:", error);
        document.getElementById("result-container").textContent = "Failed to generate words. Please try again.";
    });
}
